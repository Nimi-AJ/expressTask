
const { response } = require("express");
const express = require("express");
const router = express.Router();

const shoppingItems = [];
let idCount = 1;

router
.route("/items")
.get((request, response) => {
    return response.json(shoppingItems);
})
.post((req, response) => {
    shoppingItems.push({
        itemName: req.body.name,
        itemPrice: Number(req.body.price),
        itemId: idCount++
    })
    return response.json({message: "Item added to list"});
})


router
.route("/items/:id")
.get((request, response) => {
    shoppingItems.forEach((item) => {
        if(item.id = Number(request.params.id)){
            return response.json(item);
        }
    })   
})

.patch((request, response) => {
//  const item = shoppingItems.find((item) => {
    
//  })
shoppingItems.forEach((item) => {
    if( item.itemId === Number(request.params.id)){
        item.itemName = request.body.name;
        item.itemPrice = request.body.price;
        return response.json(item);
    }
})
 //console.log(item["itemName"]);
// shoppingItems[itemIndex][itemName] = request.body.name;
// shoppingItems[itemIndex][itemPrice] = Number(request.body.price);

})

.delete((request, response) => {
    let indexOut;
    shoppingItems.forEach((item, index) => {
        if(item.itemId === Number(request.params.id)){
             indexOut = index;
        }
    })

    let objOut = shoppingItems.splice(indexOut, 1);
//    let array =  shoppingItems.splice(itemIndex, 1);
    return(response.json(objOut));
})




module.exports = router;