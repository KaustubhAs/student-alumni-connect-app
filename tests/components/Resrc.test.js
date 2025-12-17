import React from 'react';
import Resrc from '../../src/components/Resrc';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('Render Resrc Component', () => {

    it('Render Resrc Component', () => {
        const wrapper = shallow(<Resrc />);
        expect(wrapper).toBeTruthy();
    });
});
