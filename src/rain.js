const createRaindrops = () => {
    const rainContainer = document.createElement('div');
    rainContainer.className = 'rain-container';
    document.body.appendChild(rainContainer);

    for (let i = 0; i < 100; i++) { // Adjust number for more or fewer drops
        const drop = document.createElement('div');
        drop.className = 'rain';
        rainContainer.appendChild(drop);
        // Set a random position
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDelay = `${Math.random() * 2}s`; // Random delay for a staggered effect
    }
};
export default createRaindrops
// Call this function when the component mounts
createRaindrops();
