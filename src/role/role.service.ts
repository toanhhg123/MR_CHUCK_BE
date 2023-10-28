import { ERole } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'

export class RoleService {
  findRoleByName(role: ERole) {
    return prisma.role.findFirst({
      where: { name: role }
    })
  }
}

export default new RoleService()
