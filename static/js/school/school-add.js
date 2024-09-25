const schoolButton = document.querySelector(".school__button");
const addModalConfirm = document.getElementById("addModalConfirm");
const addModalMessage = document.getElementById("addModalMessage");
const addModalConfirmButton = document.getElementById("addModalConfirmButton");
const addModalCancelButton = document.getElementById("addModalCancelButton");
const addDoneModalConfirm = document.getElementById("addDoneModalConfirm");
const addDoneModalMessage = document.getElementById("addDoneModalMessage");
const addDoneModalCloseButton = document.getElementById(
  "addDoneModalCloseButton"
);
const addErrorModalConfirm = document.getElementById("addErrorModalConfirm");
const addErrorModalMessage = document.getElementById("addErrorModalMessage");
const addErrorModalCloseButton = document.getElementById(
  "addErrorModalCloseButton"
);
const dropdowns = document.querySelectorAll(".dropdown");

const depth1Container = document.querySelector(
  ".dropdown.depth1 .dropdown-menu"
);
const depth2Container = document.querySelector(
  ".dropdown.depth2 .dropdown-menu"
);
const depth3Container = document.querySelector(
  ".dropdown.depth3 .dropdown-menu"
);

let selectedDepth1 = "";
let selectedDepth2 = "";
let selectedProblemTypes = {};

// depth1 항목 표시 함수
function showDepth1Options() {
  depth1Container.innerHTML = ""; // 초기화
  Object.keys(problemData).forEach((depth1) => {
    const div = document.createElement("div");
    div.textContent = depth1;
    div.addEventListener("click", () => handleDepth1Select(depth1));
    depth1Container.appendChild(div);
  });
}

// depth1 선택 시 depth2 항목 표시 함수
function handleDepth1Select(selected) {
  selectedDepth1 = selected;
  depth2Container.innerHTML = ""; // 초기화
  const depth2Data = Object.keys(problemData[selected]);
  depth2Data.forEach((depth2) => {
    const div = document.createElement("div");
    div.textContent = depth2;
    div.addEventListener("click", () => handleDepth2Select(depth2));
    depth2Container.appendChild(div);
  });
  // depth2Container.parentElement.classList.add("active"); // depth2 표시
  selectedProblemTypes[1] = selected; // depth1 선택된 값 저장
}

// depth2 선택 시 depth3 항목 표시 함수
function handleDepth2Select(selected) {
  selectedDepth2 = selected;
  depth3Container.innerHTML = ""; // 초기화
  const depth3Data = problemData[selectedDepth1][selected];
  depth3Data.forEach((depth3) => {
    const div = document.createElement("div");
    div.textContent = depth3;
    depth3Container.appendChild(div);
  });
  // depth3Container.parentElement.classList.add("active"); // depth3 표시
  selectedProblemTypes[2] = selected; // depth2 선택된 값 저장
}

// 등록 확인 모달 열기 함수
function openAddModal() {
  addModalMessage.innerHTML = "학교별 유형을 신규<br>등록하시겠습니까?";
  addModalConfirm.style.display = "flex";
}

// 등록 확인 모달 닫기 함수
function closeAddModal() {
  addModalConfirm.style.display = "none";
}

// 등록 완료 모달 열기 함수
function openAddDoneModal() {
  addDoneModalMessage.innerHTML = "학교별 유형을 신규 등록 완료했습니다.";
  addDoneModalConfirm.style.display = "flex";
}

// 등록 완료 모달 닫기 함수
function closeAddDoneModal() {
  addDoneModalConfirm.style.display = "none";
}

// 등록 오류 모달 열기 함수
function openAddErrorModal() {
  addErrorModalMessage.innerHTML =
    "모든 정보가 입력되지 않았습니다.<br>모든 정보를 입력해 주세요";
  addErrorModalConfirm.style.display = "flex";
}

// 등록 오류 모달 닫기 함수
function closeAddErrorModal() {
  addErrorModalConfirm.style.display = "none";
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

// 드롭다운 메뉴 항목 선택 함수
function selectDropdownItem(event, selected, dropdownMenu, dropdown, index) {
  event.stopPropagation();
  selected.childNodes[0].nodeValue = this.textContent;
  selectedProblemTypes[index] = this.textContent;
  dropdown.classList.remove("active");
  dropdownMenu.classList.remove("active");
}

// DOMContentLoaded 이벤트 핸들링
document.addEventListener("DOMContentLoaded", () => {
  showDepth1Options(); // depth1 초기 표시

  schoolButton.addEventListener("click", openAddModal);

  addModalConfirmButton.addEventListener("click", () => {
    closeAddModal();
    openAddDoneModal();
  });

  addModalCancelButton.addEventListener("click", closeAddModal);

  addDoneModalCloseButton.addEventListener("click", () => {
    closeAddDoneModal();
    openAddErrorModal();
  });

  addErrorModalCloseButton.addEventListener("click", closeAddErrorModal);

  dropdowns.forEach((dropdown, index) => {
    const selected = dropdown.querySelector(".selected");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    document.addEventListener("click", (event) =>
      toggleDropdown(event, dropdown, dropdownMenu)
    );

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
});
