<?php
$existente = false;
//-----------------------------------------------------------------------------------
require "../bbdd.php";
$email = $_POST['correoElectronico'];
$conexion = conectar("localhost", "root", "", "eventzoneg");
$select = "SELECT correoElectronico FROM usuario WHERE correoElectronico = '$email'";
$resultado = mysqli_query($conexion, $select);

if (mysqli_num_rows($resultado) != 0) {
    $existente = true;
}
echo json_encode($existente);
?>
