let wraper = document.createElement("slot");
let products = cardStore.getProduct();

// for(let i=0;i<catalogProduct.length; i++){
//                 let item = catalogProduct[i].getProductItem({
//                     tagName:"div",
//                     className:"item"
//                 })
//                 let name = catalogProduct[i].getProductItem({
//                     tagName:"div",
//                     className:"name",
//                     textName: catalogProduct[i].name
//                 })
//                 let price = catalogProduct[i].getProductItem({
//                     tagName:"div",
//                     className:"price",
//                     textName: catalogProduct[i].price
//                 })
//                 let tt = catalogProduct[i].getProductItem({
//                     tagName:"div",
//                     className:"text",
//                     textName: catalogProduct[i].text
//                 });
//                 tt.addEventListener('click', function(){
//                     let id = catalogProduct[i].getAttribute('id');
//                     let result = cardStore.putProduct(id);
//                     if (result.statusProduct) {
//                         this.innerHTML = 'Удалить из корзины';
//                     } else{
//                         this.innerHTML = 'Добавление';
//                     }
//                 })

//         item.appendChild(name);
//         item.appendChild(price);
//         item.appendChild(text);
//         wraper.appendChild(item);
//         }

// containerProducts.appendChild(wraper);





// for(let i=0;i<catalogProduct.length; i++){
//             let item = catalogProduct[i].getProductItem({
//                 tagName:"div",
//                 className:"item"
//             })
//             let name = catalogProduct[i].getProductItem({
//                 tagName:"div",
//                 className:"name",
//                 textName: catalogProduct[i].name
//             })
//             let price = catalogProduct[i].getProductItem({
//                 tagName:"div",
//                 className:"price",
//                 textName: catalogProduct[i].price
//             })
//             let tt = catalogProduct[i].getProductItem({
//                 tagName:"div",
//                 className:"text",
//                 id: catalogProduct[i].text
//             });
//             tt.addEventListener('click', function(){
//                 let id = catalogProduct[i].getAttribute('id');
//                 let result = cardStore.putProduct(id);
//                 if (result.statusProduct) {
//                     this.innerHTML = 'Удалить из корзины';
//                 } else{
//                     this.innerHTML = 'Добавление';
//                 }
//             })

//             item.appendChild(name);
//             item.appendChild(img);
//             item.appendChild(price);
//             item.appendChild(btn);

        //     wraper.appendChild(item);
        // }

        // this.containerProducts.appendChild(wraper);

      
        tgl = (ev) => {
            ev=ev?ev.target:event.target;
            alert(ev.id);
        }

