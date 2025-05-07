import express from "express"


const router = express.Router()


router.get('/table', tableFeedbackController)
router.get('/create', createFeedbackController)
router.get('/edit/:id', editFeedbackController)
router.get('/delete/:id', deleteFeedbackController)