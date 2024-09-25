$('.slider').slick({
    dots: true, //puntos
    infinite: true, 
    speed: 300, //velocidad
    autoplay: true,
    autoplaySpeed: 5000, //Tarda en mostra la siguiente 
    slidesToShow: 3, //Cuanto se muestras
    slidesToScroll: 1, //cuantos pasan
    arrows: true, //botones flechas
    responsive: [
      {
        breakpoint: 800, //Menor de 800
        settings: {
          slidesToShow: 1,
        }
      }, {
        breakpoint: 800, //Menor de 800
        settings: {
          slidesToShow: 1,
        }
      }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
        }
      }
    ]
});


/* ----------------------------   
          D I A L O G
-----------------------------*/
let btnAbrirModal = document.querySelector("#btn-abrir-modal");
let btnCerrarModal = document.querySelector("#btn-cerrar-modal");
let modal = document.querySelector("#modal-noticia");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

// "Close" button closes the dialog
btnCerrarModal.addEventListener("click", () => {
  modal.close();
});

/* ----------------------------   
           TEXTAREA
-----------------------------*/

let myText = $("#my-text");
let result = $("#result");
let limit = 124;
result.text(0 + "/" + limit);

myText.on("input", function() {
    let textLength = myText.val().length;
    result.text(textLength + "/" + limit);

    if (textLength > limit) {
        myText.css("border-color", "#ff2851");
        result.css("color", "#ff2851");
    } else {
        myText.css("border-color", "#0CF25D");
        result.css("color", "#0CF25D");
    }
});

myText.on("focus", function() {
  myText.css("border-color", "#0CF25D");
  result.css("color", "#0CF25D");
});

myText.on("blur", function() {
  let textLength = myText.val().length;
  if (textLength > limit) {
      myText.css("border-color", "#ff2851");
      result.css("color", "#ff2851");
  } else {
      myText.css("border-color", "#b2b2b2");
      result.css("color", "#737373");
  }
});


/* ----------------------------   
        SELECT ETIQUETA
-----------------------------*/

let wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["juegos", "consolas","league of legends", "valorant"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(function(country) {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px; font-size: 15px">¡Ups! Etiqueta no encontrada.</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));


/* ----------------------------   
        UPLOAD IMAGE
-----------------------------*/

var fileInp = document.querySelector(".fileInp");
var image = document.querySelector(".imagen-portada");
var imageArea = document.querySelector(".imageArea");
var file;

imageArea.addEventListener("click", function() {
  fileInp.click();
});

const getFileInputEvent=(e)=>{
  file = e.target.files[0];
  console.log(file);
  if (file) {
    image.style.display='block';
    image.setAttribute('src',URL.createObjectURL(file));
  } 
  else {
    return;
  }
}

/* ----------------------------------------------
         MOSTRAR NOTICIAS POR ETIQUETA
------------------------------------------------*/
$("#btn-search").click(function () {
  $(".container-noticias-buscadas").empty();
  let etiqueta = $('[name="etiqueta"]').val();
  $.ajax({
    type: "POST",
    url: "filtrar_noticias.php",
    data: { "etiqueta": etiqueta},
    dataType: "json",
    success: function (noticias) {
      for (let i = 0; i < noticias.length; i++) {
        let noticia = noticias[i];
        let noticia_informacion = '<div class="noticia-busqueda">' +
            '<div class="info-noticia-busqueda">' +
                '<p class="fecha-noticia-busqueda">' + noticia["fecha"] + '</p>' +
                '<h1>' + noticia["titulo"] + '</h1>' +
                '<span>#' + noticia["etiqueta"] + '</span>' +
                '<p class="descripcion-noticia-busqueda">' + noticia["descripcion"] + '</p>' +
            '</div>' +
            '<div class="imagen-noticia-busqueda">' +
                '<img src="portadas/' + noticia["portada"] + '">' +
            '</div>' +
          '</div>';

        $(".container-noticias-buscadas").append(noticia_informacion);
      }
    }
  });
});


/* 
<div class="noticia-busqueda">
                <div class="info-noticia-busqueda">
                    <p class="fecha-noticia-busqueda">Actualizado hace 2 días.</p>
                    <h1>La nueva consola XBOX Series X</h1>
                    <span>#Consolas</span>
                    <p class="descripcion-noticia-busqueda">Aquí tienes toda la información oficial sobre la nueva
                        consola de
                        Microsoft.</p>
                </div>
                <div class="imagen-noticia-busqueda">
                    <img src="../Imagenes/noticia-consola1.png">
                </div>
            </div>

*/