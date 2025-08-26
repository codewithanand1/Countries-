const countryName = new URLSearchParams(location.search).get('name');
const flagImage = document.querySelector('#imgg');
const countryh1 = document.querySelector('.country-detail h1');


    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(res => {
            return res.json();
        })
        .then(([country]) => {
            console.log(country)
            flagImage.src = country.flags.svg;
            countryh1.innerText = country.name.common;
        })
