import { render, screen,fireEvent,waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import axiosAPI from "../../config/axiosConfig";
import SearchResultCard from "../../../components/search/searchResultCard";
import SearchBar from "../../../components/search/searchBar";

jest.mock("../../config/axiosConfig");

const testSearchResult1=[
    {
        userName : "xielin",
        avatarURL:null,
        isFollowing:true
    },
    {
        userName : "xie",
        avatarURL:null,
        isFollowing:false
    }

];


const setSearchBarBuffer = (bufferString)=>{
    return bufferString;
};

test("Load and display searchBar", async () => {
    render(<SearchBar contentBuffer={""} handleReturnBuffer={setSearchBarBuffer} currentUser={"alex"}/>);

    axiosAPI.post.mockResolvedValueOnce({ data: testSearchResult1 });
    const inputBox = screen.getByPlaceholderText("Search");
    fireEvent.change(inputBox,{target:{value:"xie"}});
   //expect(axiosAPI.post).toHaveBeenCalledWith("/search/alex");
   await waitFor(() => {
    expect(screen.getByText('xie')).toBeInTheDocument();
    });
    //expect(1).toBe(1);
});



