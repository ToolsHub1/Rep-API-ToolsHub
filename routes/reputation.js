const express = require('express');
const router = express.Router();
const {
    manageReputation,
    removeBadReview,
    deleteProfileListing,
    autoRemoveBadReview
} = require('../controllers/reputationController');

// Online reputation management
router.post('/manage', manageReputation);

// Bad review removal
router.post('/remove-review', removeBadReview);

// Delete profile listing
router.delete('/delete-profile', deleteProfileListing);

// Auto bad review removal
router.post('/auto-remove-review', autoRemoveBadReview);

module.exports = router;
