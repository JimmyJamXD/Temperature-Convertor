//Creating variables for the temp inputs to be saved
const celsiusinput = document.querySelector(".celsius > input");
const fahreninput = document.querySelector(".fahrenheit > input");
const kelvininput= document.querySelector(".kelvin > input");


//Function for converting Celsius to Fahrenheit and Kelvin
const CeltoFaAndKe = () => {
    const tempCel = parseFloat(celsiusinput.value);
    const tempFahren = ((celsiusinput.value * 1.8) + 32);
    const tempKelvin = (celsiusinput.value + 273.15);

    fahreninput.value = Math.round(tempFahren,2);
    kelvininput.value = Math.round(tempKelvin,2);
}
//Function for converting Fahrenheit to Celsius and Kelvin
const FahrentoCelAndKe = () => {
    const tempFahren = parseFloat(fahreninput.value);
    const tempCel = ((fahreninput.value - 32) * (1.8));
    const tempKelvin = (((fahreninput.value - 32) * (5/9)) + 273.15);

    celsiusinput.value = Math.round(tempCel,2);
    kelvininput.value = Math.round(tempKelvin,2);
}

//Function for converting Kelvin to Celsius and Fahrenheit
const KelvintoCelAndFahren = () => {
    const tempKelvin = parseFloat(kelvininput.value);
    const tempCel = (kelvininput.value - 273.15);
    const tempFahren = (((kelvininput.value - 273.15) * (1.8)) + 32);

    celsiusinput.value = Math.round(tempCel,2);
    fahreninput.value = Math.round(tempFahren,2);
}

//Calling the function to use when values are inputted in the textbox
const main = () => {
    celsiusinput.addEventListener('input', CeltoFaAndKe);
    fahreninput.addEventListener('input', FahrentoCelAndKe);
    kelvininput.addEventListener('input', KelvintoCelAndFahren);
}

main();