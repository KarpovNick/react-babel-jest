
import { authenticate, deauthenticate } from '../auth'

describe('actions/authenticate', () => {
    it('should return action object correctly', () => {
        const credentials = {
            email: "mentalhelse@bergen.com" ,
            password: "mentalhelse" ,
    }
        expect(authenticate(credentials)).toEqual({
            type: 'AUTHENTICATE',
            payload: credentials,
        })
    })
})

describe
('actions/deauthenticate', () => {
    it('should return action object correctly', () => {
        expect(deauthenticate()).toEqual({
            type: 'DEAUTHENTICATE',
        })
    })
})