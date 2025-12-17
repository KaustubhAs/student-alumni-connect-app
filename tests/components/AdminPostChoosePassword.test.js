import React from 'react';
import { configure } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import AdminPostChoosePassword from '../../src/components/AdminPostChoosePassword';


configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe.skip('Render AdminPostChoosePassword Component', () => {

    it("Test onClick events on: Close", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminPostChoosePassword />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Choose Password/i
        }))
        fireEvent.click(getByRole('button', {
            name: /Close/i
        }))
    });

    it("Test onClick events on: Submit", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminPostChoosePassword />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Choose Password/i
        }))
        fireEvent.click(getByRole('button', {
            name: /Submit/i
        }))
    });

    it('Test textfield: username', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminPostChoosePassword />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Choose Password/i
        }))
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AdminPostChoosePassword />
                </BrowserRouter>
            )
            const input = utils.getByTestId('admin-post-choose-password-username')
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test username"}});
        expect(input.value).toBe("test username")
    });

    it('Test textfield: password', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminPostChoosePassword />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Choose Password/i
        }))
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AdminPostChoosePassword />
                </BrowserRouter>
            )
            const input = utils.getByTestId('admin-post-choose-password-password')
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test password"}});
        expect(input.value).toBe("test password")
    });

});
