import * as AuthApi from '../../Api/AuthRequest.js'

export const logIn = (formData) => async(dispatch) => {

    dispatch({ type: "AUTH_START" })
        // We are telling our reducer that auth has been started

    try {
        const { data } = await AuthApi.login(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const signUp = (formData) => async(dispatch) => {

    dispatch({ type: "AUTH_START" })
        // We are telling our reducer that auth has been started

    try {
        const { data } = await AuthApi.signup(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}