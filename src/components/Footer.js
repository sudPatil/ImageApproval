import styled from 'styled-components';
import Button from './Button';
import PlusIcon from './icons/PlusIcon';
import { Cross } from '@styled-icons/entypo/Cross';
import { Check } from '@styled-icons/entypo/Check';

const CheckIcon = styled(Check)`
	color: #fff;
	width: 50px;
`;

const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	padding: 0 0 1rem;
	@media (max-width: 480px) {
		flex-direction: column;
		padding: 0;
	}
`;

const CrossItem = styled(Cross)`
	color: #fff;
	width: 50px;
`;

const PIcon = styled(PlusIcon)`
	height: 2rem;
`;

const FooterText = styled.span`
	font-size: 1.5rem;
	text-align: center;
`;

const Footer = ({ showInfo, handleOnCancel, handleOnAccept, isLoading }) => {
	return (
		<FooterContainer>
			{showInfo ? (
				<FooterText data-testid='footer-text'>
					Click on <PIcon /> in order to get image recommendations
				</FooterText>
			) : (
				<>
					<Button onClick={() => handleOnCancel(false)} aria-label='reject' disabled={isLoading}>
						<CrossItem />
					</Button>
					<Button primary={true} onClick={() => handleOnAccept(true)} aria-label='approve' disabled={isLoading}>
						<CheckIcon />
					</Button>
				</>
			)}
		</FooterContainer>
	);
};

export default Footer;
