import { Model } from "mongoose";
import { User, Group, Authentication } from "../src/model";

// ADDD
const addOneUser = (user_data) => {
  return new Promise((resolve, reject) => {
    const new_user = User({ ...user_data, groups: [], friends: [] });
    new_user.save((err) => {
      if (err) return reject(`ERROR! ${user_data.screen_name} exist`);
      resolve(`SUCCESS! insert ${user_data.screen_name} complete`);
    });
  });
};

const addOneGroup = (group_data) => {
  return new Promise((resolve, reject) => {
    const new_group = Group({
      ...group_data,
    });
    new_group.save((err) => {
      if (err) return reject(`ERROR ! ${group_data.group_screen_name} exist`);
      resolve(`SUCCESS! insert ${group_data.group_screen_name} complete`);
    });
  });
};

const addOneAuth = (auth_data) => {
  return new Promise((resolve, reject) => {
    const new_account = new Authentication({ ...auth_data });
    new_account.save((err) => {
      if (err) return reject(`ERROR! Account ${auth_data.username} exist`);
      resolve(`SUCCESS! insert ${auth_data.username} complete`);
    });
  });
};

// REMOVE
const removeOneUser = (screen_name) => {
  return new Promise((resolve, reject) => {
    User.deleteOne({ screen_name: screen_name }, (err) => {
      if (err) return reject(`ERROR! Failed to delete user ${screen_name}`);
      resolve(`SUCCESS! delete user ${screen_name} complete!`);
    });
  });
};

const removeOneGroup = (group_id_str) => {
  return new Promise((resolve, reject) => {
    Group.deleteOne({ group_id_str: group_id_str }, (err) => {
      if (err) return reject(`delete group ${group_id_str} error!`);
      resolve(`delete group ${group_id_str} complete!`);
    });
  });
};

const removeUserFromGroup = (user_id, group_id) => {};

// UPDATE

// INSERT
const addUserToGroup = (user_id, group_id) => {};

const addFriendsToUser = (user_id, user_data) => {};

// GET
const getAllAuth = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Authentication.find({});
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

const getOneAuth = (username) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Authentication.find({ username: username }).exec();
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

export {
  addOneUser,
  removeOneUser,
  addOneGroup,
  removeOneGroup,
  addOneAuth,
  getAllAuth,
};
