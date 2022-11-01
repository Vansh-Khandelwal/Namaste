import * as UserApi from '../../Api/UserRequest.js'

export const followUser = (id, data) => async(dispatch) => {
    dispatch({ type: "FOLLOW_USER" })
    UserApi.followUser(id, data)
}

export const unfollowUser = (id, data) => async(dispatch) => {
    dispatch({ type: "UNFOLLOW_USER" })
    UserApi.unfollowUser(id, data)
}