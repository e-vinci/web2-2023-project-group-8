import { showLoader } from '../../utils/render';

const main = document.querySelector('main');
document.querySelector('body').style.overflow = 'auto';

const ProductPage = async () => {
    showLoader();
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    const response = await fetch(`http://localhost:3000/products/${productId}`);
    const data = await response.json();

    const brands = await fetch(`http://localhost:3000/brands/${data.marque}`);
    const brandData = await brands.json();

    const productPage = `
        <section id="productPage">
            <h1>${data.nom}</h1><br>
            <div class="grid-container-Productpage">
                <div class="productPage__image">
                    <img src="${data.photo}" alt="Product Image">
                </div>
                <div class="productPage__info">
                <p class="brand">${brandData.nom}</p>
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
                    <span id="similarSpan"><a href="/similar?productId=${productId}">Voir produits similaires</a></span>
                </div>
            </div>
        </section>
        <section class="comments-section px-5 py-5">
            <div class="text-center"><h2>Espace commentaires</h2></div>
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
    
    main.innerHTML = productPage;

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