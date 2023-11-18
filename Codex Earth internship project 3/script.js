const getColor = () => {
    const colorDisplay = document.getElementById('color-code');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    colorDisplay.textContent = randomColor;
    colorDisplay.style.color = randomColor;
    const generateButton = document.querySelector('#btn');
    generateButton.style.backgroundColor = randomColor;
}

document.getElementById('btn').addEventListener('click', getColor);
