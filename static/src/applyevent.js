const name = document.getElementById('name');
const major = document.getElementById('major');
const grade = document.getElementById('grade');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const personal = document.getElementById('personal');
// 페이지슬라이더부분
// 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".questionbox");
let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".prevbtn");
const nextBtn = document.querySelector(".nextbtn");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
const slideItems = document.querySelectorAll(".post");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
    if( name.value == "" || major.value == "" || grade.value =="" ||
    phone.value=="" || email.value == "" ) {
    } else if (personal.checked == false) {
    } else {
        // 이후 버튼 누를 경우 현재 슬라이드를 변경
        currSlide++;
        // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
        if (currSlide <= maxSlide) {
            // 슬라이드를 이동시키기 위한 offset 계산
            const offset = slideWidth * (currSlide - 1);
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
            });
        } else {
            currSlide--;
        }
    } 
});

prevBtn.addEventListener("click", () => {
    // 이전 버튼 누를 경우 현재 슬라이드를 변경
    currSlide--;
    // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
    if (currSlide > 0) {
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset = slideWidth * (currSlide - 1);
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
    } else {
        currSlide++;
    }
});

document.querySelector('.prevbtn').addEventListener('click', togglePrevBtn());
document.querySelector('.nextbtn').addEventListener('click', toggleNextBtn());

//버튼 show/hidden + 표시줄 show/hidden
function toggleNextBtn() {
    console.log("되긴하지??");
    //버튼선택
    const prev = document.getElementsByClassName('prevbtn');
    const next = document.getElementsByClassName('nextbtn');
    const save = document.getElementsByClassName('savebtn');
    const sub = document.getElementsByClassName('submitbtn');
    const two = document.getElementsByClassName('two');
    const three = document.getElementsByClassName('three');
    const four = document.getElementsByClassName('four');
    const box2 = document.getElementsByClassName('box2');
    const box3 = document.getElementsByClassName('box3');
    const box4 = document.getElementsByClassName('box4');

    if (currSlide == 1) {
        if( name.value == "" || major.value == "" || grade.value =="" ||
        phone.value=="" || email.value == "" ) {
            alert("필수 입력란이 비어있습니다. 확인해주세요.")
            console.log(currSlide);
        } else if (personal.checked == false) {
            alert("개인정보수집에 동의해주세요.")
        } else {
            prev[0].style.display = 'flex';
            save[0].style.display = 'none';
            two[0].style.opacity = '1';
            box2[0].style.opacity = '1';
        }
    } else if (currSlide == 2) {
        console.log(currSlide);
        save[0].style.display = 'none';
        prev[0].style.display = 'flex';
        two[0].style.opacity = '1';
        three[0].style.opacity = '1';
        box2[0].style.opacity = '1';
        box3[0].style.opacity = '1';
    } else if (currSlide == 3) {
        console.log(currSlide);
        prev[0].style.display = 'flex';
        save[0].style.display = 'flex';
        sub[0].style.display = 'flex';
        next[0].style.display = 'none';
        two[0].style.opacity = '1';
        three[0].style.opacity = '1';
        four[0].style.opacity = '1';
        box2[0].style.opacity = '1';
        box3[0].style.opacity = '1';
        box4[0].style.opacity = '1';
    }
}
function togglePrevBtn() {
    //버튼선택
    const prev = document.getElementsByClassName('prevbtn');
    const next = document.getElementsByClassName('nextbtn');
    const save = document.getElementsByClassName('savebtn');
    const sub = document.getElementsByClassName('submitbtn');
    const two = document.getElementsByClassName('two');
    const three = document.getElementsByClassName('three');
    const four = document.getElementsByClassName('four');
    const box2 = document.getElementsByClassName('box2');
    const box3 = document.getElementsByClassName('box3');
    const box4 = document.getElementsByClassName('box4');

    if (currSlide == 2) {
        prev[0].style.display = 'none';
        save[0].style.display = 'none';
        two[0].style.opacity = '0';
        box2[0].style.opacity = '0';
    } else if (currSlide == 3) {
        save[0].style.display = 'none';
        prev[0].style.display = 'flex';
        two[0].style.opacity = '1';
        three[0].style.opacity = '0';
        box2[0].style.opacity = '1';
        box3[0].style.opacity = '0';
    } else if (currSlide == 4) {
        save[0].style.display = 'none';
        prev[0].style.display = 'flex';
        next[0].style.display = 'flex';
        sub[0].style.display = 'none';
        two[0].style.opacity = '1';
        three[0].style.opacity = '1';
        four[0].style.opacity = '0';
        box2[0].style.opacity = '1';
        box3[0].style.opacity = '1';
        box4[0].style.opacity = '0';
    }
}

//글자수제한
$('#question1').keyup(function(e) {
    var content = $(this).val(); //입력한것
    //글자수세기
    if (content.length == 0 || content == ''){
        $('.textC1').text('0');
    } else {
        $('.textC1').text(content.length);
    }

    //글자수제한
    if(content.length > 500) {
        $(this).val($(this).val().substring(0,500));
        alert('글자수는 500자까지 입력가능합니다.');
    }
})
$('#question2').keyup(function(e) {
    var content = $(this).val(); //입력한것
    //글자수세기
    if (content.length == 0 || content == ''){
        $('.textC2').text('0');
    } else {
        $('.textC2').text(content.length);
    }

    //글자수제한
    if(content.length > 300) {
        $(this).val($(this).val().substring(0,300));
        alert('글자수는 300자까지 입력가능합니다.');
    }
})
$('#question3').keyup(function(e) {
    var content = $(this).val(); //입력한것
    //글자수세기
    if (content.length == 0 || content == ''){
        $('.textC3').text('0');
    } else {
        $('.textC3').text(content.length);
    }

    //글자수제한
    if(content.length > 500) {
        $(this).val($(this).val().substring(0,500));
        alert('글자수는 500자까지 입력가능합니다.');
    }
})
$('#question4').keyup(function(e) {
    var content = $(this).val(); //입력한것
    //글자수세기
    if (content.length == 0 || content == ''){
        $('.textC4').text('0');
    } else {
        $('.textC4').text(content.length);
    }

    //글자수제한
    if(content.length > 500) {
        $(this).val($(this).val().substring(0,500));
        alert('글자수는 500자까지 입력가능합니다.');
    }
})