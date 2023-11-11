import { LocationInput, Resolvers } from '~/SchemaGraphql/types.generated'
import locationService from './location.service'

const locationResolves: Resolvers = {
  Query: {
    getLocations: (_, { search }) => {
      return locationService.getAll(search?.toString())
    },

    getLocation: (_, { id }) => {
      return locationService.getLocationById(id)
    }
  },

  Mutation: {
    createLocation: (_, { input }) => {
      return locationService.create(input as LocationInput)
    }
  }
}

export default locationResolves
