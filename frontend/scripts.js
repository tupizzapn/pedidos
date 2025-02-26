// Datos iniciales
let pizzas = [];
let toppings = [];

// Funciones para manejar pizzas
function addPizza(name, price) {
    const pizza = { id: Date.now(), name, price };
    pizzas.push(pizza);
    renderPizzas();
}

function deletePizza(id) {
    pizzas = pizzas.filter(pizza => pizza.id !== id);
    renderPizzas();
}

function renderPizzas() {
    const pizzaList = document.getElementById('pizzaList');
    pizzaList.innerHTML = pizzas.map(pizza => `
        <li>
            ${pizza.name} - $${pizza.price}
            <button onclick="deletePizza(${pizza.id})">Eliminar</button>
        </li>
    `).join('');
}

// Funciones para manejar toppings
function addTopping(name, price) {
    const topping = { id: Date.now(), name, price };
    toppings.push(topping);
    renderToppings();
}

function deleteTopping(id) {
    toppings = toppings.filter(topping => topping.id !== id);
    renderToppings();
}

function renderToppings() {
    const toppingList = document.getElementById('toppingList');
    toppingList.innerHTML = toppings.map(topping => `
        <li>
            ${topping.name} - $${topping.price}
            <button onclick="deleteTopping(${topping.id})">Eliminar</button>
        </li>
    `).join('');
}

// Event listeners
document.getElementById('pizzaForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('pizzaName').value;
    const price = parseFloat(document.getElementById('pizzaPrice').value);
    addPizza(name, price);
    e.target.reset();
});

document.getElementById('toppingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('toppingName').value;
    const price = parseFloat(document.getElementById('toppingPrice').value);
    addTopping(name, price);
    e.target.reset();
});

// Renderizar datos iniciales (opcional)
renderPizzas();
renderToppings();
