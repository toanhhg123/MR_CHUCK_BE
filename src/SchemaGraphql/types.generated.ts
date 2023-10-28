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

export type AuthRequest = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  refreshTokens: Scalars['String']['output'];
};

export type EMemberInMessageBox =
  | 'DEPUTY'
  | 'MEMBER'
  | 'OWNER';

export type EMessageBoxStatus =
  | 'CLOSED'
  | 'IN_PROGRESS'
  | 'NEW';

export type ERole =
  | 'ADMIN'
  | 'USER';

export type MessageBox = {
  __typename?: 'MessageBox';
  dateCreated: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  messageBoxMembers?: Maybe<Array<Maybe<MessageBoxMember>>>;
  messageTexts?: Maybe<Array<Maybe<MessageTextBox>>>;
  name: Scalars['String']['output'];
  owner?: Maybe<User>;
  ownerId: Scalars['String']['output'];
  process?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<EMessageBoxStatus>;
};

export type MessageBoxCreate = {
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type MessageBoxMember = {
  __typename?: 'MessageBoxMember';
  dateCreated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  messageBox?: Maybe<MessageBox>;
  messageBoxId: Scalars['String']['output'];
  type?: Maybe<EMemberInMessageBox>;
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type MessageBoxMemberCreate = {
  messageBoxId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MessageTextBox = {
  __typename?: 'MessageTextBox';
  dateCreated: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  messageBox?: Maybe<MessageBox>;
  messageBoxId: Scalars['String']['output'];
  replies?: Maybe<Array<Maybe<MessageTextBox>>>;
  reply?: Maybe<MessageTextBox>;
  replyId?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<User>;
  senderId: Scalars['String']['output'];
};

export type MessageTextBoxQuery = {
  messageBoxId: Scalars['String']['input'];
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  totalPage?: InputMaybe<Scalars['Int']['input']>;
};

export type MessageTextBoxResponse = {
  __typename?: 'MessageTextBoxResponse';
  messages?: Maybe<Array<Maybe<MessageTextBox>>>;
  pageIndex: Scalars['Int']['output'];
  totalPage: Scalars['Int']['output'];
};

export type MessageTextCreate = {
  message: Scalars['String']['input'];
  messageBoxId: Scalars['String']['input'];
  replyId?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessageBox?: Maybe<MessageBox>;
  createMessageBoxMember?: Maybe<MessageBoxMember>;
  createRole?: Maybe<ERole>;
  createUser?: Maybe<Scalars['ID']['output']>;
  deleteUser?: Maybe<Scalars['ID']['output']>;
  login: AuthResponse;
  sendMessage?: Maybe<MessageTextBox>;
};


export type MutationcreateMessageBoxArgs = {
  input: MessageBoxCreate;
};


export type MutationcreateMessageBoxMemberArgs = {
  input: MessageBoxMemberCreate;
};


export type MutationcreateRoleArgs = {
  name: ERole;
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


export type MutationsendMessageArgs = {
  messageTextCreate: MessageTextCreate;
};

export type Query = {
  __typename?: 'Query';
  getMe?: Maybe<User>;
  getMessage?: Maybe<MessageBox>;
  getMessageBoxForMe?: Maybe<Array<Maybe<MessageBox>>>;
  getMessageByMessageBoxId?: Maybe<MessageTextBoxResponse>;
  getRoles?: Maybe<Array<Maybe<Role>>>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QuerygetMessageArgs = {
  id: Scalars['String']['input'];
};


export type QuerygetMessageByMessageBoxIdArgs = {
  messageTextBoxQuery: MessageTextBoxQuery;
};


export type QuerygetUserArgs = {
  id: Scalars['ID']['input'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID']['output'];
  name: ERole;
  users?: Maybe<Array<Maybe<User>>>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  role: ERole;
  roleRef?: Maybe<Role>;
  username: Scalars['String']['output'];
};

export type UserRequestCreate = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: ERole;
  username: Scalars['String']['input'];
};

export type UserRequestLogin = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
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
  AuthRequest: AuthRequest;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AuthResponse: ResolverTypeWrapper<AuthResponse>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  EMemberInMessageBox: EMemberInMessageBox;
  EMessageBoxStatus: EMessageBoxStatus;
  ERole: ERole;
  MessageBox: ResolverTypeWrapper<MessageBox>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  MessageBoxCreate: MessageBoxCreate;
  MessageBoxMember: ResolverTypeWrapper<MessageBoxMember>;
  MessageBoxMemberCreate: MessageBoxMemberCreate;
  MessageTextBox: ResolverTypeWrapper<MessageTextBox>;
  MessageTextBoxQuery: MessageTextBoxQuery;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  MessageTextBoxResponse: ResolverTypeWrapper<MessageTextBoxResponse>;
  MessageTextCreate: MessageTextCreate;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Role: ResolverTypeWrapper<Role>;
  User: ResolverTypeWrapper<User>;
  UserRequestCreate: UserRequestCreate;
  UserRequestLogin: UserRequestLogin;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthRequest: AuthRequest;
  String: Scalars['String']['output'];
  AuthResponse: AuthResponse;
  Date: Scalars['Date']['output'];
  MessageBox: MessageBox;
  ID: Scalars['ID']['output'];
  Float: Scalars['Float']['output'];
  MessageBoxCreate: MessageBoxCreate;
  MessageBoxMember: MessageBoxMember;
  MessageBoxMemberCreate: MessageBoxMemberCreate;
  MessageTextBox: MessageTextBox;
  MessageTextBoxQuery: MessageTextBoxQuery;
  Int: Scalars['Int']['output'];
  MessageTextBoxResponse: MessageTextBoxResponse;
  MessageTextCreate: MessageTextCreate;
  Mutation: {};
  Query: {};
  Role: Role;
  User: User;
  UserRequestCreate: UserRequestCreate;
  UserRequestLogin: UserRequestLogin;
  Boolean: Scalars['Boolean']['output'];
};

export type AuthResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthResponse'] = ResolversParentTypes['AuthResponse']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshTokens?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MessageBoxResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageBox'] = ResolversParentTypes['MessageBox']> = {
  dateCreated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messageBoxMembers?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageBoxMember']>>>, ParentType, ContextType>;
  messageTexts?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageTextBox']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  process?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['EMessageBoxStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageBoxMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageBoxMember'] = ResolversParentTypes['MessageBoxMember']> = {
  dateCreated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  messageBox?: Resolver<Maybe<ResolversTypes['MessageBox']>, ParentType, ContextType>;
  messageBoxId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['EMemberInMessageBox']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageTextBoxResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageTextBox'] = ResolversParentTypes['MessageTextBox']> = {
  dateCreated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messageBox?: Resolver<Maybe<ResolversTypes['MessageBox']>, ParentType, ContextType>;
  messageBoxId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageTextBox']>>>, ParentType, ContextType>;
  reply?: Resolver<Maybe<ResolversTypes['MessageTextBox']>, ParentType, ContextType>;
  replyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  senderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageTextBoxResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageTextBoxResponse'] = ResolversParentTypes['MessageTextBoxResponse']> = {
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageTextBox']>>>, ParentType, ContextType>;
  pageIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMessageBox?: Resolver<Maybe<ResolversTypes['MessageBox']>, ParentType, ContextType, RequireFields<MutationcreateMessageBoxArgs, 'input'>>;
  createMessageBoxMember?: Resolver<Maybe<ResolversTypes['MessageBoxMember']>, ParentType, ContextType, RequireFields<MutationcreateMessageBoxMemberArgs, 'input'>>;
  createRole?: Resolver<Maybe<ResolversTypes['ERole']>, ParentType, ContextType, RequireFields<MutationcreateRoleArgs, 'name'>>;
  createUser?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'userRequestCreate'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'id'>>;
  login?: Resolver<ResolversTypes['AuthResponse'], ParentType, ContextType, RequireFields<MutationloginArgs, 'authRequest'>>;
  sendMessage?: Resolver<Maybe<ResolversTypes['MessageTextBox']>, ParentType, ContextType, RequireFields<MutationsendMessageArgs, 'messageTextCreate'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getMe?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getMessage?: Resolver<Maybe<ResolversTypes['MessageBox']>, ParentType, ContextType, RequireFields<QuerygetMessageArgs, 'id'>>;
  getMessageBoxForMe?: Resolver<Maybe<Array<Maybe<ResolversTypes['MessageBox']>>>, ParentType, ContextType>;
  getMessageByMessageBoxId?: Resolver<Maybe<ResolversTypes['MessageTextBoxResponse']>, ParentType, ContextType, RequireFields<QuerygetMessageByMessageBoxIdArgs, 'messageTextBoxQuery'>>;
  getRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role']>>>, ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QuerygetUserArgs, 'id'>>;
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['ERole'], ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['ERole'], ParentType, ContextType>;
  roleRef?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthResponse?: AuthResponseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  MessageBox?: MessageBoxResolvers<ContextType>;
  MessageBoxMember?: MessageBoxMemberResolvers<ContextType>;
  MessageTextBox?: MessageTextBoxResolvers<ContextType>;
  MessageTextBoxResponse?: MessageTextBoxResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

