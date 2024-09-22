const {z}=require("zod");

const SignupSchema=z.object({
    title:z.
    string({required_error:"Title is required"})
    .trim()
    .max(100,{message:"Title have maximum 100 of characters"})
    .min(5,{message:"Title have atleast 5 of characters"}),

    description:z.
     string({required_error:"Description is required"})
     .trim()
     .min(5,{message:"Description have atleast 5 of characters"})
     .max(255,{message:"Description have maximum 255 of characters"})
})
module.exports=SignupSchema;