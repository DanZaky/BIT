const eliminar = (id) => {
  console.log(id);
  $.ajax({
    url: 'http://localhost:3000/contacto-delete/' + id,
    method: 'delete',
    success: function (resp) {
      alert('Borrado exitoso');
      window.location.reload();
    },
  });
};
$(document).ready(function () {
  $.ajax({
    url: 'http://localhost:3000/request-database-contacto',
    method: 'get',
    success: function (resp) {
      showcontact(resp);
    },
  });

  const showcontact = (resp) => {
    $('#tbody').empty();

    for (let i = 0; i < resp.length; i++) {
      console.log(resp[i]);
      $('#tbody').append(
        `<tr><td class="text-center">${resp[i].nombre}</td><td class="text-center">${resp[i].estado}</td><td class="text-center">${resp[i].tipo_de_contacto}</td><td class="text-center">${resp[i].fecha_de_registro}</td><td><button class="btn btn-danger" onclick="eliminar('${resp[i]._id}')">Eliminar</button></td></tr>`,
      );
    }
  };
});