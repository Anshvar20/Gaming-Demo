function gen() {
  var generatebtn = document.getElementById('gen');
  var mastercard = credit_card_number(mastercardPrefixList, 16, 1);

  document.getElementById("card_num").innerHTML = mastercard;

  var valid = Math.floor(Math.random() * 13) + 1;
  if (valid < 10) {
    valid = "0" + valid;
  }
  var validDate =  valid + "/2021";
  document.getElementById("valid").innerHTML = validDate;

  var cvv = Math.floor(Math.random() * 1000) + 100;
  document.getElementById("cvv").innerHTML = cvv;

  var holder = document.getElementById("name");
  var name = holder.value;
  if (name == "") {
    name = "Card Holder"
  }
  document.getElementById('holder').innerHTML = name;
}
