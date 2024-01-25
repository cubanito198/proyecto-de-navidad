<?php
// Conexión a la base de datos (reemplaza con tus propios detalles)
$conexion = new PDO('sqlite:C:\xampp\htdocs\proyecto navidad\mi_base_de_datos.db"');
$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Inicializar variables
$mensaje = "bien";

// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];

    // Preparar la consulta para insertar los datos en la tabla 'usuarios'
    $consulta = "INSERT INTO usuarios (usuario, contrasena, email, telefono) VALUES (:usuario, :contrasena, :email, :telefono)";

    // Preparar la sentencia
    $sentencia = $conexion->prepare($consulta);

    // Bind de parámetros
    $sentencia->bindParam(':usuario', $usuario);
    $sentencia->bindParam(':contrasena', $contrasena);
    $sentencia->bindParam(':email', $email);
    $sentencia->bindParam(':telefono', $telefono);

    // Ejecutar la sentencia
    $resultado = $sentencia->execute();

    // Verificar si la consulta se ejecutó correctamente
    if ($resultado) {
        $mensaje = "Registro exitoso. ¡Bienvenido, $usuario!";
    } else {
        $mensaje = "Error al registrar: " . $sentencia->errorInfo()[2];
    }
}

// Cerrar la conexión
$conexion = null;
?>