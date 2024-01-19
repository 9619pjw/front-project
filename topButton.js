document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    var scrollTopDefaultImg = document.querySelector('.scroll-top-default');
    var scrollTopHoverImg = document.querySelector('.scroll-top-hover');

    // 마우스를 버튼 위에 올렸을 때 이미지 변경
    scrollToTopBtn.addEventListener('mouseover', function() {
        scrollTopDefaultImg.style.display = 'none';
        scrollTopHoverImg.style.display = 'block';
    });

    // 마우스를 버튼에서 내렸을 때 이미지 변경
    scrollToTopBtn.addEventListener('mouseout', function() {
        scrollTopDefaultImg.style.display = 'block';
        scrollTopHoverImg.style.display = 'none';
    });

    // 버튼을 클릭했을 때 페이지 맨 위로 스크롤
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});