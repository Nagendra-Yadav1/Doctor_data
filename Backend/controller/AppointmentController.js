import { Appointment } from "../models/AppointmentModel.js";

export const createAppointment = async (req, res) => {
    const { time, details } = req.body;
    console.log(req.body);


    if (!time || !details) {
        return res.status(400).json({ success: false, message: "Please fill in all fields!" });
    }


    try {
        let appointment = await Appointment.findOne({ time });
        if (appointment) {
            return res.status(409).json({ success: false, message: "This time is already taken" });
        }

        const data = await Appointment.create({ time, details });
        res.status(201).json({
            success: true,
            message: "Appointment created successfully!",
            data: data
        });
    } catch (error) {
        console.log(error)
    }
};


export const  getAppointment=async(req,res)=>{
    
}
