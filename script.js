const box = document.querySelector('#box');

async function getCountries(){
    const countries = await fetch("https://restcountries.com/v3.1/all");
    const countriesName = await countries.json();

    countriesName.forEach(element => {
        const country_box = document.createElement('div');
        country_box.className = "countryBox"

        const img = document.createElement("img");
        img.height = 100;
        img.width = 200;
        img.src = element.flags.png;

        const text = document.createElement("p")
        text.innerHTML = element.name.common;
        text.className = "countryName"

        const Index = text.innerText.split(" ");
        text.innerText = Index[0];
       
        country_box.append(text, img);
        box.append(country_box);
    });
}

getCountries();