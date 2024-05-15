import * as UserApi from '../../Api/UserRequest.js'

export const updateUser = (id, formData) => async(dispatch) => {

    dispatch({ type: "UPDATING_USER" })

    try {
        const data = await UserApi.updateUser(id, formData)
            // console.log(data.data)
        dispatch({ type: "UPDATE_SUCCESS", data: data.data })
    } catch (error) {
        dispatch({ type: "UPDATE_FAIL" })
    }
}