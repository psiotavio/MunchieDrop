// Armazena as comidas em uma variável
const foods = document.querySelectorAll('.container');

// Seleciona a barra de pesquisa
const searchBar = document.querySelector('#search-bar');

// Adiciona um event listener para o evento "input" na barra de pesquisa
searchBar.addEventListener('input', () => {
  // Armazena o valor da barra de pesquisa em uma variável
  const searchTerm = searchBar.value.toLowerCase();

  // Itera sobre cada comida
  foods.forEach(food => {
    // Armazena o título da comida em uma variável
    const title = food.querySelector('.food-title').textContent.toLowerCase();

    // Verifica se o título da comida inclui o termo de busca
    const matched = title.includes(searchTerm);

    // Define a exibição do item com base na correspondência com a pesquisa
    food.style.display = matched ? 'flex' : 'none';
  });
});

// Adiciona um event listener para o evento "keydown" na barra de pesquisa
searchBar.addEventListener('keydown', event => {
  // Verifica se a tecla pressionada é "Enter"
  if (event.keyCode === 13) {
    // Evita que a página recarregue ao pressionar "Enter"
    event.preventDefault();

    // Executa a busca
    const searchTerm = searchBar.value.toLowerCase();
    foods.forEach(food => {
      const title = food.querySelector('.food-title').textContent.toLowerCase();
      const matched = title.includes(searchTerm);
      food.style.display = matched ? 'flex' : 'none';
    });
  }
});

const cart = document.querySelector('#cart-items');
const cartCount = document.querySelector('#cart-count');
const cartIcon = document.querySelector('#cart-icon');
const clearCartButton = document.querySelector('#clear-cart');
const cartModal = document.querySelector('#cart-modal');

let cartItems = [];

function addToCart(title, price) {
  const item = document.createElement('div');
  item.classList.add('cart-item');
  item.innerHTML = `
    <span>${title}</span>
    <span>${price}</span>
  `;
  cartItems.push(item);
  cart.appendChild(item);
  updateCartCount();
}

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const container = button.closest('.container');
    const foodTitle = container.querySelector('.food-title').innerText;
    const foodPrice = container.getAttribute('data-price');
    addToCart(foodTitle, foodPrice);
  });
});

function updateCartCount() {
  cartCount.textContent = cartItems.length;
}

function clearCart() {
  cartItems = [];
  cart.innerHTML = '';
  updateCartCount();
}


cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'block';
});

clearCartButton.addEventListener('click', () => {
  clearCart();
});


const closeModalButton = document.querySelector('#close-modal');

closeModalButton.addEventListener('click', () => {
  cartModal.style.display = 'none';
});



// Adiciona a classe "modal-open" ao body quando o modal é aberto
document.getElementById("cart-icon").addEventListener("click", function() {
  document.body.classList.add("modal-open");
  document.getElementById("cart-modal").style.display = "block";
});

// Remove a classe "modal-open" do body quando o modal é fechado
document.getElementById("close-modal").addEventListener("click", function() {
  document.body.classList.remove("modal-open");
  document.getElementById("cart-modal").style.display = "none";
});











