import e from "express";
import { bookAppointment, getAppointmentById, getDoctor, getOpDetails, updateAppointmentStatus } from "../controllers/commonController.js";




const router= e.Router();

router.get('/get-op-details/:opId',getOpDetails);
router.get('/active-op')
router.get('/search-doctor',getDoctor)
router.post('/book-appointment',bookAppointment)
router.get('/ap-details/:id', getAppointmentById);
router.put('/ap-update/:id', updateAppointmentStatus);
router.delete('/delete-account')
router.get('/check-employee')

export {router as commonRouter}