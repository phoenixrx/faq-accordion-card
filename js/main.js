let preguntaactiva = 0;
const navigation = document.querySelectorAll(".FAQ");
navigation.forEach((pregun, indice) => {
  pregun.addEventListener("click", function () {
    activarIndice(indice);
  });
});
function activarIndice(indice) {
  navigation[preguntaactiva].classList.remove("activa");
  navigation[indice].classList.add("activa");
  preguntaactiva = indice;
}
