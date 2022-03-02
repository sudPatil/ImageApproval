import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Footer from '../components/Footer';

describe('<Footer />', () => {
	it('Check Footer render with text', () => {
		const { getByTestId } = render(<Footer showInfo={true} />);
		expect(getByTestId('footer-text')).toBeInTheDocument();
	});

	it('Check Footer render without Buttons', () => {
		const { getByRole } = render(<Footer showInfo={false} />);
		expect(getByRole('button', { name: 'approve' })).toBeInTheDocument();
		expect(getByRole('button', { name: 'reject' })).toBeInTheDocument();
	});

	it('Approve image scenario', () => {
		const mockAccept = jest.fn();
		const mockReject = jest.fn();
		const { getByRole } = render(<Footer showInfo={false} handleOnAccept={mockAccept} handleOnCancel={mockReject} />);
		const approveBtn = getByRole('button', { name: 'approve' });
		fireEvent.click(approveBtn);
		expect(mockAccept).toHaveBeenCalled();
	});

	it('Reject image scenario', () => {
		const mockAccept = jest.fn();
		const mockReject = jest.fn();
		const { getByRole } = render(<Footer showInfo={false} handleOnAccept={mockAccept} handleOnCancel={mockReject} />);
		const rejectBtn = getByRole('button', { name: 'reject' });
		fireEvent.click(rejectBtn);
		expect(mockReject).toHaveBeenCalled();
	});
});
