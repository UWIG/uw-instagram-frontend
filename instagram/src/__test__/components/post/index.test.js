import {render, screen} from "@testing-library/react";
// import {screen} from "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Index from "../../../components/post/index";
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

const post = {
    id:"0",
    username: "alex",
    likes:[],
    comments: [],
    caption:"test",
    time_created: new Date().toDateString(),
    avatar:null,
    mediaList: [{id:"0", filename:"test1.jpg", type:"image", data:"data1"},{id:"1", filename:"test2.jpg", type:"image", data:"data2"}],
    whether_liked: false,
    whether_followed_post_user: false,
    whether_saved:false,
    open:true
}


test("Test whether post exists", async () => {
    render(<Router><Index  {...post} /></Router>);
    const postElement = screen.queryByTestId("post0");
    expect(postElement).toBeInTheDocument();
})


test("test close modal when a user clicks close button", async () => {
    render(<Router><Index {...post}/></Router>);
    const prevButtonBefore = screen.queryByTestId("prev");
    const nextButtonBefore = screen.queryByTestId("next");
    await userEvent.keyboard('{esc}');
    const prevButtonAfter = screen.queryByTestId("prev");
    const nextButtonAfter = screen.queryByTestId("next");
    expect(prevButtonBefore).toBeInTheDocument();
    expect(nextButtonBefore).toBeInTheDocument();
    expect(prevButtonAfter).not.toBeInTheDocument();
    expect(nextButtonAfter).not.toBeInTheDocument();
})


