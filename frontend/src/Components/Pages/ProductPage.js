
const ProductPage = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    const response = await fetch(`http://localhost:3000/products/${productId}`);
    const data = await response.json();

    const productPage = `
        <section id="productPage">
            <h1>${data.nom}</h1>
            <div class="grid-container-Productpage">
                <div class="productPage__image">
                    <img src="${data.photo}" alt="Product Image">
                </div>
                <div class="productPage__info">
                    <span> <p class="carac"> Contenance : ${data.contenance} ${data.unite_contenance}</p></span>
                    <br>
                    <span> <p class="carac"> Prix : ${data.prix} €</p></span>
                    <br>
                    <p>
                        <button class="btn btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                            Voir description
                        </button>
                    </p>
                    <div style="min-height: 120px;">
                        <div class="collapse collapse-horizontal" id="collapseWidthExample">
                            <div class="card card-body" style="width: 600px;">
                                ${data.description}
                            </div>
                        </div>
                    </div>
                    <p>
                        <button class="btn btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExamples" aria-expanded="false" aria-controls="collapseWidthExample">
                            Voir ingrédients
                        </button>
                    </p>
                    <div style="min-height: 120px;">
                        <div class="collapse collapse-horizontal" id="collapseWidthExamples">
                            <div class="card card-body" style="width: 600px;">
                                ${data.ingredients}
                            </div>
                        </div>
                    </div>
                    <span id="similarSpan"><a href="/similar">See similar products</a></span>
                </div>
        
        </section>
        <section class="comments-section">
        <h3>Add a Comment</h3>
        <form id="comment-form">
        <div class="star-rating">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       </div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"><br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"><br><br>
          <label for="message">Message:</label>
          <textarea id="message" name="message"></textarea><br><br>
          <button type="submit">Submit</button>
        </form>
        <ul class="comments-list">
          <!-- Display previous comments here -->
        </ul>
      </section>
</section>`;
    
    const main = document.querySelector('main');
    main.innerHTML = productPage;
    const body = document.querySelector('body');
    body.style.overflow = 'auto';

    let selectedStars = 0;

const starRating = document.querySelector('.star-rating');

starRating.addEventListener('click', (e) => {
 if (e.target.tagName === 'SPAN') {
        const index = [...e.target.parentElement.children].indexOf(e.target);
        selectedStars = index + 1;

        const stars = starRating.querySelectorAll('span');
        stars.forEach((star, i) => {
            if (i < selectedStars) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
 }
});
      
};

export default ProductPage;