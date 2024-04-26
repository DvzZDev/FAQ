const btns = document.querySelectorAll(".btn");
const boxes = document.querySelectorAll(".response");
const rotar = document.querySelectorAll(".trs");

let isHide = Array.from({ length: btns.length }).fill(true);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    e.preventDefault();
    if (isHide[i]) {
      boxes[i].classList.add("show");
    } else {
      boxes[i].classList.remove("show");
    }
    isHide[i] = !isHide[i];

    rotar.forEach(function (img, index) {
      if (!isHide[index]) {
        img.classList.add("rotated");
      } else {
        img.classList.remove("rotated");
        img.classList.add("unrotated")
      }
    });
  });
}
