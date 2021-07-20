const mongoose = require("mongoose");

// Schema
const AuthenticationSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: String,
    csrf_token: String,
    cookies: String,
    baerer_token: String,
    is_alive: { type: Boolean, default: false },
  },
  { versionKey: false }
);

const GroupSchema = new mongoose.Schema(
  {
    group_screen_name: { type: String, required: true, unique: true },
    group_name: String,
    profile_pic_url: String,
  },
  { versionKey: false }
);

const UserSchema = new mongoose.Schema(
  {
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
    friends: Array,
  },
  { versionKey: false }
);

// MODEL
const User = new mongoose.model("User", UserSchema);
const UserTMP = new mongoose.model("UserTMP", UserSchema);
const Authentication = new mongoose.model(
  "Authentication",
  AuthenticationSchema
);
const Group = new mongoose.model("Group", GroupSchema);

export { User, Group, Authentication, UserTMP };
