
// export const authenticate = (credentials: Credentials) => ({
export const authenticate = (credentials) => ({
    type: "AUTHENTICATE",
    payload: credentials
});

export const deauthenticate = () => ({
    type: "DEAUTHENTICATE"
})
