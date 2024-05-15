const postReducer = (
    state = { posts: [], loading: false, error: false, uploading: false }, action) => {
    switch (action.type) {

        // belongs to add-post
        case "UPLOAD_START":
            return {...state, uploading: true, error: false }
        case "UPLOAD_SUCCESSFULL":
            return {...state, posts: [action.data, ...state.posts], uploading: false, error: false }
        case "UPLOAD_FAIL":
            return {...state, uploading: false, error: true }

            // belongs to post timeline
        case "RETRIEVING_START":
            return {...state, loading: true, error: false };
        case "RETRIEVING_SUCCESS":
            return {...state, posts: action.data, loading: false, error: false, uploading: false };
        case "RETRIEVING_FAIL":
            return {...state, loading: false, error: true };

        default:
            return state
    }
}

export default postReducer;