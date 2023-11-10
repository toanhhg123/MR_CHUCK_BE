import { LocationInput } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'

const { location } = prisma

export class LocationService {
  getAll(search?: string) {
    return location.findMany({
      where: {
        OR: [
          {
            name: {
              contains: search
            }
          }
        ]
      },
      take: 20
    })
  }
  create(input: LocationInput) {
    return location.create({ data: input })
  }
}

export default new LocationService()
