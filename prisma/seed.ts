import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const ROOT_ID = 'ROOT_ID'

async function main() {
  // Array(100)
  //   .fill(1)
  //   .forEach(async (item, index) => {
  //     await prisma.user.upsert({
  //       where: { email: `alice${index}@prisma.io` },
  //       update: {},
  //       create: {
  //         email: `alice${index}@prisma.io`,
  //         username: `aliceprisma${index}`,
  //         fullname: `Alice${index}`,
  //       },
  //     })

  //     await prisma.user.upsert({
  //       where: { email: `bob${index}@prisma.io` },
  //       update: {},
  //       create: {
  //         email: `bob${index}@prisma.io`,
  //         username: `bobprisma${index}`,
  //         fullname: `Bob${index}`,
  //       },
  //     })
  //   })

  await prisma.schema.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 'e84eabbb-b048-4d39-ab10-673605c718e2',
        name: 'TYU',
        componentName: null,
        type: 'FORM',
        comps: {
          ROOT_ID: {
            id: 'ROOT_ID',
            name: 'stackRoot',
            path: 'hello',
            props: { tokens: { padding: '25px' } },
            children: ['43fa6880ds24', '2df7ea43pd706', '6fde1f45p9af8'],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          '2df7ea43pd706': {
            id: '2df7ea43pd706',
            name: 'middle name',
            path: 'middle name',
            props: { label: 'middle name' },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '43fa6880ds24': {
            id: '43fa6880ds24',
            name: 'name',
            path: 'name',
            props: { label: 'name' },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '6fde1f45p9af8': {
            id: '6fde1f45p9af8',
            name: 'lastname',
            path: 'lastname',
            props: { label: 'lastname' },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
        },
      },
      {
        id: 'ee4254ef-9099-4243-be68-51ce733b3376',
        name: 'PrimaryButton',
        componentName: 'PrimaryButton',
        type: 'COMP',
        comps: {
          ROOT_ID: {
            id: 'ROOT_ID',
            name: 'stackRoot',
            props: {
              tokens: {
                padding: '20px',
                childrenGap: 10,
              },
            },
            children: ['9ba7af9ap8942', '794d1480f0cec', 'ee4254efh9099', 'ee4254efp9099'],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          '794d1480f0cec': {
            id: '794d1480f0cec',
            name: 'type',
            path: 'props.type',
            props: {
              label: 'type',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '9ba7af9ap8942': {
            id: '9ba7af9ap8942',
            name: 'name',
            path: 'name',
            props: {
              label: 'name',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          ee4254efh9099: {
            id: 'ee4254efh9099',
            name: 'text',
            path: 'props.children',
            props: {
              label: 'text',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          ee4254efp9099: {
            id: 'ee4254efp9099',
            name: 'disabled',
            path: 'disabled',
            type: 'checkbox',
            props: {
              label: 'disabled',
            },
            compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
          },
        },
      },
      {
        id: 'ee4254ef-9099-9089-7468-89ce733b3376',
        name: 'Checkbox',
        componentName: 'Checkbox',
        type: 'COMP',
        comps: {
          ROOT_ID: {
            id: 'ROOT_ID',
            name: 'stackRoot',
            props: {
              tokens: {
                padding: '20px',
                childrenGap: 10,
              },
            },
            children: ['1a61d43ck6f0f', 'dcc05499a6c54', '9a4cd3e0s4b6r', 'ee4254efp9099'],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          '1a61d43ck6f0f': {
            id: '1a61d43ck6f0f',
            name: 'name',
            path: 'name',
            props: {
              label: 'name',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '9a4cd3e0s4b6r': {
            id: '9a4cd3e0s4b6r',
            name: 'label',
            path: 'props.label',
            props: {
              label: 'label',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          dcc05499a6c54: {
            id: 'dcc05499a6c54',
            name: 'path',
            path: 'path',
            props: {
              label: 'path',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          ee4254efp9099: {
            id: 'ee4254efp9099',
            name: 'disabled',
            path: 'props.disabled',
            label: 'disabled',
            props: {
              label: 'disabled',
              disabled: false,
            },
            compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
          },
        },
      },
      {
        id: 'ee4254ef-9099-4289-be68-51ce733b3376',
        name: 'StackRoot',
        componentName: 'Stack',
        type: 'COMP',
        comps: {
          ROOT_ID: {
            id: 'ROOT_ID',
            name: 'stackRoot',
            props: {
              tokens: {
                padding: '20px',
                childrenGap: 10,
              },
            },
            children: ['ee4254efs9099', 'ee4254efp9099'],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          ee4254efp9099: {
            id: 'ee4254efp9099',
            name: 'TextField',
            path: 'props.tokens.padding',
            props: {
              label: 'отступ',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          ee4254efs9099: {
            id: 'ee4254efs9099',
            name: 'Checkbox',
            path: 'props.horizontal',
            props: {
              label: 'горизонтально',
            },
            compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
          },
        },
      },
      {
        id: 'ee4234ef-9099-8943-8968-51c00733b870',
        name: 'TextField',
        componentName: 'TextField',
        type: 'COMP',
        comps: {
          ROOT_ID: {
            id: 'ROOT_ID',
            name: 'stackRoot',
            props: {
              tokens: {
                padding: '20px',
                childrenGap: 10,
              },
            },
            children: ['a218dd0sf04e3', '8d9d7967pcced', 'ee4254efp9099', 'rr4254efg9099'],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          '8d9d7967pcced': {
            id: '8d9d7967pcced',
            name: 'label',
            path: 'props.label',
            props: {
              label: 'label',
              lable: 'label',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          a218dd0sf04e3: {
            id: 'a218dd0sf04e3',
            name: 'name',
            path: 'name',
            props: {
              label: 'name',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          ee4254efp9099: {
            id: 'ee4254efp9099',
            name: 'path',
            path: 'path',
            props: {
              label: 'path',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          rr4254efg9099: {
            id: 'rr4254efg9099',
            name: 'default value',
            path: 'defaultValue',
            props: {
              label: 'default value',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
        },
      },
    ],
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
