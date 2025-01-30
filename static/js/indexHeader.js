// function alFun(event) {
//   console.log(event.target);
// }
function mouseMove(event) {
    if (( event.target.parentElement.parentElement.children[1].classList[0] == "kdlOpt")) {
  event.target.parentElement.parentElement.children[1].classList.remove(
    "opacity-0"
  );
  event.target.parentElement.parentElement.children[1].classList.add("opacity-1");
    }
}
// function mouseDown(event) {
//   if (( event.target.parentElement.classList[0] == "kdlOpt")) {
//     event.target.parentElement.parentElement.children[1].classList.add(
//       "opacity-0"
//     );
//     event.target.parentElement.parentElement.children[1].classList.remove(
//       "opacity-1"
//     );
//   }

// }
// console.log(containdocument.querySelector(".headerOpt"))