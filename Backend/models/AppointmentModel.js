import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    time: {
        type: String, 
        required: true, 
    },
    details: {
        type: String,
        required: true,
        minlength: [3, "Time Must Contain At Least 3 Characters!"]
    }
});


export const Appointment = mongoose.model("Appointment", appointmentSchema);


