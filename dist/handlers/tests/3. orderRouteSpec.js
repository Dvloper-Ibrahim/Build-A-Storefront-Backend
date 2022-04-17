"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var server_1 = __importDefault(require("../../server"));
var _1__userRouteSpec_1 = require("./1. userRouteSpec");
var request = (0, supertest_1.default)(server_1.default);
describe('3 - Test Order Route', function () {
    it('3.1 Should create order with \'complete\' status', function (done) {
        var order = {
            productid: 1,
            quantity: 5,
            userid: 1,
            status: "complete"
        };
        request.post('/orders').send(order).set("Accept", "application/json")
            .set("Authorization", "Bearer ".concat(_1__userRouteSpec_1.token))
            .expect("Content-Type", /json/)
            .expect(201).then(function (res) {
            done();
        }).catch(function (err) { return done(err); });
    });
    it('3.2 Should create order with \'active\' status', function (done) {
        var order = {
            productid: 1,
            quantity: 4,
            userid: 1,
            status: "active"
        };
        request.post('/orders').send(order).set("Accept", "application/json")
            .set("Authorization", "Bearer ".concat(_1__userRouteSpec_1.token))
            .expect("Content-Type", /json/)
            .expect(201).then(function (res) {
            done();
        }).catch(function (err) { return done(err); });
    });
    it('3.3 Should show current order by user', function (done) {
        request.get('/orders/current-by-user/1')
            .set("Authorization", "Bearer ".concat(_1__userRouteSpec_1.token))
            .expect("Content-Type", /json/)
            .expect(200).then(function (res) {
            done();
        }).catch(function (err) { return done(err); });
    });
    it('3.4 Should show complete order by user', function (done) {
        request.get('/orders/complete-by-user/1')
            .set("Authorization", "Bearer ".concat(_1__userRouteSpec_1.token))
            .expect("Content-Type", /json/)
            .expect(200).then(function (res) {
            done();
        }).catch(function (err) { return done(err); });
    });
    it('3.5 Should show order by its id', function (done) {
        request.get('/orders/2')
            .set("Authorization", "Bearer ".concat(_1__userRouteSpec_1.token))
            .expect("Content-Type", /json/)
            .expect(200).then(function (res) {
            done();
        }).catch(function (err) { return done(err); });
    });
    it('3.6 Should show all orders', function (done) {
        request.get('/orders')
            .set("Authorization", "Bearer ".concat(_1__userRouteSpec_1.token))
            .expect("Content-Type", /json/)
            .expect(200).then(function (res) {
            console.log(res.body);
            done();
        }).catch(function (err) { return done(err); });
    });
    it('3.7 Should add product to an order_id', function (done) {
        var data = {
            product_id: 1,
            quantity: 6
        };
        request.post('/orders/1/products').send(data)
            .set("Accept", "application/json")
            .set("Authorization", "Bearer ".concat(_1__userRouteSpec_1.token))
            .expect("Content-Type", /json/)
            .expect(201).then(function (res) {
            done();
        }).catch(function (err) { return done(err); });
    });
    it('3.8 Should get orders by order_id foreign key', function (done) {
        request.get('/orders/by_order_id/1')
            .set("Authorization", "Bearer ".concat(_1__userRouteSpec_1.token))
            .expect("Content-Type", /json/)
            .expect(200).then(function (res) {
            console.log(res.body);
            done();
        }).catch(function (err) { return done(err); });
    });
});
