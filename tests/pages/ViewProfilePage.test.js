import React from 'react';
import ViewProfilePage from '../../src/pages/ViewProfilePage';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe.skip('Render ViewProfilePage Page', () => {

    it('Render ViewProfilePage Page: Shallow', () => {
        const wrapper = shallow(<ViewProfilePage />);
        expect(wrapper).toBeTruthy();
    });

    it('Render ViewProfilePage Page: Mount', () => {
    });
});
