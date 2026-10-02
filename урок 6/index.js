let mousePad = document.getElementById('mousePad');
let statusLog = document.getElementById('statusLog');


function updateLog(text){
    statusLog.textContent = `Событие: ${text}`;
}

    mousePad.addEventListener('click', ()=>{
        mousePad.style.backgroundColor = '#ff4757';
        updateLog('click(Левый клик!)');
    });

    mousePad.addEventListener('dblclick', ()=>{
        mousePad.style.backgroundColor = '#1e90ff';
        updateLog('dbclick(Двойной клик!)');
    });


    mousePad.addEventListener('contextmenu', (event)=>{
       event.preventDefault();
       mousePad.style.backgroundColor = '#2ed573'
       updateLog('click(Правый клик!)');
    });

    mousePad.addEventListener('mouseenter', ()=>{
       mousePad.style.backgroundColor = '#fff'
       updateLog('mouseenter(зашел на элемент)');
    });

 
    mousePad.addEventListener('mouseleave', ()=>{
       mousePad.style.borderColor = '#555'
       mousePad.style.backgroundColor = 'rgb(42, 42, 53)'
       updateLog('mouseleave(выход из элемента)');
    });




