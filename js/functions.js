$("#nuevoUsuario").click(function() {
    var nombre = $("#nombre").val(); //capturar el valor del campo con id nombre
    var identificacion = $("#identificacion").val(); //capturar el valor del campo con id identificacion
    var PropietarioPlaca = $("#PropietarioPlaca").val(); //capturar el valor del campo con id identificacion
    var IngresoVehiculo = $("#IngresoVehiculo").val(); //capturar el valor del campo con id identificacion
    
    $('#usuarios tr:last').after('<tr><td>' + nombre + '</td><td>' + identificacion + '</td></td> '+'</td><td>' + PropietarioPlaca + '</td></td>'+'</td><td>' + IngresoVehiculo + '</td></tr>'); //agrega un nuevo registro a la tabla, después del último tr
    $('#nuevoUsuarioModal').modal('toggle'); //cierra el modal
});

$("#nuevoVehiculo").click(function() {
    var placa = $("#placa").val(); //capturar el valor del campo con id nombre
    var marca = $("#marca").val(); //capturar el valor del campo con id identificacion
    var linea = $("#linea").val(); //capturar el valor del campo con id identificacion
    var IngresoVehiculos = $("#IngresoVehiculos").val(); //capturar el valor del campo con id identificacion
    var DiagnosticoVehiculo = $("#DiagnosticoVehiculo").val(); //capturar el valor del campo con id identificacio 
    $('#vehiculos tr:last').after('<tr><td>' + placa + '</td><td>' + marca + '</td></td> '+'</td><td>' + linea + '</td></td>'+'</td><td>' + IngresoVehiculos + '</td></td>'+'</td><td>' + DiagnosticoVehiculo + '</td></tr>'); //agrega un nuevo registro a la tabla, después del último tr
      $('#nuevoVehiculoLabelModal').modal('toggle'); //cierra el modal
});

$("#nuevoRepuesto").click(function() {
    var repuesto = $("#repuesto").val(); //capturar el valor del campo con id nombre
    var marcaVehiculo = $("#marcaVehiculo").val(); //capturar el valor del campo con id identificacion
    var modelo = $("#modelo").val(); //capturar el valor del campo con id identificacion
    var cantidad = $("#cantidad").val(); //capturar el valor del campo con id identificacion
    
    $('#repuestos tr:last').after('<tr><td>' + repuesto + '</td><td>' + marcaVehiculo + '</td></td> '+'</td><td>' + modelo + '</td></td>'+'</td><td>' + cantidad + '</td></tr>'); //agrega un nuevo registro a la tabla, después del último tr
    $('#nuevoRepuestoLabelModal').modal('toggle'); //cierra el modal
});