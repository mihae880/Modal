let cerrar = document.querySelector(".close");
let abrir = document.querySelector(".cta");
let modal = document.querySelector(".modal");
let ventana = document.querySelector(".ventana");


abrir.addEventListener("click", function (e) {
    console.log("Hola");
    ventana.style.display = "flex";
    // e.preventDefault();
    cerrar.style.opacity = "1";
    cerrar.style.visibility = "visible";
});

cerrar.addEventListener("click", function (e) {
    cerrar.style.opacity = "0";
    cerrar.style.visibility = "hidden";
    ventana.style.display= "none";
    console.log("ceaw");
})
