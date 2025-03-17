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
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const PORT = 3006;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ limit: "50mb" }));
app.use(express_1.default.json());
app.post("/get_price", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const json_data = req.body;
        console.log(json_data.searchParams);
        const result = yield axios_1.default.get(`https://api.0x.org/swap/permit2/price?${json_data.searchParams}`, {
            headers: {
                "0x-api-key": "497ed5b4-c81f-44f4-a6fb-4cc117700d7f",
                "0x-version": "v2",
            },
        });
        console.log(result.data);
        res.status(200).json(result.data);
    }
    catch (e) {
        console.log(e);
        res.status(200).json(e.data);
    }
}));
app.post("/get_quote", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const json_data = req.body;
        console.log(json_data.searchParams);
        const result = yield axios_1.default.get(`https://api.0x.org/swap/permit2/quote?${json_data.searchParams}`, {
            headers: {
                "0x-api-key": "497ed5b4-c81f-44f4-a6fb-4cc117700d7f",
                "0x-version": "v2",
            },
        });
        console.log(result.data);
        res.status(200).json(result.data);
    }
    catch (e) {
        console.log(e);
        res.status(200).json(e.data);
    }
}));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        message: "Ok",
    });
}));
app.listen(PORT, () => {
    console.log("App running at", PORT);
});
