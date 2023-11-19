const AddProductPage = () => {
    const addProductPage = `
    <div class="container px-5 my-5">
    <h1>Ajouter un nouveau produit</h1>
    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div class="form-floating mb-3">
            <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
            <label for="name">Name</label>
            <div class="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
        </div>
        <div class="form-floating mb-3">
            <select class="form-select" id="brand" aria-label="Brand">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <label for="brand">Brand</label>
        </div>
        <div class="form-floating mb-3">
            <textarea class="form-control" id="description" type="text" placeholder="Description" data-sb-validations="required"></textarea>
            <label for="description">Description</label>
            <div class="invalid-feedback" data-sb-feedback="description:required">Description is required.</div>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="price" type="text" placeholder="Price" data-sb-validations="required" />
            <label for="price">Price</label>
            <div class="invalid-feedback" data-sb-feedback="price:required">Price is required.</div>
        </div>
        <div class="mb-3">
            <label class="form-label d-block">Targeted Skin Type</label>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="dry" type="radio" name="skinType" data-sb-validations="" />
                <label class="form-check-label" for="dry">dry</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="oily" type="radio" name="skinType" data-sb-validations="" />
                <label class="form-check-label" for="oily">oily</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="combination" type="radio" name="skinType" data-sb-validations="" />
                <label class="form-check-label" for="combination">combination</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="none" type="radio" name="skinType" data-sb-validations="" />
                <label class="form-check-label" for="non">none</label>
            </div>
        </div>
        <div class="mb-3">
            <div class="form-check form-switch">
                <input class="form-check-input" id="sensitiveSkin" type="checkbox" name="sensitiveSkin" />
                <label class="form-check-label" for="sensitiveSkin">Sensitive Skin</label>
            </div>
        </div>
        <div class="mb-3">
            <div class="form-check form-switch">
                <input class="form-check-input" id="eczema" type="checkbox" name="eczema" />
                <label class="form-check-label" for="eczema">Eczema</label>
            </div>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Add Image(s)</label>
                <input type="file" class="form-control" name="" id="" placeholder="" aria-describedby="fileHelpId">
      </div>
        <div class="d-grid">
            <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
        </div>
    </form>
    </div>
    `;

    const main = document.querySelector('main');
    main.innerHTML = addProductPage;
}

export default AddProductPage;