<?php
// Conectar a la base de datos (utilizando tu script de conexión)
$connection = mysqli_connect("localhost", "root", "", "usuarios");
// Verificar si se ha enviado el formulario
if (isset($_POST['registrate'])) {
    // Verificar la longitud de los campos (añadí una corrección de la sintaxis en esta línea)
    if (strlen($_POST['usuario']) > 0 && strlen($_POST['contrasena']) > 0 && strlen($_POST['email']) > 0 && strlen($_POST['telefono']) > 0) {

        // Recibir datos del formulario
        $usuario = trim($_POST['usuario']);
        $contrasena = trim($_POST['contrasena']);
        $email = trim($_POST['email']);
        $telefono = trim($_POST['telefono']); // Corregí la variable a $telefono

        // Preparar la consulta para insertar los datos en la tabla 'usuarios'
        $consulta = "INSERT INTO usuarios (usuario, contrasena, email, telefono) VALUES ('$usuario', '$contrasena', '$email', '$telefono')"; 

        // Ejecutar la consulta
        $resultado = mysqli_query($connection, $consulta);

        // Verificar si la consulta se ejecutó correctamente
        if ($resultado) {
            echo "Usuario registrado correctamente.";
        } else {
            echo "Error al registrar el usuario: " . mysqli_error($connection);
        }

    } else {
        echo "Por favor, completa todos los campos.";
    }
}
?>