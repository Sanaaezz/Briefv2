// window.alert(" Attention ce site est encore en chantier!");

// let tryIt = document.querySelector(".tryIt");
// tryIt.addEventListener("click", tryAgain);

// function tryAgain() {
//   tryIt = window.alert(" et bin non ! ");
// }

let tryIt = document.querySelector(".tryIt");
let imageV = document.querySelector(".visageTriste");

window.afficher = function () {
  imageV.style.display = imageV.style.display == "block" ? "none" : "block";
};
tryIt.onclick = afficher;
