/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { AuthResponse } from './auth/resolvers/AuthResponse';
import    { Case } from './case/resolvers/Case';
import    { Date } from './room/resolvers/Date';
import    { Location } from './location/resolvers/Location';
import    { Message } from './message/resolvers/Message';
import    { MessageCase } from './messageCase/resolvers/MessageCase';
import    { addJunrorToCase as Mutation_addJunrorToCase } from './case/resolvers/Mutation/addJunrorToCase';
import    { addOneJurorToCase as Mutation_addOneJurorToCase } from './case/resolvers/Mutation/addOneJurorToCase';
import    { addUserToCase as Mutation_addUserToCase } from './case/resolvers/Mutation/addUserToCase';
import    { addUserToRooms as Mutation_addUserToRooms } from './room/resolvers/Mutation/addUserToRooms';
import    { addUsersToRoom as Mutation_addUsersToRoom } from './room/resolvers/Mutation/addUsersToRoom';
import    { createCase as Mutation_createCase } from './case/resolvers/Mutation/createCase';
import    { createLocation as Mutation_createLocation } from './location/resolvers/Mutation/createLocation';
import    { createMessageCase as Mutation_createMessageCase } from './messageCase/resolvers/Mutation/createMessageCase';
import    { createRole as Mutation_createRole } from './role/resolvers/Mutation/createRole';
import    { createRoom as Mutation_createRoom } from './room/resolvers/Mutation/createRoom';
import    { createUser as Mutation_createUser } from './user/resolvers/Mutation/createUser';
import    { deleteUser as Mutation_deleteUser } from './user/resolvers/Mutation/deleteUser';
import    { login as Mutation_login } from './auth/resolvers/Mutation/login';
import    { register as Mutation_register } from './auth/resolvers/Mutation/register';
import    { sendMessageToRoom as Mutation_sendMessageToRoom } from './message/resolvers/Mutation/sendMessageToRoom';
import    { updateCase as Mutation_updateCase } from './case/resolvers/Mutation/updateCase';
import    { getCaseById as Query_getCaseById } from './case/resolvers/Query/getCaseById';
import    { getCases as Query_getCases } from './case/resolvers/Query/getCases';
import    { getLocation as Query_getLocation } from './location/resolvers/Query/getLocation';
import    { getLocations as Query_getLocations } from './location/resolvers/Query/getLocations';
import    { getMe as Query_getMe } from './auth/resolvers/Query/getMe';
import    { getMessageByRoomId as Query_getMessageByRoomId } from './message/resolvers/Query/getMessageByRoomId';
import    { getMyCases as Query_getMyCases } from './case/resolvers/Query/getMyCases';
import    { getRoles as Query_getRoles } from './role/resolvers/Query/getRoles';
import    { getRoomBoxByUserId as Query_getRoomBoxByUserId } from './room/resolvers/Query/getRoomBoxByUserId';
import    { getRoomById as Query_getRoomById } from './room/resolvers/Query/getRoomById';
import    { getRoomsByCaseId as Query_getRoomsByCaseId } from './room/resolvers/Query/getRoomsByCaseId';
import    { getUser as Query_getUser } from './user/resolvers/Query/getUser';
import    { getUsers as Query_getUsers } from './user/resolvers/Query/getUsers';
import    { searchUser as Query_searchUser } from './user/resolvers/Query/searchUser';
import    { Role } from './role/resolvers/Role';
import    { Room } from './room/resolvers/Room';
import    { User } from './user/resolvers/User';
import    { UserCase } from './case/resolvers/UserCase';
import    { UserRoom } from './room/resolvers/UserRoom';
import    { avatar_images } from './user/resolvers/avatar_images';
    export const resolvers: Resolvers = {
      Query: { getCaseById: Query_getCaseById,getCases: Query_getCases,getLocation: Query_getLocation,getLocations: Query_getLocations,getMe: Query_getMe,getMessageByRoomId: Query_getMessageByRoomId,getMyCases: Query_getMyCases,getRoles: Query_getRoles,getRoomBoxByUserId: Query_getRoomBoxByUserId,getRoomById: Query_getRoomById,getRoomsByCaseId: Query_getRoomsByCaseId,getUser: Query_getUser,getUsers: Query_getUsers,searchUser: Query_searchUser },
      Mutation: { addJunrorToCase: Mutation_addJunrorToCase,addOneJurorToCase: Mutation_addOneJurorToCase,addUserToCase: Mutation_addUserToCase,addUserToRooms: Mutation_addUserToRooms,addUsersToRoom: Mutation_addUsersToRoom,createCase: Mutation_createCase,createLocation: Mutation_createLocation,createMessageCase: Mutation_createMessageCase,createRole: Mutation_createRole,createRoom: Mutation_createRoom,createUser: Mutation_createUser,deleteUser: Mutation_deleteUser,login: Mutation_login,register: Mutation_register,sendMessageToRoom: Mutation_sendMessageToRoom,updateCase: Mutation_updateCase },
      
      AuthResponse: AuthResponse,
Case: Case,
Date: Date,
Location: Location,
Message: Message,
MessageCase: MessageCase,
Role: Role,
Room: Room,
User: User,
UserCase: UserCase,
UserRoom: UserRoom,
avatar_images: avatar_images
    }