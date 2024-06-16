import express from "express"
import { createAppointment } from "../controller/AppointmentController.js"

const router=express.Router()
router.post("/appointment",createAppointment)

export default router

