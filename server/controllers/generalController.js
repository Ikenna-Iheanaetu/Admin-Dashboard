import User from '../models/user.js'


export async function getUser(req, res){
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
        } catch (error) {
        res.status(404).json({message: error.message})
    }
}