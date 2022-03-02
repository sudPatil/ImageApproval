import '@testing-library/jest-dom';
import Button from '../components/Button';
import { render } from '@testing-library/react';

describe('<Button />', () => {
	it('Check Button render', () => {
		const { getByText } = render(
			<Button primary={true} data-testid='btn-1'>
				test
			</Button>
		);
		const btn = getByText('test');
		const styles = window.getComputedStyle(btn);
		expect(styles.backgroundColor).toEqual('blue');
		expect(btn).toBeInTheDocument();
	});

	it('Check rendering of secondary button', () => {
		const { getByRole } = render(<Button primary={false} />);
		const btn = getByRole('button');
		const styles = window.getComputedStyle(btn);
		expect(styles.backgroundColor).toEqual('black');
		expect(btn).toBeInTheDocument();
	});
});
