const products = [
  {
    name: "Nike Air Force 1",
    category: "Men's Shoes",
    price: "$120",
    image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/94d89d78-d6b7-47b4-96cc-7fabef2775eb/AIR+FORCE+1+LOW.png",
  },
  {
    name: "Nike Dunk Low",
    category: "Women's Shoes",
    price: "$110",
    image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/1cabc2f5-40fb-4fb8-8b8a-8718dace7c19/NIKE+DUNK+LOW+RETRO.png"
  },
  {
    name: "Nike Tech Fleece",
    category: "Men's Hoodie",
    price: "$150",
    image: "https://i8.amplience.net/i/jpl/jd_764326_a?qlt=92&w=600&h=765&v=1&fmt=auto"
  },
  {
    name: "Nike Air Jordan 1",
    category: "Jordan",
    price: "$180",
    image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d4413d66-0de9-486c-8f43-530963dc2905/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png"
  }
];

const productList = document.getElementById("product-list");


products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <div class="img-wrapper">
                <img src="${product.image}" alt="${product.name}">
                <button class="fav-btn">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>${product.category}</p>
                <span>${product.price}</span>
                <button class="cart-btn">Add to Cart</button>
            </div>
    `;
    productList.appendChild(card);
});