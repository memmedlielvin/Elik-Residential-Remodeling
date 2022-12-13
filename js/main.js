function openNav() {
  document.querySelector("#nav-for-mobil").style.top = "0";
  document.querySelector("#closebar").style.display = "block";
}

function closeNav() {
  document.querySelector("#nav-for-mobil").style.top = "-100vh";
  document.querySelector("#closebar").style.display = "none";
}

function openChat() {
  document.querySelector("main").style.display = "none";
  document.querySelector("#chat-box").style.display = "block";
  document.querySelector("#lets-chat").style.visibility = "hidden";
  document.querySelector("#arrow-up").style.display = "none";
}

function closeChat() {
  document.querySelector("main").style.display = "block";
  document.querySelector("#chat-box").style.display = "none";
  document.querySelector("#lets-chat").style.visibility = "visible";
  document.querySelector("#arrow-up").style.display = "block";
}

function inputFocus() {
  document.querySelector("#send-message-icon").style.backgroundColor =
    "#6C655C";
  document.querySelector("#send-message-icon").style.color = "white";
}

function inputBlur() {
  document.querySelector("#send-message-icon").style.backgroundColor = "white";
  document.querySelector("#send-message-icon").style.color = "black";
}

function sendMessage() {
  var inputVal = document.querySelector("#input-text").value;
  document.querySelector("#chat-box-center-inner").innerHTML += inputVal;
  document.querySelector("#chat-box-center-inner").style.backgroundColor =
    "#6C655C";
}
