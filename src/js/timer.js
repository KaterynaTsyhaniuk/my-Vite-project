'use strict';
function startTimer(array) {
  let index = 0; //поточний індекс масиву
  let direction = 1; // змінна визначає напрямок 1(+) -1(-)
  const outputInput = document.getElementById('output-input');
  const startBtn = document.getElementById('start-btn');

  startBtn.disabled = true; //робимо кнопку неактивною після старту
  const intervalId = setInterval(() => {
    //запускається функція кожну секунду
    // console.log(array[index]);
    outputInput.value = array[index];

    if (direction === 1 && index === array.length - 1) {
      direction = -1;
    } else if (direction === -1 && index === 0) {
      clearInterval(intervalId);
      setTimeout(() => {
        outputInput.value = ''; //чистимо інпут після закінчення логування
        startBtn.disabled = false;
      }, 1000);
    } else {
      index += direction;
    }
  }, 1000);
}
document.getElementById('start-btn').addEventListener('click', () => {
  const arr = [1, 2, 3, 4, 5];
  startTimer(arr);
});
