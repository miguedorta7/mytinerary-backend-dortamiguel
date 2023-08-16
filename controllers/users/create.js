import User from '../../models/User.js'

export default async (req, res) => {
    //logica necesaria para poder crear un usuario, con los métodos de mongoose .create
    try {
      let newUser = await User.create(req.body);
      return res.status(201).json({
        success: true,
        message: "user created",
        response: newUser,
      });
    } catch (error) {
      return res.status(400).json({
        success:false,
        message: "Not created",
        response: null
      })
    }
  }