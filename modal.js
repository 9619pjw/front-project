document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('subscribeModal');
    var btn = document.querySelector('.subscribe-button');
    var closeBtn = document.querySelector('.close-modal');

    var emailInput = document.querySelector('.enter-email-box input[type="email"]');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 이메일 유효성 검증
    btn.onclick = function(event) {
        var email = emailInput.value;

        if(email === '' || !emailPattern.test(email)) {
            alert("이메일 형식이 올바르지 않습니다. 다시 입력해주세요.");
            event.preventDefault();
        } else {
            modal.style.display = 'block';
        }
    }

    // 모달 내부 닫기 버튼 클릭 이벤트
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});