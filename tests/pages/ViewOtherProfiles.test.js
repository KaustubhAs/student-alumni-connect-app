import React from 'react';
import ViewOtherProfile from '../../src/pages/ViewOtherProfile';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useSelector, useDispatch } from 'react-redux'; 


configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe.skip('Render ViewOtherProfile Page', () => {

    it('Render ViewOtherProfile Page', () => {
        useSelector.mockImplementation((selectorFn) => selectorFn());
        useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const wrapper = shallow(<ViewOtherProfile />);
        expect(wrapper).toBeTruthy();
    });
});
