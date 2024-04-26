const btns = document.getElementsByClassName("btn");
const boxes = document.getElementsByClassName("response");

let isHide = Array.from({ length: btns.length }).fill(true);

console.log(isHide);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    if (isHide[i]) {
      boxes[i].classList.add("show");
    } else {
      boxes[i].classList.remove("show");
    }
    isHide[i] = !isHide[i];
  });
}
