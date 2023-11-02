import { InputRoom } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'
import _ from 'lodash'
const { room, userRoom } = prisma

export class RoomService {
  async isMemberInRoom(userId: string, roomId: string) {
    const isExist = await userRoom.findFirst({ where: { roomId, userId } })
    return isExist ? true : false
  }

  async isOwnerRoom(userId: string, roomId: string) {
    const isExist = await userRoom.findFirst({
      where: { roomId, userId, memberType: 'OWNER' }
    })
    return isExist ? true : false
  }

  async createRoom(input: InputRoom) {
    const roomDb = await room.create({
      data: input,
      include: {
        case: true,
        userRooms: {
          include: {
            user: true
          }
        }
      }
    })

    const { userCreatedId } = roomDb.case

    await userRoom.create({
      data: { userId: userCreatedId, roomId: roomDb.id, memberType: 'OWNER' }
    })

    return roomDb
  }

  async addUsersToRooms(userIds: string[], roomId: string) {
    const roomDb = await room.findFirst({
      where: { id: roomId },
      include: { userRooms: true }
    })

    if (!roomDb) throw new Error('not found room')

    const userIdInserts = userIds.filter((id) => {
      return !roomDb.userRooms.find((userRoom) => userRoom.userId === id)
    })

    const uniqueArray = _.uniq(userIdInserts)

    const userRooms = await userRoom.createMany({
      data: uniqueArray.map((id) => ({
        userId: id,
        roomId,
        memberType: 'MEMBER'
      }))
    })

    return userRooms.count
  }

  async addUserToRooms(userId: string, roomIds: string[]) {
    await Promise.all(
      roomIds.map((roomId) => this.addUsersToRooms([userId], roomId))
    )

    return roomIds.length
  }

  getRoomByCaseId(caseId: string) {
    return room.findMany({
      where: { caseId },
      include: {
        userRooms: {
          include: {
            user: true
          }
        }
      }
    })
  }

  getRoomById(id: string) {
    return room.findFirst({
      where: { id },
      include: {
        userRooms: {
          include: {
            user: true
          }
        }
      }
    })
  }
}

export default new RoomService()
