const btnNext = document.querySelector('.next')
const btnBack = document.querySelector('.back')
const container = document.querySelector('.container')
const list = container.querySelector('.list')
const thumb = container.querySelector('.thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type) {
  const listItems = container.querySelectorAll('.list .list-item')
  const thumbItems = container.querySelectorAll('.thumb .thumb-item')

  if (type === 'next') {
    list.appendChild(listItems[0])
    thumb.appendChild(thumbItems[0])
    container.classList.add('next')
  } else {
    list.prepend(listItems[listItems.length - 1])
    thumb.prepend(thumbItems[thumbItems.length - 1])
    container.classList.add('back')
  }

  setTimeout(() => {
    container.classList.remove('next', 'back')
  }, 3000)
}
