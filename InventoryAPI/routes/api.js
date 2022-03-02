const router = require('express').Router();

// Controllers
var IndexController = require('../controllers/IndexController');
var AuthController = require('../controllers/AuthController');
var ItemController = require('../controllers/ItemController');
var TransactionsController = require('../controllers/TransactionsController');

// Middleware 
const AuthMiddleware = require('../middleware/AuthMiddleware');
const RoleMiddleware = require('../middleware/RoleMiddleware');

// Auth routes
router.post('/login', AuthController.login);
router.post('/newuser', AuthMiddleware, RoleMiddleware(['manager']), AuthController.newUser);

// Item routes
router.get('/item', AuthMiddleware, RoleMiddleware(['manager', 'stock']), ItemController.index);
router.post('/item', AuthMiddleware, RoleMiddleware(['manager', 'stock']),  ItemController.create);
router.patch('/item', AuthMiddleware, RoleMiddleware(['manager', 'stock']),  ItemController.update);
router.delete('/item', AuthMiddleware, RoleMiddleware(['manager', 'stock']),  ItemController.deleteItem);

// Transactions routes
router.get('/transactions', AuthMiddleware, RoleMiddleware(['manager']),  TransactionsController.index);
router.post('/transactions', AuthMiddleware, RoleMiddleware(['manager', 'cash']),  TransactionsController.create);
router.patch('/transactions', AuthMiddleware, RoleMiddleware(['manager']),  TransactionsController.update);

module.exports = router;