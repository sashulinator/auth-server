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
        id: 'ee4254ef-a9a3-4243-be68-51ce733b338e',
        name: 'credentials',
        title: 'Креды',
        description: 'some description',
        comps: {
          stackRootId: {
            id: 'stackRootId',
            name: 'stackRoot',
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
            compName: 'Stack',
            path: 'hello',
            type: 'component',
            props: {
              as: 'ul',
              horizontal: true,
              verticalAlign: 'center',
              tokens: {
                childrenGap: 10,
                padding: '45px 40px',
              },
            },
            childCompIds: ['stackChild'],
          },
          stackChild: {
            id: 'stackChild',
            name: 'stackChildName',
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
            compName: 'Stack',
            path: 'hello',
            type: 'component',
            props: {
              as: 'ul',
              horizontal: true,
              verticalAlign: 'center',
              tokens: {
                childrenGap: 10,
                padding: '45px 40px',
              },
            },
            childCompIds: ['buttonOneId', 'buttonTwoId', 'textInputOneId', 'textInputTwoId'],
          },
          buttonOneId: {
            id: 'buttonOneId',
            name: 'КнопкаГлавная1',
            compSchemaId: 'ee4254ef-9099-4243-be68-51ce733b3376',
            compName: 'PrimaryButton',
            path: 'hello12',
            type: 'button',
            props: {
              disabled: false,
              type: 'submit',
              children: 'hello',
            },
          },
          textOneId: {
            id: 'textOneId',
            name: 'Текст1',
            compSchemaId: 'ee4254ef-9099-6789-7868-89ce733b3376',
            compName: 'Text',
            path: 'hello12',
            type: 'component',
            props: {
              children: 'hello',
            },
          },
          buttonTwoId: {
            id: 'buttonTwoId',
            name: 'КнопкаГлавная2',
            compSchemaId: 'ee4254ef-9099-4243-be68-51ce733b3376',
            compName: 'PrimaryButton',
            path: 'world',
            type: 'button',
            props: {
              disabled: false,
              children: 'koko',
            },
          },
          textInputOneId: {
            id: 'textInputOneId',
            name: 'ТекстовоеПоле1',
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
            compName: 'TextField',
            path: 'funny',
            defaultValue: 'init',
            type: 'input',
          },
          textInputTwoId: {
            id: 'textInputTwoId',
            name: 'ТекстовоеПоле2',
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
            compName: 'TextField',
            path: 'kuku',
            type: 'input',
          },
        },
      },
      {
        id: 'ee4254ef-9099-4243-be68-51ce733b3376',
        name: 'PrimaryButton',
        title: 'Button',
        description: 'button',
        comps: {
          [ROOT_COMP_ID]: {
            id: ROOT_COMP_ID,
            name: 'stackRoot',
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
            compName: 'Stack',
            path: 'hello',
            type: 'component',
            props: {
              tokens: {
                // childrenGap: 10,
              },
            },
            childCompIds: ['ee4254ef-9099-8943-be68-51ce733b390', 'ee4254ef-9099-5543-be68-51ce733b3367'],
          },
          'ee4254ef-9099-8943-be68-51ce733b390': {
            id: 'ee4254ef-9099-8943-be68-51ce733b390',
            name: 'ТестИнпут1',
            compName: 'TextField',
            compSchemaId: 'ee4254ef-9099-8943-be68-51ce733b870',
            path: 'props.children',
            type: 'input',
            props: {
              placeholder: 'надпись',
            },
          },
          'ee4254ef-9099-5543-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5543-be68-51ce733b3367',
            name: 'ТестЧекбокс1',
            compName: 'Checkbox',
            compSchemaId: 'ee4254ef-9099-8943-8968-51ce733b870',
            path: 'props.disabled',
            type: 'checkbox',
            props: {
              label: 'неактивный',
            },
          },
        },
      },
      {
        id: 'ee4254ef-9099-6789-7868-89ce733b3376',
        name: 'Text',
        title: 'Text',
        description: 'button',
        comps: {
          [ROOT_COMP_ID]: {
            id: ROOT_COMP_ID,
            name: 'stackRoot',
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
            compName: 'Stack',
            path: 'hello',
            type: 'component',
            props: {
              tokens: {
                // childrenGap: 10,
              },
            },
            childCompIds: ['ee4254ef-9099-8943-be68-51ce733b390', 'ee4254ef-9099-5543-be68-51ce733b3367'],
          },
          'ee4254ef-9099-8943-be68-51ce733b390': {
            id: 'ee4254ef-9099-8943-be68-51ce733b390',
            name: 'ТестИнпут1',
            compName: 'TextField',
            compSchemaId: 'ee4254ef-9099-8943-be68-51ce733b870',
            path: 'props.children',
            type: 'input',
            props: {
              placeholder: 'надпись',
            },
          },
          'ee4254ef-9099-5543-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5543-be68-51ce733b3367',
            name: 'ТестЧекбокс1',
            compName: 'Checkbox',
            compSchemaId: 'ee4254ef-9099-8943-8968-51ce733b870',
            path: 'props.disabled',
            type: 'checkbox',
            props: {
              label: 'неактивный',
            },
          },
        },
      },
      {
        id: 'ee4254ef-9099-9089-7468-89ce733b3376',
        name: 'Checkbox',
        title: 'Checkbox',
        description: 'checkbox',
        comps: {
          [ROOT_COMP_ID]: {
            id: ROOT_COMP_ID,
            name: 'stackRoot',
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
            compName: 'Stack',
            path: 'hello',
            type: 'component',
            props: {
              tokens: {
                // childrenGap: 10,
              },
            },
            childCompIds: ['ee4254ef-9099-5543-be68-51ce733b3367'],
          },
          'ee4254ef-9099-5543-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5543-be68-51ce733b3367',
            name: 'ТестЧекбокс1',
            compName: 'Checkbox',
            compSchemaId: 'ee4254ef-9099-8943-8968-51ce733b870',
            path: 'props.disabled',
            type: 'checkbox',
            props: {
              label: 'неактивный',
            },
          },
        },
      },
      {
        id: 'ee4254ef-9099-4289-be68-51ce733b3376',
        name: 'Stack',
        title: 'Stack',
        description: 'stack',
        comps: {
          [ROOT_COMP_ID]: {
            id: ROOT_COMP_ID,
            name: 'stackRoot',
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
            compName: 'Stack',
            path: 'hello',
            type: 'component',
            props: {
              tokens: {
                // childrenGap: 10,
              },
            },
            childCompIds: ['ee4254ef-9099-5sd3-be68-51ce733b3367', 'ee4254ef-9099-5543-be68-51ce733b3367'],
          },
          'ee4254ef-9099-5sd3-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5sd3-be68-51ce733b3367',
            compSchemaId: 'ee4254ef-9099-8943-8968-51ce733b870',
            compName: 'Checkbox',
            path: 'props.horizontal',
            name: 'Checkbox',
            type: 'checkbox',
            props: {
              label: 'горизонтально',
            },
          },
          'ee4254ef-9099-5543-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5543-be68-51ce733b3367',
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
            compName: 'TextField',
            path: 'props.tokens.padding',
            name: 'TextField',
            type: 'input',
            props: {
              label: 'отступ',
            },
          },
        },
      },
      {
        id: 'ee4254ef-4689-8943-8968-51ce700b870',
        name: 'Text',
        title: 'Text',
        description: 'Text',
        comps: {
          [ROOT_COMP_ID]: {
            id: ROOT_COMP_ID,
            name: 'stackRoot',
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
            compName: 'Stack',
            path: 'hello',
            type: 'component',
            props: {
              tokens: {
                // childrenGap: 10,
              },
            },
            childCompIds: ['ee4254ef-9099-8943-be68-51ce733b390', 'ee4254ef-9099-5543-be68-51ce733b3367'],
          },
          'ee4254ef-9099-8943-be68-51ce733b390': {
            id: 'ee4254ef-9099-8943-be68-51ce733b390',
            name: 'ТестИнпут1',
            compName: 'TextField',
            compSchemaId: 'ee4254ef-9099-8943-be68-51ce733b870',
            path: 'props.children',
            type: 'input',
            props: {
              placeholder: 'надпись',
            },
          },
          'ee4254ef-9099-5543-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5543-be68-51ce733b3367',
            name: 'ТестЧекбокс1',
            compName: 'Checkbox',
            compSchemaId: 'ee4254ef-9099-8943-8968-51ce733b870',
            path: 'props.disabled',
            type: 'checkbox',
            props: {
              label: 'неактивный',
            },
          },
        },
      },
      {
        id: 'ee4234ef-9099-8943-8968-51c00733b870',
        name: 'TextField',
        title: 'TextField',
        description: 'text input',
        comps: {
          [ROOT_COMP_ID]: {
            id: ROOT_COMP_ID,
            name: 'stackRoot',
            compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
            compName: 'Stack',
            path: 'hello',
            type: 'component',
            props: {
              tokens: {
                // childrenGap: 10,
              },
            },
            childCompIds: ['ee4254ef-9099-5543-be68-51ce733b3367', 'rr4254ef-9099-5643-be68-51ce733b3360'],
          },
          'ee4254ef-9099-5543-be68-51ce733b3367': {
            id: 'ee4254ef-9099-5543-be68-51ce733b3367',
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
            compName: 'TextField',
            path: 'path',
            name: 'TextField',
            type: 'input',
            props: {
              label: 'путь',
            },
          },
          'rr4254ef-9099-5643-be68-51ce733b3360': {
            id: 'rr4254ef-9099-5643-be68-51ce733b3360',
            compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
            path: 'defaultValue',
            compName: 'TextField',
            name: 'TextField',
            type: 'input',
            props: {
              label: 'значение по умолчанию',
            },
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
