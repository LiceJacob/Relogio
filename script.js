const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos') ;
const segundos = document.getElementById('segundos') ;

const relogio = setInterval(function time(){
    let datetoday = new Date ();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let seg = datetoday.getSeconds();

    if(hr <10 hr = '0' + hr);
    if(min <10 hr = '0' + min);
    if(seg <10 hr = '0' + seg);

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

})
