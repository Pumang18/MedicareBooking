

import User from '../models/UserSchema.js'

export const updateUser=async (req,res)=>{
    const id=req.params.id;
    try {
        const updatedUser=await User.findByIdAndUpdate(id,{$set:req.body}, {new:true})

        res.status(200).json({success:true,message:"Succesfully Updated",data:updatedUser})
    } catch (error) {
        res.status(500).json({success:false,message:"Updation Unsuccessful"})

    }
}

export const deleteUser=async (req,res)=>{
    const id=req.params.id;
    try {
        await User.findOneAndDelete(id)

        res.status(200).json({success:true,message:"Succesfully Deleted"})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Delete"})

    }
}

export const getSingleUser=async (req,res)=>{
    const id=req.params.id;
    try {
        const user=await User.findById(id).select("-password")

        res.status(200).json({success:true,message:"User Found",data:user})
    } catch (error) {
        res.status(404).json({success:false,message:"No user found"})

    }
}


export const getAllUser=async (req,res)=>{
    const id=req.params.id;
    try {
        const users=await User.find({}).select("-password")
        // const users=await User.find({})

        res.status(200).json({success:true,message:"Users Found",data:users})
    } catch (error) {
        res.status(404).json({success:false,message:"Not found"})

    }
}