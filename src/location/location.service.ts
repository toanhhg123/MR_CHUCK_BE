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
              contains: search,
              mode: 'insensitive'
            }
          }
        ]
      },
      take: 20
    })
  }

  getLocationById(id: string) {
    return location.findFirst({ where: { id } })
  }

  create(input: LocationInput) {
    return location.create({ data: input })
  }
}

export default new LocationService()
