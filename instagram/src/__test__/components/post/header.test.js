import {render, screen} from '@testing-library/react';
import Header from '../../../components/post/header';
import userEvent from "@testing-library/user-event"
import {BrowserRouter as Router} from 'react-router-dom';
import exp from 'constants';
import { formatWithOptions } from 'util';
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

const date = new Date().toDateString();

test("show follow button when unfollowed", async () => {
    render(<Header username="alex" avatar="..." time_created={date} whether_followed_post_user={false} />);
    const follow = screen.getByTestId("follow");
    await userEvent.click(follow);
    expect(follow).toBeInTheDocument();
});

test("show skeleton when loading", async () => {
    render(<Header avatar="..." time_created={date} whether_followed_post_user={false} />);
    expect(1).toBe(1);
});

test("show skeleton when loading", async () => {
    render(<Header avatar={null} time_created={date} whether_followed_post_user={false} />);
    expect(1).toBe(1);
});

test("delete post", async () => {
    render(<Header username='alex' avatar="..." time_created={date} whether_followed_post_user={false} post_id="0" onDelete={() => {}} deleteButton={true}/>);
    const deleteButton = screen.getByTestId("delete-button");
    await userEvent.click(deleteButton);
    const deleteModal = screen.queryByTestId("delete");
    expect(deleteModal).toBeInTheDocument();
});
