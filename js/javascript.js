const share = document.querySelector('.social_media_share');
const btn = document.querySelector('.social_media_share img');


btn.addEventListener('click', () => {
    share.classList.toggle('active');
});

// 2o jeito
// function openShare() {
//     share.classList.toggle('active');
// }
// btn.addEventListener('click', openShare);