import { addQuoteCardToContainer } from "./function.js";

const productURL = "https://fakestoreapi.com/products";
function indisplayListOfProducts() {
  $(document).ready(() => {
    $.getJSON(productURL, (productData) => {
      let dataLength = productData.length;
      for (let i = 0; i < dataLength; i++) {
        addQuoteCardToContainer(
          productData[i].category,
          productData[i].price,
          productData[i].title,
          productData[i].image,
          productData[i].description
        );
      }
    });
  });
}
// Function to display the list of products based on the selected category and sorting order
function displayListOfProducts(categoryFilter, sortOrder) {
  $(document).ready(() => {
    $.getJSON(productURL, (productData) => {
      // Apply category filter
      if (categoryFilter !== "all") {
        productData = productData.filter(
          (product) => product.category === categoryFilter
        );
      }

      // Sorting the quoteData based on price
      if (sortOrder === "asc") {
        productData.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "desc") {
        productData.sort((a, b) => b.price - a.price);
      }

      let $productList = $(".container"); // Select the product list container
      $productList.empty(); // Clear previous content

      let dataLength = productData.length;
      for (let i = 0; i < dataLength; i++) {
        addQuoteCardToContainer(
          productData[i].category,
          productData[i].price,
          productData[i].title,
          productData[i].image,
          productData[i].description
        );
      }
    });
  });
}

// Initial display of list of products when the page is loaded
indisplayListOfProducts();

// Add event listener for ascending button
$("#asc").click(() => {
  const categoryFilter = $("#categoryFilter").val();
  displayListOfProducts(categoryFilter, "asc");
  console.log("Ascending button clicked");
});

// Add event listener for descending button
$("#desc").click(() => {
  const categoryFilter = $("#categoryFilter").val();
  displayListOfProducts(categoryFilter, "desc");
  console.log("Descending button clicked");
});

// Add event listener for category filter change
$("#categoryFilter").change(() => {
  const sortOrder = $("#asc").is(":checked") ? "asc" : "desc";
  const categoryFilter = $("#categoryFilter").val();
  displayListOfProducts(categoryFilter, sortOrder);
});
