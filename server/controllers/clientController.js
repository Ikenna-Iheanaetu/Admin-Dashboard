import Product from "../models/product.js";
import ProductStat from "../models/productStat.js";
import Users from "../models/user.js";
import Transaction from "../models/transaction.js";

export async function getProducts(req, res) {
  try {
    const products = await Product.find();

    const productStat = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productStat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function getCustomers(req, res) {
  try {
    const customers = await Users.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function getTransaction(req, res) {
  try {
    // sort should look like this: { field: 'userId', 'sort': 'desc' }
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like this { 'userId': -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
      };
      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transaction = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

      const total = await Transaction.countDocuments({
        name: { $regex: search, $options: 'i' },
      })

      res.status(200).json({
        transaction,
        total
      })
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
