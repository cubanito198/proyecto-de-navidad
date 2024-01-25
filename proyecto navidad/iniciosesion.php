<?php
// Conexión a la base de datos
$conexion = new PDO('sqlite:C:\xampp\htdocs\proyecto navidad\mi_base_de_datos.db');
$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Recibir datos del formulario
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

// Consulta para verificar las credenciales
$consulta = "SELECT * FROM usuarios WHERE usuario = :usuario";
$sentencia = $conexion->prepare($consulta);
$sentencia->bindParam(':usuario', $usuario);
$sentencia->execute();


if ($sentencia->rowCount() > 0) {
    // Usuario encontrado, verificar la contraseña
    $fila = $sentencia->fetch(PDO::FETCH_ASSOC);
    $hashContraseña = $fila['contrasena'];

    if (password_verify($contrasena, $hashContraseña)) {
        // Contraseña correcta, puedes permitir el acceso
        echo "Inicio de sesión exitoso";
        header("location:inicio.html");
    } else {
        // Contraseña incorrecta
        echo "Contraseña incorrecta";
    }
} else {
    // Usuario no encontrado
    echo "Usuario no encontrado";
    header("location:registro.html");
}

// Cerrar la conexión
$conexion = null;
?>
