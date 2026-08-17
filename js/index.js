document.addEventListener("DOMContentLoaded", function () {
  fetch("data/products.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (products) {
      const productList = document.getElementById("productList");

      products.forEach(function (product) {
        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
                    <img 
                        class="product-image"
                        src="images/product-${product.id}-1.jpg"
                        alt="${product.name}"
                    >

                    <h3>${product.name}</h3>

                    <p class="category">${product.category}</p>

                    <p class="origin">${product.origin}</p>

                    <p class="description">
                        ${product.description}
                    </p>

                    <p class="price">
                        ${product.price.toLocaleString("vi-VN")}đ / ${product.unit}
                    </p>

                    <a 
                        class="detail-button"
                        href="detail.html?id=${product.id}"
                    >
                        Xem chi tiết
                    </a>
                `;

        productList.appendChild(card);
      });
    });
});
