import {render, screen} from "@testing-library/react";
// import {screen} from "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";

import Header from "../../../components/profile/header";
import { BrowserRouter } from "react-router-dom";

test("editProfile", async () => {
    render(<BrowserRouter><Header isUserSelf = {false} avatar={""} followers={{username:"kkk"}}/></BrowserRouter>);

    const editProfile = screen.getByTestId("edit-profile");
    const test_handleClickFollower = screen.getByTestId("test-handleClickFollower");
    await userEvent.click(test_handleClickFollower)

    expect(editProfile).toBeInTheDocument();

    expect(1).toBe(1);
})