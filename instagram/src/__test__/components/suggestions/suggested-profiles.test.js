import {render, screen} from "@testing-library/react";
import SuggestedProfiles from "../../../components/suggestions/suggested-profiles";
import userEvent from '@testing-library/user-event'
import React from "react";

test("Show element when rendered", async () => {
    render(<SuggestedProfiles/>)
    const profiles = screen.getByTestId("profiles");
    expect(profiles).toBeInTheDocument();
})