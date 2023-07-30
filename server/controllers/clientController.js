import Product from '../models/product.js'
import ProductStat from '../models/productStat.js'
import Users from '../models/user.js'

export async function getProducts(req, res){
    try {
        const products = await Product.find()

        const productStat = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id
                })
                return {
                    ...product._doc,
                    stat
                }
            })
        )

        res.status(200).json(productStat)
        } catch (error) {
            res.status(404).json({message: error.message})
        }
}

export async function getCustomers(req, res) {
    try{
        const customers = await Users.find({ role: 'user' }).select('-password')
        res.status(200).json(customers)
    } catch(error){
        res.status(404).json({message: error.message})

    }
}