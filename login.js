// HTML 요소 불러오기
const inputs = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");

// 사용자 ID, PW 데이터 입력 시 적용 함수
function handleInput() {
    const idValue = document.getElementById("id").value;
    const pwValue = document.getElementById("pw").value;
    
    const isValidId = checkValue(idValue);
    const isValidPw = checkValue(pwValue);

    if (isValidId && isValidPw) {
        handleBtn(true);
    } else {
        handleBtn(false);
    }
}

// 사용자가 입력한 ID, PW 값 조건 통과 여부 확인 >>> 유효성 검사
function checkValue(value) {
    if (value.length > 0) {
        return true;
    } else {
        return false;
    }
}

// 사용자 입력값에 따른 버튼 활성화/비활성화
function handleBtn(btnValid) {
    if (btnValid === true) {
        loginBtn.disabled = false;
        loginBtn.style.opacity = 1;
        loginBtn.style.cursor = "pointer";
        if (window.event.keyCode === 13) {
            success();
        }
    } else {
        loginBtn.disabled = true;
        loginBtn.style.opacity = 0.5;
        loginBtn.style.cursor = "default";
    }
}

// 로그인 성공시 실행 함수
function success() {
    alert("로그인에 성공하였습니다!");
}

// 요소에 이벤트 적용
// init 함수 정의
function init() {
    inputs.addEventListener("input", handleInput);
    inputs.addEventListener("keyup", handleInput);
    loginBtn.addEventListener("click", success);
}

// init 함수 실행
init();