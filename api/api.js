const express = require ('express');
const router = express.Router();
module.exports = router


router.post('/post-something', (req, res) => {
    res.send(req.body);
    res.status(200);
});
