import React from 'react';
import ForgetPasswordDialog from '../../src/pages/ForgetPasswordDialog';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() })

describe('Render ForgetPasswordDialog Component', () => {

    it('Render ForgetPasswordDialog Component', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <ForgetPasswordDialog />
            </BrowserRouter>
        );
        expect(wrapper).toBeTruthy();
    });

    it("Test onClick events on 3 Buttons: Forget Password, Cancel, Submit", () => {
        const { getByText } = render(
            <BrowserRouter>
                <ForgetPasswordDialog />
            </BrowserRouter>
        );
        fireEvent.click(getByText("Forgot Password?"));
        fireEvent.click(getByText("Cancel"));
        fireEvent.click(getByText("Submit"));
    });
});
