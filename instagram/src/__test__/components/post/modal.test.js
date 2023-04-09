import {render, screen} from "@testing-library/react";
// import {screen} from "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "../../../components/post/modal";
import handleClose from "../../../__mocks__/modal";

test("Close the modal", async () => {
    render(<Image mediaList={mediaList}/>);
    const minusButton = screen.queryByTestId("minus");
    const plusButton = screen.queryByTestId("plus");
    expect(minusButton).not.toBeInTheDocument();
    expect(plusButton).toBeInTheDocument();
})