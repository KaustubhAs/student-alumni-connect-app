import React from 'react';
import EditPage from '../../src/pages/EditPage';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

configure({ adapter: new Adapter() })

describe('Render EditPage Component', () => {

    it('Render EditPage Component', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <EditPage />
            </BrowserRouter>
        );
        expect(wrapper).toBeTruthy();
    });
});
