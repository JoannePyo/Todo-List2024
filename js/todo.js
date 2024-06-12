//1 html에서 todo-form 가져오기
const toDoForm = document.getElementById("todo-form");
//2 todo-form에tj input만 찾기.
const toDoInput = document.querySelector("#todo-form input");
//10. 이걸 html파일에 넣어서 todolist의 값이 저장되서 나오게 할거임. 
const toDoList = document.getElementById("todo-list");
//22
const TODOS_KEY = "todos";
//18. localStorage사용해서 todolist를 저장하는 방법. toDos array 만듬.하지만 localStorage에 array 저장 불가. 텍스트만 가능.
//     const가 아니고 let으로 바뀌므로 업데이트가 가능하도록 해줬음.
let toDos = [];

//20. toDos array의 내용을 LocalStorage에 넣음
function saveToDos() {
    //21. toDos 글자 바꿔주기. 그리고 JSON.stringify(toDos)로 JS의 object나 array들을 string으로 변환시킬수있음.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//15 list룰 지울수있는 function. 여기에 event를 넣으므로 어느걸 클릭해서 지울려는지는 알 수 있다. 
function deleteToDo(event) {
    // 16 어느것을 클릭되는지 알 수 있다. target은 버튼이고. 버튼의 부모(li)에 접근한다는 뜻이다.
    const li = event.target.parentElement;
    //17. remove가능
    li.remove();
    //27 parseInt는 문자열을 숫자로 바꿔줌.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}
//6.5 Todo input에 글 써서 보내기.
function paintToDo(newTodo) {
    //7 create element li
    const li = document.createElement("li");
    li.id = newTodo.id;
    //8 create element span
    const span = document.createElement("span");
    //8.4 newTodo 텍스트 추가.
    span.innerText = newTodo.text;

    //12 버튼을 만들어서 list를 지우게 만들기
    const button = document.createElement("button");
    button.innerText = "done";
    //14 이벤트리슨너를 통해서 무엇이 클릭되는지 확인가능하다. 그러므로 x클리하면 지울수있다록.
    button.addEventListener("click", deleteToDo);
    
    //9 li는 span이라는 자식을 갖게 됨. 즉.span를 li에 추가. 
    li.appendChild(span);
    //13 버튼을 li에 추가하기. 
    li.appendChild(button);
    //11. 리스트가 생긴다. 
    toDoList.appendChild(li);
}

//4. 
function handleToDoSubmit(event) {
    //5 새로고침 방지
    event.preventDefault();
    //6 function paintTodo
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    };
    //19. 
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
//3.
toDoForm.addEventListener("submit", handleToDoSubmit);

//23 localStorage에 todolist save하기!
const savedToDos = localStorage.getItem(TODOS_KEY);

//24 null 될 경우를 위해서
if (savedToDos !== null) {
    //25 string이 아닌 JS에서 사용가능한 object로도 바뀔수있다. 
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //26 forEach는 array의 각 item에 대해 function을 실행시켜준다.
    parsedToDos.forEach(paintToDo);
}