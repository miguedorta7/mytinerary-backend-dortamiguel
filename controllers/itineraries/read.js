import Itinerary from "../../models/Itinerary.js" 

 export default async (req,res,next) => {
    try {


       /*  let queries = {}

        if (req.query._id) {
            //Si existe la consulta llename el objeto de consultas para hacer el filtro.
            queries._id = req.query._id
            //al objeto de filtro le agrego la propiedad de busqueda y le asigno el valor que me envia el cliente en la query
        } */
        console.log(req.query)
        let allItineraries = await Itinerary.find({city_id:req.query._id})
        //.populate('city_id','city photo admin_id')
         .populate({
            path:"city_id",
            select:"city photo admin_id",
            populate:{
                path: "admin_id",
                select:"name photo"
            }
        }) 
            return res.status(200).json({
                success: true,
                message: ' itineraries found',
                response: allItineraries
            })
        }catch (error) {
            next(error)
        }
    } 

