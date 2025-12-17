import React from 'react';
import OpportunitiesPage from '../../src/pages/OpportunitiesPage';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('Render Opportunities Page', () => {

    it('Render Opportunities Page', () => {
        const wrapper = shallow(<OpportunitiesPage />);
        expect(wrapper).toBeTruthy();
    });
});
