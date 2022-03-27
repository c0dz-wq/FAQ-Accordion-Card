const accItem = document.querySelectorAll('.accordion__item')
const cube = document.querySelector('.cube')

accItem.forEach((elm) => elm.addEventListener('click', toggleActiveState))

function toggleActiveState () {
  const currentElm = this.lastElementChild.children[0]
  const currHeader = this.firstElementChild.children[0]
  const currIcon = this.firstElementChild.children[1]

  accItem.forEach(el => {
    const headerElm = el.firstElementChild.children[0]
    const iconElm = el.firstElementChild.children[1]
    const contentElm = el.lastElementChild.children[0]

    if (contentElm.classList.contains('accordion__text--active')) {
      contentElm.classList.remove('accordion__text--active')
    }

    if (headerElm.classList.contains('accordion__header--active')) {
      headerElm.classList.remove('accordion__header--active')
    }

    if (iconElm.classList.contains('arrow__icon--active')) {
      iconElm.classList.remove('arrow__icon--active')
    }
  })

  currentElm.classList.add('accordion__text--active')
  currHeader.classList.add('accordion__header--active')
  currIcon.classList.add('arrow__icon--active')

  cube.classList.add('cube--active')
}
