let cel = document.querySelector('.numTemp');
const dis = document.querySelector('.display');
const dis2 = document.querySelector('.display2');
const btn2 = document.querySelector('.cleaner');



const faren = (e) => {
    let temp = e.target.value;
wynik = temp*1.8+32;
wynik2 = parseInt(temp) + 273.15;
dis.innerText = `${wynik} °F 🌤️`;
dis2.innerText = `${wynik2} °K ☀️`;
}

const clean = () => {
    dis.innerText = 'Temperature result in Fahrenheit';
dis2.innerText = 'Temperature result in Kelvin';
}

const bbb =(e)=>{
    const zero = e.target.textContent;
    console.log(eval(zero + "GAZ"));
}



cel.addEventListener('keyup',faren)
btn2.addEventListener('click',clean)
