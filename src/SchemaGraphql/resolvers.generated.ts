/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { AuthResponse } from './auth/resolvers/AuthResponse';
import    { Case } from './case/resolvers/Case';
import    { Date } from './room/resolvers/Date';
import    { Location } from './location/resolvers/Location';
import    { MessageBox } from './message/resolvers/MessageBox';
import    { MessageBoxMember } from './message/resolvers/MessageBoxMember';
import    { MessageTextBox } from './message/resolvers/MessageTextBox';
import    { MessageTextBoxResponse } from './message/resolvers/MessageTextBoxResponse';
import    { addUsersToRoom as Mutation_addUsersToRoom } from './room/resolvers/Mutation/addUsersToRoom';
import    { createCase as Mutation_createCase } from './case/resolvers/Mutation/createCase';
import    { createLocation as Mutation_createLocation } from './location/resolvers/Mutation/createLocation';
import    { createMessageBox as Mutation_createMessageBox } from './message/resolvers/Mutation/createMessageBox';
import    { createMessageBoxMember as Mutation_createMessageBoxMember } from './message/resolvers/Mutation/createMessageBoxMember';
import    { createRole as Mutation_createRole } from './role/resolvers/Mutation/createRole';
import    { createRoom as Mutation_createRoom } from './room/resolvers/Mutation/createRoom';
import    { createUser as Mutation_createUser } from './user/resolvers/Mutation/createUser';
import    { deleteUser as Mutation_deleteUser } from './user/resolvers/Mutation/deleteUser';
import    { login as Mutation_login } from './auth/resolvers/Mutation/login';
import    { sendMessage as Mutation_sendMessage } from './message/resolvers/Mutation/sendMessage';
import    { getCases as Query_getCases } from './case/resolvers/Query/getCases';
import    { getLocations as Query_getLocations } from './location/resolvers/Query/getLocations';
import    { getMe as Query_getMe } from './auth/resolvers/Query/getMe';
import    { getMessage as Query_getMessage } from './message/resolvers/Query/getMessage';
import    { getMessageByMessageBoxId as Query_getMessageByMessageBoxId } from './message/resolvers/Query/getMessageByMessageBoxId';
import    { getMessagesBoxForMe as Query_getMessagesBoxForMe } from './message/resolvers/Query/getMessagesBoxForMe';
import    { getMyCases as Query_getMyCases } from './case/resolvers/Query/getMyCases';
import    { getRoles as Query_getRoles } from './role/resolvers/Query/getRoles';
import    { getRoomsByCaseId as Query_getRoomsByCaseId } from './room/resolvers/Query/getRoomsByCaseId';
import    { getUser as Query_getUser } from './user/resolvers/Query/getUser';
import    { getUsers as Query_getUsers } from './user/resolvers/Query/getUsers';
import    { Role } from './role/resolvers/Role';
import    { Room } from './room/resolvers/Room';
import    { User } from './user/resolvers/User';
import    { UserRoom } from './room/resolvers/UserRoom';
    export const resolvers: Resolvers = {
      Query: { getCases: Query_getCases,getLocations: Query_getLocations,getMe: Query_getMe,getMessage: Query_getMessage,getMessageByMessageBoxId: Query_getMessageByMessageBoxId,getMessagesBoxForMe: Query_getMessagesBoxForMe,getMyCases: Query_getMyCases,getRoles: Query_getRoles,getRoomsByCaseId: Query_getRoomsByCaseId,getUser: Query_getUser,getUsers: Query_getUsers },
      Mutation: { addUsersToRoom: Mutation_addUsersToRoom,createCase: Mutation_createCase,createLocation: Mutation_createLocation,createMessageBox: Mutation_createMessageBox,createMessageBoxMember: Mutation_createMessageBoxMember,createRole: Mutation_createRole,createRoom: Mutation_createRoom,createUser: Mutation_createUser,deleteUser: Mutation_deleteUser,login: Mutation_login,sendMessage: Mutation_sendMessage },
      
      AuthResponse: AuthResponse,
Case: Case,
Date: Date,
Location: Location,
MessageBox: MessageBox,
MessageBoxMember: MessageBoxMember,
MessageTextBox: MessageTextBox,
MessageTextBoxResponse: MessageTextBoxResponse,
Role: Role,
Room: Room,
User: User,
UserRoom: UserRoom
    }