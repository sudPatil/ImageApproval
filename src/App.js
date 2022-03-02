import styled, { createGlobalStyle } from 'styled-components';

import ImageViewer from './components/ImpageViewer';
import ImageList from './components/ImageList';
import Footer from './components/Footer';
import Header from './components/Header';
import Container from './components/Container'
import Separator from './components/Separator';
import { useCallback } from 'react';
import { fetchImage, approveImage, rejectImage } from './store/actions/index';
import { connect } from 'react-redux';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: blue;
    font-family: sans-serif
  }
  `;

const TopHeader = styled(Header)`
	padding: 15px 0 0;
`;

const App = (props) => {
	const { approved, isLoading, allImages, fetchImages } = props;

	const handleClick = useCallback(
		(isImageApproved) => {
			const { handleApproval, handleReject, allImages, fetchImages } = props;
			isImageApproved ? handleApproval(allImages[0].id) : handleReject(allImages[0].id);
			fetchImages();
		},
		[allImages]
	);

	return (
		<>
			<GlobalStyle />
			<Container type={'primary'}>
				<Container>
					<TopHeader>IMAGE APPROVAL APPLICATION</TopHeader>
				</Container>
				<Separator withMargin={true} />
				<Container>
					
					<ImageList list={approved} />
				</Container>
				<Container>
					<Separator withMargin={true} />
					<ImageViewer data={allImages[0]} isLoading={isLoading} onClick={fetchImages} />
					<Separator withMargin={true} />
					<Footer
						showInfo={!((allImages[0] && allImages[0].id) || isLoading)}
						isLoading={isLoading}
						handleOnCancel={handleClick}
						handleOnAccept={handleClick}
					/>
				</Container>
			</Container>
		</>
	);
};

const mapStateToProps = ({ images, isLoading, approved }) => {
	return {
		approved,
		allImages: images && Object.values(images),
		isLoading,
	};
};

const mapDispatchToProps = {
	fetchImages: fetchImage,
	handleApproval: approveImage,
	handleReject: rejectImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
