import Activity from "../../models/Activity.js"

export default async (req,res,next) => {
    try {
        let oneActivity = await Activity.findById(req.params._id)
        if (oneActivity) {
            return res.status(200).json({
                success: true,
                message: 'Activity Found',
                response: oneActivity
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Not Found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
} 