const phoneNumber = "524612101815";
const price = "$1600 MXN";

const products = [
  {
    name: "Tommy Hilfiger tote grande beige",
    brand: "Tommy Hilfiger",
    image: "WhatsApp Image 2026-05-03 at 12.03.04 PM.jpeg",
    category: "tommy-hilfiger",
    label: "Nueva original",
    description: "Tote grande beige con monograma visible, etiqueta y espacio amplio para uso diario."
  },
  {
    name: "Guess satchel blanca con cadena",
    brand: "Guess",
    image: "bolsa-guess-blanca.png",
    category: "guess",
    label: "Nueva original",
    description: "Satchel blanca con cadena decorativa y detalles Guess que lucen elegantes en cualquier outfit."
  },
  {
    name: "Tommy Hilfiger roja",
    brand: "Tommy Hilfiger",
    image: "WhatsApp Image 2026-05-03 at 12.07.32 PM.jpeg",
    category: "tommy-hilfiger",
    label: "Nueva original",
    description: "Bolsa roja Tommy Hilfiger con estilo clasico, ideal para darle color al look."
  },
  {
    name: "Guess satchel rosa",
    brand: "Guess",
    image: "WhatsApp Image 2026-05-03 at 12.12.47 PM.jpeg",
    category: "guess",
    label: "Nueva original",
    description: "Satchel rosa Guess con acabado femenino, practica para salidas y combinaciones claras."
  },
  {
    name: "Guess satchel cafe y negra",
    brand: "Guess",
    image: "WhatsApp Image 2026-05-03 at 11.44.26 AM.jpeg",
    category: "guess",
    label: "Nueva original",
    description: "Satchel cafe y negra, facil de combinar con ropa casual o de oficina."
  },
  {
    name: "Juicy Couture bolsa beige",
    brand: "Juicy Couture",
    image: "WhatsApp Image 2026-05-03 at 11.47.57 AM.jpeg",
    category: "juicy-couture",
    label: "Nueva original",
    description: "Bolsa beige Juicy Couture con etiqueta, suave y femenina para uso diario."
  },
  {
    name: "Juicy Couture backpack crema",
    brand: "Juicy Couture",
    image: "WhatsApp Image 2026-05-03 at 11.59.38 AM.jpeg",
    category: "juicy-couture",
    label: "Nueva original",
    description: "Backpack color crema Juicy Couture, juvenil y comoda para llevar lo esencial."
  }
];

const productGrid = document.querySelector("#productGrid");
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
        <p>${product.description}</p>
        <div class="product-actions">
          <a class="btn ghost" href="${makeWhatsAppLink(product.name)}" target="_blank" rel="noopener">
            Preguntar por esta bolsa
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

whatsAppMain.href = makeWhatsAppLink();
renderProducts();
