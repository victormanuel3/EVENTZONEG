<?php
require "../bbdd.php";
$etiqueta = $_POST["etiqueta"];
$conexion = conectar("localhost", "root", "", "eventzoneg");
$select = "SELECT autor.nombreAutor, noticia.titulo, noticia.etiqueta, noticia.fecha, noticia.descripcion, noticia.portada
          FROM noticia
          INNER JOIN autor ON noticia.AUTOR_ID_AUTOR = autor.ID_AUTOR
          WHERE noticia.etiqueta = '$etiqueta'";

$resultado = mysqli_query($conexion, $select);

$noticias = [];
if (mysqli_num_rows($resultado) != 0) {
    while ($fila = mysqli_fetch_array($resultado)) {
        $noticia = [];
        $noticia["nombreAutor"] = $fila["nombreAutor"];
        $noticia["titulo"] = $fila["titulo"];
        $noticia["etiqueta"] = $fila["etiqueta"];
        $noticia["fecha"] = $fila["fecha"];
        $noticia["descripcion"] = $fila["descripcion"];
        $noticia["portada"] = $fila["portada"];
        
        $noticias[] = $noticia;
    }
}

echo json_encode($noticias);
/*

<div class="noticia-busqueda">
    <div class="info-noticia-busqueda">
        <p class="fecha-noticia-busqueda">fecha</p>
        <h1>titulo</h1>
        <span>#etiqueta</span>
        <p class="descripcion-noticia-busqueda">descripcion</p>
    </div>
    <div class="imagen-noticia-busqueda">
        <img src="../Imagenes/portada">
    </div>
</div>

$email = $_POST['correoElectronico'];
$conexion = conectar("localhost", "root", "", "eventzoneg");
$select = "SELECT correoElectronico FROM usuario WHERE correoElectronico = '$email'";
$resultado = mysqli_query($conexion, $select);

if (mysqli_num_rows($resultado) != 0) {
    $existente = true;
}
echo json_encode($existente);
?>

http://localhost/M04LenguajedeMarcas/pagina_inicio/pagina_noticias/noticias.html

*/
?>
