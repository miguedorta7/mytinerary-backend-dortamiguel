
 import City from "../../models/City.js"



export default async (req,res,next)=>{
try {
    let all = await City.find({},'city photo').sort({fundation:'-1'}).limit(12)
    //let all = await City.find({},'city photo').sort({fundation:'desc'})

    let count = await City.countDocuments()
    return res.status(200).json({
        success: true,
        message: "cities to show on carousel",
        data_carousel: all,
        //count: count estructuracion
        count
    })

} catch (error) {
    next(error)
}
}

