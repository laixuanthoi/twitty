const mongoose = require("mongoose");
import { get } from "mongoose";
import { addUser } from "./src/function";
import { addOneAuth, getAllAuth } from "./src/controller";
import { setAxiosAuthDefault } from "./src/axios_config";
import axios from "axios";
import {
  getLoginSession,
  getFollowerList,
  look_up_user,
  getAllFollowerList,
} from "./src/twitter";

mongoose.connect("mongodb://localhost:27017/twitty", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const userNamee = "zhusu";
const authz = {
  csrf_token:
    "86c0d77e997d665353252019027ba3224bd48edade1fe28b1f5454e0a8f6e7436cc211783f12c20c67c4b8af70125e70e04113f287d475d5e86e296db392fcab223c32a367a14e52016ecb1e0203528d",
  baerer_token:
    "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
  cookies: `_ga=GA1.2.444895467.1624378291; kdt=IiCWsR9rHokXIAMcBcvF4rVyFGifLB7Oh5BWKK31; remember_checked_on=1; cd_user_id=17a516110e9b-00a4cab041b7c6-6373267-1fa400-17a516110ea6f7; des_opt_in=Y; _gcl_au=1.1.1842375659.1624950484; _gid=GA1.2.1318006274.1625371603; dnt=1; personalization_id="v1_I9pNDGStbw0XjftqT7P28Q=="; guest_id=v1%3A162616789471226709; ads_prefs="HBISAAA="; auth_token=a341d5274be47bebf63ac69d87fbe8ce6a5e6ec9; twid=u%3D1285240178664017921; ct0=86c0d77e997d665353252019027ba3224bd48edade1fe28b1f5454e0a8f6e7436cc211783f12c20c67c4b8af70125e70e04113f287d475d5e86e296db392fcab223c32a367a14e52016ecb1e0203528d; lang=en; external_referer=padhuUp37zj%2FgXOHcw9Rxtkux4aR%2FfUkE2hWiLs8K%2BM%3D|0|8e8t2xd8A2w%3D; at_check=true; mbox=PC#6ed3f6ef3aa94c02a27a575110eb815e.38_0#1689605789|session#d2e8076a639e45108098ecc2063f6fc0#1626362849`,
};

const main = async () => {
  // setAxiosAuthDefault(authz);
  // const data = await look_up_user(userNamee);
  // const id_str = data.id_str;
  // const users = await getFollowerList(
  //   data.id_str,
  //   data.screen_name,
  //   (count = 10),
  //   (cursor = -1)
  // );
  // const followerList = await getAllFollowerList(data.id_str, data.screen_name);
  // };'
};
main();
