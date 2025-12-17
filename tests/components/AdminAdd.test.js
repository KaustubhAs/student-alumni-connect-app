import React from 'react';
import AdminAdd from '../../src/components/AdminAdd';
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

describe.skip('Render AdminAdd Component', () => {

    it("Test onClick events on 2 Buttons: Open, Close", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminAdd />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Open/i
        }))
        fireEvent.click(getByRole('button', {
            name: /Close/i
        }))
    });
});
