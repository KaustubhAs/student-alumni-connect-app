import React from 'react';
import { configure } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import AdminStatusPost from '../../src/components/AdminStatusPost';


configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe.skip('Render AdminStatusPost Component', () => {

    it("Test onClick events on: Close", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminStatusPost />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Open/i
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
                <AdminStatusPost />
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
                <AdminStatusPost />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Open/i
        }))
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AdminStatusPost />
                </BrowserRouter>
            )
            const input = utils.getByTestId('admin-status-post-username')
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test username"}});
        expect(input.value).toBe("test username")
    });

    it('Test textfield: status', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminStatusPost />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Open/i
        }))
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AdminStatusPost />
                </BrowserRouter>
            )
            const input = utils.getByTestId('admin-status-post-status')
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test status"}});
        expect(input.value).toBe("test status")
    });

});
