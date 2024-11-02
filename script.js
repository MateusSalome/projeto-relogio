const hoursHand = document.querySelector('.hand.hours');
const minutesHand = document.querySelector('.hand.minutes');
const secondsHand = document.querySelector('.hand.seconds');

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360);
}

const setClock = () => {
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = ( secondsPercentage + currentDate.getMinutes())/ 60;
    const hoursPercentage = ( minutesPercentage + currentDate.getHours()) / 12;

    setRotation(secondsHand, secondsPercentage)
    setRotation(minutesHand, minutesPercentage)
    setRotation(hoursHand, hoursPercentage)
}

setClock();

setInterval(setClock,1000)

const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sds = dateToday.getSeconds();

    if(hr < 10 ) hr = '0' + hr;
    if(min < 10 ) min = '0' + min;
    if(sds < 10 ) sds = '0' + sds;
    

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sds;

})

const switchClock = document.querySelector('.btn')
const analogicClock = document.querySelector('.clock')
const digitalClock = document.querySelector('.digital-clock')

switchClock.addEventListener('click', () => {

    analogicClock.classList.toggle('hidden')
    digitalClock.classList.toggle('hidden')

    if (digitalClock.classList.contains('hidden')) {
        switchClock.textContent = 'ALTERNAR PARA RELÓGIO DIGITAL';
      } else {
        switchClock.textContent = 'ALTERNAR PARA RELÓGIO ANALÓGICO';
      }
});