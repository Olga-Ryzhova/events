// создание элемента-контейнера
const gnomeGame = document.createElement("div");
gnomeGame.className = "gnome-game";
document.body.appendChild(gnomeGame);

// добавление элементов гномов в контейнер
for (let i = 1; i <= 16; i++) {
  gnomeGame.insertAdjacentHTML(
    "beforeEnd",
    `<div class="gnome" id="gnome${i}"></div>`,
  );
}

function goGnome() {
  // хранение индекса активного гнома
  let activeGnome = 1;

  // получаем индексы на странице
  const getGnome = (index) => document.getElementById(`gnome${index}`);

  // деактивация гнома по индексу
  const deactivateGnome = (index) => (getGnome(index).classList = "gnome");

  // активация гнома по индексу
  const activateGnome = (index) =>
    (getGnome(index).classList = "gnome gnome_has-mole");

  // рандомное перемемещние гнома по полю
  const next = () =>
    setTimeout(() => {
      deactivateGnome(activeGnome);
      activeGnome = Math.floor(1 + Math.random() * 16);
      activateGnome(activeGnome);
      next();
    }, 1000);

  // запуск анимации
  next();
}
goGnome();
