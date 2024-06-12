document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');
    const loginForm = document.getElementById('login-form');
    const greeting = document.getElementById('greeting');
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');

    // 사용자가 로그인 했을 때 호출되는 함수
    function onLogin() {
        logoutButton.classList.remove('hidden');
        loginForm.classList.add('hidden');
        greeting.classList.remove('hidden');
        todoForm.classList.remove('hidden');
        todoList.classList.remove('hidden');
    }

    // 로그아웃 버튼 클릭 이벤트 핸들러
    logoutButton.addEventListener('click', () => {
        logoutButton.classList.add('hidden');
        loginForm.classList.remove('hidden');
        greeting.classList.add('hidden');
        todoForm.classList.add('hidden');
        todoList.classList.add('hidden');
    });

    // 초기화 함수
    function init() {
        // 여기에 초기화 코드 추가 (필요한 경우)
        logoutButton.classList.add('hidden');
    }

    init();
});
