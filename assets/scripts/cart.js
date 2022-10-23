function cartFunctional() {
  const cartModal = document.querySelector('.cart-modal')
  const cartModalBody = cartModal.querySelector('.cart-modal__body')
  const openCartButton = document.querySelector('.cart')
  const trashOrderButtons = document.querySelectorAll('.order-trash')
  const closeCartModalButton = cartModal
    .querySelector('.cart-modal__header')
    .querySelector('img')
  const continuePurchasesButton = cartModal.querySelector('.continue-purchases')
  const cartDropdown = cartModal.querySelector('.dropdown')
  const dropdownBody = cartDropdown.querySelector('.dropdown__body')
  const dropdownArrow = cartModal.querySelector('.dropdown__arrow')
  let stateCart = false
  let stateDropdown = false

  function changeStateDropdown(state) {
    if (!state) {
      dropdownBody.style.display = 'flex'
      dropdownArrow.style.transform = `rotate(-180deg)`
      stateDropdown = true
    } else {
      dropdownBody.style.display = 'none'
      dropdownArrow.style.transform = `rotate(0deg)`
      stateDropdown = false
    }
  }

  cartDropdown.addEventListener('click', () =>
    changeStateDropdown(stateDropdown)
  )
  trashOrderButtons.forEach((el) => {
    el.addEventListener('click', (e) => {
      const order = e.target.closest('.order')
      order.parentNode.removeChild(order)
      if (checkOrdersInCart() == 0) {
        cartModalBody.innerHTML = `<div class="no-orders-yet">
        <img src="./assets/images/pictures/cart.png" alt="">
        <h4>
          Ваша корзина пустая
        </h4>
        <p>
          Добавляйте товары, которые понравились.
        </p>
      </div>`
      }
    })
  })

  continuePurchasesButton.addEventListener('click', () =>
    changeStateCart(stateCart)
  )

  closeCartModalButton.addEventListener('click', () =>
    changeStateCart(stateCart)
  )

  overlay.addEventListener('click', () => changeStateCart(stateCart))

  function checkOrdersInCart() {
    return cartModal.querySelectorAll('.order').length
  }

  function changeStateCart(state) {
    if (!state) {
      cartModal.style.opacity = 1
      cartModal.style.pointerEvents = 'all'
      stateCart = true
      overlay.style.background = `rgba(0,0,0,.5)`
      overlay.style.pointerEvents = 'all'
    } else {
      cartModal.style.opacity = 0
      cartModal.style.pointerEvents = 'none'
      stateCart = false
      overlay.style.background = `rgba(0,0,0,0)`
      overlay.style.pointerEvents = 'none'
    }
  }

  openCartButton.addEventListener('click', () => {
    changeStateCart(stateCart)
  })
}

cartFunctional()
