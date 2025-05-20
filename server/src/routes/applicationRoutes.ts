import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  checkExistingApplication,
  createApplication,
  listApplications,
  updateApplicationStatus,
} from "../controllers/applicationControllers";

const router = express.Router();

router.post("/", authMiddleware(["tenant"]), createApplication);
router.put("/:id/status", authMiddleware(["manager"]), updateApplicationStatus);
router.get("/", authMiddleware(["manager", "tenant"]), listApplications);
router.get(
  "/check-exists",
  authMiddleware(["tenant"]),
  checkExistingApplication
);

export default router;
