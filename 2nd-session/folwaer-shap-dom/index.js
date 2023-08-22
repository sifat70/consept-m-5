let total = 0;

function handleCLikBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.parentNode.childNodes[1].innerText;
  const li = document.createElement("li");
  
  li.innerText = itemName;
  selectedItemContainer.appendChild(li);
  const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total;

  // const discound = document.getElementById('discount');
  // discound.innerText = (total * 0.7).toFixed(2);


  // const grandTotal = document.getElementById('grand-total');
  // grandTotal.innerText = discound.innerText;

}



// document.getElementById("").addEventListener("click", function (e) {
//     e.target
// })