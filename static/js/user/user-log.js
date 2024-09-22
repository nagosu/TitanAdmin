const downloadSearchButton = document.getElementById("downloadSearchButton");
const searchErrorModalConfirm = document.getElementById(
  "searchErrorModalConfirm"
);
const searchErrorModalMessage = document.getElementById(
  "searchErrorModalMessage"
);
const searchErrorModalCloseButton = document.getElementById(
  "searchErrorModalCloseButton"
);

// 조회 오류 모달 열기 함수
function openSearchErrorModal() {
  searchErrorModalMessage.innerHTML = "년/월을 설정해 주세요.";
  searchErrorModalConfirm.style.display = "flex";
}

// 조회 오류 모달 닫기 함수
function closeSearchErrorModal() {
  searchErrorModalConfirm.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  downloadSearchButton.addEventListener("click", openSearchErrorModal);

  searchErrorModalCloseButton.addEventListener("click", closeSearchErrorModal);
});
