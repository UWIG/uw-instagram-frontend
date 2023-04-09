import {render, screen} from "@testing-library/react";
import SuggestedProfiles from "../../../components/suggestions/suggested-profiles";
import userEvent from '@testing-library/user-event'
import React from "react";

test("Show element when rendered", async () => {
    const recommendedUsers = [{username:"alex", avatar:null, fullname:"john"}]
    render(<SuggestedProfiles recommendedUsers={recommendedUsers}/>)
    const profiles = screen.getByTestId("profiles");
    expect(profiles).toBeInTheDocument();
})