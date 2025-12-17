import React from 'react';
import { configure } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import AdminPutRandomPassword from '../../src/components/AdminPutRandomPassword';


configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe.skip('Render AdminPutRandomPassword Component', () => {

    it("Test onClick events on: Close", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminPutRandomPassword />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Randomize/i
        }))
        fireEvent.click(getByRole('button', {
            name: /Close/i
        }))
    });

    it("Test onClick events on: Submit", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByText } = render(
            <BrowserRouter>
                <AdminPutRandomPassword />
            </BrowserRouter>
        );
        const element = getByText("Randomize");
        fireEvent.click(element, { button: 0 });
        fireEvent.click(element, { button: 1 });
    });

    it('Test textfield: username', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminPutRandomPassword />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Randomize/i
        }))
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AdminPutRandomPassword />
                </BrowserRouter>
            )
            const input = utils.getByTestId('admin-put-random-password-username')
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test username"}});
        expect(input.value).toBe("test username")
    });

});
