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
        id: 'e24fad61-576a-421d-9273-02b3c365c15c',
        title: 'Validator',
        componentName: 'ValidatorPicker',
        type: 'COMP',
        comps: {
          ROOT_ID: {
            id: 'ROOT_ID',
            name: 'noname',
            props: {
              tokens: {
                padding: '20px',
              },
            },
            title: 'stackRoot',
            children: ['l30hez8c'],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          l30hez8c: {
            id: 'l30hez8c',
            name: 'name',
            props: {
              label: 'name',
            },
            title: 'name',
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
        },
      },
      {
        id: 'e84eabbb-b048-4d39-ab10-673605c718e2',
        title: 'TYU',
        componentName: null,
        type: 'FORM',
        comps: {
          ROOT_ID: {
            id: 'ROOT_ID',
            title: 'stackRoot',
            name: 'hello',
            props: { tokens: { padding: '25px' } },
            children: ['43fa6880ds24', '2df7ea43pd706', '6fde1f45p9af8'],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          '2df7ea43pd706': {
            id: '2df7ea43pd706',
            title: 'middle title',
            name: 'middle title',
            props: { label: 'middle title' },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '43fa6880ds24': {
            id: '43fa6880ds24',
            title: 'title',
            name: 'title',
            props: { label: 'title' },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '6fde1f45p9af8': {
            id: '6fde1f45p9af8',
            title: 'lasttitle',
            name: 'lasttitle',
            props: { label: 'lasttitle' },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
        },
      },
      {
        id: 'ee4254ef-9099-4243-be68-51ce733b3376',
        title: 'PrimaryButton',
        componentName: 'PrimaryButton',
        type: 'COMP',
        comps: {
          ROOT_ID: {
            id: 'ROOT_ID',
            title: 'stackRoot',
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
            title: 'type',
            name: 'props.type',
            props: {
              label: 'type',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '9ba7af9ap8942': {
            id: '9ba7af9ap8942',
            title: 'title',
            name: 'title',
            props: {
              label: 'title',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          ee4254efh9099: {
            id: 'ee4254efh9099',
            title: 'text',
            name: 'props.children',
            props: {
              label: 'text',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          ee4254efp9099: {
            id: 'ee4254efp9099',
            title: 'disabled',
            name: 'disabled',
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
        title: 'Checkbox',
        componentName: 'Checkbox',
        type: 'COMP',
        comps: {
          ROOT_ID: {
            id: 'ROOT_ID',
            title: 'stackRoot',
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
            title: 'title',
            name: 'title',
            props: {
              label: 'title',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '9a4cd3e0s4b6r': {
            id: '9a4cd3e0s4b6r',
            title: 'label',
            name: 'props.label',
            props: {
              label: 'label',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          dcc05499a6c54: {
            id: 'dcc05499a6c54',
            title: 'name',
            name: 'name',
            props: {
              label: 'name',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          ee4254efp9099: {
            id: 'ee4254efp9099',
            title: 'disabled',
            name: 'props.disabled',
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
        title: 'StackRoot',
        componentName: 'Stack',
        type: 'COMP',
        comps: {
          ROOT_ID: {
            id: 'ROOT_ID',
            title: 'stackRoot',
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
            title: 'TextField',
            name: 'props.tokens.padding',
            props: {
              label: 'отступ',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          ee4254efs9099: {
            id: 'ee4254efs9099',
            title: 'Checkbox',
            name: 'props.horizontal',
            props: {
              label: 'горизонтально',
            },
            compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
          },
        },
      },
      {
        id: 'ee4234ef-9099-8943-8968-51c00733b870',
        title: 'TextField',
        componentName: 'TextField',
        type: 'COMP',
        comps: {
          ROOT_ID: {
            id: 'ROOT_ID',
            title: 'stackRoot',
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
            title: 'label',
            name: 'props.label',
            props: {
              label: 'label',
              lable: 'label',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          a218dd0sf04e3: {
            id: 'a218dd0sf04e3',
            title: 'title',
            name: 'title',
            props: {
              label: 'title',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          ee4254efp9099: {
            id: 'ee4254efp9099',
            title: 'name',
            name: 'name',
            props: {
              label: 'name',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          rr4254efg9099: {
            id: 'rr4254efg9099',
            title: 'default value',
            name: 'defaultValue',
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
