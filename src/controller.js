"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.getAllAuth = exports.addOneAuth = exports.removeOneGroup = exports.addOneGroup = exports.removeOneUser = exports.addOneUser = void 0;
var model_1 = require("../src/model");
// ADDD
var addOneUser = function (user_data) {
    return new Promise(function (resolve, reject) {
        var new_user = model_1.User(__assign(__assign({}, user_data), { groups: [], friends: [] }));
        new_user.save(function (err) {
            if (err)
                return reject("ERROR! " + user_data.screen_name + " exist");
            resolve("SUCCESS! insert " + user_data.screen_name + " complete");
        });
    });
};
exports.addOneUser = addOneUser;
var addOneGroup = function (group_data) {
    return new Promise(function (resolve, reject) {
        var new_group = model_1.Group(__assign({}, group_data));
        new_group.save(function (err) {
            if (err)
                return reject("ERROR ! " + group_data.group_screen_name + " exist");
            resolve("SUCCESS! insert " + group_data.group_screen_name + " complete");
        });
    });
};
exports.addOneGroup = addOneGroup;
var addOneAuth = function (auth_data) {
    return new Promise(function (resolve, reject) {
        var new_account = new model_1.Authentication(__assign({}, auth_data));
        new_account.save(function (err) {
            if (err)
                return reject("ERROR! Account " + auth_data.username + " exist");
            resolve("SUCCESS! insert " + auth_data.username + " complete");
        });
    });
};
exports.addOneAuth = addOneAuth;
// REMOVE
var removeOneUser = function (screen_name) {
    return new Promise(function (resolve, reject) {
        model_1.User.deleteOne({ screen_name: screen_name }, function (err) {
            if (err)
                return reject("ERROR! Failed to delete user " + screen_name);
            resolve("SUCCESS! delete user " + screen_name + " complete!");
        });
    });
};
exports.removeOneUser = removeOneUser;
var removeOneGroup = function (group_id_str) {
    return new Promise(function (resolve, reject) {
        model_1.Group.deleteOne({ group_id_str: group_id_str }, function (err) {
            if (err)
                return reject("delete group " + group_id_str + " error!");
            resolve("delete group " + group_id_str + " complete!");
        });
    });
};
exports.removeOneGroup = removeOneGroup;
var removeUserFromGroup = function (user_id, group_id) { };
// UPDATE
// INSERT
var addUserToGroup = function (user_id, group_id) { };
var addFriendsToUser = function (user_id, user_data) { };
// GET
var getAllAuth = function () {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, model_1.Authentication.find({})];
                case 1:
                    data = _a.sent();
                    resolve(data);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    reject(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
exports.getAllAuth = getAllAuth;
var getOneAuth = function (username) {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, model_1.Authentication.find({ username: username }).exec()];
                case 1:
                    data = _a.sent();
                    resolve(data);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    reject(err_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
};
