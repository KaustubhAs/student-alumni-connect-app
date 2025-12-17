import React from 'react';
import AdminDelete from '../../src/components/AdminDelete';
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

describe.skip('Render AdminDelete Component', () => {

    it("Test onClick events on: Open, Close", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminDelete />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Open/i
        }))
        fireEvent.click(getByRole('button', {
            name: /Close/i
        }))
    });

    it("Test onClick events on: Open, Submit", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminDelete />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Open/i
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
                <AdminDelete />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Open/i
        }))
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AdminDelete />
                </BrowserRouter>
            )
            const input = utils.getByTestId('admin-delete-username')
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
