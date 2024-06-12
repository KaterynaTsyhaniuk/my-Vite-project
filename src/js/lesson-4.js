//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const listBox = document.querySelector('.box-list');
//console.log(listBox);

function createBoxs(emount, rootSelector) {
  const divContainer = document.createElement('div'); //створили тег дів
  divContainer.classList.add('number-container'); //додали до діва клас
  // console.log(divContainer);
  for (let i = 0; i < emount; i++) {
    //console.log(i);
    //ми хочемо з кожною ітерацією створювати дів
    const div = document.createElement('div');
    div.classList.add('number');
    div.textContent = randomNumber();
    if (div.textContent % 2 === 0) {
      div.classList.add('even');
    } else {
      div.classList.add('odd');
    }
    divContainer.appendChild(div); //коли запустилась функція, створили дів, дали клас, на кожній ітерації...і кожну ітерацію через appendChild додавай діви у наш дів
  }

  rootSelector.after(divContainer); /// в нас зявилися жовті і зелені квадрати div
}

createBoxs(100, listBox); //запустилося 100 циклів
console.log(divContainer);
// вливати в дом дерево елементи потрібно за одну операцію; в домі лежить тільки ul.
