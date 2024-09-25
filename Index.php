<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Index.css">
    <title>EventZoneG</title>
    <link href='https://fonts.googleapis.com/css?family=Iceland' rel='stylesheet'>
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <!-- slick y javascripts-->
    <link rel="stylesheet" href="slick-1.8.1/slick/slick.css">
    <link rel="stylesheet" href="slick-1.8.1/slick/slick-theme.css">
    <script src="jquery-3.7.1.min.js"></script>
    <!-- BOOTSTRAP  JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <!------------------->
    <script src="slick-1.8.1/slick/slick.js"></script>
    <script src="dist/jquery.validate.min.js"></script>
    <script src="dist/additional-methods.js"></script>
    <!------------------------>
    <!--gtag.js-->
    <!--carrousel https://owlcarousel2.github.io/OwlCarousel2/demos/responsive.html-->
    <!--data-bs-toggle="tooltip" data-bs-placement="top" title="TipsHobba"> Color de conectado: #00ff7e-->
    <script src="pagina_inicio.js" defer></script>
    <script src="ajustar_cuenta.js" defer></script>
    <script src="https://cdn.lordicon.com/lordicon.js"></script>
</head>

<body>
    <!--------------------------------------------------------
                             HEADER 
    --------------------------------------------------------->
    <header>
        <div class="header-container">
            <nav>
                <div>
                    <div class="menu"></div>
                    <div class="menu"></div>
                    <div class="menu"></div>
                </div>
                <p class="texto-menu">Menú</p>
            </nav>
            <div id="tituloHeader">
                <h1>EventsZoneG</h1>
            </div>
            <img class="logo" src="Imagenes/Logo.svg" alt="Logo">
            <div class="hexagonos">
                <img src="Imagenes/Hexagonos-azul.svg">
                <img src="Imagenes/Hexagonos-verde.svg">
            </div>
            <?php
            session_start();
            if (isset($_SESSION['nameUser']) && $_SESSION['password']) {
            ?>
                <div class="apartadouser">
                    <div class="border-fotouser">
                        <div class="fotouser">
                            <?php
                            if (isset($_SESSION['foto-perfil'])) {
                                echo '<img src="uploads/' . $_SESSION['foto-perfil'] . '">';
                            } else {
                                echo '<img src="Imagenes/Foto-Perfil.svg">';
                            }
                            ?>
                        </div>
                    </div>
                    <div class="descripcion_user">
                        <div>
                            <p id="nuevo_nombre_usuario"><?php echo $_SESSION['nameUser']; ?></p>
                            <div data-toggle="collapse" data-target="#showSpending">
                                <img src="Imagenes/Flecha.svg">
                                <nav class="container-cerrar-sesion" id="showSpending" class="collapse">
                                    <a id="button_ajustarc">Ajustar cuenta</a>
                                    <a id="button_cerrar-session" href="logout.php">Cerrar sesión</a>
                                </nav>
                            </div>
                        </div>
                        <div class="boton_perfil">
                            <p>Perfil foro</p>
                        </div>
                    </div>
                </div>
            <?php
            } else {
            ?>
                <div class="container-login-registro">
                    <a id="abrir-modal-registro">Crear cuenta</a>
                    <hr>
                    <a id="abrir-modal-login">Login</a>
                </div>
            <?php
            }
            ?>
        </div>
        <!------------------------------------------------------------------>
        <hr>
        <!------------------------------------------------------------------>
        <div class="header-nav">
            <div class="menusecciones">
                <div class="seccion">
                    <p>Inicio</p>
                    <span class="material-icons-outlined">home</span>
                </div>
                <div class="seccion">
                    <p>Eventos</p>
                    <span class="material-icons-outlined">calendar_month</span>
                </div>
                <a href="pagina_noticias/noticias.html" id="link_noticias">
                    <div class="seccion">
                        <p>Noticias</p>
                        <span class="material-icons-outlined">feed</span>
                    </div>
                </a>
                <div class="seccion">
                    <p>Foro</p>
                    <span class="material-icons-outlined">question_answer</span>
                </div>
                <div class="seccion contacto">
                    <p>Contacto</p>
                    <span class="material-icons-outlined">markunread_mailbox</span>
                </div>
            </div>
            <div class="redes">
                <a href="https://www.instagram.com/" target="_blank">
                    <div>
                        <i class="fa-brands fa-instagram"></i>
                        <p>Instagram</p>
                    </div>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <div>
                        <i class="fa-brands fa-facebook-f"></i>
                        <p>Facebook</p>
                    </div>
                </a>
            </div>
        </div>
    </header>
    <!--------------------------------------------------------
                       RECTÁNGULO PRESENTACIÓN
    --------------------------------------------------------->
    <div class="centrar-presentacion">
        <div class="poner-titulo-novedades">
            <div class="borde-rectangulo">
                <div class="rectangulo-presentacion">
                    <div class="container-presentacion">
                        <div class="presentacion">
                            <h1>EVENTZONEG</h1>
                            <h1>EVENTZONEG</h1>
                            <h1>EVENTZONEG</h1>
                            <div class="texto-presentacion">
                                <p>Aquí encontrarás todo lo que necesitas para mantenerte al día con tus
                                    juegos favoritos. Sumérgete en un mundo lleno de información, noticias
                                    actualizadas y una comunidad vibrante.</p>
                            </div>
                            <div class="container-boton">
                                <div class="btn"><a href="#">Unirse</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="presentacion-video">
                        <div class="container-video">
                            <video src="Video-overwatch.mp4" autoplay loop muted></video>
                        </div>
                        <div class="linea-video"></div>
                    </div>
                </div>
            </div>
            <div class="subtitulo-novedades">
                <h2>NOVEDADES</h2>
            </div>
        </div>
    </div>
    <!--------------------------------------------------------
                 NOVEDADES FORO-NOTICIAS-EVENTOS
    --------------------------------------------------------->
    <div class="slider-novedades">
        <div class="container-novedad novedad-derecha">
            <div class="novedad">
                <div class="circulo">
                    <div class="circulo-gradient"> <!-- CIRCULOS -->
                        <div class="circulo-entremedio">
                            <div class="circulo-inferior">
                                <lord-icon src="https://cdn.lordicon.com/ijahpotn.json" trigger="loop" delay="4000" colors="primary:#ffffff" class="lord-icon">
                                </lord-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Noticias</h1>
                <div class="p-centrar-novedad">
                    <p>¡Mantente informado sobre el mundo de los videojuegos! Descubre las últimas noticias y novedades
                        que no te puedes perder!.</p>
                </div>
            </div>
        </div>
        <div class="container-novedad novedad-centrar">
            <div class="novedad">
                <div class="circulo">
                    <div class="circulo-gradient"> <!-- CIRCULOS -->
                        <div class="circulo-entremedio">
                            <div class="circulo-inferior">
                                <lord-icon src="https://cdn.lordicon.com/abfverha.json" trigger="loop" delay="4000" colors="primary:#ffffff" class="lord-icon">
                                </lord-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Eventos</h1>
                <div class="p-centrar-novedad">
                    <p>¡Explora emocionantes eventos de videojuegos! Únete a la acción en eventos oficiales y de la
                        comunidad!.</p>
                </div>
            </div>
        </div>
        <div class="container-novedad novedad-izquierda">
            <div class="novedad">
                <div class="circulo">
                    <div class="circulo-gradient"> <!-- CIRCULOS -->
                        <div class="circulo-entremedio">
                            <div class="circulo-inferior">
                                <lord-icon src="https://cdn.lordicon.com/fdxqrdfe.json" trigger="loop" delay="4000" colors="primary:#ffffff" class="lord-icon">
                                </lord-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Foro</h1>
                <div class="p-centrar-novedad">
                    <p>¡Conéctate con otros jugadores! Comparte, aprende y diviértete en nuestro animado foro de
                        videojuegos!.</p>
                </div>
            </div>
        </div>
    </div>
    <!----------------------- Formulario de login ----------------------->
    <dialog id="modal-login">
        <div class="container-login">
            <h1>Login</h1>
            <p>Bienvenido a nuestro sitio web</p>
            <form action="login.php" method="post" id="FORM-LOGINCUENTA">
                <div class="input-bx">
                    <input class="input_nameuser" type="text" name="nombreUsuario" required>
                    <span>Nombre de usuario</span>
                    <i class="uil uil-user"></i>
                </div>
                <div class="input-bx input-bx2">
                    <input type="password" name="password" required>
                    <span>Contraseña</span>
                    <i class="uil uil-padlock"></i>
                </div>
                <div class="container-boton-login">
                    <input class="boton-login" type="submit" value="Login" required>
                </div>
            </form>
            <img id="cerrar-modal-login" src="Imagenes/x.svg">
        </div>
    </dialog>
    <!----------------------- Formulario de registro ----------------------->
    <dialog id="modal-registro">
        <div class="container-registro">
            <div class="container-titulo-registrar">
                <h1>Registrar cuenta</h1>
                <p>Bienvenido a nuestro sitio web</p>
            </div>
            <form action="registrar.php" method="post" id="FORM-REGISTRARCUENTA" enctype="multipart/form-data">
                <div class="centrar-user-img">
                    <div class="user-img">
                        <img src="Imagenes/Foto-Perfil.svg" class="photo">
                        <input type="file" name="foto-perfil" accept="image/*" id="file">
                        <label for="file" id="subirfoto-btn"><span class="material-icons-outlined">photo_camera</span></label>
                    </div>
                </div>
                <div class="centrar-container-inputs">
                    <div class="container-inputs-registrar">
                        <div class="input-bx input-bx-registro">
                            <input class="input_nameuser" type="text" name="nombreUsuarioRegistro" required>
                            <span>Nombre de usuario</span>
                            <i class="uil uil-user"></i>
                        </div>
                        <div class="input-bx input-bx-registro">
                            <input type="email" name="correoElectronico" id="email-verificacion" required>
                            <span>Email</span>
                            <i class="uil uil-envelope"></i>
                        </div>
                        <div class="input-bx input-bx-registro">
                            <input type="password" name="password" id="pass" required>
                            <span>Contraseña</span>
                            <i class="uil uil-padlock"></i>
                        </div>
                        <div class="input-bx input-bx-registro">
                            <input type="password" name="repeatPassword" required>
                            <span>Confirmar contraseña</span>
                            <i class="uil uil-padlock"></i>
                        </div>
                        <div class="contenedor-toast"></div>
                        <div class="container-boton-registrar">
                            <input class="boton-login" type="submit" value="Registrar" required>
                        </div>
                    </div>
                </div>
            </form>
            <img id="cerrar-modal-registro" src="Imagenes/x.svg">
        </div>
    </dialog>
    <!----------------------- Formulario de ajuste de cuenta ------------------------>
    <dialog id="modal_ajustar_cuenta">
        <div class="container-registro">
            <div class="container-titulo-registrar">
                <h1>Ajustar cuenta</h1>
                <p>Bienvenido a los ajustes de tu cuenta</p>
            </div>
            <form method="post" id="FORM-AJUSTARCUENTA" enctype="multipart/form-data">
                <div class="centrar-user-img">
                    <div class="user-img_ajuste">
                        <img src="Imagenes/Foto-Perfil.svg" class="photo_ajuste">
                        <input type="file" name="foto-perfil_ajuste" accept="image/*" id="file_ajuste">
                        <label for="file_ajuste" id="subirfoto-btn_ajuste"><span class="material-icons-outlined">photo_camera</span></label>
                    </div>
                </div>
                <div class="centrar-container-inputs">
                    <div class="container-inputs-registrar">
                        <div class="input-bx input-bx-registro">
                            <input class="input_nameuser" type="text" name="nombreUsuario_ajuste" required>
                            <span>Nombre de usuario</span>
                            <i class="uil uil-user"></i>
                        </div>
                        <div class="input-bx input-bx-registro">
                            <input type="email" name="correoElectronico_ajuste" id="email-verificacion_ajustar" required>
                            <span>Email</span>
                            <i class="uil uil-envelope"></i>
                        </div>
                        <div class="input-bx input-bx-registro">
                            <input type="password" name="password_ajuste" id="pass_ajuste" required>
                            <span>Contraseña</span>
                            <i class="uil uil-padlock"></i>
                        </div>
                        <div class="input-bx input-bx-registro">
                            <input type="password" name="repeatPassword_ajuste" required>
                            <span>Confirmar contraseña</span>
                            <i class="uil uil-padlock"></i>
                        </div>
                        <div class="contenedor-toast"></div>
                        <div class="container-boton-registrar">
                            <input class="boton-login" type="button" id="validar-ajax" value="Confirmar" required>
                        </div>
                    </div>
                </div>
            </form>
            <img id="cerrar-modal-ajustar-cuenta" src="Imagenes/x.svg">
        </div>
    </dialog>
    <!--<div class="modal-box-confirm">
        <i class="fa-regular fa-circle-check"></i>
        <h2>Completado</h2>
        <p>Tu perfil ha sido modificado correctamente.</p>
        <div class="buttons-confirm">
          <button class="close-btn">OK</button>
        </div>
    </div>-->
</body>

</html>