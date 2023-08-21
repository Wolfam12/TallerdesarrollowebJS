$("#nuevoUsuario").click(function() {
    var nombre = $("#nombre").val(); //capturar el valor del campo con id nombre
    var identificacion = $("#identificacion").val(); //capturar el valor del campo con id identificacion
    var PropietarioPlaca = $("#PropietarioPlaca").val(); //capturar el valor del campo con id identificacion
    var IngresoVehiculo = $("#IngresoVehiculo").val(); //capturar el valor del campo con id identificacion
    
    $('#usuarios tr:last').after('<tr><td>' + nombre + '</td><td>' + identificacion + '</td></td> '+'</td><td>' + PropietarioPlaca + '</td></td>'+'</td><td>' + IngresoVehiculo + '</td></tr>'); //agrega un nuevo registro a la tabla, después del último tr
    $('#nuevoUsuarioModal').modal('toggle'); //cierra el modal
});
