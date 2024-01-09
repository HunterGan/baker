import { Router } from 'express';
import { Register, Login, AuthenticatedUser, Logout } from './controller/auth.controller'

export const routes = (router: Router) => {
// register new user
router.post('/api/register', Register)
// login known user
router.post('/api/login', Login)
// get authenticated user from jwt
router.get('/api/user', AuthenticatedUser)
// force expire jwt to log out
router.post('/api/logout', Logout)
}