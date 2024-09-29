const product = require('../model/ProductModel');
const seafood = {
    spicy:(req, res) =>{
      Promise.all([
        product.getAll(),
        product.getCategory()
      ]).then(([productList, categoryList]) =>{
        res.render('curly', {
            product:productList,
            category:categoryList
        });
      }).catch(err =>{
        throw err;
      });
      
      
        // product.getAll((err, result) =>{
        //     if(err) throw err;
        //     res.render('curly',{ product: result});
        // });
        
    }
};

module.exports = seafood;