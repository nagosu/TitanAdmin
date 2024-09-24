const problemDepthSelectTitleWrappers = document.querySelectorAll(
  ".problem__depth-select-title-wrapper"
);
const problemDepthSelectTitles = document.querySelectorAll(
  ".problem__depth-select-title"
);
const problemEditButton = document.querySelector(".problem__edit-button");
const problemDepthAddButtons = document.querySelectorAll(
  ".problem__depth-add-button"
);
const problemDepthSelect = document.querySelector(".problem__depth-select");
const deleteModalConfirm = document.getElementById("deleteModalConfirm");
const deleteModalMessage = document.getElementById("deleteModalMessage");
const deleteModalConfirmButton = document.getElementById(
  "deleteModalConfirmButton"
);
const deleteModalCancelButton = document.getElementById(
  "deleteModalCancelButton"
);

// 삭제 확인 모달 여는 함수
function openDeleteConfirmModal() {
  deleteModalMessage.innerHTML = "해당 카테고리를<br>정말로 삭제하시겠습니까?";
  deleteModalConfirm.style.display = "flex";
}

// 삭제 확인 모달 닫는 함수
function closeDeleteConfirmModal() {
  deleteModalConfirm.style.display = "none";
}

// depth 카테고리 active 클래스 변경 함수
function handleDepthSelect() {
  const problemDepthSelectContainer = this.closest(".problem__depth-select");
  const titles = problemDepthSelectContainer.querySelectorAll(
    ".category__depth-select-title"
  );

  titles.forEach((title) => title.classList.remove("active"));
  this.classList.add("active");
}

// 수정/저장 버튼 토글 함수
function toggleEditButtonText() {
  if (problemEditButton.textContent === "수정") {
    problemEditButton.textContent = "저장";
    addDeleteIcons();
    attachDeleteIconEvents();
    showDepthAddButtons();
    makeTitlesEditable(true);
  } else {
    problemEditButton.textContent = "수정";
    removeDeleteIcons();
    hideDepthAddButtons();
    makeTitlesEditable(false);
  }
}

// "항목 추가" 버튼 표시 함수
function showDepthAddButtons() {
  problemDepthAddButtons.forEach((button) => {
    button.style.display = "flex";
  });
  problemDepthSelect.style.marginBottom = "80px";
}

// "항목 추가" 버튼 숨김 함수
function hideDepthAddButtons() {
  problemDepthAddButtons.forEach((button) => {
    button.style.display = "none";
  });
  problemDepthSelect.style.marginBottom = "0";
}

// 삭제 이미지 추가하는 함수
function addDeleteIcons() {
  problemDepthSelectTitleWrappers.forEach((wrapper) => {
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
  problemDepthSelectTitleWrappers.forEach((wrapper) => {
    const img = wrapper.querySelector("img");
    if (img) {
      wrapper.removeChild(img);
    }
  });
}

// 삭제 아이콘 클릭 이벤트 리스너 추가 함수
function attachDeleteIconEvents() {
  const deleteButtons = document.querySelectorAll(
    ".problem__depth-select-title-wrapper img"
  );

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openDeleteConfirmModal();
    });
  });
}

// depth 카테고리 텍스트 수정 가능/불가 설정하는 함수
function makeTitlesEditable(isEditable) {
  problemDepthSelectTitles.forEach((title) => {
    title.contentEditable = isEditable;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  problemDepthSelectTitles.forEach((title) => {
    title.addEventListener("click", handleDepthSelect);
  });

  problemEditButton.addEventListener("click", toggleEditButtonText);

  deleteModalConfirmButton.addEventListener("click", closeDeleteConfirmModal);

  deleteModalCancelButton.addEventListener("click", closeDeleteConfirmModal);
});
