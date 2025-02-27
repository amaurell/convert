const amount = document.getElementById("amount");

//Manipulando o input  amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;

  //Procura letras no input e substitui por ""(nada)
  amount.value = amount.value.replace(hasCharacterRegex, "");
});
