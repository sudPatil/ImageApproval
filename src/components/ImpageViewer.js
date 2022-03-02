import styled from 'styled-components';
import AddImage from './AddImage';
import Image from './Image';
import Loader from './Loader';
import { useRef, useEffect } from 'react';

const ImageContainer = styled.div`
	height: 50vh;
	align-items: center;
	display: flex;
	justify-content: center;
`;

function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

const ImageViewer = ({ data, isLoading, onClick }) => {
	const imageData = usePrevious(data) || data;
	return (
		<ImageContainer onClick={onClick}>
			{imageData ? (
				<>
					{isLoading && <Loader />}
					<Image src={imageData.urls.regular} alt='person' />
				</>
			) : (
				<AddImage />
			)}
		</ImageContainer>
	);
};

export default ImageViewer;
