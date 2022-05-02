import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const ROOT_COMP_ID = 'stackRootId'

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
          stackRootId: {
            id: 'stackRootId',
            name: 'stackRoot',
            path: 'hello',
            props: { tokens: { padding: '25px' } },
            childCompIds: [
              '43fa6880-240f-40ee-bd80-6a0fd7a95493',
              '2df7ea43-d706-4eb7-80c6-d8b87d4c94f6',
              '6fde1f45-9af8-4b5d-aefc-15b589d7fcb5',
            ],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          '2df7ea43-d706-4eb7-80c6-d8b87d4c94f6': {
            id: '2df7ea43-d706-4eb7-80c6-d8b87d4c94f6',
            name: 'middle name',
            path: 'middle name',
            props: { label: 'middle name' },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '43fa6880-240f-40ee-bd80-6a0fd7a95493': {
            id: '43fa6880-240f-40ee-bd80-6a0fd7a95493',
            name: 'name',
            path: 'name',
            props: { label: 'name' },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '6fde1f45-9af8-4b5d-aefc-15b589d7fcb5': {
            id: '6fde1f45-9af8-4b5d-aefc-15b589d7fcb5',
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
          stackRootId: {
            id: 'stackRootId',
            name: 'stackRoot',
            props: {
              tokens: {
                padding: '20px',
                childrenGap: 10,
              },
            },
            childCompIds: [
              '9ba7af9a-8942-4e57-af66-e0b2936dbc56',
              '794d1480-0cec-4916-8a10-7c3e446bd327',
              'ee4254ef-9099-5543-be68-51ce533b3367',
              'ee4254ef-9099-5543-be68-51ce733b3367',
            ],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          '794d1480-0cec-4916-8a10-7c3e446bd327': {
            id: '794d1480-0cec-4916-8a10-7c3e446bd327',
            name: 'type',
            path: 'props.type',
            props: {
              label: 'type',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '9ba7af9a-8942-4e57-af66-e0b2936dbc56': {
            id: '9ba7af9a-8942-4e57-af66-e0b2936dbc56',
            name: 'name',
            path: 'name',
            props: {
              label: 'name',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          'ee4254ef-9099-5543-be68-51ce533b3367': {
            id: 'ee4254ef-9099-5543-be68-51ce533b3367',
            name: 'text',
            path: 'props.children',
            props: {
              label: 'text',
              placeholder: 'надпись',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          'ee4254ef-9099-5543-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5543-be68-51ce733b3367',
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
          stackRootId: {
            id: 'stackRootId',
            name: 'stackRoot',
            props: {
              tokens: {
                padding: '20px',
                childrenGap: 10,
              },
            },
            childCompIds: [
              '1a61d43c-6f0f-4a76-b2fc-478b6e3c633c',
              'dcc05499-6c54-4302-86d9-6b39b133a626',
              '9a4cd3e0-4b62-4e3c-b38f-6b928a07637c',
              'ee4254ef-9099-5543-be68-51ce733b3367',
            ],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          '1a61d43c-6f0f-4a76-b2fc-478b6e3c633c': {
            id: '1a61d43c-6f0f-4a76-b2fc-478b6e3c633c',
            name: 'name',
            path: 'name',
            props: {
              label: 'name',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          '9a4cd3e0-4b62-4e3c-b38f-6b928a07637c': {
            id: '9a4cd3e0-4b62-4e3c-b38f-6b928a07637c',
            name: 'label',
            path: 'props.label',
            props: {
              label: 'label',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          'dcc05499-6c54-4302-86d9-6b39b133a626': {
            id: 'dcc05499-6c54-4302-86d9-6b39b133a626',
            name: 'path',
            path: 'path',
            props: {
              label: 'path',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          'ee4254ef-9099-5543-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5543-be68-51ce733b3367',
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
        name: 'Stack',
        componentName: 'Stack',
        type: 'COMP',
        comps: {
          stackRootId: {
            id: 'stackRootId',
            name: 'stackRoot',
            props: {
              tokens: {
                padding: '20px',
                childrenGap: 10,
              },
            },
            childCompIds: ['ee4254ef-9099-5sd3-be68-51ce733b3367', 'ee4254ef-9099-5543-be68-51ce733b3367'],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          'ee4254ef-9099-5543-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5543-be68-51ce733b3367',
            name: 'TextField',
            path: 'props.tokens.padding',
            props: {
              label: 'отступ',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          'ee4254ef-9099-5sd3-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5sd3-be68-51ce733b3367',
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
          stackRootId: {
            id: 'stackRootId',
            name: 'stackRoot',
            props: {
              tokens: {
                padding: '20px',
                childrenGap: 10,
              },
            },
            childCompIds: [
              'a218dd0c-04e3-4733-9504-81f7ce3b93ee',
              '8d9d7967-cce1-40cc-b991-1b55809c475b',
              'ee4254ef-9099-5543-be68-51ce733b3367',
              'rr4254ef-9099-5643-be68-51ce733b3360',
            ],
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
          },
          '8d9d7967-cce1-40cc-b991-1b55809c475b': {
            id: '8d9d7967-cce1-40cc-b991-1b55809c475b',
            name: 'label',
            path: 'props.label',
            props: {
              label: 'label',
              lable: 'label',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          'a218dd0c-04e3-4733-9504-81f7ce3b93ee': {
            id: 'a218dd0c-04e3-4733-9504-81f7ce3b93ee',
            name: 'name',
            path: 'name',
            props: {
              label: 'name',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          'ee4254ef-9099-5543-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5543-be68-51ce733b3367',
            name: 'path',
            path: 'path',
            props: {
              label: 'path',
            },
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
          },
          'rr4254ef-9099-5643-be68-51ce733b3360': {
            id: 'rr4254ef-9099-5643-be68-51ce733b3360',
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
