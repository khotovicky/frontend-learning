document.write('В чём сила?');
// при клике по кнопке скрипт запустит код
let button = document.querySelector(".button");
function sayHello(name) {
  return 'Привет, ' + name;
}

let greeting = sayHello('Тарас Григорьевич!');

console.log(greeting);
alert(greeting);
button.addEventListener('click', function () {
    // если фон кнопки чёрный
    if (button.style.backgroundColor == 'black') {
      // изменим его на белый, а текст сделаем чёрным
      button.style.backgroundColor = 'white';
      button.style.color = 'black';
    } else {
      // иначе сделаем фон чёрным, а текст белым
    button.style.backgroundColor = 'black';
        button.style.color = 'white';
    }
  });