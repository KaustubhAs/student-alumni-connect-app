import React from 'react';
import { configure } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import AllProfiles from '../../src/components/AllProfiles';


configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe.skip('Render AllProfiles Component', () => {

    it('Test textfield #1: firstname', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        render(
            <BrowserRouter>
                <AllProfiles />
            </BrowserRouter>
        );
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AllProfiles />
                </BrowserRouter>
            )
            const input = utils.getAllByTestId('all-profiles-firstname')[0]
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test"}});
        expect(input.value).toBe("test")
    });

    it('Test textfield #2: lastname', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        render(
            <BrowserRouter>
                <AllProfiles />
            </BrowserRouter>
        );
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AllProfiles />
                </BrowserRouter>
            )
            const input = utils.getAllByTestId('all-profiles-lastname')[0]
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test"}});
        expect(input.value).toBe("test")
    });

    it('Test textfield #3: mentoring', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        render(
            <BrowserRouter>
                <AllProfiles />
            </BrowserRouter>
        );
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AllProfiles />
                </BrowserRouter>
            )
            const input = utils.getAllByTestId('all-profiles-mentoring')[0]
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test"}});
        expect(input.value).toBe("test")
    });

    it('Test textfield #4: job-title', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        render(
            <BrowserRouter>
                <AllProfiles />
            </BrowserRouter>
        );
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AllProfiles />
                </BrowserRouter>
            )
            const input = utils.getAllByTestId('all-profiles-job-title')[0]
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test"}});
        expect(input.value).toBe("test")
    });

    it('Test textfield #5: university', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        render(
            <BrowserRouter>
                <AllProfiles />
            </BrowserRouter>
        );
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AllProfiles />
                </BrowserRouter>
            )
            const input = utils.getAllByTestId('all-profiles-university')[0]
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test"}});
        expect(input.value).toBe("test")
    });

    it('Test textfield #6: company-name', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        render(
            <BrowserRouter>
                <AllProfiles />
            </BrowserRouter>
        );
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AllProfiles />
                </BrowserRouter>
            )
            const input = utils.getAllByTestId('all-profiles-company-name')[0]
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test"}});
        expect(input.value).toBe("test")
    });

    it('Test textfield #7: industry', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        render(
            <BrowserRouter>
                <AllProfiles />
            </BrowserRouter>
        );
        const setup = () => {
            const utils = render(
                <BrowserRouter>
                    <AllProfiles />
                </BrowserRouter>
            )
            const input = utils.getAllByTestId('all-profiles-industry')[0]
            return {
              input,
              ...utils,
            }
        }
        const {input} = setup()
        fireEvent.change(input, {target: {value: "test"}});
        expect(input.value).toBe("test")
    });

    it("Test button #1: handleView", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AllProfiles />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Table/i
        }))
        fireEvent.click(getByRole('button', {
            name: /Map/i
        }))
    });

    it("Test button #2: handleFilter", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AllProfiles />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Filter/i
        }))
    })
    it("Test button #3: handleClear", () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const { getByRole } = render(
            <BrowserRouter>
                <AllProfiles />
            </BrowserRouter>
        );
        fireEvent.click(getByRole('button', {
            name: /Clear/i
        }))
    })

});
