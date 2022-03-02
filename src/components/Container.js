import styled from 'styled-components';

const Container = styled.div`
	width: 80%;
	margin: ${({ type }) => (type == 'primary' ? '50px auto' : 'auto')};
	border-radius: 5px;
	background-color: #fff;
`;

export default Container;