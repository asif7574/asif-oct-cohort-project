import { Appointment } from "../models/appointmentModel.js";
import { Opdata } from "../models/opdataModel.js";
import { Patient } from "../models/patientModel.js";





export const updateOpDataD = async (req, res, next) => {
    try {
        

        

        res.json({ message: "op-data fetched", });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};
export const getWaitingAp= async (req, res, next) => {
    try {
        // console.log(req.employee);
        const docId=req.employee.id
        
        
        const apData = await Appointment.find({doctor:docId , status: "Waitig for Approval" }).sort({ createdAt: -1 }).populate("doctor").populate("patient"); 
       
        
        res.json({ message: "Waiting Appointment data fetched", data: apData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};
export const getDocOp= async (req, res, next) => {
    try {
        // console.log(req.employee);
        const docId=req.employee.id
        
        
        const apData = await Opdata.find({ doctor:docId ,status: "ACTIVE" }).sort({ createdAt: -1 }).populate("doctor").populate("patient"); 
       
        
        res.json({ message: "Active op data fetched", data: apData });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};



