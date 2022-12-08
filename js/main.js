function openNav() {
  document.querySelector("#nav-for-mobil").style.height = "100vh";
  document.querySelector("#closebar").style.opacity = "1";
  document.querySelector("#nav-for-mobil-ul").style.opacity = "1";
}

function closeNav() {
  document.querySelector("#nav-for-mobil").style.height = "0";
  document.querySelector("#closebar").style.opacity = "0";
  document.querySelector("#nav-for-mobil-ul").style.opacity = "0";
}

function openChat() {
  document.querySelector("#chat-box").style.display = "block";
  document.querySelector("#lets-chat").style.visibility = "hidden";
}

function closeChat() {
  document.querySelector("#chat-box").style.display = "none";
  document.querySelector("#lets-chat").style.visibility = "visible";
}
