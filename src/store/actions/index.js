import { GetUser } from '../../service/userService';

const Actions = {
	IMAGE_FETCH_START: 'IMAGE_FETCH_START',
	IMAGE_FETCH_SUCCESS: 'IMAGE_FETCH_SUCCESS',
	APPROVE_IMAGE: 'APPROVE_IMAGE',
	REJECT_IMAGE: 'REJECT_IMAGE',
	START_LOADER: 'START_LOADER',
	STOP_LOADER: 'STOP_LOADER',
	SHOW_ERROR: 'SHOW_ERROR',
	CLEAR_ERROR: 'CLEAR_ERROR',
};

const approveImage = (imageId) => ({ type: Actions.APPROVE_IMAGE, imageId });
const rejectImage = (imageId) => ({ type: Actions.REJECT_IMAGE, imageId });
const fetchImageStart = () => ({ type: Actions.IMAGE_FETCH_START });
const showError = () => ({ type: Actions.SHOW_ERROR });
const fetchImageDone = (images) => ({ type: Actions.IMAGE_FETCH_SUCCESS, images });

const fetchImage = () => (dispatch) => {
	dispatch(fetchImageStart());
	GetUser()
		.then((response) => {
      let images = {
        [response.id]: { ...response }
      }
			dispatch(fetchImageDone(images));
		})
		.catch((err) => {
			console.error(err);
			dispatch(showError());
		});
};

export { Actions, approveImage, rejectImage, fetchImage };
