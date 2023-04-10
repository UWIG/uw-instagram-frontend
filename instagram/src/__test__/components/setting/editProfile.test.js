import { render, screen } from "@testing-library/react";
// import {screen} from "@testing-library/jest-dom"
import axiosAPI from "../../config/axiosConfig"
import UserContext from "../../../contexts/user-context";
import userEvent from "@testing-library/user-event";

import EditProfile from "../../../components/setting/editProfile";
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }
};

jest.mock("../../config/axiosConfig")
test("photos component test", async () => {
  axiosAPI.get.mockResolvedValueOnce({
    data: {  sign: 1  },
  });

  const user = {username:"123", avatar:"", fullname:""}
  render(<UserContext.Provider value={{ user:user , setUser: ()=>{}}}>
    <EditProfile />
  </UserContext.Provider>);

  const test_updateUser = screen.getByTestId(
    "test-updateUser"
  );
  await userEvent.click(test_updateUser);

  // const test_setOldPwd = screen.getByTestId("test-setOldPwd");
  // await userEvent.type(test_setOldPwd,"abc")

  // const test_setNewPwd = screen.getByTestId("test-setNewPwd");
  // await userEvent.type(test_setNewPwd,"abc")

  // const test_setNewPwdConf = screen.getByTestId("test-setNewPwdConf");
  // await userEvent.type(test_setNewPwdConf,"abc")


});
