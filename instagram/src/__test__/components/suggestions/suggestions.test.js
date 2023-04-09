import {render, screen} from "@testing-library/react";
import Suggestions from "../../../components/suggestions/suggestions";

test("Show element when rendered", async () => {
    const recommendedUsers = [{username:"alex", avatar:null, fullname:"john"}]
    render(<Suggestions recommendedUsers={recommendedUsers}/>)
    const suggestions = screen.getByTestId("suggestions");
    expect(suggestions).toBeInTheDocument();
})