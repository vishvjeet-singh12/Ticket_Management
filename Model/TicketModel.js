const mongoose=require("mongoose");

const ticketSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
      type: String,
        enum:['open','closed'],
        default:'open'
    },
    createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdatedAt: {
    type: Date,
    default: Date.now,
  },
})

ticketSchema.pre('findOneAndUpdate', function (next) {
    this.set({ lastUpdatedAt: new Date() });
    next();
  });

  const TicketModel=mongoose.model("Ticket",ticketSchema);
  module.exports=TicketModel;
