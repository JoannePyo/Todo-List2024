//Login in. 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout-button");

//중복되는 이름 하나로 정의하기.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { 
    //기본동작이 실행되지 않도록 막아주기.(페이지 세로고침 방지)
    event.preventDefault();
    // hidden이라는 class name을 더해줘서 form을 숨기고
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //유저의 이름을 변수로 저장해주고 그 이름은 h1안에 넣어준다.
    const username = loginInput.value;
    //localStorage사용으로 username 저장.
    localStorage.setItem(USERNAME_KEY, username);
    //유저가 form안에 있는 input에 입력한 유저명을 받음.
    paintGreetings(username);
}

function paintGreetings(username){
    //비어있는 h2(html) 요소 안에 `Hello ${username}`이라는 텍스트를 추가하는 것이다.
    greeting.innerText=`Hello ${username}`;
    //그 다음에 h1요소로부터 hidden이라는 클래스명을 제거 해줄거임.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로그아웃
function handleLogout() {
    // 로컬 스토리지에서 유저명 삭제
    localStorage.removeItem(USERNAME_KEY);
    // 모든 요소 숨기기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logoutButton.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = ''; // 인사말 초기화
}


//check username in localStorage or not.
const savedUsername = localStorage.getItem(USERNAME_KEY);

//유저의 정보를 저장하는법.만약 유저의 정보가 없다면 
//우리는 loginForm에 onLoginSubmit function으로 가서 username의 정보를 input으로 받아서 paintGreetings(username)를 호출할거야
//아니면 원래 있는 유저의 정보를  로그인하고 들어가면 그유저가 저장되서 나옴.
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
}

// 로그아웃 버튼 이벤트 리스너 추가
logoutButton.addEventListener("click", handleLogout);