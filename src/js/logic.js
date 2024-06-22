document.addEventListener("DOMContentLoaded", () => {
  const dead = document.getElementById("dead");
  const lost = document.getElementById("lost");

  for (let i = 1; i <= 16; i++) {
    const getGnome = (index) => document.getElementById(`gnome${index}`);
    const gnome = getGnome(i);

    gnome.addEventListener("click", (event) => {
      if (gnome.classList.contains("gnome_has-mole")) {
        dead.textContent++;
        event.target.classList.remove("gnome_has-mole");
      } else {
        lost.textContent++;
      }

      if (lost.textContent == 5) {
        alert("Вы проиграли");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    });
  }
});
