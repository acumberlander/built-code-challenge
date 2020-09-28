import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyNavbar from './MyNavbar';

it('renders correctly', () => {
	const { queryByTestId } = render(<MyNavbar />);

	expect(queryByTestId('my-navbar')).toBeTruthy();
});
