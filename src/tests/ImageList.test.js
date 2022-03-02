import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ImageList from '../components/ImageList';
import { getImageMockData } from './utils/index';

describe('<ImageList />', () => {
	it('Should render images', () => {
		const list = getImageMockData(4);
		render(<ImageList list={list} />);
		const items = screen.getAllByTestId('img-container');
		expect(items).toHaveLength(4);
	});

	it('Should not render images', () => {
		const { queryByTestId } = render(<ImageList list={[]} />);
		expect(queryByTestId('img-container')).toBeNull();
	});

	it('Should render icon', () => {
		const { getByLabelText } = render(<ImageList list={[]} />);
		expect(getByLabelText('plus icon')).toBeDefined();
	});
});
