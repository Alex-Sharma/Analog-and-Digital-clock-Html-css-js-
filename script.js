// const secondHand = document.getElementById("second-hand");
// const minuteHand = document.getElementById("minute-hand");
// const hourHand = document.getElementById("hour-hand");
 
let hourHand = document.querySelector("#hourHand");
let minuteHand = document.querySelector("#minuteHand");
let secondHand = document.querySelector("#secondHand");

setInterval(() => {

    
    let day = new Date();
    let hours = day.getHours() * 30;
    let minutes = day.getMinutes() * 6;
    let seconds = day.getSeconds() * 6;
    
    hourHand.style.transform =`rotateZ(${hours + (minutes/12)}deg)`;
    minuteHand.style.transform = `rotateZ(${(minutes)}deg)`;
    secondHand.style.transform = `rotateZ(${(seconds)}deg)`;

    // Digital clock
    let hr = document.getElementById('hour');
    let min = document.getElementById('minute');
    let sec = document.getElementById('second');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    // convert 24hr format clock to 12hr clock
    if (h > 12){
        h = h-12;
    }

    // add zero before single digit number
    h = (h<10) ? "0" + h : h
    m = (m<10) ? "0" + m : m
    s = (s<10) ? "0" + s : s

    hr.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    ampm.innerHTML = am;
})



