const main = document.querySelector('main');
document.querySelector('body').style.overflow = 'auto';

const ProductPage = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    const response = await fetch(`http://localhost:3000/products/${productId}`);
    const data = await response.json();

    main.innerHTML += `
        <section id="productPage">
            <div class="container">
                <div class="row mt-3">
                    <div class="col-lg-5 text-center">
                        <img src="${data.photo}" alt="Product Image" class="img-fluid">
                    </div>
                    <div class="col-lg-7">
                        <h1>${data.nom}</h1>
                        <p class="me-4">${data.description}</p>
                        <div class="d-flex align-items-center mb-3">
                            <p class="carac text-body-secondary mb-0">${data.prix}€ (${data.contenance} ${data.unite_contenance})</p>
                            <button class="btn btn-lg btn-sm ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExamples" aria-expanded="false" aria-controls="collapseWidthExample">
                                Voir ingrédients
                            </button>
                        </div>
                        <div class="collapse collapse-vertical mt-3" id="collapseWidthExamples">
                            <div class="card card-body" style="width: 100%;">
                                ${data.ingredients}
                            </div>
                        </div>
                        <span id="similarSpan" class="d-block mt-3"><a href="/similar">Voir produits similaires</a></span>
                    </div>
                </div>
            </div>
        </section>`;
       main.innerHTML += ` 
        <section class="comments-section px-5 py-5">
            <div class="text-center"><h2>Espaces commentaires</h2></div>
            <div class="comments-container px-2 py-2">
            </div>
            <div class="comment-form mt-1 mb-3">
                <form class="d-flex justify-content-between">
                    <div class="input-group input-group-lg mb-3">
                        <input type="text" class="form-control" id="textarea" placeholder="Your comment..." required>
                        <button class="btn btn-outline-secondary ms-2" type="button" id="addComment" type="submit">Post Comment</button>
                    </div>
                </form>
            </div>
        </section>
        `;
    
    

    const commentsContainer = document.querySelector('.comments-container');

    const getComments = await fetch(`http://localhost:3000/products/comments/${productId}`);
    const allComments = await getComments.json();

    allComments.forEach((comment) => {
        commentsContainer.innerHTML += `
            <div class="comment rounded mb-3 px-2 py-2" id="floatingInputValue">
                <label class="author text-primary-emphasis fw-bold" for="floatingInputValue">${comment.expand.user.username}</label>
                <label class="timestamp text-body-tertiary fs-6" for="floatingInputValue">${comment.created.split(' ')[0]}</label>
                <div class="content text-secondary mt-2">${comment.comment}</div>
            </div>
        `;
    });

    const addCommentButton = document.getElementById('addComment');
    addCommentButton.addEventListener('click', (e) => {
        e.preventDefault();
        const comment = document.getElementById('textarea').value;
        const userId = localStorage.getItem('userId');
        const numStars = 5;
        addCommentToProduct(productId, userId, comment, numStars);
        window.location.reload();
    });   
};

function addCommentToProduct(productId, userId, comment, numStars) {
    fetch('http://localhost:3000/products/addComment', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        productId,
        userId,
        comment,
        numStars,
        }),
    }).then((response) => response.json());
}

export default ProductPage;