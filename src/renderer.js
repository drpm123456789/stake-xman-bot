// Renderer process - Load bot UI
const appRoot = document.getElementById('app-root');
if (appRoot) {
    appRoot.innerHTML = '<div id="sb-dice-bot-root"></div>';
}

// Initialize bot
if (typeof window !== 'undefined') {
    console.log('Renderer process initialized');
}