

import User from '../models/UserSchema.js'
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'

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

export const getUserProfile=async(req,res)=>{
    const userId=req.userId

    try {
        const user=await User.findById(userId)

        if(!user){
            return res.status(404).json({success:false,message:'User not Found'})
        }
        const {password, ...rest}=user._doc

        res.status(200).json({success:true,message:'Profile info is getting',data:{...rest}})
    } catch (err) {
        res.status(500).json({success:false,message:"Something went wrong"});
    }
}



export const getMyAppointments=async(req,res)=>{
    try {
        // retrieve appo from booking for specific user
        const bookings=await Booking.find({user:req.userId})

        //extract doctor ids from appointment bookings
        const doctorIds=bookings.map(el=>el.doctor.id)

        //retrieve doctors using doctor ids
        const doctors=await Doctor.find({_id:{$in:doctorIds}}).select('-password')

        res.status(200).json({success:true,message:'Appointments are getting ',data:doctors})
    } catch (err) {
        res.status(500).json({success:false,message:"Something went wrong"});
    }
}