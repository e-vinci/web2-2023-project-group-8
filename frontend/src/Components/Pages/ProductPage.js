
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
                    <span id="similarSpan"><a href="/similar">Voir produits similaires</a></span>
                </div>
        
        </section>
        <section class="comments-section">
        <ul class="comments-list">
        <div class="comments-container">
        
      </div>
      </div>
    
      <div class="comment-form">
        <h2>Add a Comment</h2>
        <form>
          <textarea rows="4" placeholder="Your comment..."></textarea>
          <button type="submit">Post Comment</button>
        </form>
        </ul>
      </section>
</section>`;
    
    const main = document.querySelector('main');
    main.innerHTML = productPage;
    const body = document.querySelector('body');
    body.style.overflow = 'auto';

    const commentsContainer = document.querySelector('.comments-container');
    const getComments = await fetch(`http://localhost:3000/products/comments/${productId}`);
    const allComments = await getComments.json();
    allComments.forEach((comment) => {
        
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
        <div class="author">${comment.expand.user.username}</div>
        <div class="timestamp">${comment.created.split(' ')[0]}</div>
        <div class="content">${comment.comment}</div>
        `;
        commentsContainer.appendChild(commentDiv);
        });

      
};

export default ProductPage;