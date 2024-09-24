const categorySelectButtons = document.querySelectorAll(
  ".category__select-button"
);
const depthSelectTitles = document.querySelectorAll(
  ".category__depth-select-title"
);
const editButton = document.querySelector(".category__edit-button");
const depthSelectTitleWrappers = document.querySelectorAll(
  ".category__depth-select-title-wrapper"
);
const deleteModalConfirm = document.getElementById("deleteModalConfirm");
const deleteModalMessage = document.getElementById("deleteModalMessage");
const deleteModalConfirmButton = document.getElementById(
  "deleteModalConfirmButton"
);
const deleteModalCancelButton = document.getElementById(
  "deleteModalCancelButton"
);
const blankModalConfirm = document.getElementById("blankModalConfirm");
const blankModalCloseButton = document.getElementById("blankModalCloseButton");
const blankModalMessage = document.getElementById("blankModalMessage");
const categoryDepthAddButtons = document.querySelectorAll(
  ".category__depth-add-button"
);
const categoryDepthSelect = document.querySelector(".category__depth-select");

// 카테고리 버튼 클릭 시 active 클래스를 변경하는 함수
function handleCategorySelect() {
  categorySelectButtons.forEach((button) => button.classList.remove("active"));

  this.classList.add("active");
}

// depth 카테고리 active 클래스 변경 함수
function handleDepthSelect() {
  const depthSelectContainer = this.closest(".category__depth-select");
  const titles = depthSelectContainer.querySelectorAll(
    ".category__depth-select-title"
  );

  titles.forEach((title) => title.classList.remove("active"));
  this.classList.add("active");
}

// 수정/저장 버튼 토글 함수
function toggleEditButtonText() {
  if (editButton.textContent === "수정") {
    editButton.textContent = "저장";
    addDeleteIcons();
    attachDeleteIconEvents();
    showDepthAddButtons();
    makeTitlesEditable(true);
  } else {
    editButton.textContent = "수정";
    removeDeleteIcons();
    hideDepthAddButtons();
    makeTitlesEditable(false);
    openBlankModal();
  }
}

// "항목 추가" 버튼 표시 함수
function showDepthAddButtons() {
  categoryDepthAddButtons.forEach((button) => {
    button.style.display = "flex";
  });
  categoryDepthSelect.style.marginBottom = "80px";
}

// "항목 추가" 버튼 숨김 함수
function hideDepthAddButtons() {
  categoryDepthAddButtons.forEach((button) => {
    button.style.display = "none";
  });
  categoryDepthSelect.style.marginBottom = "0";
}

// 삭제 이미지 추가하는 함수
function addDeleteIcons() {
  depthSelectTitleWrappers.forEach((wrapper) => {
    if (!wrapper.querySelector("img")) {
      const img = document.createElement("img");
      img.src = "../../static/images/icon/svg/Remove.svg";
      img.alt = "삭제";
      wrapper.appendChild(img);
    }
  });
}

// 삭제 이미지 제거하는 함수
function removeDeleteIcons() {
  depthSelectTitleWrappers.forEach((wrapper) => {
    const img = wrapper.querySelector("img");
    if (img) {
      wrapper.removeChild(img);
    }
  });
}

// 삭제 아이콘 클릭 이벤트 리스너 추가 함수
function attachDeleteIconEvents() {
  const deleteButtons = document.querySelectorAll(
    ".category__depth-select-title-wrapper img"
  );

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openDeleteConfirmModal();
    });
  });
}

// 삭제 확인 모달 여는 함수
function openDeleteConfirmModal() {
  deleteModalMessage.innerHTML = "해당 카테고리를<br>정말로 삭제하시겠습니까?";
  deleteModalConfirm.style.display = "flex";
}

// 삭제 확인 모달 닫는 함수
function closeDeleteConfirmModal() {
  deleteModalConfirm.style.display = "none";
}

// 빈칸 오류 모달 여는 함수
function openBlankModal() {
  blankModalMessage.innerHTML =
    "카테고리명에 빈칸이 확인됩니다.<br>빈칸을 입력해 주세요.";
  blankModalConfirm.style.display = "flex";
}

// 빈칸 오류 모달 닫는 함수
function closeBlankModal() {
  blankModalConfirm.style.display = "none";
}

// depth 카테고리 텍스트 수정 가능/불가 설정하는 함수
function makeTitlesEditable(isEditable) {
  depthSelectTitles.forEach((title) => {
    title.contentEditable = isEditable;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  categorySelectButtons.forEach((button) => {
    button.addEventListener("click", handleCategorySelect);
  });

  depthSelectTitles.forEach((title) => {
    title.addEventListener("click", handleDepthSelect);
  });

  editButton.addEventListener("click", toggleEditButtonText);

  deleteModalCancelButton.addEventListener("click", closeDeleteConfirmModal);

  deleteModalConfirmButton.addEventListener("click", closeDeleteConfirmModal);

  blankModalCloseButton.addEventListener("click", closeBlankModal);
});
