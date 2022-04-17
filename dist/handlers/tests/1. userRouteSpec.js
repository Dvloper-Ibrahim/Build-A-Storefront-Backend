"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
var supertest_1 = __importDefault(require("supertest"));
var server_1 = __importDefault(require("../../server"));
var request = (0, supertest_1.default)(server_1.default);
describe('1 - Test User Routes', function () {
    it('1.1 Should create new user', function (done) {
        var user = {
            firstName: "Ahmed",
            lastName: "Khalaf",
            input_password: parseInt("6trtiu90")
        };
        request.post('/users').send(user).set("Accept", "application/json")
            .expect('Content-Type', /json/)
            .expect(201).then(function (res) {
            console.log(res.body);
            exports.token = res.body;
            done();
        }).catch(function (error) { return done(error); });
    });
    it('1.2 Should show user by his/her id', function (done) {
        request.get('/users/1').set("Authorization", "Bearer ".concat(exports.token))
            .expect('Content-Type', /json/)
            .expect(200).then(function (res) {
            done();
        }).catch(function (error) { return done(error); });
    });
    it('1.3 Should show all Users', function (done) {
        request.get('/users').set("Authorization", "Bearer ".concat(exports.token))
            .expect('Content-Type', /json/)
            .expect(200).then(function (res) {
            console.log(res.body);
            done();
        }).catch(function (error) { return done(error); });
    });
});
