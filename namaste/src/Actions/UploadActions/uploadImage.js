import * as UploadApi from '../../Api/UploadApi.js'

export const uploadImage = (data) => async(dispatch) => {
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(error)
    }
}

export const uploadPost = (data) => async(dispatch) => {
    dispatch({ type: "UPLOAD_START" })

    try {
        const newPost = await UploadApi.uploadPost(data)
        dispatch({ type: "UPLOAD_SUCCESSFULL", data: newPost.data })
            // reducer dispatches
    } catch (error) {
        console.log(error)
        dispatch({ type: "UPLOAD_FAIL" })
    }
}