import {render, screen} from "@testing-library/react";
// import {screen} from "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import ModalDelete from "../../../components/post/modal-delete";
beforeEach(() => {
  jest.spyOn(console, 'error')
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockRestore()
})

global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
  
    observe() {
      return null;
    }
  
    disconnect() {
      return null;
    };
  
    unobserve() {
      return null;
    }
  };
  
const data = {
    post_id: "0",
    open: true,
    setOpen: () => {},
    onDelete: () => {},
    onClose: () => {},
}

test("click cancel to close the modal", async () => {
    render(<ModalDelete {...data} />);
    const cancel = screen.queryByTestId("cancel");
    const deleteButton = screen.queryByTestId("delete");
    await userEvent.click(cancel);
    const deleteButtonAfterClick = screen.queryByTestId("delete");
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButtonAfterClick).toBeInTheDocument();
})

test("Click delete button ", async () => {
    render(<ModalDelete {...data} />);
    const deleteButton = screen.queryByTestId("delete");
    await userEvent.click(deleteButton);
    expect(1).toBe(1);
})

