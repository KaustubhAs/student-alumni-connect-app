import React from 'react';
import HolderPage from '../../src/pages/HolderPage';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('Render Holder Page', () => {

    it('Render Holder Page', () => {
        const wrapper = shallow(<HolderPage />);
        expect(wrapper).toBeTruthy();
    });
});
