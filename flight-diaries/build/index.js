"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var diaries_1 = __importDefault(require("./routes/diaries"));
var app = express_1.default();
app.use(express_1.default.json());
var PORT = 3003;
app.get('/ping', function (_req, res) {
    console.log('someone pinged here');
    res.send('pong');
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});
