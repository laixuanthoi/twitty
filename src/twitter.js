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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getAllFollowerList = exports.getFollowerList = exports.getLoginSession = exports.look_up_user = exports.getUserDetail = exports.getAllFriendList = exports.getFriendList = void 0;
var axios_1 = require("axios");
var puppeteer = require("puppeteer");
var getFriendList = function (user_id, screen_name, count, cursor) {
    if (count === void 0) { count = 200; }
    if (cursor === void 0) { cursor = -1; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    axios_1["default"]
                        .request({
                        method: "get",
                        url: "friends/list.json",
                        headers: {
                            authority: "api.twitter.com",
                            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                            referer: "https://twitter.com/" + screen_name + "/following"
                        },
                        params: {
                            user_id: user_id,
                            screen_name: screen_name,
                            cursor: cursor,
                            count: count,
                            skip_status: 1,
                            include_user_entities: false
                        }
                    })
                        .then(function (response) {
                        var users = response.data.users;
                        var next_cursor = Number(response.data.next_cursor);
                        return resolve({ users: users, next_cursor: next_cursor });
                    })["catch"](function (error) { return reject(error); });
                })];
        });
    });
};
exports.getFriendList = getFriendList;
var getAllFriendList = function (_user_id, _screen_name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                var _next_cursor, arr_users_1, _a, users, next_cursor, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 4, , 5]);
                            _next_cursor = -1;
                            arr_users_1 = [];
                            _b.label = 1;
                        case 1:
                            if (!(_next_cursor != 0)) return [3 /*break*/, 3];
                            return [4 /*yield*/, getFriendList(_user_id, _screen_name, 200, _next_cursor)];
                        case 2:
                            _a = _b.sent(), users = _a.users, next_cursor = _a.next_cursor;
                            _next_cursor = next_cursor;
                            users.map(function (item) { return arr_users_1.push(item); });
                            console.log(arr_users_1.length);
                            return [3 /*break*/, 1];
                        case 3: return [2 /*return*/, resolve(arr_users_1)];
                        case 4:
                            error_1 = _b.sent();
                            return [2 /*return*/, reject(error_1)];
                        case 5: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
exports.getAllFriendList = getAllFriendList;
var getFollowerList = function (user_id, screen_name, count, cursor) {
    if (count === void 0) { count = 200; }
    if (cursor === void 0) { cursor = -1; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    axios_1["default"]
                        .request({
                        method: "get",
                        url: "followers/list.json",
                        headers: {
                            authority: "api.twitter.com",
                            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                            referer: "https://twitter.com/" + screen_name
                        },
                        params: {
                            user_id: user_id,
                            screen_name: screen_name,
                            cursor: cursor,
                            count: count,
                            skip_status: 1,
                            include_user_entities: false
                        }
                    })
                        .then(function (response) {
                        var users = response.data.users;
                        var next_cursor = Number(response.data.next_cursor);
                        return resolve({ users: users, next_cursor: next_cursor });
                    })["catch"](function (error) { return reject(error); });
                })];
        });
    });
};
exports.getFollowerList = getFollowerList;
var getAllFollowerList = function (_user_id, _screen_name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                var _next_cursor, arr_users_2, _a, users, next_cursor, error_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 4, , 5]);
                            _next_cursor = -1;
                            arr_users_2 = [];
                            _b.label = 1;
                        case 1:
                            if (!(_next_cursor != 0)) return [3 /*break*/, 3];
                            return [4 /*yield*/, getFollowerList(_user_id, _screen_name, 200, _next_cursor)];
                        case 2:
                            _a = _b.sent(), users = _a.users, next_cursor = _a.next_cursor;
                            _next_cursor = next_cursor;
                            users.map(function (item) { return arr_users_2.push(item); });
                            console.log(arr_users_2.length);
                            return [3 /*break*/, 1];
                        case 3: return [2 /*return*/, resolve(arr_users_2)];
                        case 4:
                            error_2 = _b.sent();
                            return [2 /*return*/, reject(error_2)];
                        case 5: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
exports.getAllFollowerList = getAllFollowerList;
var getUserDetail = function (user_id, screen_name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                axios_1["default"]
                    .request({
                    method: "get",
                    url: "users/lookup.json",
                    headers: {
                        authority: "api.twitter.com",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                        referer: "https://twitter.com/" + screen_name + "/following"
                    },
                    params: {
                        user_id: user_id,
                        screen_name: screen_name,
                        include_entities: 0,
                        tweet_mode: 0
                    }
                })
                    .then(function (response) {
                    return resolve(response.data);
                })["catch"](function (error) { return reject(error); });
            })];
    });
}); };
exports.getUserDetail = getUserDetail;
var look_up_user = function (screen_name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                axios_1["default"]
                    .request({
                    method: "get",
                    url: "users/show.json",
                    headers: {
                        authority: "api.twitter.com",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                        referer: "https://twitter.com/" + screen_name + "/following"
                    },
                    params: {
                        screen_name: screen_name
                    }
                })
                    .then(function (response) {
                    resolve(response.data);
                })["catch"](function (error) { return reject(error); });
            })];
    });
}); };
exports.look_up_user = look_up_user;
var getLoginSession = function (username, password) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                var browser, page, response, cookies, header, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, puppeteer.launch({ headless: true })];
                        case 1:
                            browser = _a.sent();
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 14, 15, 17]);
                            return [4 /*yield*/, browser.newPage()];
                        case 3:
                            page = _a.sent();
                            return [4 /*yield*/, page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, page.goto("https://twitter.com/login")];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, page.waitForSelector("input[name='session[username_or_email]']")];
                        case 6:
                            _a.sent();
                            return [4 /*yield*/, page.type("input[name='session[username_or_email]']", username)];
                        case 7:
                            _a.sent();
                            return [4 /*yield*/, page.type("input[name='session[password]']", password)];
                        case 8:
                            _a.sent();
                            return [4 /*yield*/, page.click('div[data-testid="LoginForm_Login_Button3"]')];
                        case 9:
                            _a.sent();
                            return [4 /*yield*/, page.waitForTimeout(1000)];
                        case 10:
                            _a.sent();
                            return [4 /*yield*/, page.goto("https://twitter.com/home")];
                        case 11:
                            _a.sent();
                            return [4 /*yield*/, Promise.all([
                                    page.waitForResponse(function (response) {
                                        return response
                                            .url()
                                            .includes("https://twitter.com/i/api/2/timeline/home.json");
                                    }),
                                ])];
                        case 12:
                            response = (_a.sent())[0];
                            return [4 /*yield*/, page.evaluate(function () {
                                    return document.cookie;
                                })];
                        case 13:
                            cookies = _a.sent();
                            header = response._request._headers;
                            resolve({
                                csrf_token: header["x-csrf-token"],
                                baerer_token: header["authorization"],
                                cookies: cookies
                            });
                            return [3 /*break*/, 17];
                        case 14:
                            error_3 = _a.sent();
                            reject(error_3);
                            return [3 /*break*/, 17];
                        case 15:
                            console.log("close");
                            return [4 /*yield*/, browser.close()];
                        case 16:
                            _a.sent();
                            return [7 /*endfinally*/];
                        case 17: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
exports.getLoginSession = getLoginSession;
