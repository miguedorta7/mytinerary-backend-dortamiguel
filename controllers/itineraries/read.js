import Itinerary from "../../models/Itinerary.js" 

 export default async (req,res,next) => {
    try {

        console.log(req.query)

        let objetosDeBusqueda={}
        let objetoDeOrdenamiento={}

        if (req.query._id) {
            objetosDeBusqueda._id = req.query._id
        }

        if (req.query._id) {
            objetoDeBusqueda._id = new RegExp(req.query._id,'i')
            //new RegExp(req.query.title,'i')
        }
        if (req.query.sort) {
            objetoDeOrdenamiento._id = req.query.sort
        }

        let allItineraries = await Itinerary.find(objetosDeBusqueda,'price duration photo tags')
        .populate('_id', 'photo name -id')
        .sort(objetoDeOrdenamiento)

        if (allItineraries.length>0) {
            return res.status(200).json({
                success: true,
                message: 'Itinerary found',
                response: allItineraries
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
