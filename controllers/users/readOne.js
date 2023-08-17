import User from "../../models/User.js";

export default async(req,res) => { 
    try {
        let oneUser = await User.findOne({_id:req.params.user_id}).select("mail photo -_id")  //busca segun el objeto de condiciones (en este caso le paso el id)
        //let oneUserId = await User.findById(req.params.id)  //busca solo por ID
        //find BUSCA a todos (en este caso usuarios)
        return res.status(200).json({
            success: true,
            message: "users found",
            response: oneUser
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "not found",
            response: null
        })
    }
}