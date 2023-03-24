var nombrePlaylist = "";
var playlist = [];
var cancionBuscar = "";
var cancionEncontrada = false;
var menu = 0;

do {
  menu = parseInt(prompt("Ingrese un número de opción\n1 - CREAR PLAYLIST\n2 - AÑADIR CANCIÓN\n3 - BUSCAR CANCIÓN\n4 - CONSULTAR PLAYLIST\n5 - SALIR"));

  switch (menu) {

    case 1:

      do {
        nombrePlaylist = prompt("Ingrese el nombre de la playlist");
      } while (nombrePlaylist == "");

      playlist = [];

      break;

    case 2:

      if (nombrePlaylist != "") {

        playlist.push(prompt("Ingrese la canción"));
        console.log("Usted ha agregado la canción " + playlist.slice(-1));

      } else {
        alert("Primero debe crear una playlist");
      }

      break;

    case 3:

      if (nombrePlaylist != "") {

        if (playlist.length > 0) {

          cancionBuscar = prompt("Ingrese la canción a buscar");

          for (let i = 0; i < playlist.length; i++) {

            if (cancionBuscar == playlist[i]) {
              cancionEncontrada = true;
            }

          }

          if (cancionEncontrada == true) {
            console.log("La canción " + cancionBuscar + " se encuentra en la playlist");
          } else {
            console.log("La canción " + cancionBuscar + " NO se encuentra en la playlist");
          }

          cancionEncontrada = false;

        } else {
          alert("Primero debe agregar una canción a la playlist");
        }

      } else {
        alert("Primero debe crear una playlist");
      }

      break;

    case 4:

      if (nombrePlaylist != "") {

        console.log("Nombre Playlist: " + nombrePlaylist);

        if (playlist.length > 0) {

          for (let i = 0; i < playlist.length; i++) {
            console.log("Canción " + (i + 1) + " de la playlist: " + playlist[i]);
          }

        } else {
          console.log("La playlist está vacía");
        }
        
      } else {
        alert("Primero debe crear una playlist");
      }
      
      break;

    case 5:

      alert("Vuelva Pronto!");
      break;

    default:

      alert("La opción ingresada NO está dentro del menú, intente nuevamente");
      break;
  }

} while (menu != 5);