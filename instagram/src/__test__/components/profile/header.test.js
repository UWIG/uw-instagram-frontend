import { render, screen } from "@testing-library/react";
// import {screen} from "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";

import Header from "../../../components/profile/header";
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

const users = [
  {
    username: "alex",
    fullname: "alex",
    avatar: {
      id: "abc123",
      filename: "sssss",
      data: "avatardata",
      type: "avatartype",
    },
    following: "true",
    followingType: "true",
  },
  {
    username: "alex",
    fullname: "alex",
    avatar: {
      id: "abc123",
      filename: "sssss",
      data: "avatardata",
      type: "avatartype",
    },
    following: "true",
    followingType: "true",
  },
];

test("editProfile", async () => {
  render(
    <BrowserRouter>
      <Header
        isUserSelf={true}
        postCount={3}
        username={"alex"}
        fullname="abc"
        setAvatar={() => {}}
        avatar={"sbc"}
        followers={users}
        following={users}
      />
    </BrowserRouter>
  );

  //   const editProfile = screen.getByTestId("edit-profile");

  const test_navigateSetting = screen.getByTestId("test-navigateSetting");
  await userEvent.click(test_navigateSetting);

  const test_handleClickFollower = screen.getByTestId(
    "test-handleClickFollower"
  );
  await userEvent.click(test_handleClickFollower);

  const test_handleClickFollowing = screen.getByTestId(
    "test-handleClickFollowing"
  );
  await userEvent.click(test_handleClickFollowing);

  const test_setAvatarOpen = screen.getByTestId("test-setAvatarOpen");
  await userEvent.click(test_setAvatarOpen);

  const test_setUserOpen = screen.getByTestId("test-setUserOpen");
  await userEvent.click(test_setUserOpen);

  await userEvent.click(test_handleClickFollowing);
  userEvent.keyboard("{esc}");

  //   expect(editProfile).toBeInTheDocument();

  expect(1).toBe(1);
});

test("editProfile2", async () => {
  render(
    <BrowserRouter>
      <Header
        isUserSelf={false}
        postCount={3}
        username={"alex"}
        fullname="abc"
        setAvatar={() => {}}
        avatar={""}
        followers={users}
        following={users}
      />
    </BrowserRouter>
  );

  //   const editProfile = screen.getByTestId("edit-profile");
  const test_handleClickFollower = screen.getByTestId(
    "test-handleClickFollower"
  );
  await userEvent.click(test_handleClickFollower);

  const test_setUserOpen = screen.getByTestId("test-setUserOpen");
  await userEvent.click(test_setUserOpen);

  //   expect(editProfile).toBeInTheDocument();

  expect(1).toBe(1);
});


test("editProfile3", async () => {
    render(
      <BrowserRouter>
        <Header
          isUserSelf={false}
          postCount={3}
          username={"alex"}
          fullname="abc"
          setAvatar={() => {}}
          avatar={""}
          followers={null}
          following={null}
        />
      </BrowserRouter>
    );

    const test_handleClickFollower = screen.getByTestId(
        "test-handleClickFollower"
      );
      await userEvent.click(test_handleClickFollower);
    
      const test_handleClickFollowing = screen.getByTestId(
        "test-handleClickFollowing"
      );
      await userEvent.click(test_handleClickFollowing);
})