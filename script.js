// PUNTOS QUE NO SE PIERDEN
let puntos = 0;

function cargarPuntos() {
    const guardado = localStorage.getItem('gamesmp_puntos');
    if (guardado) {
        puntos = parseInt(guardado);
        document.getElementById('puntos').textContent = puntos;
        document.getElementById('dolares').textContent = (puntos / 1000).toFixed(2);
    }
}

function guardarPuntos() {
    localStorage.setItem('gamesmp_puntos', puntos.toString());
}

function ganarPuntos() {
    puntos += 1;
    document.getElementById('puntos').textContent = puntos;
    document.getElementById('dolares').textContent = (puntos / 1000).toFixed(2);
    guardarPuntos();
}

function comprarVIP() {
    if (confirm("VIP por $2.99/mes\n\nTú ganas $2.09 por venta")) {
        alert("¡VIP Activado!");
    }
}

function comprarMejora(tipo) {
    if (tipo === 1 && puntos >= 100) {
        puntos -= 100;
        alert("Auto-Click comprado!");
    } else if (tipo === 2 && puntos >= 500) {
        puntos -= 500;
        alert("Multiplicador x2 comprado!");
    } else {
        alert("No tienes puntos");
        return;
    }
    document.getElementById('puntos').textContent = puntos;
    guardarPuntos();
}

function verAnuncio() {
    puntos += 50;
    document.getElementById('puntos').textContent = puntos;
    guardarPuntos();
    alert("+50 puntos");
}

function retirarDinero() {
    const dolares = (puntos / 1000).toFixed(2);
    if (parseFloat(dolares) < 5) {
        alert(`Mínimo $5.00\nTienes: $${dolares}`);
    } else {
        alert(`Solicitud por $${dolares}\n24-48 horas.`);
    }
}

window.onload = function() {
    cargarPuntos();
    setInterval(guardarPuntos, 30000);
};
