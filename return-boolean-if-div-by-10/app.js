// ****************** [2] *******************

function divBy10() {
  var num = +prompt("Enter any number:");

  if (num != "") {
    if (num % 10 == 0 && num != 0) {
      alert("Number is divible by 10");
    } else {
      alert("Number isn't divisible by 10");
    }
  } else {
    alert("Null input!");
  }
}

divBy10();
