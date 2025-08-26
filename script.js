const cc = document.querySelector('.contries-contianer')
const filterregion = document.querySelector('.filter')
const searchinput=document.querySelector('.search-container input')
let allcountries
fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region')
  .then(response => response.json())
  .then((data)=>{
    renderCountries(data)
    allcountries=data;
  })



filterregion.addEventListener('change', (e) => {
  fetch(`https://restcountries.com/v3.1/region/${filterregion.value}`)
    .then(response => response.json())
    .then((renderCountries))
})

function renderCountries(data) {
     cc.innerHTML = ''
      data.forEach(country => {

        const countryCard = document.createElement("a")
        countryCard.classList.add('country-card')
        countryCard.href = '/country.html'
        countryCard.innerHTML = `<img src=${country.flags.svg} alt="flag">
                <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${new Intl.NumberFormat('en-IN').format(country.population)}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
             </div>`
        cc.append(countryCard)
      });
}

searchinput.addEventListener('input',(e)=>{
  console.log(e.target.value)
  const filtercountries=allcountries.filter((country)=>(country.name.common.toLowerCase().includes(e.target.value)))
  console.log(filtercountries)
  renderCountries(filtercountries)
})


let theme=document.querySelector('.Theme-changer');
theme.addEventListener('click',(e)=>{
  document.body.classList.toggle('dark')
  
})