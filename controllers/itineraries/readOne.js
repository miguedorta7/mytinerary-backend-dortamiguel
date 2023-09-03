import Itinerary from "../../models/Itinerary.js"


export default async (req,res,next) => {
    try {
        let oneItinerary = await Itinerary.find({city_id:req.query._id})
        if (oneItinerary) {
            return res.status(200).json({
                success: true,
                message: 'Itinerary found',
                response: oneItinerary
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
} 