let modeloActual = "oxford";
let colorActual = "negro";

// Colores disponibles por modelo
const coloresDisponibles = {
    oxford: ["negro", "azul", "marron"],
    mocasin: ["negro", "azul", "marron"],
    sneaker_casual: ["azul"],
    runner_sneaker: ["blanco", "verde"],
    high_top_basketball: ["negro_rojo", "negro_azul"]
};

function cambiarModelo(modelo) {
    modeloActual = modelo;
    colorActual = coloresDisponibles[modelo][0];
    mostrarOpcionesColor();
    actualizarVista();
}

function cambiarColor(color) {
    colorActual = color;
    actualizarVista();
}

function mostrarOpcionesColor() {
    const contenedor = document.getElementById("colorOptions");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    coloresDisponibles[modeloActual].forEach(color => {
        const div = document.createElement("div");
        div.classList.add("color-option", "color-" + color);
        div.onclick = () => cambiarColor(color);
        contenedor.appendChild(div);
    });
}

function actualizarVista() {
    const preview = document.getElementById("previewZapato");

    if (!preview) return;

    preview.style.opacity = 0;

    setTimeout(() => {
        let nombreArchivo = "";

        if (modeloActual === "high_top_basketball" && colorActual === "negro_azul") {
            nombreArchivo = "High-top_basketball_negro_azul.png";
        } else if (modeloActual === "high_top_basketball" && colorActual === "negro_rojo") {
            nombreArchivo = "High-top_basketball_negro_rojo.png";
        } else if (modeloActual === "runner_sneaker" && colorActual === "blanco") {
            nombreArchivo = "Runner_Sneaker_blanco.png";
        } else if (modeloActual === "runner_sneaker" && colorActual === "verde") {
            nombreArchivo = "Runner_Sneaker_verde.png";
        } else if (modeloActual === "sneaker_casual" && colorActual === "azul") {
            nombreArchivo = "Sneaker_Casual_azul.png";
        } else {
            nombreArchivo = modeloActual + "_" + colorActual + ".png";
        }

        preview.src = nombreArchivo;
        preview.style.opacity = 1;
    }, 250);
}

// Función para mostrar ayuda con imágenes
function mostrarAyuda(tipo) {
    if (tipo === "talon") {
        window.open("talon_medida.png", "_blank");
    }
}

window.onload = () => {
    mostrarOpcionesColor();
    actualizarVista();
};
