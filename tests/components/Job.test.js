import React from 'react';
import Job from '../../src/components/Job';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('Render Job Component', () => {

    it('Render Job Component', () => {
        const wrapper = shallow(<Job />);
        expect(wrapper).toBeTruthy();
    });
});
