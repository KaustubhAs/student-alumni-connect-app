import React from 'react';
import AdminEditFields from '../../src/components/AdminEditFields';
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

describe.skip('Render AdminEditFields Component', () => {

    it("Test onClick events of handleNext & handleBack", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminEditFields />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Continue/i
        }))
        fireEvent.click(getByRole('button', {
            name: /Back/i
        }))
    });

    it("Test onClick event: handleFinal", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AdminEditFields />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Save/i
        }))
    })

    it("Test onClick event: handleReset", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByText } = render(
            <BrowserRouter>
                <AdminEditFields />
            </BrowserRouter>
        );
        const element = getByText("Continue");
        fireEvent.click(element, { button: 0 });
        fireEvent.click(element, { button: 1 });
        fireEvent.click(screen.getByText("Complete"));
    })

    it("Test 214", () => {
    })

    it("Test 218-219", () => {
    })
});
