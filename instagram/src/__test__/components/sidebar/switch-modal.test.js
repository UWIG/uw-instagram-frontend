import {render, screen, fireEvent} from "@testing-library/react";
import ModalForm from "../../../components/sidebar/modal-form";
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from "react-router-dom";
import axiosAPI from '../../config/axiosConfig';
import SwitchModal from "../../../components/sidebar/SwitchModal";
jest.mock('../../config/axiosConfig');


describe('SwitchModal', () => {
    beforeEach(() => {
        axiosAPI.post.mockClear();
      });
    
    test('renders SwitchModal component', () => {
      render(
        <Router>
            <SwitchModal isOpen={true} onClose={() => {}} />
        </Router>
      );
  
      expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
      expect(screen.getByText('Login')).toBeInTheDocument();
    });

    test('handleLogin success', async () => {
        const mockResponse = {
          data: {
            username: 'testuser',
            fullname: 'Test User',
            avatar: null,
          },
        };
        axiosAPI.post.mockResolvedValueOnce(mockResponse);
        const onLogin = jest.fn();
        render(
            <Router>
              <Login onLogin={onLogin} />
            </Router>
          );
    });
    

    // test('handleLogin success', async () => {
    //     const mockResponse = {
    //       data: {
    //         username: 'testuser',
    //         fullname: 'Test User',
    //         avatar: null,
    //       },
    //     };
    
    //     axiosAPI.post.mockResolvedValueOnce(mockResponse);
    
    //     // render(
    //     //     <Router>
    //     //       <SwitchModal isOpen={true} onClose={() => {}} />
    //     //     </Router>
    //     // );
    //     // const email_addr = screen.getByTestId('email-address')
    //     // fireEvent.change(screen.getByTestId('email-address'), {
    //     //   target: { value: 'test@example.com' },
    //     // });
    //     // fireEvent.change(screen.getByPlaceholderText('Password'), {
    //     //   target: { value: 'testpassword' },
    //     // });
    
    //     // fireEvent.click(screen.getByText('Login'));
    
    //     await waitFor(() => {
    //       expect(axiosAPI.post).toHaveBeenCalledWith('/login', {
    //         username: 'test@example.com',
    //         password: 'testpassword',
    //       });
    //     });
    //   });
  
    // test('handles form input and login button click', () => {
    //   const handleLogin = jest.fn();
  
    //   render(
    //       <Router>
    //         <SwitchModal isOpen={true} onClose={() => {}} />
    //       </Router>
    //   );
  
    //   fireEvent.change(screen.getByPlaceholderText('Email address'), {
    //     target: { value: 'test@example.com' },
    //   });
    //   fireEvent.change(screen.getByPlaceholderText('Password'), {
    //     target: { value: 'testpassword' },
    //   });
  
    //   fireEvent.click(screen.getByText('Login'));
  
    //   // Test if the handleLogin function is called when the login button is clicked
    //   expect(handleLogin).toHaveBeenCalled();
    // });
  });