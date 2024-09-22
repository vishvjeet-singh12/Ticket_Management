const express=require("express");
const router=express.Router();
const TicketContoller=require("../Controller/TicketController");
const Validator=require("../Middleware/Validators");
const SignupSchema=require("../Middleware/SignupSchema");

///1.url is http://localhost:3000/api/ticketpost
router.post("/ticketpost",Validator(SignupSchema),TicketContoller.TicketPost);

//2. http://localhost:3000/api/ticketget
router.get("/ticketget",TicketContoller.GetAllTicket);

// 3. http://localhost:3000/api//ticketById/<id>
router.get("/ticketById/:id",TicketContoller.TicketByID);

//4.http://localhost:3000/api/ticketupdate/<id>
router.patch("/ticketupdate/:id",TicketContoller.UpdateTicket);

//5.http://localhost:3000/api/ticketdelete/<id>
router.delete("/ticketdelete/:id",TicketContoller.DeleteById);

module.exports=router;