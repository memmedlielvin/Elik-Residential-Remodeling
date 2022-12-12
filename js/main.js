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
}

function closeChat() {
  document.querySelector("main").style.display = "block";
  document.querySelector("#chat-box").style.display = "none";
  document.querySelector("#lets-chat").style.visibility = "visible";
}
