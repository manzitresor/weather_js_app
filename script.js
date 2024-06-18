const apiKey = 'e44f060bfc6e19da5527b64f9251a6fd';
const api = 'https://api.openweathermap.org/data/2.5/weather?q=kigali';

async function getApi (){
    const fetchApi = await fetch(api + `&appid=${apiKey}`);
    const data = await fetchApi.json();
    return data
}


async function setData() {
    let data = await getApi();
    document.getElementById('city').innerHTML += data.name;
    document.getElementById('temp').innerHTML += data.main.temp;
}

setData();



