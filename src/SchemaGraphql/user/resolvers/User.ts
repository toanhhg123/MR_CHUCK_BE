import { Resolvers, User, UserRequestCreate } from '~/SchemaGraphql/types.generated'

export const resolvers: Resolvers = {
  Query: {
    getUsers: () => []
  },
  Mutation: {
    createUser: (userInput: UserRequestCreate) => {
      return {} as User
    }
  }
}
/* WARNING: The following resolver was missing from this file. Make sure it is properly implemented or there could be runtime errors. */
export const User: UserResolvers = {
    /* Implement User resolver logic here */
  };
