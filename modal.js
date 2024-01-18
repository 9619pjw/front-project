document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('subscribeModal');
    var btn = document.querySelector('.subscribe-button');
    var closeBtn = document.querySelector('.close-modal');

    btn.onclick = function() {
        modal.style.display = 'block';
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