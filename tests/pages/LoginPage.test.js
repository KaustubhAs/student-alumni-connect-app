import React from 'react';
import LogInPage from '../../src/pages/LogInPage';
import { configure, shallow } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, fireEvent } from '@testing-library/react';

configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe.skip('Render Login Page', () => {

    it('Render Login Page', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const wrapper = shallow(
            <BrowserRouter>
                <LogInPage />
            </BrowserRouter>    
        );
        expect(wrapper).toBeTruthy();
    });

    it("Test onClick event on 1 Button: Log In", () => {
        const { getByRole } = render(
            <BrowserRouter>
                <LogInPage />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Log In/i
        }))
    });

    it('Test textfield #1: username', () => {
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <LogInPage />
                </BrowserRouter>
            )
            const input = utils.getByTestId('login-username')
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test input for username"}});
        expect(input.value).toBe("test input for username")
    });

    it('Test textfield #2: password', () => {
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <LogInPage />
                </BrowserRouter>
            )
            const input = utils.getByTestId('login-password')
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test input for password"}});
        expect(input.value).toBe("test input for password")
    });

    it('Test 46-58', () => {
    })
});
