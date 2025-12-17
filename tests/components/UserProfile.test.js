import React from 'react';
import UserProfile from '../../src/components/UserProfile';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('Render UserProfile Component', () => {

    it('Render UserProfile Component', () => {
        const wrapper = shallow(<UserProfile />);
        expect(wrapper).toBeTruthy();
    });
});
