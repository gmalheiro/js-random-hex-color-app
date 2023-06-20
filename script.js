const btn = document.querySelector('.button');
const color = document.querySelector('.randomColor'); 
const colorBg = document.querySelector('.color-box');

btn.addEventListener('click', () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    color.innerHTML = '#'+randomColor;
    document.body.style.backgroundColor = '#'+randomColor;
    colorBg.style.color = '#'+randomColor;
})