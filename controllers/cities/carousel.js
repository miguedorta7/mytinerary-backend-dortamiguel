/* import City from "../../models/City.js"


export default async (req,res,next)=>{
try {
    let all = await City.find({},'city photo').sort({fundation:'-1'}).limit(12)
    //let all = await City.find({},'city photo').sort({fundation:'desc'})
} catch (error) {
    next(error)
}
}
 */