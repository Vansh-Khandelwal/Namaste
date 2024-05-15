const authReducer = (state = { authData: null, loading: false, error: false }, action) => {

    switch (action.type) {
        // Belongs to Login Page
        case "AUTH_START":
            return {...state, loading: true, error: false }

        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({...action.data }))
                // ...action?.data:null
            return {...state, authData: action.data, loading: false, error: false }

        case "AUTH_FAIL":
            return {...state, loading: false, error: true }

            // Belongs to ProfilePg
        case "UPDATING_USER":
            return {...state, loading: true, error: false }

        case "UPDATE_SUCCESS":
            localStorage.setItem('profile', JSON.stringify({...action.data }))
            return {...state, authData: action.data, loading: false, error: false }

        case "UPDATE_FAIL":
            return {...state, loading: false, error: true }

            // Belongs to Follow User
            // case "FOLLOW_USER":
            //     return {...state, authData: {...state.authData, user: {...state.authData.user, Following: [...state.authData.user.Following, action.data] } } }

            // case "UNFOLLOW_USER":
            //     return {...state, authData: {...state.authData, user: {...state.authData.user, Following: [...state.authData.user.Following.filter((personId) => personId !== action.data)] } } }

            // Error Refresh
        case "REFRESH":
            return {...state, error: false }

            // Refresh User Data
        case "REFRESH_USER_DATA":
            // Changing local Storage to update Timeline and Info Card
            const profile = JSON.parse(localStorage.getItem("profile"))
            profile.user = {...action.data }
            localStorage.setItem("profile", JSON.stringify(profile))
                // console.log(profile)
            return {...state, authData: {...state.authData, user: {...state.authData.user, Following: action.data.Following } } }

            // Log Out Option
        case "LOG_OUT":
            localStorage.clear()
            return {...state, authData: null, loading: false, error: false }
        default:
            return state
    }
}

export default authReducer;