import * as UserApi from '../../Api/UserRequest.js'

export const followUser = (id, data) => async(dispatch) => {
    // dispatch({ type: "FOLLOW_USER" })
    await UserApi.followUser(id, data)

    const res = await UserApi.getUser(data._id)
        // console.log(data)
    dispatch({ type: "REFRESH_USER_DATA", data: res.data })
}

export const unfollowUser = (id, data) => async(dispatch) => {
    // dispatch({ type: "UNFOLLOW_USER" })
    await UserApi.unfollowUser(id, data)

    const res = await UserApi.getUser(data._id)
        // console.log(res.data)
    dispatch({ type: "REFRESH_USER_DATA", data: res.data })
}