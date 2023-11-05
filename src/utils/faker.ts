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
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    gender: faker.person.sex(),
    avatar_imagesAvatar_id: null,
    etnicity: faker.helpers.enumValue(EUserRaceAndEthnicity)
  }
}

export const randomUserAvatar = async () => {
  const users = faker.helpers.multiple(createRandomUserJuror, {
    count: 1000
  })

  const usersDb = await prisma.user.createMany({ data: users })
  console.log(usersDb)
}
