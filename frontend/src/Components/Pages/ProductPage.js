
sessionStorage.setItem('idProduct', '95n2dlfylqrfp1g');
const ProductPage = async () => {
    const response = await fetch(`http://localhost:3000/products/${sessionStorage.getItem('idProduct')}`);
    const data = await response.json();

    const productPage = `
        <section id="productPage">
            <h1>${data.nom}</h1>
            <div class="grid-container-Productpage">
                <div class="productPage__image">
                    <img src="../../img/${data.photo}" alt="Product Image">
                </div>
                <div class="productPage__info">
                    <p>${data.description}</p>
                    <span id="similarSpan"><a href="/similar">See similar products</a></span>
                </div>
        
        </section>
        <section class="content-item" id="comments">
    <div class="container">   
    	<div class="row">
            <div class="col-sm-8">   
                <form>
                	<h3 class="pull-left">New Comment</h3>
                	<button type="submit" class="btn btn-normal pull-right">Submit</button>
                    <fieldset>
                        <div class="row">
                            <div class="col-sm-3 col-lg-2 hidden-xs">
                            	<img class="img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                            </div>
                            <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                <textarea class="form-control" id="message" placeholder="Your message" required=""></textarea>
                            </div>
                        </div>  	
                    </fieldset>
                </form>
                
                <h3>4 Comments</h3>
                
                <!-- COMMENT 1 - START -->
                <div class="media">
                    <a class="pull-left" href="#"><img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""></a>
                    <div class="media-body">
                        <h4 class="media-heading">John Doe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <li><i class="fa fa-calendar"></i>27/02/2014</li>
                            <li><i class="fa fa-thumbs-up"></i>13</li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                            <li class=""><a href="">Like</a></li>
                            <li class=""><a href="">Reply</a></li>
                        </ul>
                    </div>
                </div>
                <!-- COMMENT 1 - END -->
                
                <!-- COMMENT 2 - START -->
                <div class="media">
                    <a class="pull-left" href="#"><img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""></a>
                    <div class="media-body">
                        <h4 class="media-heading">John Doe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <li><i class="fa fa-calendar"></i>27/02/2014</li>
                            <li><i class="fa fa-thumbs-up"></i>13</li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                            <li class=""><a href="">Like</a></li>
                            <li class=""><a href="">Reply</a></li>
                        </ul>
                    </div>
                </div>
                <!-- COMMENT 2 - END -->
                
                <!-- COMMENT 3 - START -->
                <div class="media">
                    <a class="pull-left" href="#"><img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""></a>
                    <div class="media-body">
                        <h4 class="media-heading">John Doe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <li><i class="fa fa-calendar"></i>27/02/2014</li>
                            <li><i class="fa fa-thumbs-up"></i>13</li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                            <li class=""><a href="">Like</a></li>
                            <li class=""><a href="">Reply</a></li>
                        </ul>
                    </div>
                </div>
                <!-- COMMENT 3 - END -->
                
                <!-- COMMENT 4 - START -->
                <div class="media">
                    <a class="pull-left" href="#"><img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt=""></a>
                    <div class="media-body">
                        <h4 class="media-heading">John Doe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <li><i class="fa fa-calendar"></i>27/02/2014</li>
                            <li><i class="fa fa-thumbs-up"></i>13</li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                            <li class=""><a href="">Like</a></li>
                            <li class=""><a href="">Reply</a></li>
                        </ul>
                    </div>
                </div>
                <!-- COMMENT 4 - END -->
            
            </div>
        </div>
    </div>
</section>`;
    
    const main = document.querySelector('main');
    main.innerHTML = productPage;
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
      
};

export default ProductPage;