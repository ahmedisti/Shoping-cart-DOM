"use strict";

/*========== Item One ============*/

//increase the quantity and the price
const plus1 = document.getElementById("plus-1");

plus1.addEventListener("click", function () {
  plus("input-1", 1219, "input1-price");
});

//decrease the quantity and the price

const minus1 = document.getElementById("minus-1");

minus1.addEventListener("click", function () {
  minus("input-1", 1219, "input1-price");
});

/*======== Item 2 ==========*/

//increase the quantity and the price
const plus2 = document.getElementById("plus-2");

plus2.addEventListener("click", function () {
  plus("input-2", 59, "input2-price");
});

//decrease the quantity and the price

const minus2 = document.getElementById("minus-2");

minus2.addEventListener("click", function () {
  minus("input-2", 59, "input2-price");
});

/*========== Plus Function ===========*/

const plus = function (id, value, inputPriceId) {
  const input = document.getElementById(id).value;

  const inputNumber = parseInt(input);

  const inputNumberIncrease = inputNumber + 1;

  document.getElementById(id).value = inputNumberIncrease;

  const inputPrice = value;

  const inputPriceNumberChange = inputPrice * inputNumberIncrease;

  document.getElementById(inputPriceId).innerText = inputPriceNumberChange;

  // Subtotal Calculation //

  const subtotal = document.getElementById("subtotal").innerText;

  const subtotalNumber = parseInt(subtotal);

  const subtotalFinal = subtotalNumber + value;

  document.getElementById("subtotal").innerText = subtotalFinal;

  // Tax Calculation //

  const tax = document.getElementById("tax").innerText;

  const taxNumber = parseInt(tax);

  const taxPercent = (subtotalFinal * 10) / 100;

  document.getElementById("tax").innerText = taxPercent;

  // Total Calculation //
  const totalAmountFinal = subtotalFinal + taxPercent;

  document.getElementById("totalAmount").innerText = totalAmountFinal;
};

/*========== Minus Function ===========*/

const minus = function (id, value, inputPriceId) {
  const inputMinus = document.getElementById(id).value;
  const inputNumberMinus = parseInt(inputMinus);
  if (inputNumberMinus > 0) {
    const inputNumberDecrease = inputNumberMinus - 1;
    document.getElementById(id).value = inputNumberDecrease;

    const presentPriceDecrement =
      document.getElementById(inputPriceId).innerText;

    const presentPriceDecrementNumber = parseInt(presentPriceDecrement);

    const decrementPrice = presentPriceDecrementNumber - value;

    document.getElementById(inputPriceId).innerText = decrementPrice;

    // Subtotal Calculation //

    const subtotal = document.getElementById("subtotal").innerText;

    const subtotalNumber = parseInt(subtotal);

    const subtotalFinal = subtotalNumber - value;

    document.getElementById("subtotal").innerText = subtotalFinal;

    // Tax Calculation //

    const taxPercent = (subtotalFinal * 10) / 100;

    document.getElementById("tax").innerText = taxPercent;

    // Total Calculation //
    const totalAmountFinal = subtotalFinal + taxPercent;

    document.getElementById("totalAmount").innerText = totalAmountFinal;
  } else {
    document.getElementById(inputPriceId).innerText =
      "Negative Input Not Allowed";
    document.getElementById(inputPriceId).style.color = "red";
  }
};


const checkBtn = document.getElementById('check-out');

checkBtn.addEventListener('click',function(){

  document.getElementById('cartId').style.display = 'none';

  document.getElementById('checkFinal').style.display = 'block';
})
