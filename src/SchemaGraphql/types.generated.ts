import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type AuthRequest = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  refreshTokens: Scalars['String']['output'];
};

export type Case = {
  __typename?: 'Case';
  additionalInfo?: Maybe<Scalars['String']['output']>;
  attorneyFirmName?: Maybe<Scalars['String']['output']>;
  attorneyName?: Maybe<Scalars['String']['output']>;
  complaintFormUploadPath?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['String']['output']>;
  messageCases?: Maybe<Array<Maybe<MessageCase>>>;
  name: Scalars['String']['output'];
  neutralSummary?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  paidVersion: EPAD_VERSION;
  process: Scalars['Int']['output'];
  rooms?: Maybe<Array<Maybe<Room>>>;
  sjqApprovalStatus?: Maybe<ESjqApprovalStatus>;
  sjqSubmissionDate?: Maybe<Scalars['Date']['output']>;
  status: ECaseStatus;
  subDepartment?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ECASE_TYPE>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userCases?: Maybe<Array<Maybe<UserCase>>>;
  userCreated?: Maybe<User>;
  userCreatedId: Scalars['String']['output'];
};

export type CaseInput = {
  additionalInfo?: InputMaybe<Scalars['String']['input']>;
  attorneyFirmName?: InputMaybe<Scalars['String']['input']>;
  attorneyName?: InputMaybe<Scalars['String']['input']>;
  complaintFormUploadPath?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  neutralSummary?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  paidVersion: EPAD_VERSION;
  process?: InputMaybe<Scalars['Int']['input']>;
  sjqApprovalStatus?: InputMaybe<ESjqApprovalStatus>;
  sjqSubmissionDate?: InputMaybe<Scalars['Date']['input']>;
  status: ECaseStatus;
  subDepartment?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ECASE_TYPE>;
};

export type CaseInputUpdate = {
  additionalInfo?: InputMaybe<Scalars['String']['input']>;
  attorneyFirmName?: InputMaybe<Scalars['String']['input']>;
  attorneyName?: InputMaybe<Scalars['String']['input']>;
  complaintFormUploadPath?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  neutralSummary?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  paidVersion?: InputMaybe<EPAD_VERSION>;
  process?: InputMaybe<Scalars['Int']['input']>;
  sjqApprovalStatus?: InputMaybe<ESjqApprovalStatus>;
  sjqSubmissionDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<ECaseStatus>;
  subDepartment?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ECASE_TYPE>;
};

export type ECASE_TYPE =
  | 'MEDICAL_MALPRACTICE'
  | 'TORTS';

export type ECaseStatus =
  | 'CLOSED'
  | 'IN_PROGRESS'
  | 'NEW';

export type EMemberInRoom =
  | 'DEPUTY'
  | 'MEMBER'
  | 'OWNER';

export type EPAD_VERSION =
  | 'FREE'
  | 'PAID';

export type ERole =
  | 'ADMIN'
  | 'JUROR'
  | 'USER';

export type ESjqApprovalStatus =
  | 'APPROVED'
  | 'PENDING';

export type ETypeRoom =
  | 'BOX'
  | 'GROUP';

export type EUserRaceAndEthnicity =
  | 'AFRICAN_OR_Black'
  | 'ASIAN'
  | 'BLACK'
  | 'HISPANIC_OR_LATINO'
  | 'INDIAN'
  | 'MIDDLE_EASTERN'
  | 'PACIFIC_ISLANDER'
  | 'WHITE';

