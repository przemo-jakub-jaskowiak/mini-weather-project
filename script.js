let celsius;
let temp;

const farenheit = (tu=0) => {
    celsius = tu;
    temp = celsius*1.8+32;


    console.log(`${celsius}°C ⛅ = ${temp.toFixed(1)}°F 🌡️`);
}

farenheit(21)