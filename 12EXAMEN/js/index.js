const API_BASE = 'https://fortnite-api.com/v2';
let todosLosItems = [];

// Función para mostrar loading
function mostrarLoading() {
    const content = document.getElementById('content');
    const container = document.getElementById('itemsContainer');
    
    if (content) {
        content.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>Cargando datos de Fortnite...</p>
            </div>
        `;
    }
    
    if (container) {
        container.innerHTML = '';
    }
}

// Función para mostrar error
function mostrarError(mensaje) {
    const content = document.getElementById('content');
    const container = document.getElementById('itemsContainer');
    
    if (content) {
        content.innerHTML = `
            <div class="error">
                ❌ Error: ${mensaje}
                <br><br>
                <small>Verifica tu conexión a internet</small>
            </div>
        `;
    }
    
    if (container) {
        container.innerHTML = '';
    }
}

// Obtener clase de rareza
function obtenerClaseRareza(rarity) {
    if (!rarity) return 'rarity-common';
    const rarezaLower = rarity.toLowerCase();
    return `rarity-${rarezaLower}`;
}

// Obtener nombre de rareza en español
function obtenerNombreRareza(rarity) {
    const rarezas = {
        'common': 'Común',
        'uncommon': 'Poco común',
        'rare': 'Raro',
        'epic': 'Épico',
        'legendary': 'Legendario',
        'mythic': 'Mítico'
    };
    return rarezas[rarity?.toLowerCase()] || rarity || 'N/A';
}

// Función para renderizar items
function renderizarItems(items) {
    const container = document.getElementById('itemsContainer');
    const content = document.getElementById('content');
    
    if (content) {
        content.innerHTML = '';
    }
    
    if (!container) {
        console.error('No se encontró el contenedor de items');
        return;
    }
    
    if (!items || items.length === 0) {
        container.innerHTML = '<div class="no-results">No se encontraron items 😢</div>';
        return;
    }

    console.log(`Renderizando ${items.length} items`);
    
    container.innerHTML = items.map(item => `
        <div class="item-card">
            <img src="${item.images?.icon || item.images?.smallIcon || 'https://via.placeholder.com/250?text=Sin+Imagen'}" 
                 alt="${item.name || 'Item'}" 
                 class="item-image"
                 onerror="this.src='https://via.placeholder.com/250?text=Sin+Imagen'">
            <div class="item-rarity ${obtenerClaseRareza(item.rarity?.value)}">
                ${obtenerNombreRareza(item.rarity?.value)}
            </div>
            <div class="item-info">
                <div class="item-name">${item.name || 'Desconocido'}</div>
                <div class="item-description">${item.description || 'Sin descripción'}</div>
                <div class="item-detail"><strong>Tipo:</strong> ${item.type?.displayValue || 'N/A'}</div>
                <div class="item-detail"><strong>Set:</strong> ${item.set?.text || 'Ninguno'}</div>
                ${item.shopHistory?.length > 0 ? `<div class="item-detail"><strong>Última tienda:</strong> ${new Date(item.shopHistory[0]).toLocaleDateString()}</div>` : ''}
                ${item.price ? `<div class="item-price">💰 ${item.price} V-Bucks</div>` : ''}
            </div>
        </div>
    `).join('');
}

// Función genérica para hacer peticiones a la API
async function fetchAPI(endpoint) {
    try {
        console.log(`Haciendo petición a: ${API_BASE}${endpoint}`);
        const response = await fetch(`${API_BASE}${endpoint}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Datos recibidos:', data);
        return data;
    } catch (error) {
        console.error('Error en fetchAPI:', error);
        throw error;
    }
}

// Cargar tienda diaria
async function cargarTiendaDiaria() {
    mostrarLoading();
    try {
        const data = await fetchAPI('/shop/br');
        
        if (data.data && data.data.entries) {
            const itemsTienda = data.data.entries.map(entry => ({
                ...entry,
                price: entry.finalPrice,
                name: entry.devName || entry.displayName,
                description: entry.displayDescription,
                images: {
                    icon: entry.newDisplayAsset?.materialInstances?.[0]?.images?.OfferImage || 
                          entry.displayAssets?.[0]?.url
                },
                type: { displayValue: 'Tienda' },
                rarity: entry.rarity || { value: 'rare' }
            }));
            
            todosLosItems = itemsTienda;
            renderizarItems(itemsTienda);
        } else {
            mostrarError('No se pudo cargar la tienda diaria');
        }
    } catch (error) {
        mostrarError('No se pudo cargar la tienda diaria');
        console.error('Error en cargarTiendaDiaria:', error);
    }
}

// Cargar todos los cosméticos
async function cargarCosmeticos() {
    mostrarLoading();
    try {
        const data = await fetchAPI('/cosmetics/br');
        
        if (data.data) {
            todosLosItems = data.data;
            return data.data;
        }
        return [];
    } catch (error) {
        console.error('Error en cargarCosmeticos:', error);
        throw error;
    }
}


async function cargarSkins() {
    mostrarLoading();
    try {
        const items = await cargarCosmeticos();
        const skins = items.filter(item => 
            item.type?.value === 'outfit' || item.type?.displayValue?.toLowerCase().includes('skin')
        );
        renderizarItems(skins.slice(0, 50)); // Limitar a 50 para mejor rendimiento
    } catch (error) {
        mostrarError('No se pudieron cargar las skins');
        console.error('Error en cargarSkins:', error);
    }
}


async function cargarEmotes() {
    mostrarLoading();
    try {
        const items = await cargarCosmeticos();
        const emotes = items.filter(item => 
            item.type?.value === 'emote'
        );
        renderizarItems(emotes.slice(0, 50));
    } catch (error) {
        mostrarError('No se pudieron cargar los emotes');
        console.error('Error en cargarEmotes:', error);
    }
}


async function cargarPickaxes() {
    mostrarLoading();
    try {
        const items = await cargarCosmeticos();
        const pickaxes = items.filter(item => 
            item.type?.value === 'pickaxe'
        );
        renderizarItems(pickaxes.slice(0, 50));
    } catch (error) {
        mostrarError('No se pudieron cargar los picos');
        console.error('Error en cargarPickaxes:', error);
    }
}


async function cargarTodos() {
    mostrarLoading();
    try {
        const items = await cargarCosmeticos();
        todosLosItems = items;
        renderizarItems(items.slice(0, 50)); 
    } catch (error) {
        mostrarError('No se pudieron cargar los items');
        console.error('Error en cargarTodos:', error);
    }
}


function buscarItem() {
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput) {
        console.error('No se encontró el input de búsqueda');
        return;
    }
    
    const busqueda = searchInput.value.toLowerCase().trim();
    
    if (!busqueda) {
        renderizarItems(todosLosItems.slice(0, 50));
        return;
    }

    const resultados = todosLosItems.filter(item => 
        item.name?.toLowerCase().includes(busqueda) ||
        item.description?.toLowerCase().includes(busqueda) ||
        item.type?.displayValue?.toLowerCase().includes(busqueda)
    );

    console.log(`Búsqueda: "${busqueda}" - Resultados: ${resultados.length}`);
    renderizarItems(resultados.slice(0, 50));
}


function buscarEnter(event) {
    if (event.key === 'Enter') {
        buscarItem();
    }
}


window.onload = () => {
    console.log('Página cargada - Cargando tienda diaria de Fortnite');
    cargarTiendaDiaria();
};

console.log('Script de Fortnite API cargado correctamente');