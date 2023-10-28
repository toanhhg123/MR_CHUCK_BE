/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { AuthResponse } from './auth/resolvers/AuthResponse';
import    { createRole as Mutation_createRole } from './role/resolvers/Mutation/createRole';
import    { createUser as Mutation_createUser } from './user/resolvers/Mutation/createUser';
import    { deleteUser as Mutation_deleteUser } from './user/resolvers/Mutation/deleteUser';
import    { login as Mutation_login } from './auth/resolvers/Mutation/login';
import    { getMe as Query_getMe } from './auth/resolvers/Query/getMe';
import    { getRoles as Query_getRoles } from './role/resolvers/Query/getRoles';
import    { getUser as Query_getUser } from './user/resolvers/Query/getUser';
import    { getUsers as Query_getUsers } from './user/resolvers/Query/getUsers';
import    { Role } from './role/resolvers/Role';
import    { User } from './user/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { getMe: Query_getMe,getRoles: Query_getRoles,getUser: Query_getUser,getUsers: Query_getUsers },
      Mutation: { createRole: Mutation_createRole,createUser: Mutation_createUser,deleteUser: Mutation_deleteUser,login: Mutation_login },
      
      AuthResponse: AuthResponse,
Role: Role,
User: User
    }