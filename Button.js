document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    var scrollTopDefaultImg = document.querySelector('.scroll-top-default');
    var scrollTopHoverImg = document.querySelector('.scroll-top-hover');
    var homeBtn = document.querySelector('nav ul li:nth-child(1) a');
    var aboutBtn = document.querySelector('nav ul li:nth-child(2) a');
    var supportBtn = document.querySelector('nav ul li:nth-child(3) a');

    // 'Home' 버튼 클릭 시 <div class="text-content">로 스크롤
    homeBtn.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 동작인 페이지 이동을 막음
        var target = document.querySelector('.text-content');
        window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    });

    // 'About' 버튼 클릭 시 <div class="text-center">로 스크롤
    aboutBtn.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 동작인 페이지 이동을 막음
        var target = document.querySelector('.text-center');
        window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    });

    // 'Support' 버튼 클릭 시 <div class="text-position">로 스크롤
    supportBtn.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 동작인 페이지 이동을 막음
        var target = document.querySelector('.text-position');
        window.scrollTo({top: target.offsetTop, behavior: 'smooth'});
    });


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