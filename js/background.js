// 이미지 파일의 총 개수를 지정합니다
const imageCount = 6;

// 이미지 배열을 자동으로 생성합니다
const images = Array.from({ length: imageCount }, (_, i) => `${i + 1}.png`);


// 이미지 선택
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// appendChild는 body에 html에 추가한다는 뜻
document.body.appendChild(bgImage);