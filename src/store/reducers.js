import { Actions } from './actions/index';

export const initialState = {
	images: {},
	approved: [],
	rejected: [],
  isLoading: false
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case Actions.APPROVE_IMAGE:
			let images = { ...state.images };
			let key = action.imageId;
			let approved = [...state.approved, images[key] ];
			delete images[key];
			return { ...state, images, approved };
		case Actions.REJECT_IMAGE:
			let nextImages = { ...state.images };
			let keyId = action.imageId;
			let rejected = [...state.rejected, keyId];
			delete nextImages[keyId];
			return { ...state, ...{ images: nextImages }, rejected };
		case Actions.IMAGE_FETCH_START:
			return { ...state, isLoading: true };
		case Actions.IMAGE_FETCH_SUCCESS:
			return { ...state, isLoading: false, images: { ...state.images, ...action.images } };
		default:
			return state;
	}
}

export default rootReducer;
