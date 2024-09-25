<?php
session_start();
require_once('../bbdd.php');

$response['estado'] = 'error';
$response['mensaje'] = 'No se pudo actualizar el perfil.';

if (isset($_POST['nombreUsuario_ajuste']) && isset($_POST['correoElectronico_ajuste']) && isset($_POST['password_ajuste'])) {
    $nameUser = $_POST['nombreUsuario_ajuste'];
    $email = $_POST['correoElectronico_ajuste'];
    $password = $_POST['password_ajuste'];
    /*-------------------------------------------------*/
    $nombreUsuario = $_SESSION['nameUser'];
    /*-------------------------------------------------*/
    // Establecer conexión con la base de datos
    $conexion = conectar("localhost", "root", "", "eventzoneg");

    if (isset($_FILES['foto-perfil_ajuste']) && !empty($_FILES['foto-perfil_ajuste']['tmp_name'])) {
        $directorioGuardar = '../uploads/';
        $archivo = $_FILES['foto-perfil_ajuste'];
        $nombreArchivo = $archivo['name'];
        $rutaImagen = $directorioGuardar . $nombreArchivo;

        if (move_uploaded_file($archivo['tmp_name'], $rutaImagen)) {
            // MODIFICAMOS LA IMAGEN EN LA BASE DE DATOS
            $select = "UPDATE usuario SET nombreUsuario = '$nameUser', correoElectronico = '$email', contraseña = '$password', fotoPerfil = '$nombreArchivo' WHERE nombreUsuario = '$nombreUsuario'";
            $resultado = mysqli_query($conexion, $select);
            
            if ($resultado) {
                // Actualizar datos de la sesión
                $_SESSION['nameUser'] = $nameUser;
                $_SESSION['foto-perfil'] = $nombreArchivo;
                //---------------------------------------------
                $response['estado'] = 'correcto';
                $response['nombre_usuario'] = $nameUser;
                $response['mensaje'] = 'Perfil actualizado correctamente.';
                $response['fotoPerfil'] = $nombreArchivo; // Enviar el nombre del archivo al frontend
            } else {
                $response['mensaje'] = 'Error en la actualización: ' . mysqli_error($conexion);
            }
        } else {
            $response['mensaje'] = 'Error al subir la imagen.';
        }
        echo json_encode($response);
    } else {
        // Actualizar usuario sin cambiar la imagen
        $select = "UPDATE usuario SET nombreUsuario = '$nameUser', correoElectronico = '$email', contraseña = '$password', fotoPerfil = NULL WHERE nombreUsuario = '$nombreUsuario'";
        $resultado = mysqli_query($conexion, $select);

        if ($resultado) {
            // Actualizar el nombre de usuario en la sesión
            $_SESSION['nameUser'] = $nameUser;
            //---------------------------------------------
            $response['estado'] = 'correcto';
            $response['nombre_usuario'] = $nameUser;
            $response['mensaje'] = 'Perfil actualizado correctamente.';
        } else {
            $response['mensaje'] = 'Error en la actualización: ' . mysqli_error($conexion);
        }
        echo json_encode($response);
    }
}
?>