const controller = require("../controllers/products.js");

module.exports =function(app){
    app.get("/allProducts", function(req,res){
        console.log("Getting Products");
        controller.getProducts(req,res);
    })

    app.post("/newProduct",function(req,res){
        console.log("Creating Product");
        controller.createProduct(req,res);
    })

    app.get("/products/delete/:id",function(req,res){
        console.log("Deleting Product");
        controller.deleteProduct(req,res);
    })

    app.put("/products/update/:id",function(req,res){
        console.log("Updating Product");
        controller.updateProduct(req,res);
    })

    app.get("/product/:id",function(req,res){
        console.log("Retrieving Product Details");
        controller.getProduct(req,res);
    })


}