const open = document.querySelector('.open')
const close = document.querySelector('.close')

open.addEventListener('click', () => {
    close.classList.add('active')
    open.classList.remove('active')
  })

close.addEventListener('click', () => {
    open.classList.add('active')
    close.classList.remove('active')
  })
