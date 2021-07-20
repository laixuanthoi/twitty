"use strict";
exports.__esModule = true;
exports.UserTMP = exports.Authentication = exports.Group = exports.User = void 0;
var mongoose = require("mongoose");
// Schema
var AuthenticationSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: String,
    csrf_token: String,
    cookies: String,
    baerer_token: String,
    is_alive: { type: Boolean, "default": false }
}, { versionKey: false });
var GroupSchema = new mongoose.Schema({
    group_screen_name: { type: String, required: true, unique: true },
    group_name: String,
    profile_pic_url: String
}, { versionKey: false });
var UserSchema = new mongoose.Schema({
    id_str: { type: String, required: true, unique: true },
    name: String,
    screen_name: { type: String, required: true, unique: true },
    description: String,
    followers_count: Number,
    friends_count: Number,
    favourites_count: Number,
    url: String,
    created_at: String,
    profile_image_url: String,
    groups: Array,
    friends: Array
}, { versionKey: false });
// MODEL
var User = new mongoose.model("User", UserSchema);
exports.User = User;
var UserTMP = new mongoose.model("UserTMP", UserSchema);
exports.UserTMP = UserTMP;
var Authentication = new mongoose.model("Authentication", AuthenticationSchema);
exports.Authentication = Authentication;
var Group = new mongoose.model("Group", GroupSchema);
exports.Group = Group;
