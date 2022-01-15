import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  Array(100)
    .fill(1)
    .forEach(async (item, index) => {
      await prisma.user.upsert({
        where: { email: `alice${index}@prisma.io` },
        update: {},
        create: {
          email: `alice${index}@prisma.io`,
          username: `aliceprisma${index}`,
          fullname: `Alice${index}`,
        },
      })

      await prisma.user.upsert({
        where: { email: `bob${index}@prisma.io` },
        update: {},
        create: {
          email: `bob${index}@prisma.io`,
          username: `bobprisma${index}`,
          fullname: `Bob${index}`,
        },
      })
    })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
