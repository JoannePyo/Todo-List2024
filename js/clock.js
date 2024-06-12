// bring clock from html file
const clock = document.querySelector("h2#clock");

function getClock() {
    // new date object는 현재 날짜. 시간, 분, 초에 대한 정보를 가지고 있다. 
    const date = new Date();
    //시간 표시가 00:00:00가 될 수 있게 바꿔줌. getHours, getMinutes, getSeconds들의 string길이가 2여야한다.
    let hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // AM 또는 PM 구분
    const ampm = hours >= 12 ? 'PM' : 'AM';
    // 시간을 12시간 형식으로 변환
    hours = hours % 12;
    hours = hours ? hours : 12; // 0시를 12시로 바꿈


    //웹사이트에 보이게 하기.
    clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}

getClock();
//argument는 니가 실행하고자 하는 function임.
//argument는 호출되는 function 간격을 몇milliseconds로 할지 쓰면됨.
setInterval(getClock, 1000); //every  1sec.