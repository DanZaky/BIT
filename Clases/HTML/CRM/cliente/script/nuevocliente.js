$(document).ready(function () {


  $('#formNuevoCliente').submit(e => {
      e.preventDefault();

      let nuevoCliente = $('#formNuevoCliente').serialize();
      console.log(nuevoCliente);

      $.ajax({
          url: 'http://localhost:3000/guardar-cliente',
          method: 'post',
          data: nuevoCliente,
          success: function (resp) {
              alert(resp);
              window.location.href = 'http://localhost:3000/lista-clientes';
          },
      });
  });
});