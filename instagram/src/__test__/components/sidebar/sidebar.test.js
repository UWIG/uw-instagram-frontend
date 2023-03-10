// import {render, screen} from '@testing-library/react';
// import Sidebar from '../../../components/sidebar/sidebar';
// import userEvent from '@testing-library/user-event'
// import 'intersection-observer';

// test("No form shows up before click the create button", () => {
//     //arange
//     render(<Sidebar onCreatePost={() => {}}/>);
//     //act
//     const modalBeforeClick = screen.queryByTestId("sidebar-modal");
//     //assert
//     expect(modalBeforeClick).not.toBeInTheDocument();
// });

// test("click the create button to pop up form", async () => {
//     render(<Sidebar onCreatePost={() => {}}/>);

//     const createButton = screen.getByTestId("create-button");

//     await userEvent.click(createButton);
//     const modalAfterClick = screen.getByTestId("sidebar-modal");
//     expect(modalAfterClick).toBeInTheDocument();
// })

// test("click more button to show more details", async () => {
//     render(<Sidebar onCreatePost={() => {}}/>);

//     const moreButton = screen.getByTestId("more-button");

//     await userEvent.click(moreButton);
//     const moreContent = screen.getByTestId("more-content");
//     expect(moreContent).toBeInTheDocument();
    
// })