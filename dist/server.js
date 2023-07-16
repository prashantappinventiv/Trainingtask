"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
// Create an instance of Express
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Create a Sequelize instance
const sequelize = new sequelize_1.Sequelize('postgres', 'postgres', '    ', {
    dialect: 'postgres',
});
// Define the Sign model
class Sign extends sequelize_1.Model {
}
Sign.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'users',
});
// Define API routes
app.get('/signs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const signs = yield Sign.findAll();
        res.json(signs);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.post('/signs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        const sign = yield Sign.create({ name, description });
        res.status(201).json(sign);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Sync Sequelize models and start the server
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
