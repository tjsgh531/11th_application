const form = document.querySelector(".post"),
    inputName = form.querySelector("#name"),
    inputMajor = form.querySelector("#major"),
    inputPhone = form.querySelector("#phone"),
    inputEmail = form.querySelector("#email"),
    inputGit = form.querySelector("#git"),
    textareaQ1 = document.querySelector("#question1"),
    textareaQ2 = document.querySelector("#question2"),
    textareaQ3 = document.querySelector("#question3"),
    textareaQ4 = document.querySelector("#question4"),
    textareaQ5 = document.querySelector("#question5");

const NAME_DATA = "name";
const MAJOR_DATA = "major";
const PHONE_DATA = "phone";
const EMAIL_DATA = "email";
const GIT_DATA = "git";
const Q1_DATA = "q1";
const Q2_DATA = "q2";
const Q3_DATA = "q3";
const Q4_DATA = "q4";
const Q5_DATA = "q5";

//임시저장버튼 누르면 alert창
function toggleSaveBtn() {
    const saveBtn = document.getElementsByClassName('savebtn');

    if(confirm("작성하신 지원서를 임시저장하시겠습니까?")) {
        alert("저장이 완료되었습니다.\n제출하기 버튼을 누르셔야 지원 신청이 완료됩니다.")
    }

}

//input tag 입력시 localstorage 저장
inputName.addEventListener("keydown", () => {
    console.log(inputName.value);
    localStorage.setItem(NAME_DATA, inputName.value);
})
inputMajor.addEventListener("keydown", () => {
    console.log(inputMajor.value);
    localStorage.setItem(MAJOR_DATA, inputMajor.value);
})
inputPhone.addEventListener("keydown", () => {
    console.log(inputPhone.value);
    localStorage.setItem(PHONE_DATA, inputPhone.value);
})
inputEmail.addEventListener("keydown", () => {
    console.log(inputEmail.value);
    localStorage.setItem(EMAIL_DATA, inputEmail.value);
})
inputGit.addEventListener("keydown", () => {
    console.log(inputGit.value);
    localStorage.setItem(GIT_DATA, inputGit.value);
})
textareaQ1.addEventListener("keydown", () => {
    console.log(textareaQ1.value);
    localStorage.setItem(Q1_DATA, textareaQ1.value);
})
textareaQ2.addEventListener("keydown", () => {
    console.log(textareaQ2.value);
    localStorage.setItem(Q2_DATA, textareaQ2.value);
})
textareaQ3.addEventListener("keydown", () => {
    console.log(textareaQ3.value);
    localStorage.setItem(Q3_DATA, textareaQ3.value);
})
textareaQ4.addEventListener("keydown", () => {
    console.log(textareaQ4.value);
    localStorage.setItem(Q4_DATA, textareaQ4.value);
})
textareaQ5.addEventListener("keydown", () => {
    console.log(textareaQ5.value);
    localStorage.setItem(Q5_DATA, textareaQ5.value);
})

//온로드
window.onload = () => {
    if(localStorage.getItem(NAME_DATA)){
        if (confirm("저장한 지원서를 불러오시겠습니까?")){
            
            inputName.innerText = localStorage.getItem(NAME_DATA);
            inputMajor.innerText = localStorage.getItem(MAJOR_DATA);
            inputPhone.innerText = localStorage.getItem(PHONE_DATA);
            inputEmail.innerText = localStorage.getItem(EMAIL_DATA);
            inputGit.innerText = localStorage.getItem(GIT_DATA);
            textareaQ1.innerText = localStorage.getItem(Q1_DATA);
            textareaQ2.innerText = localStorage.getItem(Q2_DATA);
            textareaQ3.innerText = localStorage.getItem(Q3_DATA);
            textareaQ4.innerText = localStorage.getItem(Q4_DATA);
            textareaQ5.innerText = localStorage.getItem(Q5_DATA);
        } else {
            localStorage.removeItem(NAME_DATA);
            localStorage.removeItem(MAJOR_DATA);
            localStorage.removeItem(PHONE_DATA);
            localStorage.removeItem(EMAIL_DATA);
            localStorage.removeItem(GIT_DATA);
            localStorage.removeItem(Q1_DATA);
            localStorage.removeItem(Q2_DATA);
            localStorage.removeItem(Q3_DATA);
            localStorage.removeItem(Q4_DATA);
            localStorage.getremoveItemItem(Q5_DATA);
        } 
    }
}
