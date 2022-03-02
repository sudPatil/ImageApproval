import styled from 'styled-components';
import React, { useCallback, useRef } from 'react';
import AddImage from './AddImage';
import Header from './Header';
import Image from './Image';
import CheckIcon from './icons/checkIcon';

const ImageScoller = styled.div`
	&::-webkit-scrollbar {
		display: none;
	}
	scroll-behavior: smooth;
	display: flex;
	overflow-x: auto;
	height: 50px;
`;

const ImageWrapper = styled.div`
	position: relative;
	min-width: 100px;
	border-radius: 10px;
	margin: 0 5px;
`;

const NavigationButton = styled.div`
	cursor: pointer;
	padding: 0 5px;
	color: blue;
	font-size: 30px;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
`;

const ImgCheck = styled(CheckIcon)`
	color: #fff;
	height: 20px;
	width: 30px;
	position: absolute;
	top: 0;
	right: 0;
`;

const ImageList = ({ list }) => {
	const containerRef = useRef(null);
	const showNext = useCallback(() => {
		const scrolledElement = containerRef.current;
		const offSetWidth = scrolledElement.offsetWidth;
		const scrollLeft = scrolledElement.scrollLeft;
		const scrollWidth = scrolledElement.scrollWidth;
		if (offSetWidth + scrollLeft < scrollWidth) {
			scrolledElement.scrollLeft += 3 * scrolledElement.children[0].clientWidth;
		}
	}, [containerRef]);

	const showPrev = useCallback(() => {
		const scrolledElement = containerRef.current;
		const scrollLeft = scrolledElement.scrollLeft;
		if (scrollLeft > 0) {
			scrolledElement.scrollLeft -= 3 * scrolledElement.children[0].clientWidth;
		}
	}, [containerRef]);

	const checkIsScrollPresent = useCallback(
		(onLeftScroll) => {
			const { current } = containerRef;
			if (current) {
				return onLeftScroll ? current.scrollLeft > 0 : current.scrollWidth > current.clientWidth;
			}
			return false;
		},
		[list]
	);

	return (
		<>
			<Header>APPROVED IMAGES ({list.length})</Header>
			<ImageContainer>
				{checkIsScrollPresent(true) ? <NavigationButton onClick={showPrev}>❮</NavigationButton> : ''}
				<ImageScoller ref={containerRef}>
					{list.length > 0 ? (
						list.map((item) => (
							<ImageWrapper key={item.id} data-testid='img-container'>
								<Image size='sm' src={item.urls.thumb} alt='person' />
								<ImgCheck />
							</ImageWrapper>
						))
					) : (
						<AddImage aria-label='plus icon' />
					)}
				</ImageScoller>
				{checkIsScrollPresent(false) ? <NavigationButton onClick={showNext}>❯</NavigationButton> : ''}
			</ImageContainer>
		</>
	);
};

export default ImageList;
