import React from 'react';
import ResourcesPage from '../../src/pages/ResourcesPage';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('Render Resources Page', () => {

    it('Render Resources Page', () => {
        const wrapper = shallow(<ResourcesPage />);
        expect(wrapper).toBeTruthy();
    });
});
