const loginButton = document.getElementById("loginButton");
const loginModalCloseButton = document.getElementById("loginModalCloseButton");
const loginModalConfirm = document.getElementById("loginModalConfirm");
const loginModalMessage = document.getElementById("loginModalMessage");

function openLoginErrorModal() {
  loginModalConfirm.style.display = "flex";
}

function closeLoginErrorModal() {
  loginModalConfirm.style.display = "none";
}

function setLoginErrorModalMessage() {
  loginModalMessage.innerHTML =
    "아이디 or 패스워드가 맞지 않습니다.<br>다시 시도해주세요.";
}

document.addEventListener("DOMContentLoaded", () => {
  loginButton.addEventListener("click", () => {
    setLoginErrorModalMessage();
    openLoginErrorModal();
  });

  loginModalCloseButton.addEventListener("click", () => {
    closeLoginErrorModal();
  });
});
