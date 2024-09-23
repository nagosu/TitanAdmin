const schoolButtonSave = document.querySelector(".school__button.save");
const schoolButtonDelete = document.querySelector(".school__button.delete");
const selectErrorModalConfirm = document.getElementById(
  "selectErrorModalConfirm"
);
const selectErrorModalMessage = document.getElementById(
  "selectErrorModalMessage"
);
const selectErrorModalCloseButton = document.getElementById(
  "selectErrorModalCloseButton"
);
const saveModalConfirm = document.getElementById("saveModalConfirm");
const saveModalMessage = document.getElementById("saveModalMessage");
const saveModalCloseButton = document.getElementById("saveModalCloseButton");
const deleteErrorModalConfirm = document.getElementById(
  "deleteErrorModalConfirm"
);
const deleteErrorModalMessage = document.getElementById(
  "deleteErrorModalMessage"
);
const deleteErrorModalCloseButton = document.getElementById(
  "deleteErrorModalCloseButton"
);
const deleteModalConfirm = document.getElementById("deleteModalConfirm");
const deleteModalMessage = document.getElementById("deleteModalMessage");
const deleteModalConfirmButton = document.getElementById(
  "deleteModalConfirmButton"
);
const deleteModalCancelButton = document.getElementById(
  "deleteModalCancelButton"
);
const inputContainer = document.querySelector(".input__container");
const inputDropdown = document.querySelector(".input__dropdown");
const dropdowns = document.querySelectorAll(".dropdown");

let selectedProblemTypes = {};

// 선택 오류 모달 열기 함수
function openSelectErrorModal() {
  selectErrorModalMessage.innerHTML = "데이터를 변경할 학교를 선택해 주세요";
  selectErrorModalConfirm.style.display = "flex";
}

// 선택 오류 모달 닫기 함수
function closeSelectErrorModal() {
  selectErrorModalConfirm.style.display = "none";
}

// 저장 모달 열기 함수
function openSaveModal() {
  saveModalMessage.innerHTML = "데이터 수정 내용이 저장되었습니다.";
  saveModalConfirm.style.display = "flex";
}

// 저장 모달 닫기 함수
function closeSaveModal() {
  saveModalConfirm.style.display = "none";
}

// 삭제 모달 열기 함수
function openDeleteModal() {
  deleteModalMessage.innerHTML = "학교 유형을<br>정말로 삭제하시겠습니까?";
  deleteModalConfirm.style.display = "flex";
}

// 삭제 모달 닫기 함수
function closeDeleteModal() {
  deleteModalConfirm.style.display = "none";
}

// 삭제 오류 모달 열기 함수
function openDeleteErrorModal() {
  deleteErrorModalMessage.innerHTML = "삭제할 학교를 선택해 주세요";
  deleteErrorModalConfirm.style.display = "flex";
}

// 삭제 오류 모달 닫기 함수
function closeDeleteErrorModal() {
  deleteErrorModalConfirm.style.display = "none";
}

// 드롭다운 활성화/비활성화 처리 함수
function toggleDropdown(event, dropdown, dropdownMenu) {
  if (dropdown.contains(event.target)) {
    dropdown.classList.toggle("active");
    dropdownMenu.classList.toggle("active");
  } else {
    dropdown.classList.remove("active");
    dropdownMenu.classList.remove("active");
  }
}

// 드롭다운 메뉴 항목 선택 처리 함수
function selectDropdownItem(event, selected, dropdownMenu, dropdown, index) {
  event.stopPropagation();
  selected.childNodes[0].nodeValue = this.textContent;
  selectedProblemTypes[index] = this.textContent;
  dropdown.classList.remove("active");
  dropdownMenu.classList.remove("active");
}

// input 드롭다운 활성화/비활성화 처리 함수
function toggleInputDropdown(event, inputContainer, dropdown) {
  if (inputContainer.contains(event.target)) {
    dropdown.classList.add("active");
  } else {
    dropdown.classList.remove("active");
  }
}

// DOMContentLoaded 이벤트 핸들링
document.addEventListener("DOMContentLoaded", () => {
  schoolButtonSave.addEventListener("click", openSelectErrorModal);

  selectErrorModalCloseButton.addEventListener("click", () => {
    closeSelectErrorModal();
    openSaveModal();
  });

  schoolButtonDelete.addEventListener("click", openDeleteErrorModal);

  deleteErrorModalCloseButton.addEventListener("click", () => {
    closeDeleteErrorModal();
    openDeleteModal();
  });

  saveModalCloseButton.addEventListener("click", closeSaveModal);

  deleteModalCancelButton.addEventListener("click", closeDeleteModal);

  deleteModalConfirmButton.addEventListener("click", closeDeleteModal);

  dropdowns.forEach((dropdown, index) => {
    const selected = dropdown.querySelector(".selected");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    // 드롭다운 클릭시 활성화/비활성화 처리
    document.addEventListener("click", (event) =>
      toggleDropdown(event, dropdown, dropdownMenu)
    );

    // 각 드롭다운 항목을 클릭할 때 선택 항목 처리
    dropdownMenu.querySelectorAll("div").forEach((item) => {
      item.addEventListener("click", function (event) {
        selectDropdownItem.call(
          this,
          event,
          selected,
          dropdownMenu,
          dropdown,
          index
        );
      });
    });
  });

  document.addEventListener("click", (event) =>
    toggleInputDropdown(event, inputContainer, inputDropdown)
  );
});
