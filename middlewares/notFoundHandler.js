export default function(req, res, next) {
    //console.log(req.url);
    //console.log(req.method);
    return res.status(404).json({
      success: false,
      message: 'Not Found '+req.method+' '+req.url,
      response: null
    })
  }