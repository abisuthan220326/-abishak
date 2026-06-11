let materials = [
    { name: '1 1/2 JALLI', rate: 2500, unit: 'cubic foot', image: 'jalli-1-5.jpg' },
    { name: '3/4 JALLI', rate: 2800, unit: 'cubic foot', image: 'jalli-3-4.jpg' },
    { name: 'P-SAND', rate: 1800, unit: 'cubic foot', image: 'p-sand.jpg' },
    { name: 'M-SAND', rate: 1600, unit: 'cubic foot', image: 'm-sand.jpg' },
    { name: 'RED BRICKS', rate: 8, unit: 'piece', image: 'red-bricks.jpg' },
    { name: 'CEMENT', rate: 420, unit: 'bag', image: 'cement.jpg' },
    { name: 'AAC BLOCKS', rate: 65, unit: 'piece', image: 'aac-blocks.jpg' }
];

// Track if admin mode is enabled
let isAdminMode = false;

function loadMaterials() {
    const savedMaterials = localStorage.getItem('constructionMaterials');
    if (savedMaterials) {
        materials = JSON.parse(savedMaterials);
    }
}

function saveMaterials() {
    localStorage.setItem('constructionMaterials', JSON.stringify(materials));
}

function displayMaterials() {
    const container = document.getElementById('materials-container');
    container.innerHTML = '';

    materials.forEach((material, index) => {
        const card = document.createElement('div');
        card.className = 'material-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add edit button if admin mode is enabled
        const editButton = isAdminMode 
            ? `<button class="edit-rate-btn" onclick="editRate(${index})">✏️ Edit</button>` 
            : '';
        
        card.innerHTML = `
            <img src="${material.image}" 
                 alt="${material.name}" 
                 class="material-image"
                 onerror="this.src='https://via.placeholder.com/200x200?text=${material.name.charAt(0)}'">
            <h3>${material.name}</h3>
            <p class="rate">₹${material.rate} <span class="rate-unit">per ${material.unit}</span></p>
            ${editButton}
        `;
        container.appendChild(card);
    });
}

// Edit rate function (only visible in admin mode)
function editRate(index) {
    const material = materials[index];
    const newRate = prompt(`Edit rate for ${material.name} (per ${material.unit}):`, material.rate);
    
    if (newRate && newRate.trim() !== '') {
        const validatedRate = parseFloat(newRate);
        if (!isNaN(validatedRate) && validatedRate >= 0) {
            materials[index].rate = validatedRate;
            saveMaterials();
            displayMaterials();
            alert('Rate updated successfully! ✅');
        } else {
            alert('Please enter a valid number! ❌');
        }
    }
}

// Enable admin mode with Ctrl + E
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'e') {
        event.preventDefault();
        isAdminMode = !isAdminMode; // Toggle admin mode
        
        if (isAdminMode) {
            alert('Admin mode ENABLED! You can now edit rates. ✏️');
        } else {
            alert('Admin mode DISABLED. Edit buttons hidden.');
        }
        
        displayMaterials(); // Refresh to show/hide edit buttons
    }
});

document.addEventListener('DOMContentLoaded', function () {
    loadMaterials();
    displayMaterials();
});