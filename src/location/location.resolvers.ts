import { LocationInput, Resolvers } from '~/SchemaGraphql/types.generated'
import locationService from './location.service'

const locationResolves: Resolvers = {
  Query: {
    getLocations: () => {
      return locationService.getAll()
    }
  },

  Mutation: {
    createLocation: (_, { input }) => {
      return locationService.create(input as LocationInput)
    }
  }
}

export default locationResolves
