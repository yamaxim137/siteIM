class Card{
    constructor(catalogCounter, containerCard, catalogProduct){
        this.catalogCounter = document.querySelector(catalogCounter);
        this.containerCard = document.querySelector(containerCard);
        this.catalogProduct = catalogProduct;
        this.create();
    }

    create(){
        this.catalogCounter.addEventListener('click', function(){
            card.containerCard.style.display = 'block';
            let productsCard = card.getProductsCard();
            let wraper = document.createElement('slot');

            for (let i = 0; i < productsCard.length; i++) {
            let item = createOneProduct.getProductItem({
                tagName:"div",
                className:"item"
            });
            let name = createOneProduct.getProductItem({
                tagName:"div",
                className:"name",
                textName: card.catalogProduct[i].name
            });
            let price = createOneProduct.getProductItem({
                tagName:"div",
                className:"price",
                textName: card.catalogProduct[i].price
            }); 
            item.appendChild(name);
            item.appendChild(price);

            wraper.appendChild(item);         
            }
        let close = createOneProduct.getProductItem({
            tagName:"div",
            className:"close"
        })

        close.addEventListener('click', function(){
            card.containerCard.style.display = 'none';
            card.containerCard.innerHTML = ' ';
        })
        card.containerCard.appendChild(wraper);
        card.containerCard.appendChild(close);
    });

   }

    getProductsCard(){
        let products = cardStore.getProduct();
        let productsCard = [];
        for (let i = 0; i < this.catalogProduct.length; i++) {
            if(products.indexOf(this.catalogProduct[i].id) !== -1){
                productsCard.push(this.catalogProduct[i]);
            }    
        }
        return productsCard;
    }
}

let card = new Card('.container-counter','.container-card',catalogProduct);