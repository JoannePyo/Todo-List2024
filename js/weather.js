//const weather = document.querySelector("#weather span:first-child");
//const city = document.querySelector("#weather span:last-child");
//5 API key
const API_KEY = "c8a82c4cae76acb70a3a3a11aee6969a";

//3 성공하면 GeolocationPosition 해서 나옴. 
function onGeoOk(position) {
    //4 위도
    const lat = position.coords.latitude;
    //4 경위
    const lon = position.coords.longitude;
    //console.log("you live in", lat, lon); //이코드로 중간에 GeolocationPosition 위도랑 경위를 알 수 있다.

    //6. URL Fahrenheit=units=imperial Celsius=units=metric
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
    console.log(url);
    // 7. fetch는 당장 뭔가 일어나지 않고 시간이 좀 걸린뒤에 일어남.
    // 즉 URL을 fetch하고 그다음으로(then) response를 받아야 한다. 
    fetch(url)
    .then((response) => response.json())
    //8. 날씨와 온도 웹화면에 나오게 하기.
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°F`;
    });
}

//2 에러뜨면 알람으로 알려줌.
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

//1 The getCurrentPosition() method of the Geolocation interface is used to get the current position of the device.
//  getCurrentPosition(success, error)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);