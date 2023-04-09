import { render, screen } from "@testing-library/react";
// import {screen} from "@testing-library/jest-dom"
import axiosAPI from "../../config/axiosConfig"
import userEvent from "@testing-library/user-event";

import UserItem from "../../../components/profile/userItem";
import { BrowserRouter } from "react-router-dom";

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

const userItem = {
  username: "alex",
  fullname:"alex",
  avatar: { id: "0", filename: "test1.jpg", type: "image", data: "data1" },
  following:false,
  followingType: false,
  onClose:() => {},
}

jest.mock("../../config/axiosConfig")
test("userItemm component test", async () => {
  axiosAPI.post.mockResolvedValueOnce({
    data:{}
  })

  render(<BrowserRouter><UserItem {...userItem} /></BrowserRouter>);
  const test_handleClickFollow = screen.getByTestId(
    "test-handleClickFollow"
  );
  await userEvent.click(test_handleClickFollow);
});