export type InputRoom = {
  caseId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: ETypeRoom;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type LocationInput = {
  name: Scalars['String']['input'];
};

export type Message = {
  __typename?: 'Message';
  dateCreated?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  replies?: Maybe<Array<Maybe<Message>>>;
  reply?: Maybe<Message>;
  replyId?: Maybe<Scalars['String']['output']>;
  room?: Maybe<Room>;
  roomId: Scalars['String']['output'];
  sender?: Maybe<User>;
  senderId: Scalars['String']['output'];
};

export type MessageCase = {
  __typename?: 'MessageCase';
  case?: Maybe<Case>;
  caseId: Scalars['String']['output'];
  dateCreated?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  replies?: Maybe<Array<Maybe<MessageCase>>>;
  reply?: Maybe<MessageCase>;
  replyId?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<User>;
  senderId: Scalars['String']['output'];
};

export type MessageCaseInput = {
  caseId: Scalars['String']['input'];
  message: Scalars['String']['input'];
  replyId?: InputMaybe<Scalars['String']['input']>;
};

export type MessageRoomInput = {
  message: Scalars['String']['input'];
  replyId?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addJunrorToCase?: Maybe<Case>;
  addUserToCase?: Maybe<Case>;
  addUserToRooms?: Maybe<Scalars['Int']['output']>;
  addUsersToRoom?: Maybe<Scalars['Int']['output']>;
  createCase?: Maybe<Case>;
  createLocation?: Maybe<Location>;
  createMessageCase?: Maybe<MessageCase>;
  createRole?: Maybe<ERole>;
  createRoom?: Maybe<Room>;
  createUser?: Maybe<Scalars['ID']['output']>;
  deleteUser?: Maybe<Scalars['ID']['output']>;
  login: AuthResponse;
  register: AuthResponse;
  sendMessageToRoom?: Maybe<Message>;
  updateCase?: Maybe<Case>;
};


export type MutationaddJunrorToCaseArgs = {
  caseId: Scalars['String']['input'];
  num: Scalars['Int']['input'];
  optionAddJunror?: InputMaybe<OptionAddJunror>;
};


export type MutationaddUserToCaseArgs = {
  input: UserCaseInput;
};


export type MutationaddUserToRoomsArgs = {
  roomIds: Array<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};


export type MutationaddUsersToRoomArgs = {
  userRoomInput: UserRoomInput;
};


export type MutationcreateCaseArgs = {
  caseInput: CaseInput;
};


export type MutationcreateLocationArgs = {
  input: LocationInput;
};


export type MutationcreateMessageCaseArgs = {
  input: MessageCaseInput;
};


export type MutationcreateRoleArgs = {
  name: ERole;
};


export type MutationcreateRoomArgs = {
  input: InputRoom;
};


export type MutationcreateUserArgs = {
  userRequestCreate: UserRequestCreate;
};


export type MutationdeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationloginArgs = {
  authRequest: AuthRequest;
};


export type MutationregisterArgs = {
  input: AuthRegisterInput;
};


export type MutationsendMessageToRoomArgs = {
  input: MessageRoomInput;
};


export type MutationupdateCaseArgs = {
  caseId: Scalars['String']['input'];
  input: CaseInputUpdate;
};

export type OptionAddJunror = {
  ageRange?: InputMaybe<Array<Scalars['Int']['input']>>;
  gender?: InputMaybe<Scalars['String']['input']>;
  paidVersion?: InputMaybe<EPAD_VERSION>;
  raceOrEthnicity?: InputMaybe<EUserRaceAndEthnicity>;
};

export type Query = {
  __typename?: 'Query';
  getCaseById?: Maybe<Case>;
  getCases?: Maybe<Array<Maybe<Case>>>;
  getLocations?: Maybe<Array<Maybe<Location>>>;
  getMe?: Maybe<User>;
  getMessageByRoomId?: Maybe<Array<Maybe<Message>>>;
  getMyCases?: Maybe<Array<Maybe<Case>>>;
  getRoles?: Maybe<Array<Maybe<Role>>>;
  getRoomBoxByUserId?: Maybe<Room>;
  getRoomById?: Maybe<Room>;
  getRoomsByCaseId?: Maybe<Array<Maybe<Room>>>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  searchUser?: Maybe<Array<Maybe<User>>>;
};


export type QuerygetCaseByIdArgs = {
  caseId: Scalars['String']['input'];
};


export type QuerygetMessageByRoomIdArgs = {
  roomId: Scalars['String']['input'];
};


export type QuerygetRoomBoxByUserIdArgs = {
  caseId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QuerygetRoomByIdArgs = {
  roomId: Scalars['String']['input'];
};


export type QuerygetRoomsByCaseIdArgs = {
  caseId: Scalars['String']['input'];
};


export type QuerygetUserArgs = {
  id: Scalars['ID']['input'];
};


export type QuerysearchUserArgs = {
  query: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID']['output'];
  name: ERole;
  users?: Maybe<Array<Maybe<User>>>;
};

export type Room = {
  __typename?: 'Room';
  case?: Maybe<Case>;
  caseId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  messages?: Maybe<Array<Maybe<Message>>>;
  name: Scalars['String']['output'];
  type: ETypeRoom;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userRooms: Array<Maybe<UserRoom>>;
};

export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  avatarImage?: Maybe<avatar_images>;
  avatar_imagesAvatar_id?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  etnicity?: Maybe<EUserRaceAndEthnicity>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  paidVersion?: Maybe<EPAD_VERSION>;
  password: Scalars['String']['output'];
  role: ERole;
  roleRef?: Maybe<Role>;
  username: Scalars['String']['output'];
};

export type UserCase = {
  __typename?: 'UserCase';
  case?: Maybe<Case>;
  caseId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type UserCaseInput = {
  caseId: Scalars['String']['input'];
  userIds: Array<Scalars['String']['input']>;
};

export type UserRequestCreate = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role: ERole;
  username: Scalars['String']['input'];
};

export type UserRequestLogin = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserRoom = {
  __typename?: 'UserRoom';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  memberType: EMemberInRoom;
  room?: Maybe<Room>;
  roomId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type UserRoomInput = {
  roomId: Scalars['String']['input'];
  userIds: Array<InputMaybe<Scalars['String']['input']>>;
};

export type avatar_images = {
  __typename?: 'avatar_images';
  age_range?: Maybe<Scalars['String']['output']>;
  avatar_id: Scalars['String']['output'];
  etnicity?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthRegisterInput: AuthRegisterInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AuthRequest: AuthRequest;
  AuthResponse: ResolverTypeWrapper<AuthResponse>;
  Case: ResolverTypeWrapper<Case>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  CaseInput: CaseInput;
  CaseInputUpdate: CaseInputUpdate;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  ECASE_TYPE: ECASE_TYPE;
  ECaseStatus: ECaseStatus;
  EMemberInRoom: EMemberInRoom;
  EPAD_VERSION: EPAD_VERSION;
  ERole: ERole;
  ESjqApprovalStatus: ESjqApprovalStatus;
  ETypeRoom: ETypeRoom;
  EUserRaceAndEthnicity: EUserRaceAndEthnicity;
  InputRoom: InputRoom;
  Location: ResolverTypeWrapper<Location>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  LocationInput: LocationInput;
  Message: ResolverTypeWrapper<Message>;
  MessageCase: ResolverTypeWrapper<MessageCase>;
  MessageCaseInput: MessageCaseInput;
  MessageRoomInput: MessageRoomInput;
  Mutation: ResolverTypeWrapper<{}>;
  OptionAddJunror: OptionAddJunror;
  Query: ResolverTypeWrapper<{}>;
  Role: ResolverTypeWrapper<Role>;
  Room: ResolverTypeWrapper<Room>;
  User: ResolverTypeWrapper<User>;
  UserCase: ResolverTypeWrapper<UserCase>;
  UserCaseInput: UserCaseInput;
  UserRequestCreate: UserRequestCreate;
  UserRequestLogin: UserRequestLogin;
  UserRoom: ResolverTypeWrapper<UserRoom>;
  UserRoomInput: UserRoomInput;
  avatar_images: ResolverTypeWrapper<avatar_images>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthRegisterInput: AuthRegisterInput;
  String: Scalars['String']['output'];
  AuthRequest: AuthRequest;
  AuthResponse: AuthResponse;
  Case: Case;
  Int: Scalars['Int']['output'];
  CaseInput: CaseInput;
  CaseInputUpdate: CaseInputUpdate;
  Date: Scalars['Date']['output'];
  InputRoom: InputRoom;
  Location: Location;
  ID: Scalars['ID']['output'];
  LocationInput: LocationInput;
  Message: Message;
  MessageCase: MessageCase;
  MessageCaseInput: MessageCaseInput;
  MessageRoomInput: MessageRoomInput;
  Mutation: {};
  OptionAddJunror: OptionAddJunror;
  Query: {};
  Role: Role;
  Room: Room;
  User: User;
  UserCase: UserCase;
  UserCaseInput: UserCaseInput;
  UserRequestCreate: UserRequestCreate;
  UserRequestLogin: UserRequestLogin;
  UserRoom: UserRoom;
  UserRoomInput: UserRoomInput;
  avatar_images: avatar_images;
  Boolean: Scalars['Boolean']['output'];
};

export type AuthResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthResponse'] = ResolversParentTypes['AuthResponse']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshTokens?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Case'] = ResolversParentTypes['Case']> = {
  additionalInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attorneyFirmName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attorneyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  complaintFormUploadPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  locationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messageCases?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageCase']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  neutralSummary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paidVersion?: Resolver<ResolversTypes['EPAD_VERSION'], ParentType, ContextType>;
  process?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room']>>>, ParentType, ContextType>;
  sjqApprovalStatus?: Resolver<Maybe<ResolversTypes['ESjqApprovalStatus']>, ParentType, ContextType>;
  sjqSubmissionDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ECaseStatus'], ParentType, ContextType>;
  subDepartment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ECASE_TYPE']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  userCases?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserCase']>>>, ParentType, ContextType>;
  userCreated?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userCreatedId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  dateCreated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  reply?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  replyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  roomId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  senderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageCaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageCase'] = ResolversParentTypes['MessageCase']> = {
  case?: Resolver<Maybe<ResolversTypes['Case']>, ParentType, ContextType>;
  caseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageCase']>>>, ParentType, ContextType>;
  reply?: Resolver<Maybe<ResolversTypes['MessageCase']>, ParentType, ContextType>;
  replyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  senderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addJunrorToCase?: Resolver<Maybe<ResolversTypes['Case']>, ParentType, ContextType, RequireFields<MutationaddJunrorToCaseArgs, 'caseId' | 'num'>>;
  addUserToCase?: Resolver<Maybe<ResolversTypes['Case']>, ParentType, ContextType, RequireFields<MutationaddUserToCaseArgs, 'input'>>;
  addUserToRooms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationaddUserToRoomsArgs, 'roomIds' | 'userId'>>;
  addUsersToRoom?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationaddUsersToRoomArgs, 'userRoomInput'>>;
  createCase?: Resolver<Maybe<ResolversTypes['Case']>, ParentType, ContextType, RequireFields<MutationcreateCaseArgs, 'caseInput'>>;
  createLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<MutationcreateLocationArgs, 'input'>>;
  createMessageCase?: Resolver<Maybe<ResolversTypes['MessageCase']>, ParentType, ContextType, RequireFields<MutationcreateMessageCaseArgs, 'input'>>;
  createRole?: Resolver<Maybe<ResolversTypes['ERole']>, ParentType, ContextType, RequireFields<MutationcreateRoleArgs, 'name'>>;
  createRoom?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, RequireFields<MutationcreateRoomArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'userRequestCreate'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'id'>>;
  login?: Resolver<ResolversTypes['AuthResponse'], ParentType, ContextType, RequireFields<MutationloginArgs, 'authRequest'>>;
  register?: Resolver<ResolversTypes['AuthResponse'], ParentType, ContextType, RequireFields<MutationregisterArgs, 'input'>>;
  sendMessageToRoom?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationsendMessageToRoomArgs, 'input'>>;
  updateCase?: Resolver<Maybe<ResolversTypes['Case']>, ParentType, ContextType, RequireFields<MutationupdateCaseArgs, 'caseId' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCaseById?: Resolver<Maybe<ResolversTypes['Case']>, ParentType, ContextType, RequireFields<QuerygetCaseByIdArgs, 'caseId'>>;
  getCases?: Resolver<Maybe<Array<Maybe<ResolversTypes['Case']>>>, ParentType, ContextType>;
  getLocations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType>;
  getMe?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getMessageByRoomId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType, RequireFields<QuerygetMessageByRoomIdArgs, 'roomId'>>;
  getMyCases?: Resolver<Maybe<Array<Maybe<ResolversTypes['Case']>>>, ParentType, ContextType>;
  getRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role']>>>, ParentType, ContextType>;
  getRoomBoxByUserId?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, RequireFields<QuerygetRoomBoxByUserIdArgs, 'caseId' | 'userId'>>;
  getRoomById?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, RequireFields<QuerygetRoomByIdArgs, 'roomId'>>;
  getRoomsByCaseId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room']>>>, ParentType, ContextType, RequireFields<QuerygetRoomsByCaseIdArgs, 'caseId'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QuerygetUserArgs, 'id'>>;
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  searchUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuerysearchUserArgs, 'query'>>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['ERole'], ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomResolvers<ContextType = any, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = {
  case?: Resolver<Maybe<ResolversTypes['Case']>, ParentType, ContextType>;
  caseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ETypeRoom'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  userRooms?: Resolver<Array<Maybe<ResolversTypes['UserRoom']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarImage?: Resolver<Maybe<ResolversTypes['avatar_images']>, ParentType, ContextType>;
  avatar_imagesAvatar_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  etnicity?: Resolver<Maybe<ResolversTypes['EUserRaceAndEthnicity']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paidVersion?: Resolver<Maybe<ResolversTypes['EPAD_VERSION']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['ERole'], ParentType, ContextType>;
  roleRef?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCase'] = ResolversParentTypes['UserCase']> = {
  case?: Resolver<Maybe<ResolversTypes['Case']>, ParentType, ContextType>;
  caseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRoomResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserRoom'] = ResolversParentTypes['UserRoom']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  memberType?: Resolver<ResolversTypes['EMemberInRoom'], ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  roomId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type avatar_imagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['avatar_images'] = ResolversParentTypes['avatar_images']> = {
  age_range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  etnicity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthResponse?: AuthResponseResolvers<ContextType>;
  Case?: CaseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Location?: LocationResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessageCase?: MessageCaseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCase?: UserCaseResolvers<ContextType>;
  UserRoom?: UserRoomResolvers<ContextType>;
  avatar_images?: avatar_imagesResolvers<ContextType>;
};

