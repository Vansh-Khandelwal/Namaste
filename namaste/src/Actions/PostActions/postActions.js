import * as PostApi from '../../Api/PostsRequest.js'

export const getTimeline = (id) => async(dispatch) => {
    dispatch({ type: "RETRIEVING_START" })
    try {
        const { data } = await PostApi.getTimelinePosts(id)
        dispatch({ type: "RETRIEVING_SUCCESS", data: data })
    } catch (error) {
        dispatch({ type: "RETRIEVING_FAIL" })
        console.log(error)
    }

}