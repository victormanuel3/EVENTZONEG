/* --------------------------------------------------------  
                A J U S T A R    C U E N T A
----------------------------------------------------------*/

let btnAbrirModalAjustarCuenta = document.querySelector("#button_ajustarc");
let btnCerrarModalAjustarCuenta = document.querySelector("#cerrar-modal-ajustar-cuenta");
let modalAjustarCuenta = document.querySelector("#modal_ajustar_cuenta");

btnAbrirModalAjustarCuenta.addEventListener("click", () => {
    modalAjustarCuenta.showModal();
});

// "Close" button closes the dialog
btnCerrarModalAjustarCuenta.addEventListener("click", () => {
    modalAjustarCuenta.close();
});

// ----------------------------------------------------------
//               VALIDATE AJUSTAR CUENTA
// ----------------------------------------------------------

$("#FORM-AJUSTARCUENTA").validate({
    rules: {
        nombreUsuario_ajuste: {
            required: true,
            minlength: 5,
            maxlength: 16
        },
        correoElectronico_ajuste: {
            required: true,
            email: true
        },
        password_ajuste: {
            required: true,
            minlength: 5,
            maxlength: 20,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
        },
        repeatPassword_ajuste: {
            required: true,
            minlength: 5,
            maxlength: 200,
            equalTo: "#pass_ajuste",
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
        }
    },
    messages: {
        nombreUsuario_ajuste: {
            required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario es obligatorio. </p></div>",
            minlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario debe tener al menos 5 caracteres. </p></div>",
            maxlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario no debe exceder los 16 caracteres. </p></div>"
        },
        correoElectronico_ajuste: {
            required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El correo electrónico es obligatorio. </div>",
            email: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> Por favor, introduce una dirección de correo electrónico válida. </p></div>"
        },
        password_ajuste: {
            required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña es obligatoria. </div>",
            minlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña debe tener al menos 5 caracteres. </p></div>",
            maxlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña no debe exceder los 20 caracteres. </p></div>",
            pattern: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña debe incluir al menos un número, una letra mayúscula y una letra minúscula. </p></div>"
        },
        repeatPassword_ajuste: {
            required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La confirmación de la contraseña es obligatoria. </div>",
            minlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La confirmación de la contraseña debe tener al menos 5 caracteres. </p></div>",
            maxlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La confirmación de la contraseña no debe exceder los 20 caracteres. </p></div>",
            equalTo: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> Las contraseñas no coinciden. </div>",
            pattern: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña debe tener al menos un número, una letra mayúscula y una letra minúscula. </p></div>"
        }
    }
});

/*---------------------------------------------------------*/

let imgDivAjuste = document.querySelector(".user-img_ajuste");
let photoAjuste = document.querySelector(".photo_ajuste");
let fileAjuste = document.querySelector("#file_ajuste");
let uploadBtnAjuste = document.querySelector("#subirfoto-btn_ajuste");

fileAjuste.addEventListener('change', function () {
  let chosenFileAjuste = this.files[0];
  if (chosenFileAjuste) {
    let readerAjuste = new FileReader();

    readerAjuste.addEventListener('load', function () {
      photoAjuste.setAttribute('src', readerAjuste.result);
    });
    readerAjuste.readAsDataURL(chosenFileAjuste);
  }
});

/*---------------------------------------------------------*/


$("#email-verificacion_ajustar").on('change', function () {
    let email_ajustar = $(this).val();
    $.ajax({
        url: "./verificaciones_ajax/email_ajustar.php",
        type: "POST",
        data: { correoElectronico_ajuste: email_ajustar },
        dataType: 'json',
        success: function (respuesta) {
            if (respuesta == true) {
                $(".contenedor-toast").html(`
            <div class="toast-email-error">
                <div class="contenedor-icono-error">
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
                <div>
                    <span>Error en el email</span>
                    <p>Este correo electrónico ya está en uso.</p>
                </div>
            </div>
          `);
                //Deshabilitamos el botón de envío del formulario.
                $('#FORM-AJUSTARCUENTA input[type="submit"]').prop('disabled', true);
            } else {
                $(".contenedor-toast").html(`
            <div class="toast-email-valido">
                <div class="contenedor-icono-valido">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div>
                    <span>Email válido</span>
                    <p>¡El correo electrónico es válido!</p>
                </div>
            </div>        
          `);
                //Habilitamos el botón de envío del formulario.
                $('#FORM-AJUSTARCUENTA input[type="submit"]').prop('disabled', false);
            }
        }
    });
});
/* -------------------------------------------------------------   
            A J A X    A J U S T A R    C U E N T A
--------------------------------------------------------------*/
$("#validar-ajax").on('click', function(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append('nombreUsuario_ajuste', $('[name="nombreUsuario_ajuste"]').val());
    formData.append('correoElectronico_ajuste', $('[name="correoElectronico_ajuste"]').val());
    formData.append('password_ajuste', $('[name="password_ajuste"]').val());
    formData.append('foto-perfil_ajuste', $('#file_ajuste')[0].files[0]);
    
    $.ajax({
      type: 'POST',
      url: './verificaciones_ajax/ajustar_cuenta.php',
      data: formData,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: function(respuesta){
        if (respuesta.estado === 'correcto') {
                let modalAjustarCuenta = document.querySelector("#modal_ajustar_cuenta");
                modalAjustarCuenta.close();
                // Muestra la confirmación
                $('body').append(`
                <div class="modal-overlay"></div>
                <div class="modal-box-confirm">
                    <i class="fa-regular fa-circle-check"></i>
                    <h2>Completado</h2>
                    <p>Tu perfil ha sido modificado correctamente.</p>
                    <div class="buttons-confirm">
                        <button class="close-btn">OK</button>
                    </div>
                </div>
                `);
                // Maneja el cierre del pop-up de confirmación
                $('.close-btn').on('click', function() {
                    $('.modal-box-confirm').remove();
                    $('.modal-overlay').remove();
                    //Vaciamos los campos del formularios que quedan registrados.
                    $('[name="password_ajuste"]').val('');
                    $('[name="nombreUsuario_ajuste"]').val('');
                    $('[name="correoElectronico_ajuste"]').val('');
                });
                // Añadimos el nuevo nombre de usuario en donde lo mostramos en nuestra página inicial
                $('#nuevo_nombre_usuario').text(respuesta.nombre_usuario);
                // Vaciar los campos del formulario
                $('[name="password_ajuste"]').val('');
                $('[name="nombreUsuario_ajuste"]').val('');
                $('[name="correoElectronico_ajuste"]').val('');
                $('[name="repeatPassword_ajuste"]').val('');
                $('.toast-email-valido').remove();
                $('#file_ajuste').val('');
                // Restablecer la imagen de perfil a la imagen predeterminada
                $('.photo_ajuste').attr('src', 'Imagenes/Foto-Perfil.svg');
                // Actualizar la imagen de perfil si se cambió
                if (respuesta.fotoPerfil) {
                    $('.fotouser img').attr('src', 'uploads/' + respuesta.fotoPerfil);
                } else {
                    // Si no se cambió la imagen, puedes restablecer la imagen a la predeterminada
                    $('.fotouser img').attr('src', 'Imagenes/Foto-Perfil.svg');  // Ruta a la imagen predeterminada
                }
        } else {
            alert(respuesta.mensaje);
        }
      }
    });  
});