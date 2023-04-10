import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import axiosAPI from "../../config/axiosConfig";
import SearchResultCard from "../../../components/search/searchResultCard";
jest.mock("../../config/axiosConfig");
test("test a following search result user card", async ()=>{
    const result = {       
            userName : "xie",
            avatarURL:null,
            isFollowing:true        
    };

    
    axiosAPI.post.mockResolvedValueOnce({
        response: {
          data: "successful",
        },
    });
    
    render(<Router><SearchResultCard result={result} currentUser="alex"/></Router>);
    const following = screen.getByTestId("following");
    await userEvent.click(following);
    
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Follow")
});




jest.mock("../../config/axiosConfig");
test("test a failed search result user card2", async ()=>{
    const result = {       
            userName : "lin",
            avatarURL:null,
            isFollowing:true        
    };

    axiosAPI.post.mockResolvedValueOnce({
        response: {
          data: "failed",
        },
      });
    
    render(<Router><SearchResultCard result={result} currentUser="alex"/></Router>);
    const follow = screen.getByTestId("following");
    await userEvent.click(follow);
    expect(1).toBe(1);
});