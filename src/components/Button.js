import styled from 'styled-components';

const Button = styled.button`
	background: ${({ primary }) => (primary ? 'blue' : 'black')};
	color: #fff;
	font-size: 1rem;
	margin: 1rem 0;
	padding: 0.5rem;
	border: 2px solid #fff;
	border-radius: 3rem;
	width: 50%;
  &::hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin: 0;
  }
`;

export default Button;
