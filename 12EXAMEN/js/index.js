const API_BASE = 'https://dragonball-api.com/api';
let todosLosPersonajes = [];

// Función para mostrar loading
function mostrarLoading() {
    document.getElementById('content').innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Cargando...</p>
        </div>
    `;
}

// Función para mostrar error
function mostrarError(mensaje) {
    document.getElementById('content').innerHTML = `
        <div class="error">
            ❌ Error: ${mensaje}
        </div>
    `;
}

// Función para renderizar personajes
function renderizarPersonajes(personajes) {
    const container = document.getElementById('charactersContainer');
    document.getElementById('content').innerHTML = '';
    
    if (!personajes || personajes.length === 0) {
        container.innerHTML = '<div class="no-results">No se encontraron personajes 😢</div>';
        return;
    }

    container.innerHTML = personajes.map(personaje => `
        <div class="character-card">
            <img src="${personaje.image || 'https://via.placeholder.com/280x300?text=Sin+Imagen'}" 
                 alt="${personaje.name}" 
                 class="character-image"
                 onerror="this.src='https://via.placeholder.com/280x300?text=Sin+Imagen'">
            <div class="character-info">
                <div class="character-name">${personaje.name || 'Desconocido'}</div>
                <div class="character-detail"><strong>Raza:</strong> ${personaje.race || 'N/A'}</div>
                <div class="character-detail"><strong>Género:</strong> ${personaje.gender || 'N/A'}</div>
                <div class="character-detail"><strong>Ki:</strong> ${personaje.ki || 'N/A'}</div>
                <div class="character-detail"><strong>Max Ki:</strong> ${personaje.maxKi || 'N/A'}</div>
                <div class="character-detail"><strong>Afiliación:</strong> ${personaje.affiliation || 'N/A'}</div>
            </div>
        </div>
    `).join('');
}

// Cargar personajes de Dragon Ball
async function cargarPersonajesDB() {
    mostrarLoading();
    try {
        const response = await fetch(`${API_BASE}/characters?limit=100`);
        const data = await response.json();
        todosLosPersonajes = data.items || data;
        renderizarPersonajes(todosLosPersonajes);
    } catch (error) {
        mostrarError('No se pudieron cargar los personajes de Dragon Ball');
        console.error(error);
    }
}

// Cargar personajes de Dragon Ball Z
async function cargarPersonajesDBZ() {
    mostrarLoading();
    try {
        const response = await fetch(`${API_BASE}/characters?limit=100`);
        const data = await response.json();
        todosLosPersonajes = data.items || data;
        renderizarPersonajes(todosLosPersonajes);
    } catch (error) {
        mostrarError('No se pudieron cargar los personajes de Dragon Ball Z');
        console.error(error);
    }
}

// Cargar dragones
async function cargarDragones() {
    mostrarLoading();
    try {
        const response = await fetch(`${API_BASE}/characters?limit=100`);
        const data = await response.json();
        const personajes = data.items || data;
        const dragones = personajes.filter(p => 
            p.race && p.race.toLowerCase().includes('dragon')
        );
        renderizarPersonajes(dragones);
    } catch (error) {
        mostrarError('No se pudieron cargar los dragones');
        console.error(error);
    }
}

// Cargar todos los personajes
async function cargarTodos() {
    mostrarLoading();
    try {
        const response = await fetch(`${API_BASE}/characters?limit=100`);
        const data = await response.json();
        todosLosPersonajes = data.items || data;
        renderizarPersonajes(todosLosPersonajes);
    } catch (error) {
        mostrarError('No se pudieron cargar los personajes');
        console.error(error);
    }
}

// Buscar personaje
function buscarPersonaje() {
    const busqueda = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!busqueda) {
        renderizarPersonajes(todosLosPersonajes);
        return;
    }

    const resultados = todosLosPersonajes.filter(personaje => 
        personaje.name.toLowerCase().includes(busqueda) ||
        (personaje.race && personaje.race.toLowerCase().includes(busqueda))
    );

    renderizarPersonajes(resultados);
}

// Buscar al presionar Enter
function buscarEnter(event) {
    if (event.key === 'Enter') {
        buscarPersonaje();
    }
}

// Cargar personajes al iniciar
window.onload = () => {
    cargarTodos();
};