const scoreDisplay = document.getElementById('score');
let score = 0;

function getRandomNumber(min, max){
    return Math.random() * (max-min)+min;
}

function createCube(){
    const cube = document.createElement('div');
    cube.classList.add('cube');

    const x = getRandomNumber(0, window.innerWidth - 40);
    const y = getRandomNumber(0, window.innerHeight -40);
    cube.style.left = `${x}px`;
    cube.style.top = `${y}px`;

    const colors = ['red', 'white', 'blue', 'green', 'aqua'];
    const randomColor = colors[Math.floor(Math.random()* colors.length)];
    cube.style.backgroundColor = randomColor;

    cube.addEventListener('mouseenter', ()=>{
        score++;
        scoreDisplay.textContent = score;

        setTimeout(()=>{
            cube.remove();
        }, 200);
         });

        document.body.appendChild(cube);

        setTimeout(()=>{
            if (cube.parentNode){
                cube.remove();
            }
        }, 3000);
}
setInterval(createCube, 600);