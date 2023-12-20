import { showLoader } from '../../utils/render';

const main = document.querySelector('main');
showLoader();
const AddProductPage = async () => {
    try {
    const brands = await fetch(`http://localhost:3000/brands`);
    
    const brandsNames = await brands.json();
    const brandsSelectOptions = selectBrands(brandsNames);

    const addProductPage = `
    <div class="container px-5 my-5">
    <h1>Ajouter un nouveau produit</h1>
    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div class="form-floating mb-3">
            <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
            <label for="name">Nom</label>
            <div class="invalid-feedback" data-sb-feedback="name:required">Le nom est requis.</div>
        </div>
        <div class="form-floating mb-3">
            <select class="form-select" id="brand" aria-label="Brand">
                ${brandsSelectOptions}
            </select>
            <label for="brand">Marque</label>
        </div>
        <div class="form-floating mb-3">
            <textarea class="form-control h-25" id="description" type="text" placeholder="Description" data-sb-validations="required"></textarea>
            <label for="description">Description</label>
            <div class="invalid-feedback" data-sb-feedback="description:required">Description is required.</div>
        </div>
        <section class="grid-container">
            <div class="form-floating mb-3">
                <input class="form-control" id="price" type="text" placeholder="Prix" data-sb-validations="required" />
                <label for="price">Prix</label>
                <div class="invalid-feedback" data-sb-feedback="price:required">Le prix est requis.</div>
            </div>

            <div class="form-floating mb-3">
                <input class="form-control" id="price" type="text" placeholder="Contenance" data-sb-validations="required" />
                <label for="price">Contenance</label>
                <div class="invalid-feedback" data-sb-feedback="price:required">La contenance est requise.</div>
            </div>

            <div class="form-floating mb-3">
            <select class="form-select" id="unit" aria-label="Unit">
                <option value="g">g</option>
                <option value="mL">mL</option>
            </select>
            <label for="brand">Unité</label>
        </div>
        </section>
        
        <div class="mb-3">
            <label class="form-label d-block">Type de peau concerné</label>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dry" type="radio" name="skinType" data-sb-validations="" />
                <label class="form-check-label" for="dry">sèche</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="oily" type="radio" name="skinType" data-sb-validations="" />
                <label class="form-check-label" for="oily">grasse</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="combination" type="radio" name="skinType" data-sb-validations="" />
                <label class="form-check-label" for="combination">mixte</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="normal" type="radio" name="skinType" data-sb-validations="" />
                <label class="form-check-label" for="normal">normale</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="all" type="radio" name="skinType" data-sb-validations="" />
                <label class="form-check-label" for="all">tous</label>
            </div>
        </div>
        <div class="mb-3">
            <div class="form-check form-switch">
                <input class="form-check-input" id="sensitiveSkin" type="checkbox" name="sensitiveSkin" />
                <label class="form-check-label" for="sensitiveSkin">Peau sensible</label>
            </div>
        </div>
        <div class="mb-3">
            <div class="form-check form-switch">
                <input class="form-check-input" id="eczema" type="checkbox" name="eczema" />
                <label class="form-check-label" for="eczema">Eczema</label>
            </div>
        </div>
        <div class="form-floating mb-3">
            <textarea class="form-control h-auto" id="ingredients" type="text" placeholder="Ingrédients" data-sb-validations="required"></textarea>
            <label for="description">Ingrédients</label>
            <div class="invalid-feedback" data-sb-feedback="description:required">Les ingrédients sont requis.</div>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Ajouter image(s)</label>
            <input type="file" class="form-control" name="images" id="img" placeholder="" aria-describedby="fileHelpId">
        </div>    
        <div class="d-grid">
            <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
        </div>
    </form>
    </div>
    `;
        main.innerHTML = addProductPage;
    } catch (error) {
        main.innerHTML = `<p>Error fetching brands data</p>`;
    }
}

function selectBrands(brands) {
    let options = [];
    brands.forEach(brand => {
        options += `
        <option value="${brand.nom}">${brand.nom}</option>
        `
    });
    return options;
}

export default AddProductPage;