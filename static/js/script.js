const phoneNumber = "524612101815";
const price = "$1600 MXN";

const products = [
  {
    name: "Tommy Hilfiger tote grande beige",
    brand: "Tommy Hilfiger",
    image: "WhatsApp Image 2026-05-03 at 12.03.04 PM.jpeg",
    category: "muy-buena",
    label: "Muy buena oferta",
    analysis: "Tote grande, monograma visible y etiqueta. Es de las mas fuertes para vender primero a $1600."
  },
  {
    name: "Guess satchel blanca con cadena",
    brand: "Guess",
    image: "WhatsApp Image 2026-05-03 at 12.09.48 PM.jpeg",
    category: "buena",
    label: "Buena oferta",
    analysis: "Modelo vistoso y femenino. La cadena con letras ayuda a que se vea mas premium en foto."
  },
  {
    name: "Tommy Hilfiger roja",
    brand: "Tommy Hilfiger",
    image: "WhatsApp Image 2026-05-03 at 12.07.32 PM.jpeg",
    category: "justa",
    label: "Precio justo",
    analysis: "Elegante y vendible. A $1600 esta bien, aunque no destaca tanto como las totes grandes."
  },
  {
    name: "Guess satchel rosa",
    brand: "Guess",
    image: "WhatsApp Image 2026-05-03 at 12.12.47 PM.jpeg",
    category: "justa",
    label: "Precio justo",
    analysis: "Linda y femenina. Se mueve bien entre $1500 y $1700, asi que $1600 esta correcto."
  },
  {
    name: "Guess satchel cafe y negra",
    brand: "Guess",
    image: "WhatsApp Image 2026-05-03 at 11.44.26 AM.jpeg",
    category: "justa",
    label: "Precio justo",
    analysis: "Modelo practico y combinable, aunque el diseno se siente mas comun."
  },
  {
    name: "Juicy Couture bolsa beige",
    brand: "Juicy Couture",
    image: "WhatsApp Image 2026-05-03 at 11.47.57 AM.jpeg",
    category: "justa",
    label: "Precio justo",
    analysis: "Muy femenina y con etiqueta, pero a $1600 depende mas del gusto de la clienta."
  },
  {
    name: "Juicy Couture backpack crema",
    brand: "Juicy Couture",
    image: "WhatsApp Image 2026-05-03 at 11.59.38 AM.jpeg",
    category: "justa",
    label: "Precio justo",
    analysis: "Estilo llamativo y juvenil. Vendible, pero no la pondria como la mejor oferta del grupo."
  }
];

const productGrid = document.querySelector("#productGrid");
const topDeals = document.querySelector("#topDeals");
const fairDeals = document.querySelector("#fairDeals");
const filterButtons = document.querySelectorAll(".filter");
const whatsAppMain = document.querySelector("#whatsAppMain");

function makeWhatsAppLink(productName = "bolsas disponibles") {
  const text = `Hola, quiero informacion de ${productName} de Luna Belle Bags en ${price}.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}

function renderProducts(filter = "all") {
  const visibleProducts = filter === "all"
    ? products
    : products.filter((product) => product.category === filter);

  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card" data-category="${product.category}">
      <div class="product-media">
        <img src="/static/images/${encodeURIComponent(product.image)}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-body">
        <div class="product-top">
          <h3 class="product-title">${product.name}</h3>
          <span class="price">${price}</span>
        </div>
        <span class="badge ${product.category}">${product.label}</span>
        <p>${product.analysis}</p>
        <div class="product-actions">
          <a class="btn ghost" href="${makeWhatsAppLink(product.name)}" target="_blank" rel="noopener">
            Preguntar por esta bolsa
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderDealLists() {
  const strong = products.filter((product) => product.category === "muy-buena" || product.category === "buena");
  const fair = products.filter((product) => product.category === "justa");

  topDeals.innerHTML = strong.map((product) => `<li>${product.name}</li>`).join("");
  fairDeals.innerHTML = fair.map((product) => `<li>${product.name}</li>`).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

whatsAppMain.href = makeWhatsAppLink();
renderDealLists();
renderProducts();
