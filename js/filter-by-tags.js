let btnsContainer = document.getElementById("tags-container"),
  btns = btnsContainer.getElementsByTagName("button"),
  elements = document.getElementById("works-container");

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    let items = elements.getElementsByClassName("all");

    for (let j = 0; j < items.length; j++) {
      if (items[j].classList.contains(this.innerHTML)) {
        items[j].style.display = "flex";
      } else {
        items[j].style.display = "none";
      }
    }
  };
}
