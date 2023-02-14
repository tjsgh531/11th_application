const form = document.querySelector(".post"),
    inputName = form.querySelector("#name"),
    inputMajor = form.querySelector("#major"),
    selectGrade = form.querySelector("#grade"),
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
const GRADE_DATA = "grade";
const PHONE_DATA = "phone";
const EMAIL_DATA = "email";
const GIT_DATA = "git";
const Q1_DATA = "q1";
const Q2_DATA = "q2";
const Q3_DATA = "q3";
const Q4_DATA = "q4";
const Q5_DATA = "q5";

//input tag 입력시 localstorage 저장
localStorage.setItem(NAME_DATA, inputName.value);
localStorage.setItem(MAJOR_DATA, inputMajor.value);