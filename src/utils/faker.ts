import { faker } from '@faker-js/faker'
import { EPAD_VERSION, EUserRaceAndEthnicity, User } from '@prisma/client'
import prisma from '~/config/db'

export function createRandomUserJuror(): User {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    age: faker.number.int({ min: 10, max: 80 }),
    role: 'JUROR',
    paidVersion: faker.helpers.enumValue(EPAD_VERSION),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar_imagesAvatar_id: '',
    gender: faker.person.sex(),
    etnicity: faker.helpers.enumValue(EUserRaceAndEthnicity)
  }
}

export const randomUserAvatar = async () => {
  const userAvatars = await prisma.avatar_images.findMany()

  const users = faker.helpers.multiple(createRandomUserJuror, {
    count: userAvatars.length
  })

  users.forEach(
    (user, index) =>
      (user.avatar_imagesAvatar_id = userAvatars[index].avatar_id)
  )

  const usersDb = await prisma.user.createMany({ data: users })
  console.log(usersDb)
}
