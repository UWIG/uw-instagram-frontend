import { render, screen } from "@testing-library/react";
// import {screen} from "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";

import AvatarModal from "../../../components/profile/avatarModal";
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

test("avatar modal test", async () => {
  render(
    <AvatarModal
      isUserSelf={false}
      isOpen={true}
      onClose={() => {}}
      setAvatar={() => {}}
    />
  );

  const test_upload = screen.getByTestId("test-upload");

  await userEvent.upload(test_upload);
});
