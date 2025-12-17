import React from 'react';
import Header from '../../src/components/Header';
import { configure } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from 'react-redux';


configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe.skip('Render Header Component', () => {

    it("Test button #1: handleLogout", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByText } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        fireEvent.click(getByText("Logout"))
    });

    it("Test button #2: handleOpenNavMenu", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getAllByTestId } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        fireEvent.click(getAllByTestId("header-handleOpenNavMenu")[0])
    });

    it("Test button #3: handleOpenUserMenu", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getAllByTestId } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        fireEvent.click(getAllByTestId("header-handleOpenUserMenu")[0])
    });

    it("Test button #4: handleCloseNavMenu", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getAllByTestId } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        fireEvent.click(getAllByTestId("header-handleCloseNavMenu")[0])
    });

    it("Test button #5: handleCloseUserMenu", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getAllByTestId } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        fireEvent.click(getAllByTestId("header-handleCloseUserMenu")[0])
    });

    it("Test drop down menu", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const typo = screen.getAllByTestId("header-typography");
        expect(typo.length).toBe(3);
    });
    
});
