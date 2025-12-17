import React from 'react';
import AdminPage from '../../src/pages/AdminPage';
import { configure, shallow } from 'enzyme';
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

describe.skip('Render AdminPage Component', () => {

    it('Render AdminPage Component', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <AdminPage />
            </BrowserRouter>
        );
        expect(wrapper).toBeTruthy();
    });

    it('Test onClick event: handleLogout', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByText } = render(
            <BrowserRouter>
                <AdminPage />
            </BrowserRouter>
        );
        fireEvent.click(getByText("Logout"));
    })
});
