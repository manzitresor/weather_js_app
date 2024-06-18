const apiKey = 'e44f060bfc6e19da5527b64f9251a6fd';
const api = 'https://api.openweathermap.org/data/2.5/weather?q=kigali';
const city = document.getElementById('city');
const temperature = document.getElementById('temp');
const btn = document.getElementById('search-btn');
const search = document.getElementById('search');

// btn.addEventListener('click',function(){
//     const getcity = search.value;
// })

async function getApi (){
    const fetchApi = await fetch(api + `&appid=${apiKey}`);
    const data = await fetchApi.json();
    return data
}

async function setData() {
    let data = await getApi();
    city.innerHTML += data.name;
    temperature.innerHTML += data.main.temp;
}

setData();



