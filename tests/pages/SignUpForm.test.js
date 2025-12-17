import React from 'react';
import SignUpForm from '../../src/pages/SignUpForm';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';

configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe.skip('Render SignUpForm Component', () => {

    it('Render SignUpForm Component', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <SignUpForm />
            </BrowserRouter>
        );
        expect(wrapper).toBeTruthy();
    });

    it("Test onClick events of handleNext & handleBack", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <SignUpForm />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Continue/i
        }))
        fireEvent.click(getByRole('button', {
            name: /Back/i
        }))
    });

    it("Test onClick event: handleFinal_UserTable", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByText } = render(
            <BrowserRouter>
                <SignUpForm />
            </BrowserRouter>
        );
        const element = getByText("Continue");
        fireEvent.click(element, { button: 0 });
        fireEvent.click(element, { button: 1 });
        fireEvent.click(screen.getByText("Submit"));
    })
});
