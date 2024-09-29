const db = require('../config/db');

const Product = {
    getAll:() =>{
       return new Promise((resolve, reject) =>{
        const query = "select * from products";
        db.query(query, (err, result) =>{
            if(err){
                reject(err)
            }
            resolve(result);
        });
       });
    },
    getCategory:() =>{
        return new Promise((resolve, reject)=>{
            const query = "select * from categories";
            db.query(query, (err, result) =>{
                if(err){
                    return reject(err);
                }
                resolve(result);         
            });
        });
    },
};
module.exports = Product;