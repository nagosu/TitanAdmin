const userSearchButton = document.querySelector(".user__search-button");
const searchErrorModalConfirm = document.getElementById(
  "searchErrorModalConfirm"
);
const searchErrorModalMessage = document.getElementById(
  "searchErrorModalMessage"
);
const searchErrorModalCloseButton = document.getElementById(
  "searchErrorModalCloseButton"
);
const userSearchModal = document.getElementById("userSearchModal");
const userSearchModalSaveButton = document.getElementById(
  "userSearchModalSaveButton"
);
const saveModalConfirm = document.getElementById("saveModalConfirm");
const saveModalMessage = document.getElementById("saveModalMessage");
const saveModalConfirmButton = document.getElementById(
  "saveModalConfirmButton"
);
const saveModalCancelButton = document.getElementById("saveModalCancelButton");

// 조회 오류 모달 열기 함수
function openSearchErrorModal() {
  searchErrorModalMessage.innerHTML =
    "해당 사용자 정보를 조회할 수 없습니다.<br>다시 사용자 ID를 입력해주세요.";
  searchErrorModalConfirm.style.display = "flex";
}

// 조회 오류 모달 닫기 함수
function closeSearchErrorModal() {
  searchErrorModalConfirm.style.display = "none";
}

// 이용자 조회 모달 열기 함수
function openUserSearchModal() {
  userSearchModal.style.display = "flex";
}

// 이용자 조회 모달 닫기 함수
function closeUserSearchModal() {
  userSearchModal.style.display = "none";
}

// 저장 모달 열기 함수
function openSaveModal() {
  saveModalMessage.innerHTML = "입력된 이용자 정보로<br>변경하시겠습니까?";
  saveModalConfirm.style.display = "flex";
}

// 저장 모달 닫기 함수
function closeSaveModal() {
  saveModalConfirm.style.display = "none";
}

// DOMContentLoaded 이벤트 핸들링
document.addEventListener("DOMContentLoaded", () => {
  userSearchButton.addEventListener("click", () => {
    openUserSearchModal();
    openSearchErrorModal();
  });

  searchErrorModalCloseButton.addEventListener("click", closeSearchErrorModal);

  userSearchModalSaveButton.addEventListener("click", openSaveModal);

  saveModalConfirmButton.addEventListener("click", () => {
    closeSaveModal();
    closeUserSearchModal();
  });

  saveModalCancelButton.addEventListener("click", closeSaveModal);
});
