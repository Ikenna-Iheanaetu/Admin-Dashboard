import OverallStat from '../models/overallStat.js'

export async function getSales(req, res){
    try{
        const overallStats = await OverallStat.find()
        res.status(200).json(overallStats[0])
    }catch(error){
    res.status(404).json({ message: error.message });
        
    }
}