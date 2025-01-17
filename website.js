async function fetchProduct() {
  const res = await fetch("https://fakestoreapi.com/products");
  const product = await res.json();
  return product;
}
// This section is used to display products;
async function display_products() {
  const products = await fetchProduct();

  // Declaring footer
  let footer = document.getElementById("footer");
  if (document.querySelector(".container")) {
    document.querySelector(".container").remove();
  }

  let container = document.createElement("div");
  container.setAttribute("class", "container");
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  row.setAttribute("id", "product_row");
  container.append(row);

  products.forEach((element) => {
    let column = document.createElement("div");
    column.setAttribute(
      "class",
      "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
    );
    column.setAttribute("id", "product_col");
    row.append(column);

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", "card");
    column.append(card);

    let img_container = document.createElement("div");
    img_container.setAttribute("class", "img_container");
    card.append(img_container);

    let product_img = document.createElement("img");
    product_img.setAttribute("class", "product_img");
    product_img.setAttribute("src", element.image);
    img_container.append(product_img);

    let card_body = document.createElement("div");
    card_body.setAttribute("class", "card-body");
    card.append(card_body);

    let card_title = document.createElement("h5");
    card_title.setAttribute("class", "card-title");
    card_title.setAttribute("id", "card_title");
    card_title.textContent = element.title;
    card_body.append(card_title);

    let card_txt = document.createElement("p");
    card_txt.setAttribute("class", "card-text");
    card_txt.setAttribute("id", "card_txt");
    card_txt.textContent = element.description;
    card_body.append(card_txt);

    let price = document.createElement("p");
    price.setAttribute("class", "card-text");
    price.textContent = `${element.price} Rs.`;
    card_body.append(price);

    let add_to_cart = document.createElement("a");
    add_to_cart.setAttribute("class", "btn btn-primary");
    add_to_cart.textContent = "Add to cart";
    card_body.append(add_to_cart);
  });

  document.body.insertBefore(container, footer);
}
