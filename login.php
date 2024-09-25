<?php
if (isset($_POST['nombreUsuario']) && isset($_POST['password'])) {
    $nombreUsuario = $_POST['nombreUsuario'];
    $password = $_POST['password'];

    if (strlen($nombreUsuario) <= 4) {
        header("Location:Index.php");
    }else if (strlen($password) <= 4) {
        header("Location:Index.php");
    }

    require "bbdd.php";
    $conexion = conectar("localhost", "root", "", "eventzoneg");
    $select = "SELECT nombreUsuario, contraseña, correoElectronico, fotoPerfil FROM usuario WHERE nombreUsuario = '$nombreUsuario' AND contraseña = '$password'";
    $resultado = mysqli_query($conexion, $select);

    if (mysqli_num_rows($resultado) == 0) {
        header("Location:Index.php");
    } else {
        session_start();
        $_SESSION['nameUser'] = $nombreUsuario;
        $_SESSION['password'] = $password;

        while ($fila = mysqli_fetch_array($resultado)) {
            $_SESSION['email'] = $fila['correoElectronico'];
            $_SESSION['foto-perfil'] = $fila['fotoPerfil'];
        }
        header("Location:Index.php");
        exit();
    }   
}
?>