// HEART GENERATOR (ANIMATION FOR HEARTS)
const heartsContainer = document.getElementById('hearts-container');
for (let i = 0; i < 20; i++){ // LOOP THAT CREATES 20 HEARTS — FROM  i = 0 to i = 19
    const heart = document.createElement('div'); // CREATING A NEW HTML ELEMENT (div) — <div class="heart"></div> — THIS ALLOWS YOUR CSS TO STYLE IT EVEN IF THE ELEMENT WAS CREATED FROM JS
    heart.className = 'heart'; // ASSIGNING A CSS CLASS — 'heart' IS THE ASSIGNED CLASS and heart.className IS FROM THE SELECTOR .heart INSIDE THE CSS FILE
    heart.style.left = Math.random() * 100 + 'vw'; // RANDOM HORIZONTAL POSITION
    heart.style.animationDuration = (Math.random() * 6 + 8) + 's'; // ANIMATION DURATION
    heart.style.animationDelay = Math.random() * 10 + 's'; // ANIMATION DELAY
    const scale = 0.5 + Math.random(); // RANDOM HEART SIZE
    heart.style.transform = `rotate(-45deg) scale(${scale})`;
    heartsContainer.appendChild(heart);  
}

// FLOWERS
function populateBreath(elementId, count){
    const container = document.getElementById(elementId);
    for (let i = 0; i < count; i++){
        const dot = document.createElement('div'); 
        dot.className = 'breath-dot';
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 80; 
        dot.style.left = (128 + Math.sin(angle) * radius) + 'px'; 
        dot.style.top = (128 + Math.sin(angle) * radius) + 'px'; 
        dot.style.opacity = 0.3 + Math.random() * 0.7;
        dot.style.animationDelay = Math.random() * 5 + 's'; 
        container.appendChild(dot);
    }
}

// GETTING THE CONTAINER 
populateBreath('breath-back', 35); // THIS LOOKS FOR  <div id="breath-back"></div> IN THE HTML AND POPULATES IT WITH 35 DOTS
populateBreath('breath-front', 25); // THIS LOOKS FOR  <div id="breath-front"></div> IN THE HTML AND POPULATES IT WITH 25 DOTS