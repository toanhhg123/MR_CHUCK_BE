import { LocationInput } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'

const { location } = prisma

export class LocationService {
  getAll() {
    return location.findMany({})
  }
  create(input: LocationInput) {
    return location.create({ data: input })
  }
}

export default new LocationService()
