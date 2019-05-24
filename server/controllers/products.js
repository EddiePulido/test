const Product = require("../models/product").Product;

module.exports = {
    getProducts: function(req,res){
        Product.find({},function(err,products){
            if(err){
                console.log("Error finding products");
            }else{
                res.json({message:"Success", data: products})
            }
        })
    },

    getProduct: function(req,res){
        Product.findById(req.params.id, function(err, product){
            if(err){
                console.log("Error retrieving Product", err);
            }else{
                console.log("Product retrieved")
                res.json({message:"Success", data: product});
            }
        })
    },

    createProduct: function(req,res){
        let newProduct = new Product({title: req.body.title,price: req.body.price,url:req.body.url});

        console.log(newProduct);
        
        newProduct.save(function(err){
            if(err){
                console.log("Error Creating Product");
            }else{
                
                res.json({message:"Success",data: newProduct});
            }
        })        
    },

    deleteProduct: function(req,res){
        Product.findByIdAndDelete(req.params.id,function(err){
            if(err){
                console.log("Error deleting product", err);
            }else{
                console.log("Succefully deleted Product");
            }
        })
    },

    updateProduct: function(req,res){
        
        Product.findByIdAndUpdate(req.params.id,{$set:{title: req.body.title,price:req.body.price,url: req.body.url}},function(err){
            if(err){
                console.log("Error Updating Product");
            }else{
                console.log("Product updated");
            }
        })
    }
}