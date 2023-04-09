import {render, screen} from "@testing-library/react";
import Suggestions from "../../../components/suggestions/suggestions";
import userEvent from '@testing-library/user-event'
import React from "react";

test("Show element when rendered", async () => {
    render(<Suggestions/>)
    const suggestions = screen.getByTestId("suggestions");
    expect(suggestions).toBeInTheDocument();
})