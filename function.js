function addQuoteCardToContainer(
  title,
  price,
  category,
  imageURL,
  description
) {
  document.querySelector(".container").innerHTML += `
  <div class="card">
    <div class="left-infor">
        <p> ${title}</p>
        <img src=${imageURL} width="100px">
        <p> PRICE ${price} </p>      
    </div>
    <div class="right-infor">
            <h4>${category}</h4>
            <p>Description:<br> ${description}<p>       
    </div>
</div>`;
}
export { addQuoteCardToContainer };
