import { look_up_user, getFriendList } from "../src/twitter";
import { addOneUser } from "../src/controller";
import {} from "../src/model";

const addUser = async (screen_name: string) => {
  return new Promise((resolve, reject) => {
    look_up_user(screen_name)
      .then((res) => {
        addOneUser({ ...res })
          .then(resolve)
          .catch();
      })
      .catch((err) => reject("ERROR! user not found "));
  });
};

const addAuth = async () => {};

export { addUser };
