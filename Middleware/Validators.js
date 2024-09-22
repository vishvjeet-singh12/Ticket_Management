const Validators=(schema)=>async(req,res,next)=>{
    try {
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;

        next();
    } catch (err) {
        let status=422;
        let message="Fill out details";
        let extraDetails=err.errors[0].message


        let error={
            status,message,extraDetails
        }
        next(error);
    }
}
module.exports=Validators;