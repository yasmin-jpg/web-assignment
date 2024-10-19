// Получаем элементы из HTML
const rollButton = document.getElementById('rollButton');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const resultDiv = document.getElementById('result');
const counterDiv = document.getElementById('counter');

let rollCount = 0; // Счетчик бросков

// Функция для генерации случайного числа от 1 до 6
function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Обработчик события нажатия кнопки
rollButton.addEventListener('click', () => {
    // Генерация случайных чисел для кубиков
    const dice1Value = getRandomDiceNumber();
    const dice2Value = getRandomDiceNumber();

    // Обновление изображений кубиков
    dice1.src = `dice${dice1Value}.png`; // Здесь обновляем src первого кубика
    dice2.src = `dice${dice2Value}.png`; // Здесь обновляем src второго кубика

    // Увеличиваем счетчик бросков
    rollCount++;
    counterDiv.textContent = `Number of throws: ${rollCount}`;

    // Подсчет суммы
    const sum = dice1Value + dice2Value;
    resultDiv.textContent = `The amount: ${sum}`;

    // Проверка условия выигрыша
    if (dice1Value === dice2Value) {
        alert('Congratulations! You won by rolling two identical dice!');
    }
});
