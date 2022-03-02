
const imageData = {
	id: 'inoZpsBQRqk',
	urls: {
		regular:
			'https://images.unsplash.com/photo-1645005513713-9e2b92a687d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDU3NzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDYwMTk0ODk&ixlib=rb-1.2.1&q=80&w=1080',
		small:
			'https://images.unsplash.com/photo-1645005513713-9e2b92a687d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDU3NzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDYwMTk0ODk&ixlib=rb-1.2.1&q=80&w=400',
	},
};

export const getImageMockData = (imageCount) => {
	let imagelist = [];
	while (imageCount > 0) {
		imagelist.push({ ...imageData, id: `${new Date().getTime()}_${imageCount}` });
		imageCount--;
	}
	return imagelist;
};
