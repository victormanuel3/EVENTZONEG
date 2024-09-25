$('.slider-novedades').slick({
  dots: false, //puntos
  infinite: true,
  speed: 1000, //velocidad
  /*autoplay: true,*/
  autoplaySpeed: 3800, //Tarda en mostra la siguiente 
  slidesToShow: 3, //Cuanto se muestras
  slidesToScroll: 1, //cuantos pasan
  arrows: true, //botones flechas
  responsive: [
    {
      breakpoint: 1100, //Menor de 1100
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    }, {
      breakpoint: 736, //Menor de 736
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
});

// ----------------------------------------------------------
//                 VALIDATE LOGIN CUENTA
// ----------------------------------------------------------
$("#FORM-LOGINCUENTA").validate({
  rules: {
    nombreUsuario: {
      required: true,
      minlength: 5,
      maxlength: 16
    },
    password: {
      required: true,
      minlength: 5,
      maxlength: 20,
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
    }
  },
  messages: {
    nombreUsuario: {
      required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario es obligatorio.</p> </div>",
      minlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario debe tener al menos 5 caracteres.</p> </div>",
      maxlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario no debe exceder los 16 caracteres.</p> </div>"
    },
    password: {
      required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> Por favor, introduce una contraseña.</p> </div>",
      minlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña debe tener mínimo 5 carácteres.</p> </div>",
      maxlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña no debe exceder los 20 caracteres.</p> </div>",
      pattern: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña debe incluir un número, una letra mayúscula y una letra minúscula.</p> </div>"
    }
  }
});
// ----------------------------------------------------------
//               VALIDATE REGISTRAR CUENTA
// ----------------------------------------------------------

$("#FORM-REGISTRARCUENTA").validate({
  rules: {
    nombreUsuarioRegistro: {
      required: true,
      minlength: 5,
      maxlength: 16
    },
    correoElectronico: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 5,
      maxlength: 20,
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
    },
    repeatPassword: {
      required: true,
      minlength: 5,
      maxlength: 200,
      equalTo: "#pass",
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
    }
  },
  messages: {
    nombreUsuarioRegistro: {
      required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario es obligatorio. </p></div>",
      minlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario debe tener al menos 5 caracteres. </p></div>",
      maxlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario no debe exceder los 16 caracteres. </p></div>"
    },
    correoElectronico: {
      required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El correo electrónico es obligatorio. </div>",
      email: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> Por favor, introduce una dirección de correo electrónico válida. </p></div>"
    },
    password: {
      required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña es obligatoria. </div>",
      minlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña debe tener al menos 5 caracteres. </p></div>",
      maxlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña no debe exceder los 20 caracteres. </p></div>",
      pattern: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña debe incluir al menos un número, una letra mayúscula y una letra minúscula. </p></div>"
    },
    repeatPassword: {
      required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La confirmación de la contraseña es obligatoria. </div>",
      minlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La confirmación de la contraseña debe tener al menos 5 caracteres. </p></div>",
      maxlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La confirmación de la contraseña no debe exceder los 20 caracteres. </p></div>",
      equalTo: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> Las contraseñas no coinciden. </div>",
      pattern: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña debe tener al menos un número, una letra mayúscula y una letra minúscula. </p></div>"
    }
  }
});


/*=========================================================*/
/* ---------------------------------------------------------   
                   D I A L O G   L O G I N
----------------------------------------------------------*/
let btnAbrirModalLogin = document.querySelector("#abrir-modal-login");
let btnCerrarModalLogin = document.querySelector("#cerrar-modal-login");
let modalLogin = document.querySelector("#modal-login");

btnAbrirModalLogin.addEventListener("click", () => {
  modalLogin.showModal();
});

// "Close" button closes the dialog
btnCerrarModalLogin.addEventListener("click", () => {
  modalLogin.close();
});

/* --------------------------------------------------------  
                       R E G I S T R O
----------------------------------------------------------*/

let btnAbrirModalRegistro = document.querySelector("#abrir-modal-registro");
let btnCerrarModalRegistro = document.querySelector("#cerrar-modal-registro");
let modalRegistro = document.querySelector("#modal-registro");

btnAbrirModalRegistro.addEventListener("click", () => {
  modalRegistro.showModal();
});

// "Close" button closes the dialog
btnCerrarModalRegistro.addEventListener("click", () => {
  modalRegistro.close();
});

/*---------------------------------------------------------*/

let imgDiv = document.querySelector(".user-img");
let photo = document.querySelector(".photo");
let file = document.querySelector("#file");
let uploadbtn = document.querySelector("#subirfoto-btn");

file.addEventListener('change', function () {
  let chosedfile = this.files[0];
  if (chosedfile) {
    let reader = new FileReader();

    reader.addEventListener('load', function () {
      photo.setAttribute('src', reader.result);
    });
    reader.readAsDataURL(chosedfile);
  }
})

/* -------------------------------------------------------------   
                             A J A X
--------------------------------------------------------------*/

$("#email-verificacion").on('change', function () {
  let email = $(this).val();
  $.ajax({
    url: "./verificaciones_ajax/email.php",
    type: "POST",
    data: { correoElectronico: email },
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
        $('#FORM-REGISTRARCUENTA input[type="submit"]').prop('disabled', true);
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
        $('#FORM-REGISTRARCUENTA input[type="submit"]').prop('disabled', false);
      }
    }
  });

});


