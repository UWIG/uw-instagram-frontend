import {render, screen} from "@testing-library/react";
import SuggestedProfile from "../../../components/suggestions/suggested-profile";
import userEvent from '@testing-library/user-event'
import React from "react";

test("Show element when rendered", async () => {
    render(<SuggestedProfile/>)
    const profile = screen.getByTestId("profile");
    expect(profile).toBeInTheDocument();
})