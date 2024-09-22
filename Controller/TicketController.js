const TicketModel=require("../Model/TicketModel");

const TicketPost=async(req,res)=>{
     try {
        const {title,description}=req.body;
         const ticket=await TicketModel.create({title,description});
         res.json({
            message:"Successful",
            data:ticket
         })
     } catch (error) {
        console.log(error)
     }
}

 const GetAllTicket=async(req,res)=>{
    try {
        const allTicket=await TicketModel.find();
        res.json({
            message:"All Tickets",
            data:allTicket
        })
    } catch (error) {
        console.log(error);
    }
 }

 const TicketByID=async(req,res)=>{
     try {
        const id=req.params.id;
        const ticket=await TicketModel.findOne({_id:id});
         if(ticket){
            res.json({
                message:"Ticket",
                data:ticket
            })
         }
         else{
            res.json({
                message:"Ticket is not found"
            })
         }
     } catch (error) {
        console.log(error);
     }
 }
 const UpdateTicket=async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedData=req.body;
        const ticket=await TicketModel.findByIdAndUpdate(id,
           updatedData,{new:true}
        )
        if(ticket){
            res.json({
                message:"Ticket is updated",
                data:ticket
            })
        }
        else{
            res.json({
                message:"Ticket is not updated"
            })
        }
    } catch (error) {
        console.log(error);
    }
 }

 const DeleteById=async(req,res)=>{
     try {
        const id=req.params.id;
        const ticket=await TicketModel.deleteOne({_id:id});
        if(ticket){
            res.json({
                message:"Successfully deleted"
            })
        }
        else{
            res.json({
                message:"Ticket not found"
            })
        }
     } catch (error) {
        console.log(error);
     }
 }
 module.exports={TicketPost,GetAllTicket,TicketByID,UpdateTicket,DeleteById};