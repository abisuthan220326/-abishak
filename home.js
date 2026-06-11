// Building & Construction Motivational Quotes
const buildingQuotes = [
    "Success is building a foundation others can stand on.",
    "Every great building begins with a strong foundation.",
    "Build your dreams with patience and perseverance.",
    "Strength is built layer by layer, just like success.",
    "A solid foundation is the key to lasting success.",
    "Build boldly, live bravely, succeed gloriously.",
    "Construction is not just about buildings, it's about creating legacies.",
    "The height you reach depends on the foundation you build.",
    "Building trust, one brick at a time.",
    "Great things are built through dedication and hard work.",
    "Success is constructed with effort, persistence, and vision.",
    "Build the life you want to live, brick by brick.",
    "Every expert was once a beginner who never stopped building.",
    "Quality construction creates quality life.",
    "Build strong walls and wide bridges.",
    "The best buildings are built with heart and soul.",
    "Life is like construction - keep building despite the challenges.",
    "Build with purpose, live with passion.",
    "Foundation of success: hard work, dedication, and integrity.",
    "Build tomorrow's dreams today."
];

// Display random quote function
function showRandomQuote() {
    const quoteElement = document.getElementById('quote-display');
    
    // Fade out
    quoteElement.style.opacity = '0';
    
    setTimeout(() => {
        // Get random quote
        const randomIndex = Math.floor(Math.random() * buildingQuotes.length);
        quoteElement.textContent = `"${buildingQuotes[randomIndex]}"`;
        
        // Fade in
        quoteElement.style.opacity = '1';
    }, 500);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    showRandomQuote(); // Show first quote immediately
    // Change quote every 10 seconds
    setInterval(showRandomQuote, 10000);
});

