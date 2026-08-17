document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");

  fetch("data/products.json")
    .then(function (response) {
      return response.json();
    })

    .then(function (products) {
      const product = products.find(function (item) {
        return item.id == id;
      });

      if (!product) {
        return;
      }

      const detail = document.getElementById("productDetail");

      detail.innerHTML = `

                <div class="image-area">

                    <img 
                        id="mainImage"
                        class="main-image"
                        src="images/product-${product.id}-1.jpg"
                        alt="${product.name}"
                    >


                    <div class="thumbnail-list">

                        <img
                            class="thumbnail"
                            src="images/product-${product.id}-1.jpg"
                            onclick="changeImage(this.src)"
                        >

                        <img
                            class="thumbnail"
                            src="images/product-${product.id}-2.jpg"
                            onclick="changeImage(this.src)"
                        >

                        <img
                            class="thumbnail"
                            src="images/product-${product.id}-3.jpg"
                            onclick="changeImage(this.src)"
                        >

                    </div>

                </div>


                <div class="product-info">

                    <h1>${product.name}</h1>

                    <p>
                        <span class="label">Danh mục:</span>
                        ${product.category}
                    </p>

                    <p>
                        <span class="label">Nguồn gốc:</span>
                        ${product.origin}
                    </p>

                    <p class="price">
                        ${product.price.toLocaleString("vi-VN")}đ
                    </p>

                    <p>
                        <span class="label">Đơn vị:</span>
                        ${product.unit}
                    </p>

                    <p>
                        <span class="label">Mô tả:</span>
                        ${product.description}
                    </p>

                </div>

            `;
    });
});

function changeImage(image) {
  document.getElementById("mainImage").src = image;
}
