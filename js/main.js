const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active'); 
})
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active'); 
})

// Ambil elemen-elemen yang diperlukan
const toggleCartBtn = document.querySelector('.toggle-cart');
const cartContent = document.querySelector('.cart-content');

// Tambahkan event listener untuk tombol toggle
toggleCartBtn.addEventListener('click', function () {
    cartContent.classList.toggle('active'); // Tambahkan atau hilangkan kelas 'show'
});
// toggleCartBtn.addEventListener('click', function () {
//     cartContent.classList.remove('active'); // Tambahkan atau hilangkan kelas 'show'
// });
