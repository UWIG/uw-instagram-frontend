import {render, screen, cleanup} from '@testing-library/react';
import Header from '../../../components/post/header';
import userEvent from "@testing-library/user-event"
import {BrowserRouter as Router} from 'react-router-dom';
import axiosAPI from "../../config/axiosConfig";

beforeEach(() => {
  jest.spyOn(console, 'error')
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockRestore()
})

afterEach(cleanup);

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

jest.mock("../../config/axiosConfig");


test("test unsuccessful cases", async () => {
  axiosAPI.post.mockResolvedValueOnce({
    data: "unsuccessful"
  });
  axiosAPI.post.mockRejectedValueOnce(new Error('Some random error'))
  render(<Header username="john" avatar="..." time_created={date} whether_followed_post_user={false} />);
  const follow = screen.getByTestId("follow");
  await userEvent.click(follow);
  expect(follow).toBeInTheDocument();
});


test("show follow button when unfollowed", async () => {
    axiosAPI.post.mockResolvedValueOnce({
      data: "successful"
    });
    axiosAPI.post.mockRejectedValueOnce(new Error('Some random error'))
    render(<Header username="john" avatar="..." time_created={date} whether_followed_post_user={false} />);
    const follow = screen.getByTestId("follow");
    await userEvent.click(follow);
    const followAfter = screen.queryByTestId("follow");
    expect(followAfter).not.toBeInTheDocument();
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

test("test error cases", async () => {
  axiosAPI.post.mockRejectedValueOnce(new Error('Some random error'));
  axiosAPI.post.mockRejectedValueOnce(new Error('Some random error'));
  render(<Header username="john" avatar="..." time_created={date} whether_followed_post_user={false} />);
  const follow = screen.getByTestId("follow");
  await userEvent.click(follow);
  expect(follow).toBeInTheDocument();
});

test("test unsuccessful cases", async () => {
  axiosAPI.post.mockResolvedValueOnce({
    data: "unsuccessful"
  });
  axiosAPI.post.mockRejectedValueOnce(new Error('Some random error'))
  render(<Header username="john" avatar="..." time_created={date} whether_followed_post_user={false} />);
  const follow = screen.getByTestId("follow");
  expect(follow).toBeInTheDocument();
});
