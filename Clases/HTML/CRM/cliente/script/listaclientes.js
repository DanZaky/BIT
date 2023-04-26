const eliminar = (id) => {
  console.log(id);
  $.ajax({
    url: 'http://localhost:3000/cliente-delete/' + id,
    method: 'delete',
    success: function (resp) {
      alert('Borrado exitoso');
      window.location.reload();
    },
  });
};
$(document).ready(function () {
  $.ajax({
    url: 'http://localhost:3000/request-database-cliente',
    method: 'get',
    success: function (resp) {
      showcustomer(resp);
    },
  });

  const showcustomer = (resp) => {
    $('#tbody').empty();

    for (let i = 0; i < resp.length; i++) {
      console.log(resp[i]);

      $('#tbody').append(
        `<tr><td class="text-center">${resp[i].nombre}</td><td class="text-center">${resp[i].apellido}</td><td class="text-center">${resp[i].pais}</td><td class="text-center">${resp[i].telefono}</td><td class="text-center">${resp[i].email}</td><td class="text-center">${resp[i].fecha_de_registro}</td> <td><button class="btn btn-danger" onclick="eliminar('${resp[i]._id}')">Eliminar</button></td></tr>`,
      );
    }
  };
});