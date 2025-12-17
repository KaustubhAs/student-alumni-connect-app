import React from 'react';
import AdminAlert from '../../src/components/AdminAlert';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';


configure({ adapter: new Adapter() })

describe('Render AdminAlert Component', () => {

    it('Render alert message: hello world!', () => {
        const { getByText } = render(<AdminAlert message="test"/>);
        expect(getByText('Your request was successful! test')).toBeInTheDocument();
    });
});
