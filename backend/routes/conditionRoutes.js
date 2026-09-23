const express = require('express');
const ConditionController = require('../controllers/conditionController');
const authMiddleware = require('../middleware/authMiddleware');
const requireAdmin = require('../middleware/requireAdmin');

const router = express.Router();
const adminOnly = [authMiddleware, requireAdmin];

// Public read routes
router.get('/', ConditionController.getAllConditions);
router.get('/:name', ConditionController.getConditionByName);

// Admin-only write routes
router.post('/', adminOnly, ConditionController.createCondition);
router.put('/:name', adminOnly, ConditionController.updateCondition);
router.delete('/:name', adminOnly, ConditionController.deleteCondition);

router.post('/:name/remedies', adminOnly, ConditionController.addRemedy);
router.post('/:name/exercises', adminOnly, ConditionController.addExercise);
router.post('/:name/nutrition', adminOnly, ConditionController.addNutrition);

router.post('/:name/videos', adminOnly, ConditionController.addVideo);
router.delete('/:name/videos/:videoId', adminOnly, ConditionController.removeVideo);

module.exports = router;
