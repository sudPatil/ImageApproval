import { memo } from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
width: ${({ size }) => (size === 'sm' ? '100px' : '100%')};
height: ${({ size }) => (size === 'sm' ? '50px' : '100%')};
`;

const Image = (props) => {
	return <ImageStyle {...props} />;
};

export default memo(Image);
