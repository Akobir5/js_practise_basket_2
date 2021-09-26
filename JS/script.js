let block = document.querySelector('.block');
let shopBox = document.querySelector('.thing_Box');
let openBtn = document.querySelector('.open_Btn')


openBtn.addEventListener('click', () => {
  closeBtn.classList.add('closeBtn')
  basketBox.classList.add('basket_box_N');
  shopBox.style.display = 'none'
  shopBox.style.transition = '0.5s ease-in-out'
  basketBox.style.display = 'block'
  basketBox.style.transition = '0.5s ease-in-out'
  console.log(basketBox)
})

let closeBtn = document.createElement('button');

closeBtn.addEventListener('click', () => {
  basketBox.style.display = 'none',
  shopBox.style.display = 'block',
  shopBox.style.transition = '0.5s ease-in-out'
  basketBox.style.transition = '0.5s ease-in-out'

})

let basketBox = document.createElement('div');
basketBox.appendChild(closeBtn)
block.appendChild(basketBox)

