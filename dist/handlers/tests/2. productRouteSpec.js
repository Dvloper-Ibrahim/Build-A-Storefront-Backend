"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var server_1 = __importDefault(require("../../server"));
var _1__userRouteSpec_1 = require("./1. userRouteSpec");
var request = (0, supertest_1.default)(server_1.default);
describe('2 - Test Product Routes', function () {
    it('2.1 Should create new product', function (done) {
        var product = {
            name: "Teama_Milk",
            price: 10,
            category: "cheese"
        };
        request.post('/products').send(product).set("Accept", "application/json")
            .set("Authorization", "Bearer ".concat(_1__userRouteSpec_1.token))
            .expect("Content-Type", /json/)
            .expect(201).then(function (res) {
            done();
        }).catch(function (err) { return done(err); });
    });
    it('2.2 Should show product by its id', function (done) {
        request.get('/products/1')
            .expect("Content-Type", /json/)
            .expect(200).then(function (res) {
            done();
        }).catch(function (err) { return done(err); });
    });
    it('2.3 Should show all products', function (done) {
        request.get('/products')
            .expect("Content-Type", /json/)
            .expect(200).then(function (res) {
            console.log(res.body);
            done();
        }).catch(function (err) { return done(err); });
    });
    it('2.4 Should return products ordered by category', function (done) {
        request.post('/products/by-category')
            .expect("Content-Type", /json/)
            .expect(200).then(function (res) {
            done();
        }).catch(function (err) { return done(err); });
    });
});
