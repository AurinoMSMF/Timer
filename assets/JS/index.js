function pegaOsSegundos (segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.clock');

let segundos = 0;
let timer;

function startClock() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = pegaOsSegundos(segundos);
    }, 1000);
};

document.addEventListener('click', function (event) {
    const elemento = event.target;
    if (elemento.classList.contains('start')){
        relogio.classList.remove('paused')
        clearInterval(timer);
        startClock();
    }
    if (elemento.classList.contains('pause')){
        relogio.classList.add('paused')
        clearInterval(timer);
    }
    if (elemento.classList.contains('clear')){
        clearInterval(timer);
        relogio.classList.remove('paused')
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
});