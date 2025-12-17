import React from 'react';
import AdminEdit from '../../src/components/AdminEdit';
import { configure } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from 'react-redux'; 


configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe.skip('Render AdminEdit Component', () => {

    it.skip("Test onClick events on 2 Buttons: Open, Close", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminEdit />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Open/i
        }))
        fireEvent.click(getByRole('button', {
            name: /Close/i
        }))
    });

    it.skip("Test onClick events on 2 Buttons: Open, Find", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminEdit />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Open/i
        }))
        fireEvent.click(getByRole('button', {
            name: /Find/i
        }))
    });

    it.skip('Test textfield: username', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminEdit />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Open/i
        }))
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AdminEdit />
                </BrowserRouter>
            )
            const input = utils.getByTestId('admin-edit-username')
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
