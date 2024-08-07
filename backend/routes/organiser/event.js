import { Router } from "express";
const router = Router();

// Controller imports
import { createEvent, updateEvent, deleteEvent, getEvents } from "../../controllers/organiser/event.js";

// Middleware imports
import isOrganiser from "../../middlewares/auth/isOrganiser.js";

// Model imports

router.post("/event/create", isOrganiser, createEvent);
router.patch("/event/update/:id", isOrganiser, updateEvent);
router.delete("/event/delete/:id", isOrganiser, deleteEvent);
router.get("/events", isOrganiser, getEvents);

export default router;
