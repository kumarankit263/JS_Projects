console.log("Jello jee babbar");
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function renderWeatherInfo(data){
    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newPara);
}
async function showWeather(){
    try{
    let lat =15.333;
    let lon=74.0833;

    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

    const  data = await response.json();
    console.log("Weather data:->" , data);

    
    renderWeatherInfo(data);
    }
    catch(err){
        console.log("Error found",err);
    }


}