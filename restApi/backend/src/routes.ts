import { Router } from 'express';
import { CheckAuthState } from './middleware/auth.middleware'
import {
  Login,
  Logout,
  Register,
  UpdateUserPass,
  UpdateUserInfo,
  AuthenticatedUser,
} from './controller/auth.controller'

import {
  GetUser,
  GetUsers,
  UpdateUser,
  CreateUser,
  DeleteUser,
} from './controller/user.controller';
import { Permissions } from './controller/permission.controller';
import { Roles } from './controller/roles.controller';

const api = {
  register: '/api/register',
  login: '/api/login',
  logout: '/api/logout',

  get_me: '/api/user',
  update_me: '/api/users/info',
  update_me_password: '/api/users/pass',

  get_users: '/api/users',
  get_user: '/api/users/:id',
  create_user: '/api/users',
  update_user: '/api/users/:id',
  delete_user: '/api/users/:id',


}

export const routes = (router: Router) => {
  // Register, Login, Logout
  router.post(api.register, Register)
  router.post(api.login, Login)
  router.post(api.logout, CheckAuthState, Logout)

  // Get | Update me
  router.get(api.get_me, CheckAuthState, AuthenticatedUser)
  router.put(api.update_me, CheckAuthState, UpdateUserInfo)
  router.put(api.update_me_password, CheckAuthState, UpdateUserPass)

  // Users administration
  router.get(api.get_users, CheckAuthState, GetUsers)
  router.get(api.get_user, CheckAuthState, GetUser)
  router.put(api.update_user, CheckAuthState, UpdateUser)
  router.post(api.create_user, CheckAuthState, CreateUser)
  router.delete(api.delete_user, CheckAuthState, DeleteUser)

  router.get('/api/permissions', CheckAuthState, Permissions)
  router.get('/api/roles', CheckAuthState, Roles)
}