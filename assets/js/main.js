function createSecond (seconds){
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString('pt-BR', {hour12:false, timeZone: 'GMT'});
}

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const clock = document.querySelector('.timer');
let second = 0; //mantem os segundos
let timer; // deixa a variável global para as funções manipularem

function startTimer(){
  timer = setInterval(function () {
    second++;
    clock.innerHTML = createSecond(second);
  }, 1000);
}

iniciar.addEventListener('click', function(event){
  clearInterval(timer); //limpa o timer para não ter 2 timers ao mesmo tempo
  startTimer();
  clock.style.color = 'black';
});

pausar.addEventListener('click', function(event){
  clearInterval(timer);
  clock.style.color = 'red';
});

zerar.addEventListener('click', function(event){
  clearInterval(timer);
  clock.innerHTML = '00:00:00';
  second = 0;
  clock.style.color = 'black';
});