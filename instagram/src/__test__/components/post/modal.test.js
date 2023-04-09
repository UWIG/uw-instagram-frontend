import {render, screen} from "@testing-library/react";
// import {screen} from "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "../../../components/post/modal";
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
    id:"0",
    username:"alex",
    avatar:null,
    time_created:new Date().toDateString(),
    open:true,
    onClose: () => {},
    mediaList:[{id:"0", filename:"test1.jpg", type:"image", data:"data1"},{id:"1", filename:"test2.jpg", type:"image", data:"data2"}],
    comments:[],
    caption: "text",
    likes: [],
    whether_liked: false,
    whether_followed_post_user: false,
    whether_saved:false,
    onCreateComment: () => {},
}

test("Not show minus button for the first image", async () => {
    render(<Router><Modal {...data}/></Router>);
    const prevButton = screen.queryByTestId("prev");
    const nextButton = screen.queryByTestId("next");
    expect(prevButton).not.toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
})


test("Not show plus button for the last image", async () => {
    render(<Router><Modal {...data}/></Router>);
    const nextButton = screen.queryByTestId("next");
    await userEvent.click(nextButton);
    const prevButton = screen.queryByTestId("prev");
    const nextButtonAfterClick = screen.queryByTestId("next");
    expect(prevButton).toBeInTheDocument();
    expect(nextButtonAfterClick).not.toBeInTheDocument();
})


test("Test minus button", async () => {
    render(<Router><Modal {...data}/></Router>);
    const nextButton = screen.queryByTestId("next");
    await userEvent.click(nextButton);
    const prevButton = screen.queryByTestId("prev");
    await userEvent.click(prevButton);
    const prevButtonAfterClick = screen.queryByTestId("prev");
    const nextButtonAfterClick = screen.queryByTestId("next");
    expect(prevButtonAfterClick).not.toBeInTheDocument();
    expect(nextButtonAfterClick).toBeInTheDocument();
})
