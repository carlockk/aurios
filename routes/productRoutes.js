
const express = require('express');
const auth = require('../middleware/authorization');
const {
  createGuitar,
  getAllGuitars,
  getGuitarById,
  updateGuitar,
  deleteGuitar
} = require('../controllers/guitarController');

const router = express.Router();

router.post('/create', auth, createGuitar);
router.get('/readall', getAllGuitars);
router.get('/readone/:id', getGuitarById);
router.put('/update/:id', auth, updateGuitar);
router.delete('/delete/:id', auth, deleteGuitar);

module.exports = router;
