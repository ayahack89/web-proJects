// Update the text in the calculator screen
function insert(num) {
  document.form1.textview.value = document.form1.textview.value + num;
}

//Return the calutate value
function equal() {
  let expration = document.form1.textview.value;
  if (expration) {
    document.form1.textview.value = eval(expration);
  }
}

//Creating BackSpace
function backspace() {
  let back = document.form1.textview.value;
  if (back) {
    document.form1.textview.value = back.substring(0, back.length - 1);
  }
}
