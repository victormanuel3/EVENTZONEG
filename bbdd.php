<?php
/*function conn() {
    $servername = "localhost"; $username = "root"; $password = ""; $dbname = "EventsZoneG";
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }
    return $conn;
}

function desconect($conn) {
    mysqli_close($conn);
}

function registerUser($nameUser , $email, $password){
    $query = "CALL CrearUsuario('$nameUser','$email','$password',2)";
    $conn = conn();
    $result = $conn->query($query);
    desconect($conn);
    return $result;
}

function loginUser($nameUser, $password){
    $query = "SELECT nameUser, passwordUser FROM EventsZoneG.user 
              WHERE nameUser = '$nameUser' AND passwordUser = '$password';";
    $conn = conn();
    $result = $conn->query($query);
    desconect($conn);
    return $result;
}

function updateUser($nameUser , $email, $password){
    $query = "INSERT INTO EventsZoneG.user (nameUser, emailUser, passwordUser, typeUser) 
              VALUE ('$nameUser','$email','$password',2)";
    $conn = conn();
    $result = $conn->query($query);
    desconect($conn);
    return $result;
}*/
function conectar($host, $usuario, $contraseña, $baseDeDatos) {
    $conexion = mysqli_connect($host, $usuario, $contraseña, $baseDeDatos);
    if(!$conexion) {
        echo "Error al conectar: ".mysqli_connect_error($conexion);
    } 
    return $conexion;
}

function RegistrarUsuario($conexion, $nameUser, $email, $password, $foto_perfil) {
    $insert = "INSERT INTO usuario (nombreUsuario, correoElectronico, contraseña, CATEGORIA_ID_CATEGORIA, fotoPerfil)
               VALUES ('$nameUser', '$email', '$password', 2, '$foto_perfil')";
    if(mysqli_query($conexion, $insert)) {
        $mensaje = "Usuario insertado correctamente.";
    } else {
        $mensaje = mysqli_error($conexion);
    }
    return $mensaje;
}

function desconect($conn) {
    mysqli_close($conn);
}
?>