const ErrorMiddleware=(err,req,res,next)=>{
      let status=err.status;
      let message=err.message;
      let extraDetails=err.extraDetails;
    
return res.status(status).json({message,extraDetails});
}
module.exports=ErrorMiddleware;