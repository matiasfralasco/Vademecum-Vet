// --- BASE DE DATOS (Puedes agregar mil drogas aquí) ---
const drogas = [
    {
        nombre: "Enrofloxacina",
        grupo: "Antibiótico",
        dosis: "5 mg/kg (Cada 24hs)",
        info: "⚠️ No usar en cachorros en crecimiento (daña cartílagos)."
    },
    {
        nombre: "Meloxicam",
        grupo: "Antiinflamatorio (AINE)",
        dosis: "0.2 mg/kg (Inicial)",
        info: "⚠️ Cuidado con úlceras gástricas. No combinar con corticoides."
    },
    {
        nombre: "Tramadol",
        grupo: "Analgésico",
        dosis: "2 - 4 mg/kg",
        info: "Puede causar sedación. Útil para dolor moderado/fuerte."
    },
    {
        nombre: "Dexametasona",
        grupo: "Corticoide",
        dosis: "0.1 - 0.5 mg/kg",
        info: "⚠️ Abortivo en hembras preñadas. Reduce la inflamación rápido."
    },
    {
        nombre: "Metronidazol",
        grupo: "Antibiótico / Giardias",
        dosis: "15 - 25 mg/kg",
        info: "Sabor muy amargo, puede causar babeo."
    },
    {
        nombre: "Ivermectina",
        grupo: "Antiparasitario",
        dosis: "0.2 - 0.4 mg/kg (Sarna)",
        info: "☠️ PROHIBIDO en Collies y Pastores (Mutación MDR1)."
    }
];

// --- FUNCIÓN PARA DIBUJAR LAS TARJETAS ---
const contenedor = document.getElementById("lista-drogas");

function mostrarDrogas(lista) {
    contenedor.innerHTML = ""; // Limpiar pantalla

    lista.forEach(droga => {
        // Crear el HTML de cada tarjeta
        const html = `
            <div class="card" onclick="toggleDetalle(this)">
                <h3>${droga.nombre}</h3>
                <span class="grupo">${droga.grupo}</span>
                <div class="dosis">💉 ${droga.dosis}</div>
                <p class="info">${droga.info}</p>
            </div>
        `;
        contenedor.innerHTML += html;
    });
}

// --- FUNCIÓN PARA ABRIR/CERRAR DETALLES ---
function toggleDetalle(elemento) {
    elemento.classList.toggle("abierta");
}

// --- BUSCADOR ---
function filtrarDrogas() {
    const texto = document.getElementById("buscador").value.toLowerCase();

    // Filtramos la lista original
    const filtradas = drogas.filter(droga => {
        return droga.nombre.toLowerCase().includes(texto) ||
            droga.grupo.toLowerCase().includes(texto);
    });

    mostrarDrogas(filtradas);
}

// Cargar todo al iniciar
mostrarDrogas(drogas);