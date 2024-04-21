"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// For using dotenv variables
require("dotenv/config");
var express_1 = require("express");
var app = (0, express_1.default)();
// get the port from env variable
var PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use(express_1.default.static('dist'));
// health cehck endpoint
app.get('/health', function (_req, res) {
    res.send('ok');
});
app.listen(PORT, function () {
    console.log("server started on port ".concat(PORT));
});
exports.default = app;
