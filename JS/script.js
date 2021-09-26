let openBtn = document.querySelector('.open_Btn');


openBtn.addEventListener('click', () => {
  
  basketBox.classList.add('basket_box_N');
  basketBox.style.display = 'block'
  basketBox.style.transition = '0.5s ease-in-out'
  console.log(basketBox)
})

let basketBox = document.createElement('div');

