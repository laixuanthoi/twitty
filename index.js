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
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/twitty", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
var userNamee = "zhusu";
var authz = {
    csrf_token: "86c0d77e997d665353252019027ba3224bd48edade1fe28b1f5454e0a8f6e7436cc211783f12c20c67c4b8af70125e70e04113f287d475d5e86e296db392fcab223c32a367a14e52016ecb1e0203528d",
    baerer_token: "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    cookies: "_ga=GA1.2.444895467.1624378291; kdt=IiCWsR9rHokXIAMcBcvF4rVyFGifLB7Oh5BWKK31; remember_checked_on=1; cd_user_id=17a516110e9b-00a4cab041b7c6-6373267-1fa400-17a516110ea6f7; des_opt_in=Y; _gcl_au=1.1.1842375659.1624950484; _gid=GA1.2.1318006274.1625371603; dnt=1; personalization_id=\"v1_I9pNDGStbw0XjftqT7P28Q==\"; guest_id=v1%3A162616789471226709; ads_prefs=\"HBISAAA=\"; auth_token=a341d5274be47bebf63ac69d87fbe8ce6a5e6ec9; twid=u%3D1285240178664017921; ct0=86c0d77e997d665353252019027ba3224bd48edade1fe28b1f5454e0a8f6e7436cc211783f12c20c67c4b8af70125e70e04113f287d475d5e86e296db392fcab223c32a367a14e52016ecb1e0203528d; lang=en; external_referer=padhuUp37zj%2FgXOHcw9Rxtkux4aR%2FfUkE2hWiLs8K%2BM%3D|0|8e8t2xd8A2w%3D; at_check=true; mbox=PC#6ed3f6ef3aa94c02a27a575110eb815e.38_0#1689605789|session#d2e8076a639e45108098ecc2063f6fc0#1626362849"
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
main();
