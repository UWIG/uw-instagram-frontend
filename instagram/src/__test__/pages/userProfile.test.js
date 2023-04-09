import { render, screen } from "@testing-library/react";
// import {screen} from "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import * as ROUTES from '../../constants/routes'

import UserProfile from "../../pages/userProfile";
import { BrowserRouter } from "react-router-dom";
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }
};

test("user profile page test", async () => {
  render(<BrowserRouter path={ROUTES.PROFILE}><UserProfile /></BrowserRouter>);
 
});
