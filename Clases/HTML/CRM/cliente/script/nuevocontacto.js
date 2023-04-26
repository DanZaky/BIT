$(document).ready(function () {
  let select = '';

  $('#formNuevoContacto').hide();
  $('#alert').hide();
  $.ajax({
    url: 'http://localhost:3000/request-database-cliente',
    method: 'get',
    success: function (resp) {
      console.log(resp);

      $('#tbody').empty();
      resp.forEach((element) => {
        const namevalue = `${element.nombre} ${element.apellido}`;
        $('#contactoBuscado').append(
          `<option value="${namevalue}">${namevalue}</option>`,
        );
      });
    },
    error: function (resp) {
      alert(resp.responseText);
    },
  });
  $('#formBusqueda').submit((e) => {
    e.preventDefault();
    let contactoBuscado = $('#contactoBuscado').val();
    mostrarFormulario(contactoBuscado);
  });

  const mostrarFormulario = (resp) => {
    console.log(resp);

    if (resp != 'false') {
      $('#nombre').attr('value', `${resp}`);
      $('#nombre').prop('disabled', true);
      $('#formNuevoContacto').show();
      $('#alert').fadeOut();
    } else {
      $('#alert').show();
      $('#formNuevoContacto').hide();
    }
  };

  $('#formNuevoContacto').submit((e) => {
    e.preventDefault();
    console.log('nombre del cliente' + $('#nombre').val());
    let nuevoContacto = $('#formNuevoContacto').serialize();

    console.log('ACA VA EL CONTACTO', nuevoContacto);

    $.ajax({
      url: 'http://localhost:3000/guardar-contacto',
      method: 'post',
      data: nuevoContacto,
      success: function (resp) {
        alert(resp);
        window.location.href = 'http://localhost:3000/lista-contactos';
      },
    });
  });
});