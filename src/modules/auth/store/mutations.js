// export const myMutation =  (state) => {
    
// }

export const loginUser =  (state,{user,idToken}) => {
    if(idToken){
        localStorage.setItem('idToken',idToken)
        state.idToken = idToken
    }
    if(user){
        localStorage.setItem('user',user)
        state.user = user
    }  
    state.status = 'authenticated'
}

export const logout = (state) => {
    state.user = null
    state.idToken = null
    state.status = 'not-authenticated'
    localStorage.removeItem('idToken')
    localStorage.removeItem('user')
}