
const imageList = document.querySelector(".image-list");
let pageToFetch = 1;

// 초기 이미지를 출력
function loadInitialImages() {
    for (let i = 1; i <= 6; i++) {
        imageList.innerHTML += `<li><img src='img/img_${i}.png' alt=''></li>`;
    }
}


async function fetchImages(pageNum) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=6`);

        if (!response.ok) {throw new Error('error')};

        const datas = await response.json();
        console.log(datas);

        makeImageList(datas);

    } catch (e) {
        console.error('error', e);
    }
}

function makeImageList(datas){
    datas.forEach((item)=>{
        imageList.innerHTML += `<li><img src='${item.download_url}' alt=''></li>`;
    });
}
// 초기 이미지 6개 출력
loadInitialImages();


let isScrollEnabled = false;

// 무한 스크롤 함수
const infinityScroll = () => {
    let scrollTotal = document.documentElement.scrollHeight;
    let scrollCurrent = window.scrollY + window.innerHeight;

    // 스크롤이 페이지 바닥에 거의 도달했는지 확인
    if (scrollCurrent >= scrollTotal - 200 && isScrollEnabled) {
        fetchImages(pageToFetch++);
    }
}

const throttling = (callback, limit) => {
    let inThrottle;
    return () => {
        if (!inThrottle) {
            callback();
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
};

const showMoreBtn = document.querySelector(".show-more");

// "더 보기" 버튼을 클릭하면 무한 스크롤을 종료하거나 시작하는 기능
showMoreBtn.addEventListener('click', () => {
    isScrollEnabled = !isScrollEnabled;
    showMoreBtn.textContent = isScrollEnabled ? 'Stop Scroll' : 'Show More';
});

// 무한 스크롤 기능을 시작하는 이벤트 리스너 추가
window.addEventListener('scroll', throttling(infinityScroll, 300));


// 버튼을 누를 때마다 6개씩 불러오는 방식
// const showMoreBtn = document.querySelector(".show-more");
// showMoreBtn.addEventListener('click', () => {
//     fetchImages(pageToFetch += 1);
// });