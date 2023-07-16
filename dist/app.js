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
const connection_1 = require("./connection");
const sequelize_1 = require("sequelize");
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/auth', router_1.default);
/*app.get('/users', async (req: any, res: any) => {
    try {
        let ans = await sequelize.query('select * from zoo1');
        console.log('=============>  \n',ans);
        res.send(ans)
    }
    catch (e) {
        console.log(e)
    }
})*/
class Sign extends sequelize_1.Model {
}
Sign.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: connection_1.sequelize,
    tableName: 'users',
});
exports.default = Sign;
// Define API routes
app.get('/fetchAllUsers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const signs = yield Sign.findAll();
        console.log('Response -> \n\n', signs);
        res.json(signs);
    }
    catch (error) {
        console.error('error ===============> \n', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const sign = yield Sign.create({ email, password });
        res.status(201).json(sign);
    }
    catch (error) {
        console.log('error-------', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.post('/follower', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield Sign.findOne({ where: { email, password } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'follower added successfully' });
        const followersCount = user.followers ? user.followers.length : 0;
        res.status(200).json({ followersCount });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.listen(3000, () => {
    console.log("server is running at 3000");
});
