const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");

//Manipulando o input  amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;

  //Procura letras no input e substitui por ""(nada)
  amount.value = amount.value.replace(hasCharacterRegex, "");
});

//Capiturando o envento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault();
  console.log(currency.value);
};
