import { LocationInput } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'

const { location } = prisma

export class LocationService {
  getAll() {
    return location.findMany({ include: { Case: true } })
  }
  create(input: LocationInput) {
    return location.create({ data: input, include: { Case: true } })
  }
}

export default new LocationService()
