const schemas = {
  'a3f5756c-b1de-4824-81b5-f69989c1bf96': {
    id: 'a3f5756c-b1de-4824-81b5-f69989c1bf96',
    title: 'DirectRecoveryDemo',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'hello',
        props: {
          style: {
            maxWidth: '800px',
            minWidth: '800px',
          },
          tokens: {
            padding: '20px',
          },
        },
        title: 'stackRoot',
        children: ['l347y8p3', 'l34562ah', 'l3458hf1'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l31ftonj: {
        id: 'l31ftonj',
        name: 'l31ftonk',
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31ftpa6: {
        id: 'l31ftpa6',
        name: 'l31ftpa7',
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31icz1a: {
        id: 'l31icz1a',
        name: 'l31icz1b',
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l31k7y0x: {
        id: 'l31k7y0x',
        name: 'l31k7y0y',
        props: {
          label: 'Label3',
          headerText: 'HeaderText3',
        },
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31li3g9: {
        id: 'l31li3g9',
        name: 'l31li3ga',
        props: {
          label: 'Краткое описание',
        },
        title: 'Description',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31li3gb: {
        id: 'l31li3gb',
        name: 'l31li3gc',
        props: {
          label: 'Название',
        },
        title: 'Name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31mltxm: {
        id: 'l31mltxm',
        name: 'l31mltxn',
        props: {
          tokens: {
            padding: '20px',
          },
        },
        title: 'StackRoot',
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32mqp7s: {
        id: 'l32mqp7s',
        name: 'l32mqp7t',
        props: {
          label: 'Pivot',
          linkSize: 'normal',
          ariaLabel: 'aria-label',
          linkFormat: 'links',
          overflowBehavior: 'menu',
          overflowAriaLabel: 'more items',
        },
        title: 'Pivot',
        children: ['l32mrboa', 'l38vwdbc', 'l39ugk75', 'l34ivhua'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l32mrboa: {
        id: 'l32mrboa',
        name: 'mainTab',
        props: {
          headerText: 'Сведения',
        },
        title: 'MainTab',
        children: ['l3bcv15t'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l32uu7qw: {
        id: 'l32uu7qw',
        name: 'name1',
        props: {
          value: 'Текст',
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34562ah: {
        id: 'l34562ah',
        name: 'l34562ai',
        props: {
          tokens: {
            padding: '0px 10px 12px',
          },
          horizontal: false,
        },
        title: 'HeadStack',
        children: ['l34c8zba', 'l3aaw5au', 'l3bc5wmn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3458hf1: {
        id: 'l3458hf1',
        name: 'l3458hf2',
        props: {
          tokens: {
            padding: '0 16px 0',
            maxWidth: '900px',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l32mqp7s'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l345emub: {
        id: 'l345emub',
        name: 'l345emuc',
        props: {
          tokens: {
            padding: '5px',
          },
        },
        title: 'Stack',
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l347an6d: {
        id: 'l347an6d',
        name: 'l347an6e',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l347an6f: {
        id: 'l347an6f',
        name: 'l347an6g',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l347ao4r: {
        id: 'l347ao4r',
        name: 'l347ao4s',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l347ao4t: {
        id: 'l347ao4t',
        name: 'l347ao4u',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l347dnut: {
        id: 'l347dnut',
        props: {
          value: '123',
          chidren: [null],
          variant: 'xxLarge',
          children: ['Прямое возмещение'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l347y8p3: {
        id: 'l347y8p3',
        name: 'l347y8p4',
        props: {
          tokens: {
            padding: '0 0 24px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l347dnut', 'l3bh9btu'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3483q02: {
        id: 'l3483q02',
        name: 'l3483q03',
        props: {
          value: '123',
          chidren: [null],
          variant: 'mediumPlus',
          children: ['Инцидент'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l348g0nh: {
        id: 'l348g0nh',
        name: 'l348g0ni',
        props: {
          tokens: {
            padding: '5px',
          },
        },
        title: 'Stack',
        children: ['l348cmkn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348g0nj: {
        id: 'l348g0nj',
        name: 'l348g0nk',
        props: {
          tokens: {
            padding: '0px',
          },
        },
        title: 'Stack',
        children: ['l3481ar4'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348t3wu: {
        id: 'l348t3wu',
        name: 'incidentStatus',
        props: {
          variant: 'medium',
          children: ['Создание инцидента'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34c8zba: {
        id: 'l34c8zba',
        name: 'l34c8zbb',
        props: {
          tokens: {
            padding: '0 0 16px',
            childrenGap: '16px',
          },
          horizontal: false,
        },
        title: 'LocationStack',
        children: ['l34cazll', 'l34cbp5y', 'l34cboq5', 'l34cbo46', 'l34cgvni', 'l34ci1ur'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34cazll: {
        id: 'l34cazll',
        name: 'managementOrg',
        props: {
          label: 'managementOrg',
          variant: 'medium',
          children: ['Орг. структура: Банк > Головной офис > Отделение №1234'],
        },
        title: 'managementOrg',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cbo46: {
        id: 'l34cbo46',
        name: 'financialStatementItem',
        props: {
          label: 'financialStatementItem',
          variant: 'medium',
          children: ['Источник ОР: Недостатки процессов'],
        },
        title: 'financialStatementItem',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cboq5: {
        id: 'l34cboq5',
        name: 'cause',
        props: {
          label: 'cause',
          variant: 'medium',
          children: ['Вид нефинансового риска: Операционный'],
        },
        title: 'cause',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cbp5y: {
        id: 'l34cbp5y',
        name: 'riskCategory',
        props: {
          label: 'location',
          variant: 'medium',
          children: ['Тип события: Преднамеренные действия персонала '],
        },
        title: 'riskCategory',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cgvni: {
        id: 'l34cgvni',
        name: 'process',
        props: {
          label: 'process',
          variant: 'medium',
          children: ['Бизнес-процесс: Кредитование ФЛ'],
        },
        title: 'process',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34ci1ur: {
        id: 'l34ci1ur',
        name: 'businessLine',
        props: {
          label: 'businessLine',
          variant: 'medium',
          children: ['Направление деятельности: Управление активами'],
        },
        title: 'businessLine',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34ivhua: {
        id: 'l34ivhua',
        name: 'l34ivhub',
        props: {
          headerText: 'Администрирование',
        },
        title: 'Admin',
        children: ['l3a52960', 'l38x7n05', 'l34ivhuc', 'l34ivhue'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l34ivhuc: {
        id: 'l34ivhuc',
        name: 'l34ivhud',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34ivhue: {
        id: 'l34ivhue',
        name: 'l34ivhuf',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j29ci: {
        id: 'l34j29ci',
        name: 'l34j29cj',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34j29ck: {
        id: 'l34j29ck',
        name: 'l34j29cl',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j2mm4: {
        id: 'l34j2mm4',
        name: 'l34j2mm5',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34j2mm6: {
        id: 'l34j2mm6',
        name: 'l34j2mm7',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j9za6: {
        id: 'l34j9za6',
        name: 'l34j9za7',
        props: {
          tokens: {
            padding: '5px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l345h991'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34ja18r: {
        id: 'l34ja18r',
        name: 'l34ja18s',
        props: {
          tokens: {
            padding: '5px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l34gesfh', 'l345h991'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38vwdbc: {
        id: 'l38vwdbc',
        name: 'lboTab',
        props: {
          itemCount: '1',
          headerText: 'Связанный инцидент',
        },
        title: 'LinkedBusinessObjects Tab',
        children: ['l39xwyw8'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l38vxv0f: {
        id: 'l38vxv0f',
        name: 'l38vxv0g',
        props: {
          children: ['Связанный инцидент'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l38vxv0h: {
        id: 'l38vxv0h',
        name: 'l38vxv0i',
        props: {
          items: [
            {
              id: '10000',
              name: 'Инцидент',
              type: 'customObject86',
            },
          ],
          label: 'Инциденты',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'type',
              name: 'Тип объекта',
              text: 'type',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'type',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l38x7n05: {
        id: 'l38x7n05',
        name: 'sourceSystemCd',
        props: {
          label: 'Источник данных',
          options: [
            {
              key: 'GRC',
              text: 'SAS Risk Governance And Compliance Manager',
            },
            {
              key: 'EXT',
              text: 'Интеграция из АС',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'sourceSystemCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'GRC',
      },
      l39ugk75: {
        id: 'l39ugk75',
        name: 'CommentsAndAttachementsTab',
        props: {
          label: 'Комментарии и вложения',
          itemCount: '2',
          headerText: 'Комментарии и вложения',
        },
        title: 'CommentsAndAttachementsTab',
        children: ['l39xwc4x'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l39undmw: {
        id: 'l39undmw',
        name: 'l39undmx',
        props: {
          items: [
            {
              id: '10000',
              name: 'Описание.docx',
              type: 'docx',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Вложение с описанием инцидента',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 100,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'type',
              name: 'Тип',
              text: 'type',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'type',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'AttachmentsTable',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l39uo0ju: {
        id: 'l39uo0ju',
        name: 'l39uo0jv',
        props: {
          items: [
            {
              date: '01.05.2022',
              name: 'Прямое возмещение успешно заведено в системе',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Комментарии',
          columns: [
            {
              key: 'name',
              name: 'Комментарий',
              text: 'name',
              maxWidth: 200,
              minWidth: 100,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'date',
              name: 'Дата',
              text: 'date',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'date',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'CommentsTable',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l39xu5na: {
        id: 'l39xu5na',
        name: 'l39xu5nb',
        props: {
          checked: false,
          disabled: false,
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'Upload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5nc: {
        id: 'l39xu5nc',
        name: 'l39xu5nd',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5ne: {
        id: 'l39xu5ne',
        name: 'l39xu5nf',
        props: {
          iconProps: {
            iconName: 'BulkUpload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5ng: {
        id: 'l39xu5ng',
        name: 'l39xu5nh',
        props: {
          iconProps: {
            iconName: 'DownloadDocument',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5ni: {
        id: 'l39xu5ni',
        name: 'l39xu5nj',
        props: {
          children: ['Вложения'],
          disabled: false,
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l39xu92p: {
        id: 'l39xu92p',
        name: 'l39xu92q',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l39xu5ni', 'l39xubx0'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39xubx0: {
        id: 'l39xubx0',
        name: 'l39xubx1',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l39xu5na', 'l39xu5ne', 'l39xu5ng', 'l39xu5nc'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39xwc4x: {
        id: 'l39xwc4x',
        name: 'l39xwc4y',
        props: {
          tokens: {
            padding: '16px 10px 0',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3a01t7m', 'l3a025ti'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39xwyw8: {
        id: 'l39xwyw8',
        name: 'l39xwyw9',
        props: {
          tokens: {
            padding: '16px 10px 0',
          },
        },
        title: 'Stack',
        children: ['l38vxv0f', 'l38vxv0h'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39zrckx: {
        id: 'l39zrckx',
        name: 'l39zrcky',
        props: {
          children: ['Комментарии'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l39zrckz: {
        id: 'l39zrckz',
        name: 'l39zrcl0',
        props: {
          checked: false,
          disabled: false,
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'CommentAdd',
          },
        },
        title: 'CommentAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39zrcl5: {
        id: 'l39zrcl5',
        name: 'l39zrcl6',
        props: {
          checked: false,
          disabled: false,
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39zrgha: {
        id: 'l39zrgha',
        name: 'l39zrghb',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l39zrckx', 'l39zrkyy'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39zrkyy: {
        id: 'l39zrkyy',
        name: 'l39zrkyz',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l39zrckz', 'l39zrcl5'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a01t7m: {
        id: 'l3a01t7m',
        name: 'l3a01t7n',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l39xu92p', 'l39undmw'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a025ti: {
        id: 'l3a025ti',
        name: 'l3a025tj',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l39zrgha', 'l39uo0ju'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a52960: {
        id: 'l3a52960',
        name: 'l3a52961',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3a52962'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a52962: {
        id: 'l3a52962',
        name: 'co89_ops_financialStatusCd',
        props: {
          label: 'Тип прямого возмещения (не отображается в интерфейсе)',
          options: [
            {
              key: 'VALDEC',
              text: 'Резерв под потерю',
            },
            {
              key: 'CST',
              text: 'Затраты',
            },
            {
              key: 'EST',
              text: 'Экспертная оценка (ожидаемая потеря/возмещение)',
            },
            {
              key: 'SET',
              text: 'Реализовавшаяся потеря/возмещение',
            },
            {
              key: 'NRM',
              text: 'Потенциальная потеря',
            },
            {
              key: 'MSG',
              text: 'Недополученный доход',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'co89_ops_financialStatusCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3a5ozvs: {
        id: 'l3a5ozvs',
        name: 'l3a5ozvt',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '400px',
          },
        },
        title: 'Stack',
        children: ['l3bj3f70'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a6jyxd: {
        id: 'l3a6jyxd',
        name: 'l3a6jyxe',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a6mgx4'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a6kybm: {
        id: 'l3a6kybm',
        name: 'l3a6kybn',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a6mkms'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a6mgx4: {
        id: 'l3a6mgx4',
        name: 'custObjNm',
        props: {
          label: 'Название возмещения',
          disabled: false,
          underlined: false,
        },
        title: 'custObjNm',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3a6mkms: {
        id: 'l3a6mkms',
        name: 'custObjDesc',
        props: {
          label: 'Описание возмещения',
          disabled: false,
          multiline: true,
          underlined: false,
        },
        title: 'custObjDesc',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3a9u4j9: {
        id: 'l3a9u4j9',
        name: 'l3a9u4ja',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a9u4jf'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9u4jb: {
        id: 'l3a9u4jb',
        name: 'l3a9u4jc',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a9u4jh'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9u4jd: {
        id: 'l3a9u4jd',
        name: 'l3a9u4je',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3a9u4jj'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9u4jf: {
        id: 'l3a9u4jf',
        name: 'lossAmt',
        props: {
          label: 'Сумма возмещения',
          placeholder: 'Введите число',
        },
        title: 'lossAmt',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3a9u4jh: {
        id: 'l3a9u4jh',
        name: 'lossCurrencyCd',
        props: {
          label: 'Валюта',
          options: [
            {
              key: 'RUB',
              text: 'RUB',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'Dropdown',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'RUB',
      },
      l3a9u4jj: {
        id: 'l3a9u4jj',
        name: 'lossAmt',
        props: {
          label: 'Сумма возмещения (RUB)',
          disabled: true,
          borderless: false,
          underlined: true,
        },
        title: 'baseLossAmt',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3a9uukk: {
        id: 'l3a9uukk',
        name: 'l3a9uukl',
        props: {
          tokens: {
            padding: '0',
            childrenGap: '5%',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3a9u4j9', 'l3a9u4jb'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aau0cj: {
        id: 'l3aau0cj',
        name: 'sharedLossFlg',
        props: {
          label: 'Учитывать возмещение в инциденте',
          boxSide: 'start',
          checked: true,
          disabled: true,
        },
        title: 'sharedLossFlg',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3aav9ka: {
        id: 'l3aav9ka',
        name: 'l3aav9kb',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
            maxWidth: '50%',
          },
        },
        title: 'Stack',
        children: ['l3aav9kc'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aav9kc: {
        id: 'l3aav9kc',
        name: 'co89_dte_sharedLossDt',
        props: {
          label: 'Дата последнего изменения',
          disabled: false,
          borderless: false,
          underlined: true,
        },
        title: 'co89_dte_sharedLossDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3aaw5au: {
        id: 'l3aaw5au',
        name: 'l3aaw5av',
        props: {
          tokens: {
            padding: '0',
            childrenGap: '48px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3aawhze', 'l3aav9ka'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aawhze: {
        id: 'l3aawhze',
        name: 'l3aawhzf',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '50%',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3aau0cj'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bc5wmn: {
        id: 'l3bc5wmn',
        name: 'l3bc5wmo',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bc5wmp'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bc5wmp: {
        id: 'l3bc5wmp',
        name: 'co89_bol_isRiskIB',
        props: {
          label: 'Является последствием риска информационной безопасности',
          boxSide: 'start',
        },
        title: 'co89_bol_isRiskIB',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3bcaxu0: {
        id: 'l3bcaxu0',
        name: 'l3bcaxu1',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bcaxu2'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bcaxu2: {
        id: 'l3bcaxu2',
        name: 'co89_ops_recoveryTypeCd',
        props: {
          label: 'Тип возмещения',
          options: [
            {
              key: 'BUDGET',
              text: 'Возмещение из бюджета подразделений',
            },
            {
              key: 'LOAN',
              text: 'Возмещение из резерва на возможные потери по ссудам, судной и приравненной к ней задолженности',
            },
            {
              key: '3RDPRT',
              text: 'Возмещение от 3-х лиц',
            },
            {
              key: 'PERSON',
              text: 'Возмещение от других ФЛ/ЮЛ, способных оказать влияние на деятельность Банка',
            },
            {
              key: 'CONTR',
              text: 'Возмещение от контрагентов',
            },
            {
              key: 'ASSOC',
              text: 'Возмещение от связанных с Банком лиц, акционеров, бенефециаров',
            },
            {
              key: 'EXTRA',
              text: 'Страховые выплаты от одной или нескольких страховых организаций',
            },
            {
              key: 'INCINS',
              text: 'Возмещение от страховых организаций (СО), входящих в банковскую группу',
            },
            {
              key: 'EXTINS',
              text: 'Возмещение от страховых организаций (СО), входящих в банковскую группу, полученное в рамках перестрахования рисков от страховых брокеров, не входящих в банковскую группу',
            },
            {
              key: 'EMPLOY',
              text: 'Возмещение сотрудниками банка',
            },
            {
              key: 'JUDGE',
              text: 'Возмещение, полученное в судебном порядке',
            },
            {
              key: 'OUTJDG',
              text: 'Возмещение, полученное во внесудебном порядке по соглашению сторон',
            },
            {
              key: 'OTHER',
              text: 'Возмещение из других источников',
            },
            {
              key: 'PROVIS',
              text: 'Восстановление резерва по прочим потерям и обязательствам некредитного характера',
            },
            {
              key: '0',
              text: 'Прочее',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'co89_ops_recoveryTypeCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3bcs769: {
        id: 'l3bcs769',
        name: 'l3bcs76a',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bcsebl'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bcsebl: {
        id: 'l3bcsebl',
        name: 'co89_str_otherRecoveryType',
        props: {
          label: 'Прочее',
        },
        title: 'co89_str_otherRecoveryType',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3bcu14o: {
        id: 'l3bcu14o',
        name: 'l3bcu14p',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bcu14q'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bcu14q: {
        id: 'l3bcu14q',
        name: 'co89_bol_creditOrg',
        props: {
          label: 'За счет связанных с КО лиц',
          boxSide: 'start',
        },
        title: 'co89_bol_creditOrg',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3bcv15t: {
        id: 'l3bcv15t',
        name: 'l3bcv15u',
        props: {
          tokens: {
            padding: '6px 0px 0px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: [
          'l3a5ozvs',
          'l3a6jyxd',
          'l3a6kybm',
          'l3bcaxu0',
          'l3bcs769',
          'l3bcu14o',
          'l3bcx1n4',
          'l3bcxl4n',
          'l3a9uukk',
          'l3a9u4jd',
          'l3bd0gr9',
        ],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bcx1n4: {
        id: 'l3bcx1n4',
        name: 'l3bcx1n5',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '300px',
          },
        },
        title: 'Stack',
        children: ['l3bcx1n6'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bcx1n6: {
        id: 'l3bcx1n6',
        name: 'createdAt',
        props: {
          label: 'Дата ввода',
          disabled: false,
          borderless: false,
          underlined: false,
        },
        title: 'createdAt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3bcxl4n: {
        id: 'l3bcxl4n',
        name: 'l3bcxl4o',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '300px',
          },
        },
        title: 'Stack',
        children: ['l3bcxl4p'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bcxl4p: {
        id: 'l3bcxl4p',
        name: 'co89_dte_recoveryDt',
        props: {
          label: 'Дата регистрации (дата учета)',
          disabled: false,
          borderless: false,
          underlined: false,
        },
        title: 'co89_dte_recoveryDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3bd0gr9: {
        id: 'l3bd0gr9',
        name: 'l3bd0gra',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bd0grb'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bd0grb: {
        id: 'l3bd0grb',
        name: 'co89_str_wiringId',
        props: {
          label: 'ID Проводки',
          disabled: false,
          underlined: false,
        },
        title: 'co89_str_wiringId',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3bh9btu: {
        id: 'l3bh9btu',
        name: 'l3bh9btv',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3bh9btw'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bh9btw: {
        id: 'l3bh9btw',
        name: 'l3bh9btx',
        props: {
          type: 'submit',
          children: 'Сохранить',
          iconProps: {
            iconName: 'Save',
          },
        },
        title: 'Save',
        value: 'Сохранить',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3bj3f70: {
        id: 'l3bj3f70',
        name: 'custObj89Id',
        props: {
          label: 'Идентификатор прямого возмещения',
          disabled: true,
          underlined: true,
        },
        title: 'custObj89Id',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: '10000',
      },
      '43fa6880ds24': {
        id: '43fa6880ds24',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  '5431da70-6025-41b2-bc87-eee704b2ff76': {
    id: '5431da70-6025-41b2-bc87-eee704b2ff76',
    title: 'InsuranceRecoveryDemo',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'hello',
        props: {
          style: {
            maxWidth: '800px',
            minWidth: '800px',
          },
          tokens: {
            padding: '20px',
          },
        },
        title: 'stackRoot',
        children: ['l347y8p3', 'l34562ah', 'l3458hf1'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l31ftonj: {
        id: 'l31ftonj',
        name: 'l31ftonk',
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31ftpa6: {
        id: 'l31ftpa6',
        name: 'l31ftpa7',
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31icz1a: {
        id: 'l31icz1a',
        name: 'l31icz1b',
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l31k7y0x: {
        id: 'l31k7y0x',
        name: 'l31k7y0y',
        props: {
          label: 'Label3',
          headerText: 'HeaderText3',
        },
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31li3g9: {
        id: 'l31li3g9',
        name: 'l31li3ga',
        props: {
          label: 'Краткое описание',
        },
        title: 'Description',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31li3gb: {
        id: 'l31li3gb',
        name: 'l31li3gc',
        props: {
          label: 'Название',
        },
        title: 'Name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31mltxm: {
        id: 'l31mltxm',
        name: 'l31mltxn',
        props: {
          tokens: {
            padding: '20px',
          },
        },
        title: 'StackRoot',
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32mqp7s: {
        id: 'l32mqp7s',
        name: 'l32mqp7t',
        props: {
          label: 'Pivot',
          linkSize: 'normal',
          ariaLabel: 'aria-label',
          linkFormat: 'links',
          overflowBehavior: 'menu',
          overflowAriaLabel: 'more items',
        },
        title: 'Pivot',
        children: ['l32mrboa', 'l38vwdbc', 'l39ugk75', 'l34ivhua'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l32mrboa: {
        id: 'l32mrboa',
        name: 'mainTab',
        props: {
          headerText: 'Сведения',
        },
        title: 'MainTab',
        children: ['l3bcv15t'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l32uu7qw: {
        id: 'l32uu7qw',
        name: 'name1',
        props: {
          value: 'Текст',
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34562ah: {
        id: 'l34562ah',
        name: 'l34562ai',
        props: {
          tokens: {
            padding: '0px 10px 12px',
          },
          horizontal: false,
        },
        title: 'HeadStack',
        children: ['l34c8zba', 'l3aaw5au', 'l3bc5wmn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3458hf1: {
        id: 'l3458hf1',
        name: 'l3458hf2',
        props: {
          tokens: {
            padding: '0 16px 0',
            maxWidth: '900px',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l32mqp7s'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l345emub: {
        id: 'l345emub',
        name: 'l345emuc',
        props: {
          tokens: {
            padding: '5px',
          },
        },
        title: 'Stack',
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l347an6d: {
        id: 'l347an6d',
        name: 'l347an6e',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l347an6f: {
        id: 'l347an6f',
        name: 'l347an6g',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l347ao4r: {
        id: 'l347ao4r',
        name: 'l347ao4s',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l347ao4t: {
        id: 'l347ao4t',
        name: 'l347ao4u',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l347y8p3: {
        id: 'l347y8p3',
        name: 'l347y8p4',
        props: {
          tokens: {
            padding: '0 0 24px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3bltxk6', 'l3bh9btu'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3483q02: {
        id: 'l3483q02',
        name: 'l3483q03',
        props: {
          value: '123',
          chidren: [null],
          variant: 'mediumPlus',
          children: ['Инцидент'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l348g0nh: {
        id: 'l348g0nh',
        name: 'l348g0ni',
        props: {
          tokens: {
            padding: '5px',
          },
        },
        title: 'Stack',
        children: ['l348cmkn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348g0nj: {
        id: 'l348g0nj',
        name: 'l348g0nk',
        props: {
          tokens: {
            padding: '0px',
          },
        },
        title: 'Stack',
        children: ['l3481ar4'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348t3wu: {
        id: 'l348t3wu',
        name: 'incidentStatus',
        props: {
          variant: 'medium',
          children: ['Создание инцидента'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34c8zba: {
        id: 'l34c8zba',
        name: 'l34c8zbb',
        props: {
          tokens: {
            padding: '0 0 16px',
            childrenGap: '16px',
          },
          horizontal: false,
        },
        title: 'LocationStack',
        children: ['l34cazll', 'l34cbp5y', 'l34cboq5', 'l34cbo46', 'l34cgvni', 'l34ci1ur'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34cazll: {
        id: 'l34cazll',
        name: 'managementOrg',
        props: {
          label: 'managementOrg',
          variant: 'medium',
          children: ['Орг. структура: Банк > Головной офис > Отделение №1234'],
        },
        title: 'managementOrg',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cbo46: {
        id: 'l34cbo46',
        name: 'financialStatementItem',
        props: {
          label: 'financialStatementItem',
          variant: 'medium',
          children: ['Источник ОР: Недостатки процессов'],
        },
        title: 'financialStatementItem',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cboq5: {
        id: 'l34cboq5',
        name: 'cause',
        props: {
          label: 'cause',
          variant: 'medium',
          children: ['Вид нефинансового риска: Операционный'],
        },
        title: 'cause',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cbp5y: {
        id: 'l34cbp5y',
        name: 'riskCategory',
        props: {
          label: 'location',
          variant: 'medium',
          children: ['Тип события: Преднамеренные действия персонала '],
        },
        title: 'riskCategory',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cgvni: {
        id: 'l34cgvni',
        name: 'process',
        props: {
          label: 'process',
          variant: 'medium',
          children: ['Бизнес-процесс: Кредитование ФЛ'],
        },
        title: 'process',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34ci1ur: {
        id: 'l34ci1ur',
        name: 'businessLine',
        props: {
          label: 'businessLine',
          variant: 'medium',
          children: ['Направление деятельности: Управление активами'],
        },
        title: 'businessLine',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34ivhua: {
        id: 'l34ivhua',
        name: 'l34ivhub',
        props: {
          headerText: 'Администрирование',
        },
        title: 'Admin',
        children: ['l3bcaxu0', 'l38x7n05', 'l34ivhuc', 'l34ivhue'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l34ivhuc: {
        id: 'l34ivhuc',
        name: 'l34ivhud',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34ivhue: {
        id: 'l34ivhue',
        name: 'l34ivhuf',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j29ci: {
        id: 'l34j29ci',
        name: 'l34j29cj',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34j29ck: {
        id: 'l34j29ck',
        name: 'l34j29cl',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j2mm4: {
        id: 'l34j2mm4',
        name: 'l34j2mm5',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34j2mm6: {
        id: 'l34j2mm6',
        name: 'l34j2mm7',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j9za6: {
        id: 'l34j9za6',
        name: 'l34j9za7',
        props: {
          tokens: {
            padding: '5px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l345h991'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34ja18r: {
        id: 'l34ja18r',
        name: 'l34ja18s',
        props: {
          tokens: {
            padding: '5px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l34gesfh', 'l345h991'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38vwdbc: {
        id: 'l38vwdbc',
        name: 'lboTab',
        props: {
          itemCount: '1',
          headerText: 'Связанный инцидент',
        },
        title: 'LinkedBusinessObjects Tab',
        children: ['l39xwyw8'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l38vxv0f: {
        id: 'l38vxv0f',
        name: 'l38vxv0g',
        props: {
          children: ['Связанный инцидент'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l38vxv0h: {
        id: 'l38vxv0h',
        name: 'l38vxv0i',
        props: {
          items: [
            {
              id: '10000',
              name: 'Инцидент',
              type: 'customObject86',
            },
          ],
          label: 'Инциденты',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'type',
              name: 'Тип объекта',
              text: 'type',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'type',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l38x7n05: {
        id: 'l38x7n05',
        name: 'sourceSystemCd',
        props: {
          label: 'Источник данных',
          options: [
            {
              key: 'GRC',
              text: 'SAS Risk Governance And Compliance Manager',
            },
            {
              key: 'EXT',
              text: 'Интеграция из АС',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'sourceSystemCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'GRC',
      },
      l39ugk75: {
        id: 'l39ugk75',
        name: 'CommentsAndAttachementsTab',
        props: {
          label: 'Комментарии и вложения',
          itemCount: '2',
          headerText: 'Комментарии и вложения',
        },
        title: 'CommentsAndAttachementsTab',
        children: ['l39xwc4x'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l39undmw: {
        id: 'l39undmw',
        name: 'l39undmx',
        props: {
          items: [
            {
              id: '10000',
              name: 'Описание.docx',
              type: 'docx',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Вложение с описанием инцидента',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 100,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'type',
              name: 'Тип',
              text: 'type',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'type',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'AttachmentsTable',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l39uo0ju: {
        id: 'l39uo0ju',
        name: 'l39uo0jv',
        props: {
          items: [
            {
              date: '01.05.2022',
              name: 'Страховое возмещение успешно заведено в системе',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Комментарии',
          columns: [
            {
              key: 'name',
              name: 'Комментарий',
              text: 'name',
              maxWidth: 200,
              minWidth: 100,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'date',
              name: 'Дата',
              text: 'date',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'date',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'CommentsTable',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l39xu5na: {
        id: 'l39xu5na',
        name: 'l39xu5nb',
        props: {
          checked: false,
          disabled: false,
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'Upload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5nc: {
        id: 'l39xu5nc',
        name: 'l39xu5nd',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5ne: {
        id: 'l39xu5ne',
        name: 'l39xu5nf',
        props: {
          iconProps: {
            iconName: 'BulkUpload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5ng: {
        id: 'l39xu5ng',
        name: 'l39xu5nh',
        props: {
          iconProps: {
            iconName: 'DownloadDocument',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5ni: {
        id: 'l39xu5ni',
        name: 'l39xu5nj',
        props: {
          children: ['Вложения'],
          disabled: false,
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l39xu92p: {
        id: 'l39xu92p',
        name: 'l39xu92q',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l39xu5ni', 'l39xubx0'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39xubx0: {
        id: 'l39xubx0',
        name: 'l39xubx1',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l39xu5na', 'l39xu5ne', 'l39xu5ng', 'l39xu5nc'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39xwc4x: {
        id: 'l39xwc4x',
        name: 'l39xwc4y',
        props: {
          tokens: {
            padding: '16px 10px 0',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3a01t7m', 'l3a025ti'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39xwyw8: {
        id: 'l39xwyw8',
        name: 'l39xwyw9',
        props: {
          tokens: {
            padding: '16px 10px 0',
          },
        },
        title: 'Stack',
        children: ['l38vxv0f', 'l38vxv0h'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39zrckx: {
        id: 'l39zrckx',
        name: 'l39zrcky',
        props: {
          children: ['Комментарии'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l39zrckz: {
        id: 'l39zrckz',
        name: 'l39zrcl0',
        props: {
          checked: false,
          disabled: false,
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'CommentAdd',
          },
        },
        title: 'CommentAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39zrcl5: {
        id: 'l39zrcl5',
        name: 'l39zrcl6',
        props: {
          checked: false,
          disabled: false,
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39zrgha: {
        id: 'l39zrgha',
        name: 'l39zrghb',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l39zrckx', 'l39zrkyy'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39zrkyy: {
        id: 'l39zrkyy',
        name: 'l39zrkyz',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l39zrckz', 'l39zrcl5'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a01t7m: {
        id: 'l3a01t7m',
        name: 'l3a01t7n',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l39xu92p', 'l39undmw'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a025ti: {
        id: 'l3a025ti',
        name: 'l3a025tj',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l39zrgha', 'l39uo0ju'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a5ozvs: {
        id: 'l3a5ozvs',
        name: 'l3a5ozvt',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '400px',
          },
        },
        title: 'Stack',
        children: ['l3bj3f70'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a6jyxd: {
        id: 'l3a6jyxd',
        name: 'l3a6jyxe',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a6mgx4'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a6kybm: {
        id: 'l3a6kybm',
        name: 'l3a6kybn',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a6mkms'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a6mgx4: {
        id: 'l3a6mgx4',
        name: 'custObjNm',
        props: {
          label: 'Название возмещения',
          disabled: false,
          underlined: false,
        },
        title: 'custObjNm',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3a6mkms: {
        id: 'l3a6mkms',
        name: 'custObjDesc',
        props: {
          label: 'Описание возмещения',
          disabled: false,
          multiline: true,
          underlined: false,
        },
        title: 'custObjDesc',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3a9u4j9: {
        id: 'l3a9u4j9',
        name: 'l3a9u4ja',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a9u4jf'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9u4jb: {
        id: 'l3a9u4jb',
        name: 'l3a9u4jc',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a9u4jh'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9u4jd: {
        id: 'l3a9u4jd',
        name: 'l3a9u4je',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3a9u4jj'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9u4jf: {
        id: 'l3a9u4jf',
        name: 'co90_num_insClaimAmt',
        props: {
          label: 'Сумма требования',
          placeholder: 'Введите число',
        },
        title: 'co90_num_insClaimAmt',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3a9u4jh: {
        id: 'l3a9u4jh',
        name: 'lossCurrencyCd',
        props: {
          label: 'Валюта',
          options: [
            {
              key: 'RUB',
              text: 'RUB',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'lossCurrencyCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'RUB',
      },
      l3a9u4jj: {
        id: 'l3a9u4jj',
        name: 'co90_num_insClaimAmt',
        props: {
          label: 'Сумма требования (RUB)',
          disabled: true,
          borderless: false,
          underlined: true,
        },
        title: 'baseLossAmt',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3a9uukk: {
        id: 'l3a9uukk',
        name: 'l3a9uukl',
        props: {
          tokens: {
            padding: '0',
            childrenGap: '5%',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3a9u4j9', 'l3bmh6zj'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aau0cj: {
        id: 'l3aau0cj',
        name: 'sharedLossFlg',
        props: {
          label: 'Учитывать возмещение в инциденте',
          boxSide: 'start',
          checked: true,
          disabled: true,
        },
        title: 'sharedLossFlg',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3aav9ka: {
        id: 'l3aav9ka',
        name: 'l3aav9kb',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
            maxWidth: '50%',
          },
        },
        title: 'Stack',
        children: ['l3aav9kc'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aav9kc: {
        id: 'l3aav9kc',
        name: 'co90_dte_sharedLossDt',
        props: {
          label: 'Дата последнего изменения',
          disabled: false,
          borderless: false,
          underlined: true,
        },
        title: 'co90_dte_sharedLossDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3aaw5au: {
        id: 'l3aaw5au',
        name: 'l3aaw5av',
        props: {
          tokens: {
            padding: '0',
            childrenGap: '48px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3aawhze', 'l3aav9ka'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aawhze: {
        id: 'l3aawhze',
        name: 'l3aawhzf',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '50%',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3aau0cj'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bc5wmn: {
        id: 'l3bc5wmn',
        name: 'l3bc5wmo',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bc5wmp'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bc5wmp: {
        id: 'l3bc5wmp',
        name: 'co90_bol_isRiskIB',
        props: {
          label: 'Является последствием риска информационной безопасности',
          boxSide: 'start',
        },
        title: 'co90_bol_isRiskIB',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3bcaxu0: {
        id: 'l3bcaxu0',
        name: 'l3bcaxu1',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bcaxu2'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bcaxu2: {
        id: 'l3bcaxu2',
        name: 'co90_ops_recoveryTypeCd',
        props: {
          label: 'Тип страхового возмещения (не отображается в интерфейсе)',
          options: [
            {
              key: '0',
              text: 'Прочее',
            },
            {
              key: '3RDPRT',
              text: 'Возмещение от 3-х лиц',
            },
            {
              key: 'EMPLOY',
              text: 'Возмещение сотрудниками банка',
            },
            {
              key: 'BUDGET',
              text: 'Возмещение из бюджета подразделений',
            },
            {
              key: 'INTINS',
              text: 'Внутреннее страхование',
            },
            {
              key: 'EXTINS',
              text: 'Внешнее страхование',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'co90_ops_recoveryTypeCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3bcu14o: {
        id: 'l3bcu14o',
        name: 'l3bcu14p',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bcu14q'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bcu14q: {
        id: 'l3bcu14q',
        name: 'co90_bol_creditOrg',
        props: {
          label: 'За счет связанных с КО лиц',
          boxSide: 'start',
        },
        title: 'co90_bol_creditOrg',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3bcv15t: {
        id: 'l3bcv15t',
        name: 'l3bcv15u',
        props: {
          tokens: {
            padding: '6px 0px 0px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: [
          'l3a5ozvs',
          'l3a6jyxd',
          'l3a6kybm',
          'l3bcu14o',
          'l3bcxl4n',
          'l3bmhfzb',
          'l3bmihk5',
          'l3bcx1n4',
          'l3a9uukk',
          'l3a9u4jd',
          'l3bd0gr9',
          'l3bmlvf2',
          'l3bmoe1a',
        ],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bcx1n4: {
        id: 'l3bcx1n4',
        name: 'l3bcx1n5',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '300px',
          },
        },
        title: 'Stack',
        children: ['l3bcx1n6'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bcx1n6: {
        id: 'l3bcx1n6',
        name: 'co90_dte_insClaimDt',
        props: {
          label: 'Дата требования',
          disabled: false,
          borderless: false,
          underlined: false,
        },
        title: 'co90_dte_insClaimDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3bcxl4n: {
        id: 'l3bcxl4n',
        name: 'l3bcxl4o',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '300px',
          },
        },
        title: 'Stack',
        children: ['l3bcxl4p'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bcxl4p: {
        id: 'l3bcxl4p',
        name: 'discoveryDt',
        props: {
          label: 'Дата регистрации (дата учета)',
          disabled: false,
          borderless: false,
          underlined: false,
        },
        title: 'discoveryDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3bd0gr9: {
        id: 'l3bd0gr9',
        name: 'l3bd0gra',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bd0grb'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bd0grb: {
        id: 'l3bd0grb',
        name: 'co90_str_wiringId',
        props: {
          label: 'ID Проводки',
          disabled: false,
          underlined: false,
        },
        title: 'co90_str_wiringId',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3bh9btu: {
        id: 'l3bh9btu',
        name: 'l3bh9btv',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3bh9btw'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bh9btw: {
        id: 'l3bh9btw',
        name: 'l3bh9btx',
        props: {
          type: 'submit',
          children: 'Сохранить',
          iconProps: {
            iconName: 'Save',
          },
        },
        title: 'Save',
        value: 'Сохранить',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3bj3f70: {
        id: 'l3bj3f70',
        name: 'custObj90Id',
        props: {
          label: 'Идентификатор страхового возмещения',
          disabled: true,
          underlined: true,
        },
        title: 'custObj90Id',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: '10000',
      },
      l3bltxk6: {
        id: 'l3bltxk6',
        name: 'l3bltxk7',
        props: {
          variant: 'xxLarge',
          children: ['Страховое возмещение'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3bmh6zh: {
        id: 'l3bmh6zh',
        name: 'l3bmh6zi',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bmh6zl'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bmh6zj: {
        id: 'l3bmh6zj',
        name: 'l3bmh6zk',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bmh6zn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bmh6zl: {
        id: 'l3bmh6zl',
        name: 'lossAmt',
        props: {
          label: 'Сумма возмещения',
          placeholder: 'Введите число',
        },
        title: 'lossAmt',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3bmh6zn: {
        id: 'l3bmh6zn',
        name: 'claimCurrencycD',
        props: {
          label: 'Валюта',
          options: [
            {
              key: 'RUB',
              text: 'RUB',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'claimCurrencyCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'RUB',
      },
      l3bmhfzb: {
        id: 'l3bmhfzb',
        name: 'l3bmhfzc',
        props: {
          tokens: {
            padding: '0',
            childrenGap: '5%',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3bmh6zh', 'l3a9u4jb'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bmihk5: {
        id: 'l3bmihk5',
        name: 'l3bmihk6',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3bmihk7'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bmihk7: {
        id: 'l3bmihk7',
        name: 'lossAmt',
        props: {
          label: 'Сумма возмещения (RUB)',
          disabled: true,
          borderless: false,
          underlined: true,
        },
        title: 'baseLossAmt',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3bmlvf2: {
        id: 'l3bmlvf2',
        name: 'l3bmlvf3',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bmlvf4'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bmlvf4: {
        id: 'l3bmlvf4',
        name: 'co90_str_ledgerId',
        props: {
          label: 'Номер счета',
          disabled: false,
          underlined: false,
        },
        title: 'co90_str_ledgerId',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3bmoe1a: {
        id: 'l3bmoe1a',
        name: 'l3bmoe1b',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bmoe1c'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bmoe1c: {
        id: 'l3bmoe1c',
        name: 'co90_ops_financialStatusCd',
        props: {
          label: 'Статус возмещения',
          options: [
            {
              key: 'EST',
              text: 'Прогнозная оценка',
            },
            {
              key: 'SET',
              text: 'Фактическое возмещение',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'co90_ops_financialStatusCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'SET',
      },
      '43fa6880ds24': {
        id: '43fa6880ds24',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  '3829e3bc-6975-4156-8ec5-b5e73734bf0d': {
    id: '3829e3bc-6975-4156-8ec5-b5e73734bf0d',
    title: 'Injection',
    componentName: null,
    type: 'PRESET',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '12px',
          },
        },
        title: 'stackRoot',
        children: ['l3a486av', 'l3a48utv'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3a486av: {
        id: 'l3a486av',
        name: 'injection[0].from',
        props: {
          label: 'injection from',
        },
        title: 'injection from',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3a48utv: {
        id: 'l3a48utv',
        name: 'injection[0].to',
        props: {
          label: 'injection to',
        },
        title: 'injection to',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  '2460c249-f4ce-4de3-ba04-541c38bad962': {
    id: '2460c249-f4ce-4de3-ba04-541c38bad962',
    title: 'KRI_demo',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'hello',
        props: {
          style: {
            maxWidth: '900px',
            minWidth: '700px',
          },
          tokens: {
            padding: '20px',
          },
        },
        title: 'stackRoot',
        children: ['l347y8p3', 'l348nixt', 'l3cpbmh4', 'l34562ah', 'l345efif', 'l3458hf1'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l31ftonj: {
        id: 'l31ftonj',
        name: 'l31ftonk',
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31ftpa6: {
        id: 'l31ftpa6',
        name: 'l31ftpa7',
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31icz1a: {
        id: 'l31icz1a',
        name: 'l31icz1b',
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l31k7y0x: {
        id: 'l31k7y0x',
        name: 'l31k7y0y',
        props: {
          label: 'Label3',
          headerText: 'HeaderText3',
        },
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31li3g9: {
        id: 'l31li3g9',
        name: 'l31li3ga',
        props: {
          label: 'Краткое описание',
        },
        title: 'Description',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31li3gb: {
        id: 'l31li3gb',
        name: 'l31li3gc',
        props: {
          label: 'Название',
        },
        title: 'Name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31mltxm: {
        id: 'l31mltxm',
        name: 'l31mltxn',
        props: {
          tokens: {
            padding: '20px',
          },
        },
        title: 'StackRoot',
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32mqp7s: {
        id: 'l32mqp7s',
        name: 'l32mqp7t',
        props: {
          label: 'Pivot',
          linkSize: 'normal',
          ariaLabel: 'aria-label',
          linkFormat: 'links',
          overflowBehavior: 'menu',
          overflowAriaLabel: 'more items',
        },
        title: 'Pivot',
        children: ['l32mrboa', 'l32n0c6p', 'l32mr136', 'l34jcaiq', 'l38vwdbc', 'l3coce6e', 'l34ivhua'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l32mr136: {
        id: 'l32mr136',
        name: 'measureTab',
        props: {
          headerText: 'Измерение',
        },
        title: 'Measure',
        children: ['l345xdy6'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l32mrboa: {
        id: 'l32mrboa',
        name: 'MainTab',
        props: {
          label: 'DefaultLabel',
          headerText: 'Сведения',
        },
        title: 'MainTab',
        children: ['l345cifk'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l32n0c6p: {
        id: 'l32n0c6p',
        name: 'owner',
        props: {
          headerText: 'Владелец',
        },
        title: 'Owner',
        children: ['l38hte1r'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l32uu7qw: {
        id: 'l32uu7qw',
        name: 'name1',
        props: {
          value: 'Текст',
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34562ah: {
        id: 'l34562ah',
        name: 'l34562ai',
        props: {
          tokens: {
            padding: '0px',
          },
          horizontal: false,
        },
        title: 'HeadStack',
        children: ['l34c8zba'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3458hf1: {
        id: 'l3458hf1',
        name: 'l3458hf2',
        props: {
          tokens: {
            padding: '0 0 0',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l32mqp7s'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l345cifk: {
        id: 'l345cifk',
        name: 'mainTabStack',
        props: {
          tokens: {
            padding: '16px 10px 0',
            childrenGap: '24px',
          },
          horizontal: true,
        },
        title: 'MainTabStack',
        children: ['l34gesfh'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l345efif: {
        id: 'l345efif',
        name: 'l345efig',
        props: {
          tokens: {
            padding: '0 0 16px',
          },
        },
        title: 'Stack',
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l345emub: {
        id: 'l345emub',
        name: 'l345emuc',
        props: {
          tokens: {
            padding: '5px',
          },
        },
        title: 'Stack',
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l345xdy6: {
        id: 'l345xdy6',
        name: 'l345xdy7',
        props: {
          tokens: {
            padding: '16px 10px 0',
            maxWidth: '50%',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l39ygbux', 'l39yq20x', 'l39yq0tg', 'l39yukxv'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l347an6d: {
        id: 'l347an6d',
        name: 'l347an6e',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l347an6f: {
        id: 'l347an6f',
        name: 'l347an6g',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l347ao4r: {
        id: 'l347ao4r',
        name: 'l347ao4s',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l347ao4t: {
        id: 'l347ao4t',
        name: 'l347ao4u',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l347dnut: {
        id: 'l347dnut',
        name: 'l347dnuu',
        props: {
          value: '123',
          chidren: [null],
          variant: 'xxLarge',
          children: ['КИР\n'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l347y8p3: {
        id: 'l347y8p3',
        name: 'l347y8p4',
        props: {
          tokens: {
            padding: '0 0 16px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l347dnut', 'l38wou42'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3483q02: {
        id: 'l3483q02',
        name: 'l3483q03',
        props: {
          value: '123',
          chidren: [null],
          variant: 'mediumPlus',
          children: ['Инцидент'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l348g0nh: {
        id: 'l348g0nh',
        name: 'l348g0ni',
        props: {
          tokens: {
            padding: '5px',
          },
        },
        title: 'Stack',
        children: ['l348cmkn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348g0nj: {
        id: 'l348g0nj',
        name: 'l348g0nk',
        props: {
          tokens: {
            padding: '0px',
          },
        },
        title: 'Stack',
        children: ['l3481ar4'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348nixt: {
        id: 'l348nixt',
        name: 'l348nixu',
        props: {
          tokens: {
            padding: '0 0 16px',
            maxWidth: '50%',
          },
          horizontal: false,
        },
        title: 'ActivityStack',
        children: ['l34bua8i'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348t3wu: {
        id: 'l348t3wu',
        name: 'incidentStatus',
        props: {
          variant: 'medium',
          children: ['Создание инцидента'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34advhr: {
        id: 'l34advhr',
        name: 'custObjNm',
        props: {
          label: 'Имя',
          disabled: false,
          underlined: false,
        },
        title: 'custObjNm',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'КИР 1',
      },
      l34bua8i: {
        id: 'l34bua8i',
        name: 'statusCd',
        props: {
          label: 'Статус',
          options: [
            {
              key: 'create',
              text: 'Выявлен',
            },
            {
              key: 'approval',
              text: 'На согласовании',
            },
            {
              key: 'approved',
              text: 'Согласован',
            },
            {
              key: 'irrelevant',
              text: 'Признан неактуальным',
            },
            {
              key: 'cancelled',
              text: 'Не подано на утверждение',
            },
          ],
          disabled: true,
          defaultSelectedKey: 'options[0]?.key.toString()',
        },
        title: 'Dropdown',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'create',
      },
      l34c8zba: {
        id: 'l34c8zba',
        name: 'l34c8zbb',
        props: {
          tokens: {
            padding: '0 0 16px',
            childrenGap: '16px',
          },
        },
        title: 'LocationStack',
        children: ['l34cazll', 'l34cbp5y', 'l34cboq5', 'l34cbo46', 'l34cgvni', 'l34ci1ur'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34cazll: {
        id: 'l34cazll',
        name: 'managementOrg',
        props: {
          label: 'managementOrg',
          variant: 'medium',
          children: ['Орг. структура: Банк > Головной офис > Отделение №1234'],
        },
        title: 'managementOrg',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cbo46: {
        id: 'l34cbo46',
        name: 'financialStatementItem',
        props: {
          label: 'financialStatementItem',
          variant: 'medium',
          children: ['Источник ОР: Недостатки процессов'],
        },
        title: 'financialStatementItem',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cboq5: {
        id: 'l34cboq5',
        name: 'cause',
        props: {
          label: 'cause',
          variant: 'medium',
          children: ['Вид нефинансового риска: Операционный'],
        },
        title: 'cause',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cbp5y: {
        id: 'l34cbp5y',
        name: 'riskCategory',
        props: {
          label: 'location',
          variant: 'medium',
          children: ['Тип события: Преднамеренные действия персонала '],
        },
        title: 'riskCategory',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cgvni: {
        id: 'l34cgvni',
        name: 'process',
        props: {
          label: 'process',
          variant: 'medium',
          children: ['Бизнес-процесс: Кредитование ФЛ'],
        },
        title: 'process',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34ci1ur: {
        id: 'l34ci1ur',
        name: 'businessLine',
        props: {
          label: 'businessLine',
          variant: 'medium',
          children: ['Направление деятельности: Управление активами'],
        },
        title: 'businessLine',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34gesfh: {
        id: 'l34gesfh',
        name: 'l34gesfi',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
            childrenGap: '2px',
          },
        },
        title: 'LeftStack',
        children: [
          'l3cpux4r',
          'l3cpsi6g',
          'l34advhr',
          'l3cpsi6k',
          'l3cpsi6m',
          'l3cpsi6o',
          'l3mzhniw',
          'l3cpsi6s',
          'l3cpsi6u',
        ],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34ivhua: {
        id: 'l34ivhua',
        name: 'l34ivhub',
        props: {
          headerText: 'Администрирование',
        },
        title: 'Admin',
        children: ['l38x7n05', 'l34ivhuc', 'l34ivhue'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l34ivhuc: {
        id: 'l34ivhuc',
        name: 'l34ivhud',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34ivhue: {
        id: 'l34ivhue',
        name: 'l34ivhuf',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j29ci: {
        id: 'l34j29ci',
        name: 'l34j29cj',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34j29ck: {
        id: 'l34j29ck',
        name: 'l34j29cl',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j2mm4: {
        id: 'l34j2mm4',
        name: 'l34j2mm5',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34j2mm6: {
        id: 'l34j2mm6',
        name: 'l34j2mm7',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j9za6: {
        id: 'l34j9za6',
        name: 'l34j9za7',
        props: {
          tokens: {
            padding: '5px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l34gesfh', 'l345h991'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34ja18r: {
        id: 'l34ja18r',
        name: 'l34ja18s',
        props: {
          tokens: {
            padding: '5px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l34gesfh', 'l345h991'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34jcaiq: {
        id: 'l34jcaiq',
        name: 'l34jcair',
        props: {
          label: 'DefaultLabel',
          headerText: 'Пороговые значения',
        },
        title: 'Threshold value',
        children: ['l39zj7q1'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l38hhgd5: {
        id: 'l38hhgd5',
        name: 'l38hhgd6',
        props: {
          items: [
            {
              id: '10001',
              name: 'Руководитель ответственного',
              author: 'Ответственный',
            },
          ],
          label: 'Владелец',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'kri_owner',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l38hoyl2: {
        id: 'l38hoyl2',
        name: 'l38hoyl3',
        props: {
          children: ['Владелец'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l38hte1r: {
        id: 'l38hte1r',
        name: 'l38hte1s',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '16px 10px 0',
          },
        },
        title: 'Stack',
        children: ['l38l3ltb', 'l38sasah'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38l3ltb: {
        id: 'l38l3ltb',
        name: 'l38l3ltc',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l38hoyl2', 'l38l3r5a'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38l3r5a: {
        id: 'l38l3r5a',
        name: 'l38l3r5b',
        props: {
          tokens: {
            padding: '0 0 0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l38l40j9', 'l38l40ts'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38l40j9: {
        id: 'l38l40j9',
        name: 'l38l40ja',
        props: {
          iconProps: {
            iconName: 'PeopleAdd',
          },
        },
        title: 'PeopleAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l38l40ts: {
        id: 'l38l40ts',
        name: 'l38l40tt',
        props: {
          disabled: false,
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l38sasah: {
        id: 'l38sasah',
        name: 'l38sasai',
        props: {
          tokens: {
            padding: '8px 8px 0',
          },
        },
        title: 'Stack',
        children: ['l38hhgd5'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38vwdbc: {
        id: 'l38vwdbc',
        name: 'lboTab',
        props: {
          headerText: 'Связанное содержимое',
        },
        title: 'LinkedBusinessObjects Tab',
        children: [
          'l38vxv07',
          'l38vxv09',
          'l38vxv0b',
          'l38vxv0d',
          'l38vxv0f',
          'l38vxv0h',
          'l38vxv0j',
          'l38vxv0l',
          'l38vz5rs',
          'l38vz5ru',
        ],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l38vxv07: {
        id: 'l38vxv07',
        name: 'l38vxv08',
        props: {
          children: ['Связанный риск'],
          required: false,
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l38vxv09: {
        id: 'l38vxv09',
        name: 'l38vxv0a',
        props: {
          items: [
            {
              id: '10000',
              name: 'Риск нарушения процедуры демонстрации',
              type: 'customObject96',
            },
          ],
          label: 'Связанный риск',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l38vxv0b: {
        id: 'l38vxv0b',
        name: 'l38vxv0c',
        props: {
          children: ['Проблема'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l38vxv0d: {
        id: 'l38vxv0d',
        name: 'l38vxv0e',
        props: {
          items: [
            {
              id: '10000',
              name: 'Проблема проведения процедуры демонстрации',
              type: 'customObject110',
            },
          ],
          label: 'Проблема',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l38vxv0f: {
        id: 'l38vxv0f',
        name: 'l38vxv0g',
        props: {
          children: ['Связанный инцидент'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l38vxv0h: {
        id: 'l38vxv0h',
        name: 'l38vxv0i',
        props: {
          items: [
            {
              id: '10001',
              name: 'Инцидент',
              type: 'customObject86',
            },
          ],
          label: 'Инциденты',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l38vxv0j: {
        id: 'l38vxv0j',
        name: 'l38vxv0k',
        props: {
          children: ['Связанные контрольные процедуры'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l38vxv0l: {
        id: 'l38vxv0l',
        name: 'l38vxv0m',
        props: {
          items: [
            {
              id: '10000',
              name: 'КП №1',
              type: 'customObject97',
            },
            {
              id: '10001',
              name: 'КП №2',
              type: 'customObject97',
            },
            {
              id: '10002',
              name: 'КП №3',
              type: 'customObject97',
            },
          ],
          label: 'Связанные контрольные процедуры',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l38vz5rs: {
        id: 'l38vz5rs',
        name: 'l38vz5rt',
        props: {
          children: ['План мероприятий'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l38vz5ru: {
        id: 'l38vz5ru',
        name: 'l38vz5rv',
        props: {
          items: [
            {
              id: '10000',
              name: 'План проведения мероприятия по демонстрации функционала АСУОР',
              type: 'customObject111',
            },
          ],
          label: 'План мероприятий',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l38wou42: {
        id: 'l38wou42',
        name: 'l38wou43',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3n01amx'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38x7n05: {
        id: 'l38x7n05',
        name: 'sourceSystemCd',
        props: {
          label: 'Источник данных',
          options: [
            {
              key: 'GRC',
              text: 'SAS Risk Governance And Compliance Manager',
            },
            {
              key: 'EXT',
              text: 'Интеграция из АС',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
          defaultSelectedKey: 'options[0]?.key.toString()',
        },
        title: 'sourceSystemCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'GRC',
      },
      l39uvtij: {
        id: 'l39uvtij',
        name: 'rangeMin',
        props: {
          label: 'Минимальное значение',
          placeholder: 'Введите значение',
        },
        title: 'rangeMin',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l39ygbux: {
        id: 'l39ygbux',
        name: 'unitOfMeasure',
        props: {
          label: 'Единица измерения',
          options: [
            {
              key: 'PER',
              text: 'Проценты',
            },
            {
              key: 'CURR',
              text: 'Валюта (RUR)',
            },
            {
              key: 'NUM',
              text: 'Число',
            },
            {
              key: 'DAYS',
              text: 'Дни',
            },
            {
              key: 'MONTHS',
              text: 'Месяцы',
            },
            {
              key: 'YEARS',
              text: 'Годы',
            },
            {
              key: 'BIN',
              text: 'Логическое',
            },
            {
              key: 'HOURS',
              text: 'Часы',
            },
            {
              key: 'MINS',
              text: 'Минуты',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'unitOfMeasure',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'DAYS',
      },
      l39yq0tg: {
        id: 'l39yq0tg',
        name: 'kriNature',
        props: {
          label: 'Сущность КИР',
          options: [
            {
              key: 'PREDICTV',
              text: 'Последующий',
            },
            {
              key: 'REACTIVE',
              text: 'Предупреждающий',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'kriNature',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'PREDICTV',
      },
      l39yq20x: {
        id: 'l39yq20x',
        name: 'kriFrequency',
        props: {
          label: 'Интервал',
          options: [
            {
              key: 'DLY',
              text: 'Ежедневно',
            },
            {
              key: 'MON',
              text: 'Ежемесячно',
            },
            {
              key: 'QTR',
              text: 'Ежеквартально',
            },
            {
              key: 'ANU',
              text: 'Ежегодно',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'kriFrequency',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'DAYS',
      },
      l39yukxv: {
        id: 'l39yukxv',
        name: 'kriType',
        props: {
          label: 'Типы КИР',
          options: [
            {
              key: 'EXPSR',
              text: 'Частота риска',
            },
            {
              key: 'FRQCY',
              text: 'Подверженность риску',
            },
            {
              key: 'CTLEF',
              text: 'Тяжесть последствий риска',
            },
            {
              key: 'SVRTY',
              text: 'Эффективность контрольной процедуры',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'kriType',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'CTLEF',
      },
      l39zdi1f: {
        id: 'l39zdi1f',
        name: 'rangeMid1',
        props: {
          label: 'Нижнее пороговое значение',
          placeholder: 'Введите значение',
        },
        title: 'rangeMid1',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l39zedld: {
        id: 'l39zedld',
        name: 'rangeMid2',
        props: {
          label: 'Верхнее пороговое значение',
          placeholder: 'Введите значение',
        },
        title: 'rangeMid2',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l39zhvt1: {
        id: 'l39zhvt1',
        name: 'rangeMax',
        props: {
          label: 'Максимальное значение',
          placeholder: 'Введите значение',
        },
        title: 'rangeMax',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l39zj7q1: {
        id: 'l39zj7q1',
        name: 'l39zj7q2',
        props: {
          tokens: {
            padding: '16px 10px 0',
            maxWidth: '50%',
            childrenGap: '8px',
          },
        },
        title: 'Stack',
        children: ['l39uvtij', 'l39zdi1f', 'l39zedld', 'l39zhvt1', 'l3a01wkc', 'l3a03n1x'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a01wkc: {
        id: 'l3a01wkc',
        name: 'x_targeted',
        props: {
          label: 'Интерпретация',
          options: [
            {
              key: 'EXPSR',
              text: 'По мере уменьшения значений индикатор улучшается',
            },
          ],
        },
        title: 'x_targeted',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3a03n1x: {
        id: 'l3a03n1x',
        name: 'relaxRangeFlg',
        props: {
          label: 'Разрешить значение за пределами указанного диапазона',
          boxSide: 'start',
          checked: true,
        },
        title: 'relaxRangeFlg',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3coce6e: {
        id: 'l3coce6e',
        name: 'recentObservations',
        props: {
          headerText: 'Последние значения',
        },
        title: 'RecentObservations Tab',
        children: ['l3coce6g', 'l3coce6i'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3coce6g: {
        id: 'l3coce6g',
        name: 'l3coce6h',
        props: {
          children: ['Последние значения'],
          required: false,
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3coce6i: {
        id: 'l3coce6i',
        name: 'l3coce6j',
        props: {
          items: [
            {
              id: '10000',
              name: 'Значение КИР 1',
              type: 'customObject114',
            },
            {
              id: '10001',
              name: 'Значение КИР 2',
              type: 'customObject114',
            },
          ],
          label: 'Связанный риск',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3cpbmh4: {
        id: 'l3cpbmh4',
        name: 'l3cpbmh5',
        props: {
          tokens: {
            padding: '0 0 16px',
            maxWidth: '50%',
            childrenGap: '8px',
          },
        },
        title: 'Stack',
        children: ['l3cwq1yb'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cpsi6g: {
        id: 'l3cpsi6g',
        name: 'l3cpsi6h',
        props: {
          label: 'Активен?',
          boxSide: 'start',
          checked: true,
          disabled: false,
        },
        title: 'Checkbox',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3cpsi6k: {
        id: 'l3cpsi6k',
        name: 'custObj113Id',
        props: {
          label: 'Идентификатор КИР',
          disabled: true,
          borderless: false,
          underlined: false,
        },
        title: 'Id',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: '1000',
      },
      l3cpsi6m: {
        id: 'l3cpsi6m',
        name: 'l3cpsi6n',
        props: {
          label: 'Иcходная система',
          disabled: false,
          underlined: false,
        },
        title: 'sourceSystem',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'Система АБС',
      },
      l3cpsi6o: {
        id: 'l3cpsi6o',
        name: 'l3cpsi6p',
        props: {
          label: 'Описание',
          disabled: false,
          multiline: true,
          underlined: false,
        },
        title: 'custObjDesc',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'Сводное описание КИР',
      },
      l3cpsi6s: {
        id: 'l3cpsi6s',
        name: 'l3cpsi6t',
        props: {
          label: 'Вспомогательная информация',
          disabled: false,
          multiline: true,
          underlined: false,
        },
        title: 'helpTxt',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3cpsi6u: {
        id: 'l3cpsi6u',
        name: 'l3cpsi6v',
        props: {
          label: 'Дата запроса значений КИР',
          placeholder: 'Выберите дату',
        },
        title: 'requestDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3cpux4r: {
        id: 'l3cpux4r',
        name: 'createdDt',
        props: {
          label: 'Дата создания индикатора',
          disabled: false,
          placeholder: 'Выберите дату',
        },
        title: 'createdDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3cwq1yb: {
        id: 'l3cwq1yb',
        name: 'auditFlg',
        props: {
          label: 'Признак использования для аудита',
          boxSide: 'start',
          disabled: false,
        },
        title: 'AuditFlg',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3mzhniw: {
        id: 'l3mzhniw',
        name: 'l3mzhnix',
        props: {
          label: 'Тип индикатора',
          options: [
            {
              key: 'KRI',
              text: 'КИР',
            },
            {
              key: 'KCI',
              text: 'КИК',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'indicatorClass',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'KRI',
      },
      l3n01amx: {
        id: 'l3n01amx',
        name: 'l3n01amy',
        props: {
          type: 'submit',
          children: 'Сохранить',
          iconProps: {
            iconName: 'Save',
          },
        },
        title: 'Save',
        value: 'Сохранить',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      '43fa6880ds24': {
        id: '43fa6880ds24',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe': {
    id: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
    title: 'Fetcher',
    componentName: 'Fetcher',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: ['l3wyaij5', 'l3wyanih'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32yytup: {
        id: 'l32yytup',
        name: 'props.url',
        props: {
          label: 'url',
        },
        title: 'url',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32yzoep: {
        id: 'l32yzoep',
        name: 'props.name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3wyaij5: {
        id: 'l3wyaij5',
        name: 'l3wyaij6',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wyanih: {
        id: 'l3wyanih',
        name: 'l3wyanii',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l32yytup', 'l32yzoep'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  'cd1c9df4-f5dd-426c-9d26-a0ec40638601': {
    id: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
    title: 'Dropdown',
    componentName: 'Dropdown',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
          },
        },
        title: 'stackRoot',
        children: [
          'l3vkq7sk',
          'l3vkqorn',
          'l3vksv3l',
          'l3vku20e',
          'l3wxgumi',
          'l3wxh4oj',
          'l3wxhsoc',
          'l3wxhhrj',
          'l49txlvy',
        ],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32se519: {
        id: 'l32se519',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32t2u5b: {
        id: 'l32t2u5b',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32t36z8: {
        id: 'l32t36z8',
        name: 'props.options[0].key',
        props: {
          label: 'optionKey',
        },
        title: 'optionKey',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32t4d6y: {
        id: 'l32t4d6y',
        name: 'props.options[0].text',
        props: {
          label: 'optionText',
        },
        title: 'optionText',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32t8zir: {
        id: 'l32t8zir',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32thlsx: {
        id: 'l32thlsx',
        name: 'props.options[1].key',
        props: {
          label: 'optionKey',
        },
        title: 'optionKey',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32thlsz: {
        id: 'l32thlsz',
        name: 'props.options[1].text',
        props: {
          label: 'optionText',
        },
        title: 'optionText',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32tj7uo: {
        id: 'l32tj7uo',
        name: 'l32tj7up',
        props: {
          tokens: {
            padding: '3px',
          },
        },
        title: 'StackRoot',
        children: ['l32t36z8', 'l32t4d6y', 'l32tlh9b'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32tjfks: {
        id: 'l32tjfks',
        name: 'l32tjfkt',
        props: {
          tokens: {
            padding: '3px',
          },
        },
        title: 'StackRoot',
        children: ['l32thlsx', 'l32thlsz', 'l32tmimy'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32tlh9b: {
        id: 'l32tlh9b',
        name: 'props.options[0].itemType',
        props: {
          label: 'itemType',
        },
        title: 'itemType',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'DropdownMenuItemType.Header',
      },
      l32tmimy: {
        id: 'l32tmimy',
        name: 'props.options[1].itemType',
        props: {
          label: 'itemType',
        },
        title: 'itemType',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'DropdownMenuItemType.Header',
      },
      l32to2p9: {
        id: 'l32to2p9',
        name: 'l32to2pa',
        props: {
          tokens: {
            padding: '3px',
          },
        },
        title: 'StackRoot',
        children: ['l32to2pb', 'l32to2pd', 'l32to2pf'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32to2pb: {
        id: 'l32to2pb',
        name: 'props.options[2].key',
        props: {
          label: 'optionKey',
        },
        title: 'optionKey',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32to2pd: {
        id: 'l32to2pd',
        name: 'props.options[2].text',
        props: {
          label: 'optionText',
        },
        title: 'optionText',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32to2pf: {
        id: 'l32to2pf',
        name: 'props.options[2].itemType',
        props: {
          label: 'itemType',
        },
        title: 'itemType',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l331azbk: {
        id: 'l331azbk',
        name: 'injections[0].from',
        props: {
          label: 'injection from',
        },
        title: 'injection from',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l331bnz0: {
        id: 'l331bnz0',
        name: 'injections[0].to',
        props: {
          label: 'injection to',
        },
        title: 'injection to',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l332qx3i: {
        id: 'l332qx3i',
        name: 'props.options',
        title: 'options',
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l3453axe: {
        id: 'l3453axe',
        name: 'props.disabled',
        props: {
          label: 'disabled',
          boxSide: 'start',
        },
        title: 'disabled',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l34a8pbs: {
        id: 'l34a8pbs',
        name: 'props.placeholder',
        props: {
          label: 'placeholder',
        },
        title: 'placeholder',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l368nb50: {
        id: 'l368nb50',
        name: 'defaultValue',
        props: {
          label: 'default value',
        },
        title: 'default value',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vkq7sk: {
        id: 'l3vkq7sk',
        name: 'l3vkq7sl',
        props: {
          label: 'Main',
          padding: '10px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3vkqorn: {
        id: 'l3vkqorn',
        name: 'l3vkqoro',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l32t2u5b', 'l32se519', 'l32t8zir', 'l34a8pbs', 'l368nb50'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vksv3l: {
        id: 'l3vksv3l',
        name: 'l3vksv3m',
        props: {
          label: 'Props',
          padding: '10px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3vku20e: {
        id: 'l3vku20e',
        name: 'l3vku20f',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3453axe'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxgumi: {
        id: 'l3wxgumi',
        name: 'l3wxgumj',
        props: {
          label: 'Injections',
          padding: '10px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxh4oj: {
        id: 'l3wxh4oj',
        name: 'l3wxh4ok',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l331azbk', 'l331bnz0'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxhhrj: {
        id: 'l3wxhhrj',
        name: 'l3wxhhrk',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l332qx3i'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxhsoc: {
        id: 'l3wxhsoc',
        name: 'l3wxhsod',
        props: {
          label: 'Options',
          padding: '10px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l459o1bt: {
        id: 'l459o1bt',
        name: 'eventBindingSchema',
        props: {
          label: 'events',
        },
        title: 'Bindings',
        compSchemaId: 'ebeb0b32-3298-4da3-b67b-de34ee852fa1',
      },
      l49txlvy: {
        id: 'l49txlvy',
        name: 'l49txlvz',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l459o1bt'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  '10f4b915-d03a-4849-9a3e-06bc9abc66d0': {
    id: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
    title: 'NumberField',
    componentName: 'NumberField',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: ['l3wy03yx', 'l3vhi33v', 'l3wy0qwp', 'l39uudtz'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l34g3oa8: {
        id: 'l34g3oa8',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l34g56ze: {
        id: 'l34g56ze',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l34g5tgz: {
        id: 'l34g5tgz',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l39urs03: {
        id: 'l39urs03',
        name: 'props.autoAdjustHeight',
        props: {
          label: 'autoAdjustHeight',
          boxSide: 'start',
          checked: true,
          disabled: true,
        },
        title: 'autoAdjustHeight',
        l32tx8ac: false,
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l39urs05: {
        id: 'l39urs05',
        name: 'props.underlined',
        props: {
          label: 'underlined',
          boxSide: 'start',
        },
        title: 'underlined',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l39urs07: {
        id: 'l39urs07',
        name: 'props.borderless',
        props: {
          label: 'borderless',
          boxSide: 'start',
        },
        title: 'borderless',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l39urs09: {
        id: 'l39urs09',
        name: 'props.disabled',
        props: {
          label: 'disabled',
          boxSide: 'start',
        },
        title: 'disabled',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l39urs0b: {
        id: 'l39urs0b',
        name: 'assertionBindingSchema',
        props: {
          label: 'assertions',
        },
        title: 'Validator',
        compSchemaId: 'e24fad61-576a-421d-9273-02b3c365c15c',
      },
      l39uudtz: {
        id: 'l39uudtz',
        name: 'l39uudu0',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l39urs03', 'l39urs05', 'l39urs07', 'l39urs09'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vhi33v: {
        id: 'l3vhi33v',
        name: 'l3vhi33w',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l34g3oa8', 'l34g5tgz', 'l34g56ze', 'l39urs0b'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wy03yx: {
        id: 'l3wy03yx',
        name: 'l3wy03yy',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wy0qwp: {
        id: 'l3wy0qwp',
        name: 'l3wy0qwq',
        props: {
          label: 'Props',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
    },
  },
  '382aa542-a2aa-4d62-a2cf-ce5a47382585': {
    id: '382aa542-a2aa-4d62-a2cf-ce5a47382585',
    title: 'NonFinancialEffectDemo',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          style: {
            maxWidth: '800px',
            minWidth: '800px',
          },
          tokens: {
            padding: '20px',
          },
        },
        title: 'stackRoot',
        children: ['l3lml0gf', 'l3lml0gb', 'l3lml0gd'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3lml0gb: {
        id: 'l3lml0gb',
        name: 'l3lml0gc',
        props: {
          tokens: {
            padding: '0px',
          },
          horizontal: false,
        },
        title: 'HeadStack',
        children: ['l3lml0gh', 'l3lml0gj'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0gd: {
        id: 'l3lml0gd',
        name: 'l3lml0ge',
        props: {
          tokens: {
            padding: '0 0 0',
            maxWidth: '900px',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3lml0gl'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0gf: {
        id: 'l3lml0gf',
        name: 'l3lml0gg',
        props: {
          tokens: {
            padding: '0 0 24px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3lml0gn', 'l3lml0gp'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0gh: {
        id: 'l3lml0gh',
        name: 'l3lml0gi',
        props: {
          tokens: {
            padding: '0 0 16px',
            childrenGap: '16px',
          },
        },
        title: 'LocationStack',
        children: ['l3lml0gr', 'l3lml0gt', 'l3lml0gv', 'l3lml0gx', 'l3lml0gz', 'l3lml0h1'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0gj: {
        id: 'l3lml0gj',
        name: 'l3lml0gk',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3lml0h3'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0gl: {
        id: 'l3lml0gl',
        name: 'l3lml0gm',
        props: {
          label: 'Pivot',
          linkSize: 'normal',
          ariaLabel: 'aria-label',
          linkFormat: 'links',
          overflowBehavior: 'menu',
          overflowAriaLabel: 'more items',
        },
        title: 'Pivot',
        children: ['l3lml0h5', 'l3lml0h7', 'l3lml0h9', 'l3lml0hb'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l3lml0gn: {
        id: 'l3lml0gn',
        name: 'l3lml0go',
        props: {
          value: '123',
          chidren: [null],
          variant: 'xxLarge',
          children: ['Нефинансовое последствие'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3lml0gp: {
        id: 'l3lml0gp',
        name: 'l3lml0gq',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3lml0hd'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0gr: {
        id: 'l3lml0gr',
        name: 'managementOrg',
        props: {
          label: 'managementOrg',
          variant: 'medium',
          children: ['Орг. структура: Банк > Головной офис > Отделение №1234'],
        },
        title: 'managementOrg',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3lml0gt: {
        id: 'l3lml0gt',
        name: 'riskCategory',
        props: {
          label: 'riskCategory',
          variant: 'medium',
          children: ['Тип события: Преднамеренные действия персонала '],
        },
        title: 'riskCategory',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3lml0gv: {
        id: 'l3lml0gv',
        name: 'cause',
        props: {
          label: 'cause',
          variant: 'medium',
          children: ['Вид нефинансового риска: Операционный'],
        },
        title: 'cause',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3lml0gx: {
        id: 'l3lml0gx',
        name: 'financialStatementItem',
        props: {
          label: 'financialStatementItem',
          variant: 'medium',
          children: ['Источник ОР: Недостатки процессов'],
        },
        title: 'financialStatementItem',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3lml0gz: {
        id: 'l3lml0gz',
        name: 'process',
        props: {
          label: 'process',
          variant: 'medium',
          children: ['Бизнес-процесс: Кредитование ФЛ'],
        },
        title: 'process',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3lml0h1: {
        id: 'l3lml0h1',
        name: 'businessLine',
        props: {
          label: 'businessLine',
          variant: 'medium',
          children: ['Направление деятельности: Управление активами'],
        },
        title: 'businessLine',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3lml0h3: {
        id: 'l3lml0h3',
        name: 'co88_bol_isRiskIB',
        props: {
          label: 'Является последствием риска информационной безопасности',
          boxSide: 'start',
        },
        title: 'co88_bol_isRiskIB',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3lml0h5: {
        id: 'l3lml0h5',
        name: 'l3lml0h6',
        props: {
          headerText: 'Сведения',
        },
        title: 'MainTab',
        children: ['l3lml0hf'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3lml0h7: {
        id: 'l3lml0h7',
        name: 'l3lml0h8',
        props: {
          label: 'DefaultLabel',
          itemCount: '1',
          headerText: 'Связанный инцидент',
        },
        title: 'LinkedBusinessObjects Tab',
        children: ['l3lml0hh'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3lml0h9: {
        id: 'l3lml0h9',
        name: 'l3lml0ha',
        props: {
          label: 'Комментарии и вложения',
          itemCount: '2',
          headerText: 'Комментарии и вложения',
        },
        title: 'CommentsAndAttachementsTab',
        children: ['l3lml0hj'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3lml0hb: {
        id: 'l3lml0hb',
        name: 'l3lml0hc',
        props: {
          headerText: 'Администрирование',
        },
        title: 'Admin',
        children: ['l3lml0hl', 'l3lml0hn', 'l3lml0hp'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3lml0hd: {
        id: 'l3lml0hd',
        name: 'l3lml0he',
        props: {
          type: 'submit',
          children: 'Сохранить',
          iconProps: {
            iconName: 'Save',
          },
        },
        title: 'Save',
        value: 'Сохранить',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3lml0hf: {
        id: 'l3lml0hf',
        name: 'l3lml0hg',
        props: {
          tokens: {
            padding: '8px 8px 0',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3lml0hr', 'l3lml0ht', 'l3lml0hv', 'l3lml0hx', 'l3lml0hz', 'l3lml0i1'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0hh: {
        id: 'l3lml0hh',
        name: 'l3lml0hi',
        props: {
          tokens: {
            padding: '8px 8px 0',
          },
        },
        title: 'Stack',
        children: ['l3lml0i3', 'l3lml0i5'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0hj: {
        id: 'l3lml0hj',
        name: 'l3lml0hk',
        props: {
          tokens: {
            padding: '16px 10px 0',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3lml0i7', 'l3lml0i9'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0hl: {
        id: 'l3lml0hl',
        name: 'sourceSystemCd',
        props: {
          label: 'Источник данных',
          options: [
            {
              key: 'GRC',
              text: 'SAS Risk Governance And Compliance Manager',
            },
            {
              key: 'EXT',
              text: 'Интеграция из АС',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
          defaultSelectedKey: 'options[0]?.key.toString()',
        },
        title: 'sourceSystemCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'GRC',
      },
      l3lml0hn: {
        id: 'l3lml0hn',
        name: 'l3lml0ho',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l3lml0hp: {
        id: 'l3lml0hp',
        name: 'l3lml0hq',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l3lml0hr: {
        id: 'l3lml0hr',
        name: 'l3lml0hs',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '400px',
          },
        },
        title: 'Stack',
        children: ['l3lml0ib'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0ht: {
        id: 'l3lml0ht',
        name: 'l3lml0hu',
        props: {
          tokens: {
            padding: '0',
            childrenGap: '6px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3lml0id', 'l3lml0if'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0hv: {
        id: 'l3lml0hv',
        name: 'l3lml0hw',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3lml0ih'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0hx: {
        id: 'l3lml0hx',
        name: 'l3lml0hy',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3lml0ij'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0hz: {
        id: 'l3lml0hz',
        name: 'l3lml0i0',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3lml0in'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0i1: {
        id: 'l3lml0i1',
        name: 'l3lml0i2',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '50%',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3lml0ip'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0i3: {
        id: 'l3lml0i3',
        name: 'l3lml0i4',
        props: {
          children: ['Связанный инцидент'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3lml0i5: {
        id: 'l3lml0i5',
        name: 'Incident_nfe',
        props: {
          items: [
            {
              id: '10000',
              name: 'Инцидент',
              type: 'customObject86',
            },
          ],
          label: 'Инциденты',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'type',
              name: 'Тип объекта',
              text: 'type',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'type',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3lml0i7: {
        id: 'l3lml0i7',
        name: 'l3lml0i8',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3lml0ir', 'l3lml0it'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0i9: {
        id: 'l3lml0i9',
        name: 'l3lml0ia',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3lml0iv', 'l3lml0ix'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0ib: {
        id: 'l3lml0ib',
        name: 'custObj88Id',
        props: {
          label: 'Идентификатор последствия',
          disabled: true,
          borderless: false,
          underlined: true,
        },
        title: 'custObj88Id',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: '10000',
      },
      l3lml0id: {
        id: 'l3lml0id',
        name: 'l3lml0ie',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3lml0iz'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0if: {
        id: 'l3lml0if',
        name: 'l3lml0ig',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3lml0j1'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0ih: {
        id: 'l3lml0ih',
        name: 'co88_ops_effectType_QL',
        props: {
          label: 'Подвид последствия',
          options: [
            {
              key: '13',
              text: 'Возникновение источников других видов риска (например, кредитного риска, рыночного риска, риска ликвидности, риска потери деловой репутации, регуляторного риска, стратегического риска)',
            },
            {
              key: '11',
              text: 'Другие качественные потери',
            },
            {
              key: '15',
              text: 'Неисполнение обязательств по сделке и (или) неоказание услуги',
            },
            {
              key: '16',
              text: 'Ограничения, приводящие к выполнению невыгодных для Банка действий, накладываемые со стороны суда, исполнительных органов государственной власти, Банка России',
            },
            {
              key: '14',
              text: 'Отток клиентов',
            },
            {
              key: '2',
              text: 'Поступление жалоб со стороны клиентов/партнеров',
            },
            {
              key: '3',
              text: 'Появление негативных сообщений в региональных/федеральных/мировых СМИ',
            },
            {
              key: '1',
              text: 'Приостановка деятельности в результате события операционного риска (например, технологического сбоя)',
            },
            {
              key: '17',
              text: 'Снижение качества предоставления услуг, выполнения операций (например, нарушение регламентированных сроков выполнения процессов и операций, установленных во внутренних документах Банка)',
            },
            {
              key: '20',
              text: 'Снижение лимитов на межбанковское кредитование',
            },
            {
              key: '19',
              text: 'Судебные акты (решения, определения, постановления), акты исполнительных органов государственной власти, Банка России, не связанные с уплатой штрафов',
            },
            {
              key: '18',
              text: 'Утечка, потеря или искажение защищаемой, в том числе коммерческой, информации',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'co88_ops_effectType_QL',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3lml0ij: {
        id: 'l3lml0ij',
        name: 'custObjNm',
        props: {
          label: 'Название последствия',
          disabled: false,
          underlined: false,
        },
        title: 'custObjNm',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3lml0in: {
        id: 'l3lml0in',
        name: 'custObjDesc',
        props: {
          label: 'Описание последстсвия',
          disabled: false,
          multiline: true,
          underlined: false,
        },
        title: 'custObjDesc',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3lml0ip: {
        id: 'l3lml0ip',
        name: 'impactSeverityCd',
        props: {
          label: 'Значимость последствия',
          options: [
            {
              key: '0',
              text: 'Нет',
            },
            {
              key: 'A',
              text: 'Низкая',
            },
            {
              key: 'B',
              text: 'Средняя',
            },
            {
              key: 'C',
              text: 'Высокая',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
          defaultSelectedKey: 'options[0]?.key.toString()',
        },
        title: 'impactSeverityCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: '0',
      },
      l3lml0ir: {
        id: 'l3lml0ir',
        name: 'l3lml0is',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3lml0j3', 'l3lml0j5'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0it: {
        id: 'l3lml0it',
        name: 'Attachments',
        props: {
          items: [
            {
              id: '10000',
              name: 'Описание.docx',
              type: 'docx',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Вложение с описанием инцидента',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 100,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'type',
              name: 'Тип',
              text: 'type',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'type',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'AttachmentsTable',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3lml0iv: {
        id: 'l3lml0iv',
        name: 'l3lml0iw',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3lml0j7', 'l3lml0j9'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0ix: {
        id: 'l3lml0ix',
        name: 'Comments',
        props: {
          items: [
            {
              date: '01.05.2022',
              name: 'Нефинансовое последствие успешно заведено в системе',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Комментарии',
          columns: [
            {
              key: 'name',
              name: 'Комментарий',
              text: 'name',
              maxWidth: 200,
              minWidth: 100,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'date',
              name: 'Дата',
              text: 'date',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'date',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'CommentsTable',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3lml0iz: {
        id: 'l3lml0iz',
        name: 'co88_ops_effectTypeMain',
        props: {
          label: 'Тип последствия',
          options: [
            {
              key: '1',
              text: 'Непрямые потери',
            },
          ],
          disabled: true,
          placeholder: 'Выберите значение',
        },
        title: 'co88_ops_effectTypeMain',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: '1',
      },
      l3lml0j1: {
        id: 'l3lml0j1',
        name: 'co88_ops_effectType',
        props: {
          label: 'Вид последствия',
          options: [
            {
              key: '1',
              text: 'Качественные потери',
            },
          ],
          disabled: true,
          placeholder: 'Выберите значение',
        },
        title: 'co88_ops_effectType',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: '1',
      },
      l3lml0j3: {
        id: 'l3lml0j3',
        name: 'l3lml0j4',
        props: {
          children: ['Вложения'],
          disabled: false,
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3lml0j5: {
        id: 'l3lml0j5',
        name: 'l3lml0j6',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3lml0jb', 'l3lml0jd', 'l3lml0jf', 'l3lml0jh'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0j7: {
        id: 'l3lml0j7',
        name: 'l3lml0j8',
        props: {
          children: ['Комментарии'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3lml0j9: {
        id: 'l3lml0j9',
        name: 'l3lml0ja',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3lml0jj', 'l3lml0jl'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3lml0jb: {
        id: 'l3lml0jb',
        name: 'l3lml0jc',
        props: {
          checked: false,
          disabled: false,
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'Upload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3lml0jd: {
        id: 'l3lml0jd',
        name: 'l3lml0je',
        props: {
          iconProps: {
            iconName: 'BulkUpload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3lml0jf: {
        id: 'l3lml0jf',
        name: 'l3lml0jg',
        props: {
          iconProps: {
            iconName: 'DownloadDocument',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3lml0jh: {
        id: 'l3lml0jh',
        name: 'l3lml0ji',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3lml0jj: {
        id: 'l3lml0jj',
        name: 'l3lml0jk',
        props: {
          checked: false,
          disabled: false,
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'CommentAdd',
          },
        },
        title: 'CommentAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3lml0jl: {
        id: 'l3lml0jl',
        name: 'l3lml0jm',
        props: {
          checked: false,
          disabled: false,
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
    },
  },
  '092d7f98-8778-4104-9660-1865eb5a9bef': {
    id: '092d7f98-8778-4104-9660-1865eb5a9bef',
    title: 'NewForm',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        title: 'stackRoot',
        children: ['l45dfloi', 'l45dg0g1'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l45dfloi: {
        id: 'l45dfloi',
        name: 'lasname',
        props: {
          label: 'lasname',
        },
        title: 'lasname',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l45dg0g1: {
        id: 'l45dg0g1',
        name: 'l45dg0g2',
        props: {
          type: 'submit',
          children: 'subimt',
        },
        title: 'ActionButton',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
    },
  },
  'ebeb0b32-3298-4da3-b67b-de34ee852fa1': {
    id: 'ebeb0b32-3298-4da3-b67b-de34ee852fa1',
    title: 'EventBindingEditor',
    componentName: 'EventBindingEditor',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '20px',
          },
        },
        title: 'stackRoot',
        children: ['l3vf9ful', 'l3vfhbgm', 'l488yzwz'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3vf9ful: {
        id: 'l3vf9ful',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vfhbgm: {
        id: 'l3vfhbgm',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l488yzwz: {
        id: 'l488yzwz',
        name: 'assertionBindingSchema',
        props: {
          label: 'assertions',
        },
        title: 'Validator',
        compSchemaId: 'e24fad61-576a-421d-9273-02b3c365c15c',
      },
    },
  },
  'cbc179cb-07d9-4d25-8db0-f8fdb2b84490': {
    id: 'cbc179cb-07d9-4d25-8db0-f8fdb2b84490',
    title: 'MenuDemo',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          style: {
            maxWidth: '1000px',
            minWidth: '1000px',
          },
          tokens: {
            padding: '20px',
          },
          horizontal: false,
        },
        title: 'Система управления ОР',
        children: ['l3cnw5hc', 'l3n0z2wd', 'l3bnos5i', 'l3n10c1c'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3bnos5i: {
        id: 'l3bnos5i',
        name: 'l3bnos5j',
        props: {
          tokens: {
            padding: '0px 0px 0px',
            childrenGap: '0px',
          },
          disableShrink: true,
        },
        title: 'Финансовые последствия',
        children: ['l3n079ft'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnrtmf: {
        id: 'l3cnrtmf',
        name: 'l3cnrtmg',
        props: {
          iconProps: {
            iconName: 'Search',
          },
          underlined: false,
          placeholder: 'Поиск',
        },
        title: 'SearchBox',
        compSchemaId: 'f6f385f7-74db-438b-9981-bd261f8db0fc',
      },
      l3cnw5hc: {
        id: 'l3cnw5hc',
        name: 'l3cnw5hd',
        props: {
          tokens: {
            padding: '8px 8px 0',
            childrenGap: '10px',
          },
          horizontal: true,
        },
        title: 'Текущие задачи',
        children: ['l3cnw9zm', 'l3cnwyp8'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnw9zm: {
        id: 'l3cnw9zm',
        name: 'l3cnw9zn',
        props: {
          style: {
            minWidth: '300px',
          },
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3cnrtmf'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnwyp8: {
        id: 'l3cnwyp8',
        name: 'l3cnwyp9',
        props: {
          style: {
            minWidth: '30%',
          },
          tokens: {
            padding: '0px 0px 0px',
          },
          disableShrink: false,
        },
        title: 'Stack',
        children: ['l3cnxlxc'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnxlxc: {
        id: 'l3cnxlxc',
        name: 'searchDropdown',
        props: {
          options: [
            {
              key: '1',
              text: 'ID КИР',
            },
            {
              key: 'name',
              text: 'Название',
            },
            {
              key: 'potentialLossAmt',
              text: 'Потенциальная сумма потерь',
            },
            {
              key: 'currency',
              text: 'Валюта',
            },
            {
              key: 'createdAt',
              text: 'Дата создания',
            },
            {
              key: 'status',
              text: 'Статус',
            },
            {
              key: 'custObjDesc',
              text: 'Описание',
            },
            {
              key: 'validationStateCd',
              text: 'Активность',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'searchDropdown',
        injections: [{}],
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3n079ft: {
        id: 'l3n079ft',
        name: 'l3n079fu',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3n0z2wd: {
        id: 'l3n0z2wd',
        name: 'l3n0z2we',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Инциденты',
        children: ['l3n0z2wj', 'l3n0z2wl'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3n0z2wj: {
        id: 'l3n0z2wj',
        name: 'l3n0z2wk',
        props: {
          tokens: {
            padding: '8px 0px 0px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3n0z2wl: {
        id: 'l3n0z2wl',
        name: 'l3n0z2wm',
        props: {
          tokens: {
            padding: '0',
          },
          disableShrink: false,
        },
        title: 'Stack',
        children: ['l3n0z2wv'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3n0z2wv: {
        id: 'l3n0z2wv',
        name: 'l3n0z2ww',
        props: {
          items: [
            {
              id: '10000',
              name: 'Тестовый КИР 1',
              owner: 'Ответственный',
              rangeMax: '8',
              rangeMin: '2',
              activeFlg: 'Да',
              createdDt: '02/05/21',
            },
            {
              id: '10001',
              name: 'Тестовый КИР 2',
              owner: 'Ответственный',
              rangeMax: '100',
              rangeMin: '0',
              activeFlg: 'Да',
              createdDt: '22/03/21',
            },
            {
              id: '10002',
              name: 'Тестовый КИР 3',
              owner: 'Ответственный',
              rangeMax: '100',
              rangeMin: '0',
              activeFlg: 'Да',
              createdDt: '22/03/21',
            },
            {
              id: '10003',
              name: 'КИР Демо',
              owner: 'Ответственный',
              rangeMax: '50',
              rangeMin: '1',
              activeFlg: 'Да',
              createdDt: '25/02/21',
            },
            {
              id: '10004',
              name: 'КИР',
              owner: 'Ответственный',
              rangeMax: '100',
              rangeMin: '0',
              activeFlg: 'Нет',
              createdDt: '02/02/21',
            },
          ],
          label: 'КИР',
          columns: [
            {
              key: 'id',
              name: 'ID КИР',
              text: 'id',
              minWidth: 50,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Имя КИР',
              text: 'name',
              minWidth: 100,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'owner',
              name: 'Владелец',
              text: 'owner',
              minWidth: 100,
              fieldName: 'owner',
              isResizable: 'true',
            },
            {
              key: 'rangeMax',
              name: 'Максимальное значение',
              text: 'rangeMax',
              minWidth: 50,
              fieldName: 'rangeMax',
              isResizable: 'true',
            },
            {
              key: 'rangeMin',
              name: 'Минимальное значение',
              text: 'rangeMin',
              minWidth: 100,
              fieldName: 'rangeMin',
              isResizable: 'true',
            },
            {
              key: 'activeFlg',
              name: 'Активен?',
              text: 'activeFlg',
              minWidth: 50,
              fieldName: 'activeFlg',
              isResizable: 'true',
            },
            {
              key: 'createdDt',
              name: 'Дата создания',
              text: 'createdDt',
              minWidth: 100,
              fieldName: 'createdDt',
              isResizable: 'true',
            },
          ],
          selectionMode: 0,
          columnReorderOptions: [
            {
              frozenColumnCountFromEnd: 1,
              frozenColumnCountFromStart: 2,
            },
          ],
        },
        title: 'Table',
        children: ['l3n0z2wz', 'l3n0z2x1', 'l3n0z2x3'],
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3n0z2wz: {
        id: 'l3n0z2wz',
        name: 'l3n0z2x0',
        props: {
          children: 'Создать',
          iconProps: {
            iconName: 'Add',
          },
          allowDisabledFocus: false,
        },
        title: 'ActionButton',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3n0z2x1: {
        id: 'l3n0z2x1',
        name: 'l3n0z2x2',
        props: {
          children: 'Экспорт в Excel',
          iconProps: {
            iconName: 'ExcelDocument',
          },
        },
        title: 'ActionButton',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3n0z2x3: {
        id: 'l3n0z2x3',
        name: 'l3n0z2x4',
        props: {
          children: 'Удалить',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'ActionButton',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3n109hz: {
        id: 'l3n109hz',
        name: 'l3n109i0',
        title: 'КИР',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3n10c1c: {
        id: 'l3n10c1c',
        name: 'l3n10c1d',
        title: 'КИР',
        children: ['l3n109hz', 'l3n10pn5'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3n10pn5: {
        id: 'l3n10pn5',
        name: 'l3n10pn6',
        title: 'Значения КИР',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
    },
  },
  'f6b1a985-be84-474e-a4a5-164a76eec249': {
    id: 'f6b1a985-be84-474e-a4a5-164a76eec249',
    title: 'PivotItem',
    componentName: 'PivotItem',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: ['l3wx6bg9', 'l3wx5w56', 'l3wx6kgi', 'l3wrxv0g'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l31fv66b: {
        id: 'l31fv66b',
        name: 'props.headerText',
        props: {
          label: 'headerText',
        },
        title: 'headerText',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31fvs7n: {
        id: 'l31fvs7n',
        name: 'props.headerButtonProps',
        props: {
          label: 'headerButtonProps',
        },
        title: 'headerButtonProps',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31i2b6u: {
        id: 'l31i2b6u',
        name: 'props.itemCount',
        props: {
          label: 'itemCount',
        },
        title: 'itemCount',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31m8af5: {
        id: 'l31m8af5',
        name: 'props.itemIcon',
        props: {
          label: 'itemIcon (custom)',
        },
        title: 'itemIcon',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31mco2i: {
        id: 'l31mco2i',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3a8vxf4: {
        id: 'l3a8vxf4',
        name: 'props.itemKey',
        props: {
          label: 'itemKey',
        },
        title: 'itemKey',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3wrxv0g: {
        id: 'l3wrxv0g',
        name: 'l3wrxv0h',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3wrxv0k', 'l31m8af5', 'l3x1ivd5'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wrxv0k: {
        id: 'l3wrxv0k',
        name: 'props.itemIcon',
        props: {
          options: [
            {
              key: '',
              text: 'Не выбрано',
            },
            {
              key: 'Add',
              text: 'Add',
            },
            {
              key: 'Delete',
              text: 'Delete',
            },
            {
              key: 'AddPerson',
              text: 'AddPerson',
            },
            {
              key: 'Save',
              text: 'Save',
            },
            {
              key: 'Previous',
              text: 'Previous',
            },
            {
              key: 'Next',
              text: 'Next',
            },
            {
              key: 'Upload',
              text: 'Upload',
            },
            {
              key: 'DownloadDocument',
              text: 'DownloadDocument',
            },
            {
              key: 'BulkUpload',
              text: 'BulkUpload',
            },
            {
              key: 'DependencyAdd',
              text: 'DependencyAdd',
            },
            {
              key: 'DependencyRemove',
              text: 'DependencyRemove',
            },
            {
              key: 'AlertSettings',
              text: 'AlertSettings',
            },
            {
              key: 'ExcelDocument',
              text: 'ExcelDocument',
            },
            {
              key: 'Search',
              text: 'Search',
            },
          ],
          placeholder: 'Выбрать ',
          defaultSelectedKey: 'AlertSettings',
        },
        title: 'props..itemIcon',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3wx5w56: {
        id: 'l3wx5w56',
        name: 'l3wx5w57',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l31mco2i', 'l3a8vxf4', 'l31fv66b', 'l31fvs7n', 'l31i2b6u'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wx6bg9: {
        id: 'l3wx6bg9',
        name: 'l3wx6bga',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wx6kgi: {
        id: 'l3wx6kgi',
        name: 'l3wx6kgj',
        props: {
          label: 'IconName',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3x1ivd5: {
        id: 'l3x1ivd5',
        name: 'link',
        props: {
          href: 'https://developer.microsoft.com/en-us/fluentui#/styles/web/icons',
          target: '_blank',
          children: ['Fluent UI Icons'],
          underline: true,
        },
        title: 'Link',
        compSchemaId: 'fc400911-79cc-4387-a1da-72a2058eb29f',
      },
    },
  },
  'f60c10fb-7b5a-4be0-abf5-8fe53bd8bb7e': {
    id: 'f60c10fb-7b5a-4be0-abf5-8fe53bd8bb7e',
    title: 'KRIobs_demo',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'hello',
        props: {
          style: {
            maxWidth: '900px',
            minWidth: '900px',
          },
          tokens: {
            padding: '20px',
          },
        },
        title: 'stackRoot',
        children: ['l347y8p3', 'l39vqqlc', 'l348nixt', 'l34562ah', 'l345efif', 'l3458hf1'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l31ftonj: {
        id: 'l31ftonj',
        name: 'l31ftonk',
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31ftpa6: {
        id: 'l31ftpa6',
        name: 'l31ftpa7',
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31icz1a: {
        id: 'l31icz1a',
        name: 'l31icz1b',
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l31k7y0x: {
        id: 'l31k7y0x',
        name: 'l31k7y0y',
        props: {
          label: 'Label3',
          headerText: 'HeaderText3',
        },
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31li3g9: {
        id: 'l31li3g9',
        name: 'l31li3ga',
        props: {
          label: 'Краткое описание',
        },
        title: 'Description',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31li3gb: {
        id: 'l31li3gb',
        name: 'l31li3gc',
        props: {
          label: 'Название',
        },
        title: 'Name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31mltxm: {
        id: 'l31mltxm',
        name: 'l31mltxn',
        props: {
          tokens: {
            padding: '20px',
          },
        },
        title: 'StackRoot',
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32mqp7s: {
        id: 'l32mqp7s',
        name: 'l32mqp7t',
        props: {
          label: 'Pivot',
          linkSize: 'normal',
          ariaLabel: 'aria-label',
          linkFormat: 'links',
          overflowBehavior: 'menu',
          overflowAriaLabel: 'more items',
        },
        title: 'Pivot',
        children: ['l32mrboa', 'l32n0c6p', 'l3cwg054', 'l34ivhua'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l32mrboa: {
        id: 'l32mrboa',
        name: 'mainTab',
        props: {
          headerText: 'Сведения',
        },
        title: 'MainTab',
        children: ['l345cifk'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l32n0c6p: {
        id: 'l32n0c6p',
        name: 'recentObservations',
        props: {
          label: 'DefaultLabel',
          headerText: 'Предыдущие значения КИР',
        },
        title: 'RecentObservations',
        children: ['l38hte1r'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l32uu7qw: {
        id: 'l32uu7qw',
        name: 'name1',
        props: {
          value: 'Текст',
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34562ah: {
        id: 'l34562ah',
        name: 'l34562ai',
        props: {
          tokens: {
            padding: '0px',
          },
          horizontal: false,
        },
        title: 'HeadStack',
        children: ['l34c8zba'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3458hf1: {
        id: 'l3458hf1',
        name: 'l3458hf2',
        props: {
          tokens: {
            padding: '0 0 0',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l32mqp7s'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l345cifk: {
        id: 'l345cifk',
        name: 'mainTabStack',
        props: {
          tokens: {
            padding: '16px 10px 0',
            childrenGap: '24px',
          },
          horizontal: true,
        },
        title: 'MainTabStack',
        children: ['l34gesfh', 'l3cqyhlq'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l345efif: {
        id: 'l345efif',
        name: 'l345efig',
        props: {
          tokens: {
            padding: '0 0 16px',
          },
        },
        title: 'Stack',
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l345emub: {
        id: 'l345emub',
        name: 'l345emuc',
        props: {
          tokens: {
            padding: '5px',
          },
        },
        title: 'Stack',
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l347an6d: {
        id: 'l347an6d',
        name: 'l347an6e',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l347an6f: {
        id: 'l347an6f',
        name: 'l347an6g',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l347ao4r: {
        id: 'l347ao4r',
        name: 'l347ao4s',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l347ao4t: {
        id: 'l347ao4t',
        name: 'l347ao4u',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l347y8p3: {
        id: 'l347y8p3',
        name: 'l347y8p4',
        props: {
          tokens: {
            padding: '0 0 16px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3cp2gb1', 'l3d2xg4z'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3483q02: {
        id: 'l3483q02',
        name: 'l3483q03',
        props: {
          value: '123',
          chidren: [null],
          variant: 'mediumPlus',
          children: ['Инцидент'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l348g0nh: {
        id: 'l348g0nh',
        name: 'l348g0ni',
        props: {
          tokens: {
            padding: '5px',
          },
        },
        title: 'Stack',
        children: ['l348cmkn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348g0nj: {
        id: 'l348g0nj',
        name: 'l348g0nk',
        props: {
          tokens: {
            padding: '0px',
          },
        },
        title: 'Stack',
        children: ['l3481ar4'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348nixt: {
        id: 'l348nixt',
        name: 'l348nixu',
        props: {
          tokens: {
            padding: '0 0 16px',
            childrenGap: '16px',
          },
          horizontal: true,
        },
        title: 'ActivityStack',
        children: ['l34bua8i'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348t3wu: {
        id: 'l348t3wu',
        name: 'incidentStatus',
        props: {
          variant: 'medium',
          children: ['Создание инцидента'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34bua8i: {
        id: 'l34bua8i',
        name: 'statusCd',
        props: {
          label: 'Статус',
          options: [
            {
              key: 'create',
              text: 'Выявлен',
            },
            {
              key: 'approval',
              text: 'На согласовании',
            },
            {
              key: 'approved',
              text: 'Согласован',
            },
            {
              key: 'irrelevant',
              text: 'Признан неактуальным',
            },
            {
              key: 'cancelled',
              text: 'Не подано на утверждение',
            },
          ],
          disabled: true,
          placeholder: 'Выберите значение',
        },
        title: 'Dropdown',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'create',
      },
      l34c8zba: {
        id: 'l34c8zba',
        name: 'l34c8zbb',
        props: {
          tokens: {
            padding: '0 0 16px',
            childrenGap: '16px',
          },
        },
        title: 'LocationStack',
        children: ['l34cazll', 'l34cbp5y', 'l34cboq5', 'l34cbo46', 'l34cgvni', 'l34ci1ur'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34cazll: {
        id: 'l34cazll',
        name: 'managementOrg',
        props: {
          label: 'managementOrg',
          variant: 'medium',
          children: ['Орг. структура: Банк > Головной офис > Отделение №1234'],
        },
        title: 'managementOrg',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cbo46: {
        id: 'l34cbo46',
        name: 'financialStatementItem',
        props: {
          label: 'financialStatementItem',
          variant: 'medium',
          children: ['Источник ОР: Недостатки процессов'],
        },
        title: 'financialStatementItem',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cboq5: {
        id: 'l34cboq5',
        name: 'cause',
        props: {
          label: 'cause',
          variant: 'medium',
          children: ['Вид нефинансового риска: Операционный'],
        },
        title: 'cause',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cbp5y: {
        id: 'l34cbp5y',
        name: 'riskCategory',
        props: {
          label: 'location',
          variant: 'medium',
          children: ['Тип события: Преднамеренные действия персонала '],
        },
        title: 'riskCategory',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cgvni: {
        id: 'l34cgvni',
        name: 'process',
        props: {
          label: 'process',
          variant: 'medium',
          children: ['Бизнес-процесс: Кредитование ФЛ'],
        },
        title: 'process',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34ci1ur: {
        id: 'l34ci1ur',
        name: 'businessLine',
        props: {
          label: 'businessLine',
          variant: 'medium',
          children: ['Направление деятельности: Управление активами'],
        },
        title: 'businessLine',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34gesfh: {
        id: 'l34gesfh',
        name: 'l34gesfi',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'LeftStack',
        children: ['l3cpqmsg', 'l3cpqmsi', 'l3cpqmsk', 'l3d1pdxe', 'l3nkooms'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34ivhua: {
        id: 'l34ivhua',
        name: 'l34ivhub',
        props: {
          headerText: 'Администрирование',
        },
        title: 'Admin',
        children: ['l38x7n05', 'l34ivhuc', 'l34ivhue'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l34ivhuc: {
        id: 'l34ivhuc',
        name: 'l34ivhud',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34ivhue: {
        id: 'l34ivhue',
        name: 'l34ivhuf',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j29ci: {
        id: 'l34j29ci',
        name: 'l34j29cj',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34j29ck: {
        id: 'l34j29ck',
        name: 'l34j29cl',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j2mm4: {
        id: 'l34j2mm4',
        name: 'l34j2mm5',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34j2mm6: {
        id: 'l34j2mm6',
        name: 'l34j2mm7',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j9za6: {
        id: 'l34j9za6',
        name: 'l34j9za7',
        props: {
          tokens: {
            padding: '5px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l34gesfh', 'l345h991'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34ja18r: {
        id: 'l34ja18r',
        name: 'l34ja18s',
        props: {
          tokens: {
            padding: '5px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l34gesfh', 'l345h991'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38hhgd5: {
        id: 'l38hhgd5',
        name: 'kri_owner',
        props: {
          items: [
            {
              id: '10001',
              max: '10',
              date: '12/01/21',
              score: '8',
              nScore: '8',
              period: 'П1 февраль 2021',
              status: 'Завершен',
            },
            {
              id: '10002',
              max: '10',
              date: '14/03/21',
              score: '7',
              nScore: '7',
              period: 'П1 март 2021',
              status: 'Завершен',
            },
          ],
          label: 'Владелец',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 40,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'date',
              name: 'Дата отчета',
              text: 'date',
              maxWidth: 80,
              minWidth: 80,
              fieldName: 'date',
              isResizable: 'true',
            },
            {
              key: 'period',
              name: 'Период оценки',
              text: 'period',
              maxWidth: 105,
              minWidth: 105,
              fieldName: 'period',
              isResizable: 'true',
            },
            {
              key: 'max',
              name: 'Верхнее предельное значение',
              text: 'max',
              maxWidth: 205,
              minWidth: 205,
              fieldName: 'max',
              isResizable: 'true',
            },
            {
              key: 'score',
              name: 'Балл',
              text: 'score',
              maxWidth: 50,
              minWidth: 50,
              fieldName: 'score',
              isResizable: 'true',
            },
            {
              key: 'nScore',
              name: 'Нормированный балл',
              text: 'nScore',
              maxWidth: 150,
              minWidth: 150,
              fieldName: 'nScore',
              isResizable: 'true',
            },
            {
              key: 'status',
              name: 'Статус',
              text: 'status',
              maxWidth: 50,
              minWidth: 50,
              fieldName: 'status',
              isResizable: 'true',
            },
          ],
          selectionMode: 0,
        },
        title: 'kri_owner',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l38hoyl2: {
        id: 'l38hoyl2',
        name: 'l38hoyl3',
        props: {
          children: ['Предыдущие значения КИР'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l38hte1r: {
        id: 'l38hte1r',
        name: 'l38hte1s',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '16px 10px 0',
          },
        },
        title: 'Stack',
        children: ['l38l3ltb', 'l38sasah'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38l3ltb: {
        id: 'l38l3ltb',
        name: 'l38l3ltc',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l38hoyl2', 'l3cwmh19'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38sasah: {
        id: 'l38sasah',
        name: 'l38sasai',
        props: {
          tokens: {
            padding: '8px 8px 0',
          },
        },
        title: 'Stack',
        children: ['l38hhgd5'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38x7n05: {
        id: 'l38x7n05',
        name: 'sourceSystemCd',
        props: {
          label: 'Источник данных',
          options: [
            {
              key: 'GRC',
              text: 'SAS Risk Governance And Compliance Manager',
            },
            {
              key: 'EXT',
              text: 'Интеграция из АС',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'sourceSystemCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'GRC',
      },
      l39vqqlc: {
        id: 'l39vqqlc',
        name: 'l39vqqld',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '50%',
            childrenGap: '8px',
          },
        },
        title: 'Stack',
        children: ['l3coz9rg'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3coz9rg: {
        id: 'l3coz9rg',
        name: 'owner',
        props: {
          label: 'Владелец',
          disabled: true,
          underlined: false,
        },
        title: 'owner',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'Ответственный',
      },
      l3cp2gb1: {
        id: 'l3cp2gb1',
        name: 'l3cp2gb2',
        props: {
          value: '123',
          chidren: [null],
          variant: 'xxLarge',
          children: ['Значение КИР'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3cpqmsg: {
        id: 'l3cpqmsg',
        name: 'custObjDesc',
        props: {
          label: 'Описание',
          disabled: false,
          multiline: true,
          underlined: false,
        },
        title: 'custObjDesc',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'Количество жалоб',
      },
      l3cpqmsi: {
        id: 'l3cpqmsi',
        name: 'helpTxt',
        props: {
          label: 'Вспомогательная информация',
          disabled: false,
          multiline: true,
          underlined: false,
        },
        title: 'helpTxt',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3cpqmsk: {
        id: 'l3cpqmsk',
        name: 'custObjId',
        props: {
          label: 'Идентификатор значения КИР',
          disabled: false,
          borderless: false,
          underlined: false,
        },
        title: 'custObjId',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: '10000',
      },
      l3cpqmso: {
        id: 'l3cpqmso',
        name: 'sourceSystem',
        props: {
          label: 'Иcходная система',
          disabled: false,
          underlined: false,
        },
        title: 'sourceSystem',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3cpqmsq: {
        id: 'l3cpqmsq',
        name: 'assessmentPeriodId',
        props: {
          label: 'Период оценки (месяц)',
          disabled: true,
          borderless: false,
          underlined: false,
        },
        title: 'assessmentPeriodId',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'Февраль 2022',
      },
      l3cpqmss: {
        id: 'l3cpqmss',
        name: 'assessmrntPerDsc',
        props: {
          label: 'Период оценки (описание)',
          disabled: false,
          borderless: false,
          underlined: false,
        },
        title: 'assessmrntPerDsc',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3cqyhlq: {
        id: 'l3cqyhlq',
        name: 'l3cqyhlr',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'LeftStack',
        children: ['l3cqyhm6', 'l3cqyhm8', 'l3cqzsxy'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cqyhm6: {
        id: 'l3cqyhm6',
        name: 'score',
        props: {
          label: 'Балл',
          placeholder: 'Введите значение',
          defaultValue: '20',
        },
        title: 'score',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3cqyhm8: {
        id: 'l3cqyhm8',
        name: 'normalizedScore',
        props: {
          label: 'Нормированный балл',
          placeholder: 'Введите значение',
          defaultValue: '0.6',
        },
        title: 'normalizedScore',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3cqzsxy: {
        id: 'l3cqzsxy',
        name: 'justification',
        props: {
          label: 'Обоснование',
          disabled: false,
          multiline: true,
          underlined: false,
        },
        title: 'justification',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'J',
      },
      l3cwg054: {
        id: 'l3cwg054',
        name: 'AttachmentTab',
        props: {
          label: 'Вложения',
          headerText: 'Вложения',
        },
        title: 'AttachmentTab',
        children: ['l3cwj6zq', 'l3cwi8b3'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3cwi8b3: {
        id: 'l3cwi8b3',
        name: 'attachmentsTable',
        props: {
          items: [
            {
              id: '10000',
              name: 'Описание.docx',
              type: 'docx',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Вложение с описанием инцидента',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 100,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'type',
              name: 'Тип',
              text: 'type',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'type',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
          selectionMode: 0,
        },
        title: 'AttachmentsTable',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3cwiew9: {
        id: 'l3cwiew9',
        name: 'l3cwiewa',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3cwiewb', 'l3cwiewd', 'l3cwiewf', 'l3cwiewh'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cwiewb: {
        id: 'l3cwiewb',
        name: 'l3cwiewc',
        props: {
          checked: false,
          disabled: false,
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'Upload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3cwiewd: {
        id: 'l3cwiewd',
        name: 'l3cwiewe',
        props: {
          iconProps: {
            iconName: 'BulkUpload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3cwiewf: {
        id: 'l3cwiewf',
        name: 'l3cwiewg',
        props: {
          iconProps: {
            iconName: 'DownloadDocument',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3cwiewh: {
        id: 'l3cwiewh',
        name: 'l3cwiewi',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3cwissu: {
        id: 'l3cwissu',
        name: 'l3cwissv',
        props: {
          children: ['Вложения'],
          disabled: false,
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3cwj6zq: {
        id: 'l3cwj6zq',
        name: 'l3cwj6zr',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3cwissu', 'l3cwiew9'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cwmh19: {
        id: 'l3cwmh19',
        name: 'l3cwmh1a',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3cwmh1b', 'l3cwmh1d', 'l3cwmh1f', 'l3cwmh1h'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cwmh1b: {
        id: 'l3cwmh1b',
        name: 'l3cwmh1c',
        props: {
          ariaLabel: 'Создать объект',
          iconProps: {
            iconName: 'Add',
          },
        },
        title: 'Add',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3cwmh1d: {
        id: 'l3cwmh1d',
        name: 'l3cwmh1e',
        props: {
          ariaLabel: 'Связать объект',
          iconProps: {
            iconName: 'DependencyAdd',
          },
        },
        title: 'DependencyAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3cwmh1f: {
        id: 'l3cwmh1f',
        name: 'l3cwmh1g',
        props: {
          ariaLabel: 'Удалить связь с объектом',
          iconProps: {
            iconName: 'DependencyRemove',
          },
        },
        title: 'DependencyRemove',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3cwmh1h: {
        id: 'l3cwmh1h',
        name: 'l3cwmh1i',
        props: {
          ariaLabel: 'Удалить объект',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3d1pdxe: {
        id: 'l3d1pdxe',
        name: 'indicatorClass',
        props: {
          label: 'Признак индикатора',
          options: [
            {
              key: 'KRI',
              text: 'КИР',
            },
            {
              key: 'KCI',
              text: 'КИК',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'indicatorClass',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'KRI',
      },
      l3d2xg4z: {
        id: 'l3d2xg4z',
        name: 'l3d2xg50',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3d2xg51', 'l3d2xg53', 'l3d2xg55'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3d2xg51: {
        id: 'l3d2xg51',
        name: 'l3d2xg52',
        props: {
          type: 'submit',
          children: 'Сохранить',
          iconProps: {
            iconName: 'Save',
          },
        },
        title: 'Save',
        value: 'Сохранить',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3d2xg53: {
        id: 'l3d2xg53',
        name: 'l3d2xg54',
        props: {
          children: 'Предыдущий шаг',
          disabled: true,
          iconProps: {
            iconName: 'Previous',
          },
        },
        title: 'Previous',
        value: 'Previous',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3d2xg55: {
        id: 'l3d2xg55',
        name: 'l3d2xg56',
        props: {
          children: 'Следующий шаг',
          iconProps: {
            iconName: 'Next',
          },
        },
        title: 'Next',
        value: 'Next',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3nkooms: {
        id: 'l3nkooms',
        name: 'l3nkoomt',
        props: {
          labelDown: 'Дополнительные сведения',
          isExpanded: false,
        },
        title: 'Collapse',
        children: ['l3cpqmso', 'l3cpqmsq', 'l3cpqmss'],
        compSchemaId: '0a4d5bbc-a6c7-487a-88cc-af71aece38b7',
      },
      '43fa6880ds24': {
        id: '43fa6880ds24',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  '403fd9a0-7bc8-4b5e-91bf-a442d1eba806': {
    id: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
    title: 'Text',
    componentName: 'Text',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: ['l3wxn3m7', 'l3wxnan9', 'l3wxnql7', 'l3wxnxq5', 'l3wxodf4', 'l3wxofx1'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32urk0v: {
        id: 'l32urk0v',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32urqxr: {
        id: 'l32urqxr',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l347hgee: {
        id: 'l347hgee',
        name: 'props.children[0]',
        props: {
          label: 'text:',
          multiline: true,
          underlined: false,
        },
        title: 'text',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l347pg55: {
        id: 'l347pg55',
        name: 'props.variant',
        props: {
          label: 'variant',
          options: [
            {
              key: '',
              text: 'Не выбрано',
            },
            {
              key: 'tiny',
              text: 'tiny',
            },
            {
              key: 'xSmall',
              text: 'xSmall',
            },
            {
              key: 'small',
              text: 'small',
            },
            {
              key: 'smallPlus',
              text: 'smallPlus',
            },
            {
              key: 'medium',
              text: 'medium',
            },
            {
              key: 'mediumPlus',
              text: 'mediumPlus',
            },
            {
              key: 'large',
              text: 'large',
            },
            {
              key: 'xLarge',
              text: 'xLarge',
            },
            {
              key: 'xxLarge',
              text: 'xxLarge',
            },
            {
              key: 'mega',
              text: 'mega',
            },
          ],
          required: true,
          placeholder: 'Выберите значение',
        },
        title: 'variant',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l34843yu: {
        id: 'l34843yu',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3a49mr7: {
        id: 'l3a49mr7',
        name: 'injections[0].from',
        props: {
          label: 'injection from',
        },
        title: 'injection from',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3a49mr9: {
        id: 'l3a49mr9',
        name: 'injections[0].to',
        props: {
          label: 'injection to',
        },
        title: 'injection to',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3cr4fqm: {
        id: 'l3cr4fqm',
        name: 'props.block',
        props: {
          label: 'block',
          boxSide: 'start',
        },
        title: 'block',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3cr4o7y: {
        id: 'l3cr4o7y',
        name: 'props.nowrap',
        props: {
          label: 'nowrap',
          boxSide: 'start',
        },
        title: 'nowrap',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3wxn3m7: {
        id: 'l3wxn3m7',
        name: 'l3wxn3m8',
        props: {
          label: 'Main',
          padding: '10px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxnan9: {
        id: 'l3wxnan9',
        name: 'l3wxnana',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l32urk0v', 'l34843yu', 'l32urqxr', 'l347hgee'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxnql7: {
        id: 'l3wxnql7',
        name: 'l3wxnql8',
        props: {
          label: 'Props',
          padding: '10px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxnxq5: {
        id: 'l3wxnxq5',
        name: 'l3wxnxq6',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l347pg55', 'l3cr4fqm', 'l3cr4o7y'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxodf4: {
        id: 'l3wxodf4',
        name: 'l3wxodf5',
        props: {
          label: 'Injections',
          padding: '10px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxofx1: {
        id: 'l3wxofx1',
        name: 'l3wxofx2',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3a49mr7', 'l3a49mr9'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  '9a621490-8de6-4fec-a2d0-131c0ec98e73': {
    id: '9a621490-8de6-4fec-a2d0-131c0ec98e73',
    title: 'KRITableDemo',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          style: {
            maxWidth: '800px',
            minWidth: '800px',
          },
          tokens: {
            padding: '20px',
          },
        },
        title: 'stackRoot',
        children: ['l3cnw5hc', 'l3bnos5i'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3bnos5i: {
        id: 'l3bnos5i',
        name: 'l3bnos5j',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3cphm8j', 'l3d1cufg'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bnos5k: {
        id: 'l3bnos5k',
        name: 'l3bnos5l',
        props: {
          children: ['КИР'],
          disabled: false,
          required: false,
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3bnos5m: {
        id: 'l3bnos5m',
        name: 'table',
        props: {
          items: [
            {
              id: '10000',
              name: 'Тестовый КИР 1',
              owner: 'Ответственный',
              rangeMax: '8',
              rangeMin: '2',
              activeFlg: 'Да',
              createdDt: '02/05/21',
            },
            {
              id: '10001',
              name: 'Тестовый КИР 2',
              owner: 'Ответственный',
              rangeMax: '100',
              rangeMin: '0',
              activeFlg: 'Да',
              createdDt: '22/03/21',
            },
            {
              id: '10002',
              name: 'Тестовый КИР 3',
              owner: 'Ответственный',
              rangeMax: '100',
              rangeMin: '0',
              activeFlg: 'Да',
              createdDt: '22/03/21',
            },
            {
              id: '10003',
              name: 'КИР Демо',
              owner: 'Ответственный',
              rangeMax: '50',
              rangeMin: '1',
              activeFlg: 'Да',
              createdDt: '25/02/21',
            },
            {
              id: '10004',
              name: 'КИР',
              owner: 'Ответственный',
              rangeMax: '100',
              rangeMin: '0',
              activeFlg: 'Нет',
              createdDt: '02/02/21',
            },
          ],
          label: 'Финансовые последствия',
          columns: [
            {
              key: 'id',
              name: 'ID КИР',
              text: 'id',
              minWidth: 50,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Имя КИР',
              text: 'name',
              minWidth: 100,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'owner',
              name: 'Владелец',
              text: 'owner',
              minWidth: 100,
              fieldName: 'owner',
              isResizable: 'true',
            },
            {
              key: 'rangeMax',
              name: 'Максимальное значение',
              text: 'rangeMax',
              minWidth: 50,
              fieldName: 'rangeMax',
              isResizable: 'true',
            },
            {
              key: 'rangeMin',
              name: 'Минимальное значение',
              text: 'rangeMin',
              minWidth: 100,
              fieldName: 'rangeMin',
              isResizable: 'true',
            },
            {
              key: 'activeFlg',
              name: 'Активен?',
              text: 'activeFlg',
              minWidth: 50,
              fieldName: 'activeFlg',
              isResizable: 'true',
            },
            {
              key: 'createdDt',
              name: 'Дата создания',
              text: 'createdDt',
              minWidth: 100,
              fieldName: 'createdDt',
              isResizable: 'true',
            },
          ],
          selectionMode: 0,
          columnReorderOptions: [
            {
              frozenColumnCountFromEnd: 1,
              frozenColumnCountFromStart: 2,
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3cnrtmf: {
        id: 'l3cnrtmf',
        name: 'l3cnrtmg',
        props: {
          underlined: false,
          placeholder: 'Поиск',
        },
        title: 'SearchBox',
        compSchemaId: 'f6f385f7-74db-438b-9981-bd261f8db0fc',
      },
      l3cnw5hc: {
        id: 'l3cnw5hc',
        name: 'l3cnw5hd',
        props: {
          tokens: {
            padding: '8px 8px 0',
            childrenGap: '10px',
          },
          horizontal: true,
        },
        title: 'SearchStack',
        children: ['l3cnw9zm', 'l3cnwyp8'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnw9zm: {
        id: 'l3cnw9zm',
        name: 'l3cnw9zn',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3cnrtmf'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnwyp8: {
        id: 'l3cnwyp8',
        name: 'l3cnwyp9',
        props: {
          style: {
            minWidth: '30%',
          },
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3cnxlxc'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnxlxc: {
        id: 'l3cnxlxc',
        name: 'searchDropdown',
        props: {
          options: [
            {
              key: 'id',
              text: 'ID КИР',
            },
            {
              key: 'name',
              text: 'Имя КИР',
            },
            {
              key: 'owner',
              text: 'Владелец КИР',
            },
            {
              key: 'activeFlg',
              text: 'Активен?',
            },
            {
              key: 'createdDt',
              text: 'Дата создания индикатора',
            },
            {
              key: 'rangeMin',
              text: 'Минимальное значение',
            },
            {
              key: 'rangeMax',
              text: 'Максимальное значение',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'searchDropdown',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: '1',
      },
      l3cphm8j: {
        id: 'l3cphm8j',
        name: 'l3cphm8k',
        props: {
          tokens: {
            padding: '8px 0px 0px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3cphzjm', 'l3cpi7mu'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cphzjm: {
        id: 'l3cphzjm',
        name: 'l3cphzjn',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3bnos5k'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cpi7mu: {
        id: 'l3cpi7mu',
        name: 'l3cpi7mv',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3cpij25', 'l3cwkr50', 'l3cq03wn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cpij25: {
        id: 'l3cpij25',
        name: 'l3cpij26',
        props: {
          children: 'Создать',
          iconProps: {
            iconName: 'Add',
          },
          allowDisabledFocus: false,
        },
        title: 'ActionButton',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3cq03wn: {
        id: 'l3cq03wn',
        name: 'l3cq03wo',
        props: {
          children: 'Удалить',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'ActionButton',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3cwkr50: {
        id: 'l3cwkr50',
        name: 'l3cwkr51',
        props: {
          children: 'Экспорт в Excel',
          iconProps: {
            iconName: 'ExcelDocument',
          },
        },
        title: 'ActionButton',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3d1cufg: {
        id: 'l3d1cufg',
        name: 'l3d1cufh',
        props: {
          tokens: {
            padding: '0',
          },
          disableShrink: false,
        },
        title: 'Stack',
        children: ['l3bnos5m'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  'b5ce0271-1d3e-49c1-9a37-ecdf62d674b7': {
    id: 'b5ce0271-1d3e-49c1-9a37-ecdf62d674b7',
    title: 'Name',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        title: 'stackRoot',
        children: ['l3x5ph1l', 'l3x5q7na'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3x5ph1l: {
        id: 'l3x5ph1l',
        name: 'l3x5ph1m',
        props: {
          label: '123',
          options: [
            {
              key: 'OBJ1',
              text: 'Кредитный риск',
            },
            {
              key: 'OBJ2',
              text: 'Рыночный риск',
            },
            {
              key: 'OBJ3',
              text: 'Риск ликвидности',
            },
            {
              key: 'OBJ4',
              text: 'Стратегический риск',
            },
            {
              key: 'OBJ5',
              text: 'Репутационный риск',
            },
            {
              key: 'OBJ6',
              text: 'Регуляторный риск',
            },
            {
              key: 'OBJ7',
              text: 'Другое',
            },
          ],
          childrenGap: '2',
        },
        title: 'MultiCheckbox',
        compSchemaId: '5fb7aae3-7a53-4573-9641-2beaebe7b836',
      },
      l3x5q7na: {
        id: 'l3x5q7na',
        name: 'l3x5q7nb',
        props: {
          type: 'submit',
        },
        title: 'ActionButton',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
    },
  },
  'e351452f-c913-4de6-ab79-b9ce3a0c309e': {
    id: 'e351452f-c913-4de6-ab79-b9ce3a0c309e',
    title: 'FinancialEffectTableDemo',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          style: {
            maxWidth: '900px',
            minWidth: '900px',
          },
          tokens: {
            padding: '20px',
          },
          horizontal: false,
        },
        title: 'stackRoot',
        children: ['l3cnw5hc', 'l3bnos5i'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3bnos5i: {
        id: 'l3bnos5i',
        name: 'l3bnos5j',
        props: {
          tokens: {
            padding: '0px 0px 0px',
            childrenGap: '0px',
          },
        },
        title: 'TableStack',
        children: ['l3cphm8j', 'l3d1cufg'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bnos5k: {
        id: 'l3bnos5k',
        name: 'TableLabel',
        props: {
          children: ['Финансовые последствия'],
          disabled: false,
          required: false,
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3bnos5m: {
        id: 'l3bnos5m',
        name: 'table',
        props: {
          items: [
            {
              id: '10000',
              name: 'Недостача в банкомате №11111',
              type: 'customObject87',
              lossAmt: 100000,
              createdAt: '01.05.2022',
              baseLossAmt: 100000,
              custObjDesc: 'Описание',
              lossCurrencyCd: 'RUB',
            },
            {
              id: '10001',
              name: 'Недостача в банкомате №11111',
              type: 'customObject87',
              lossAmt: 100000,
              createdAt: '01.05.2022',
              baseLossAmt: 100000,
              custObjDesc: 'Описание',
              lossCurrencyCd: 'RUB',
            },
          ],
          label: 'Финансовые последствия',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              minWidth: 50,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              minWidth: 100,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'lossAmt',
              name: 'Сумма потерь',
              text: 'lossAmt',
              minWidth: 100,
              fieldName: 'lossAmt',
              isResizable: 'true',
            },
            {
              key: 'currency',
              name: 'Валюта',
              text: 'currency',
              minWidth: 50,
              fieldName: 'lossCurrencyCd',
              isResizable: 'true',
            },
            {
              key: 'createdAt',
              name: 'Дата создания',
              text: 'createdAt',
              minWidth: 100,
              fieldName: 'createdAt',
              isResizable: 'true',
            },
            {
              key: 'custObjDesc',
              name: 'Описание',
              text: 'custObjDesc',
              minWidth: 100,
              fieldName: 'custObjDesc',
              isResizable: 'true',
            },
          ],
          compact: true,
          selectionMode: 2,
          columnReorderOptions: [
            {
              frozenColumnCountFromEnd: 1,
              frozenColumnCountFromStart: 2,
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3cnrtmf: {
        id: 'l3cnrtmf',
        name: 'l3cnrtmg',
        props: {
          iconProps: {
            iconName: 'Search',
          },
          underlined: false,
          placeholder: 'Поиск',
        },
        title: 'SearchBox',
        compSchemaId: 'f6f385f7-74db-438b-9981-bd261f8db0fc',
      },
      l3cnw5hc: {
        id: 'l3cnw5hc',
        name: 'l3cnw5hd',
        props: {
          tokens: {
            padding: '8px 8px 0',
            childrenGap: '10px',
          },
          horizontal: true,
        },
        title: 'SearchStack',
        children: ['l3cnw9zm', 'l3cnwyp8'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnw9zm: {
        id: 'l3cnw9zm',
        name: 'l3cnw9zn',
        props: {
          style: {
            minWidth: '300px',
          },
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3cnrtmf'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnwyp8: {
        id: 'l3cnwyp8',
        name: 'l3cnwyp9',
        props: {
          style: {
            minWidth: '30%',
          },
          tokens: {
            padding: '0px 0px 0px',
          },
          disableShrink: false,
        },
        title: 'Stack',
        children: ['l3cnxlxc'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnxlxc: {
        id: 'l3cnxlxc',
        name: 'searchDropdown',
        props: {
          options: [
            {
              key: '1',
              text: 'Идентификатор',
            },
            {
              key: 'text',
              text: 'Название',
            },
            {
              key: 'lossAmt',
              text: 'Сумма потерь',
            },
            {
              key: 'currency',
              text: 'Валюта',
            },
            {
              key: 'createdAt',
              text: 'Дата создания',
            },
            {
              key: 'custObjDesc',
              text: 'Описание',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'searchDropdown',
        injections: [{}],
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: '1',
      },
      l3cphm8j: {
        id: 'l3cphm8j',
        name: 'l3cphm8k',
        props: {
          tokens: {
            padding: '8px 0px 0px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3cphzjm', 'l3cpi7mu'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cphzjm: {
        id: 'l3cphzjm',
        name: 'l3cphzjn',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3bnos5k'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cpi7mu: {
        id: 'l3cpi7mu',
        name: 'l3cpi7mv',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3cpij25', 'l3cwkr50', 'l3cq03wn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cpij25: {
        id: 'l3cpij25',
        name: 'l3cpij26',
        props: {
          type: 'submit',
          children: 'Создать',
          iconProps: {
            iconName: 'Add',
          },
          allowDisabledFocus: false,
        },
        title: 'Add',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3cq03wn: {
        id: 'l3cq03wn',
        name: 'l3cq03wo',
        props: {
          children: 'Удалить',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3cwkr50: {
        id: 'l3cwkr50',
        name: 'l3cwkr51',
        props: {
          children: 'Экспорт в Excel',
          iconProps: {
            iconName: 'ExcelDocument',
          },
        },
        title: 'ExcelDocument',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3d1cufg: {
        id: 'l3d1cufg',
        name: 'l3d1cufh',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
          disableShrink: false,
        },
        title: 'Stack',
        children: ['l3bnos5m'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  '710504d8-644e-482e-afb9-674a243941ff': {
    id: '710504d8-644e-482e-afb9-674a243941ff',
    title: 'NonFinancialEffectTableDemo',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          style: {
            maxWidth: '900px',
            minWidth: '900px',
          },
          tokens: {
            padding: '20px',
          },
          horizontal: false,
        },
        title: 'stackRoot',
        children: ['l3cnw5hc', 'l3bnos5i'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3bnos5i: {
        id: 'l3bnos5i',
        name: 'l3bnos5j',
        props: {
          tokens: {
            padding: '0px 0px 0px',
            childrenGap: '0px',
          },
        },
        title: 'TableStack',
        children: ['l3cphm8j', 'l3d1cufg'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bnos5k: {
        id: 'l3bnos5k',
        name: 'TableLabel',
        props: {
          children: ['Нефинансовые последствия'],
          disabled: false,
          required: false,
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3bnos5m: {
        id: 'l3bnos5m',
        name: 'table',
        props: {
          items: [
            {
              id: '10000',
              name: 'Потеря репутации среди клиентов',
              type: 'customObject88',
              createdAt: '01.05.2022',
              custObjDesc: 'Описание',
            },
            {
              id: '10001',
              name: 'Публикации в СМИ',
              type: 'customObject88',
              createdAt: '01.05.2022',
              custObjDesc: 'Описание',
            },
          ],
          label: 'Финансовые последствия',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 50,
              minWidth: 50,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              minWidth: 100,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'createdAt',
              name: 'Дата создания',
              text: 'createdAt',
              minWidth: 100,
              fieldName: 'createdAt',
              isResizable: 'true',
            },
            {
              key: 'custObjDesc',
              name: 'Описание',
              text: 'custObjDesc',
              minWidth: 100,
              fieldName: 'custObjDesc',
              isResizable: 'true',
            },
          ],
          compact: true,
          selectionMode: 2,
          columnReorderOptions: [
            {
              frozenColumnCountFromEnd: 1,
              frozenColumnCountFromStart: 2,
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3cnrtmf: {
        id: 'l3cnrtmf',
        name: 'l3cnrtmg',
        props: {
          iconProps: {
            iconName: 'Search',
          },
          underlined: false,
          placeholder: 'Поиск',
        },
        title: 'SearchBox',
        compSchemaId: 'f6f385f7-74db-438b-9981-bd261f8db0fc',
      },
      l3cnw5hc: {
        id: 'l3cnw5hc',
        name: 'l3cnw5hd',
        props: {
          tokens: {
            padding: '8px 8px 0',
            childrenGap: '10px',
          },
          horizontal: true,
        },
        title: 'SearchStack',
        children: ['l3cnw9zm', 'l3cnwyp8'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnw9zm: {
        id: 'l3cnw9zm',
        name: 'l3cnw9zn',
        props: {
          style: {
            minWidth: '300px',
          },
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3cnrtmf'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnwyp8: {
        id: 'l3cnwyp8',
        name: 'l3cnwyp9',
        props: {
          style: {
            minWidth: '30%',
          },
          tokens: {
            padding: '0px 0px 0px',
          },
          disableShrink: false,
        },
        title: 'Stack',
        children: ['l3cnxlxc'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnxlxc: {
        id: 'l3cnxlxc',
        name: 'searchDropdown',
        props: {
          options: [
            {
              key: '1',
              text: 'Идентификатор',
            },
            {
              key: 'text',
              text: 'Название',
            },
            {
              key: 'lossAmt',
              text: 'Сумма потерь',
            },
            {
              key: 'currency',
              text: 'Валюта',
            },
            {
              key: 'createdAt',
              text: 'Дата создания',
            },
            {
              key: 'custObjDesc',
              text: 'Описание',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'searchDropdown',
        injections: [{}],
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: '1',
      },
      l3cphm8j: {
        id: 'l3cphm8j',
        name: 'l3cphm8k',
        props: {
          tokens: {
            padding: '8px 0px 0px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3cphzjm', 'l3cpi7mu'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cphzjm: {
        id: 'l3cphzjm',
        name: 'l3cphzjn',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3bnos5k'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cpi7mu: {
        id: 'l3cpi7mu',
        name: 'l3cpi7mv',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3cpij25', 'l3cwkr50', 'l3cq03wn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cpij25: {
        id: 'l3cpij25',
        name: 'l3cpij26',
        props: {
          type: 'submit',
          children: 'Создать',
          iconProps: {
            iconName: 'Add',
          },
          allowDisabledFocus: false,
        },
        title: 'Add',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3cq03wn: {
        id: 'l3cq03wn',
        name: 'l3cq03wo',
        props: {
          children: 'Удалить',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3cwkr50: {
        id: 'l3cwkr50',
        name: 'l3cwkr51',
        props: {
          children: 'Экспорт в Excel',
          iconProps: {
            iconName: 'ExcelDocument',
          },
        },
        title: 'ExcelDocument',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3d1cufg: {
        id: 'l3d1cufg',
        name: 'l3d1cufh',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
          disableShrink: false,
        },
        title: 'Stack',
        children: ['l3bnos5m'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  'cb4c3d8d-bd2a-4dd5-8bd7-b76d10e99a71': {
    id: 'cb4c3d8d-bd2a-4dd5-8bd7-b76d10e99a71',
    title: 'IncidentsTableDemo',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          style: {
            maxWidth: '1000px',
            minWidth: '1000px',
          },
          tokens: {
            padding: '20px',
          },
          horizontal: false,
        },
        title: 'stackRoot',
        children: ['l3cnw5hc', 'l3bnos5i'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3bnos5i: {
        id: 'l3bnos5i',
        name: 'l3bnos5j',
        props: {
          tokens: {
            padding: '0px 0px 0px',
            childrenGap: '0px',
          },
          disableShrink: true,
        },
        title: 'TableStack',
        children: ['l3cphm8j', 'l3d1cufg'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bnos5k: {
        id: 'l3bnos5k',
        name: 'TableLabel',
        props: {
          children: ['Инциденты'],
          disabled: false,
          required: false,
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3bnos5m: {
        id: 'l3bnos5m',
        name: 'table',
        props: {
          items: [
            {
              id: '10000',
              name: 'Инцидент ОР',
              type: 'customObject86',
              status: 'Создание инцидента',
              currency: 'RUB',
              createdAt: '01.05.2022',
              custObjDesc: 'Описание события ОР',
              potentialLossAmt: 1000000,
              validationStateCd: 'Подлежит обработке',
              basePotentialLossAmt: 1000000,
            },
            {
              id: '10001',
              name: 'Сбой IT-оборудования',
              type: 'customObject86',
              status: 'Согласование',
              currency: 'RUB',
              createdAt: '01.05.2022',
              custObjDesc: 'Описание',
              potentialLossAmt: 500000,
              validationStateCd: 'Подлежит обработке',
              basePotentialLossAmt: 500000,
            },
            {
              id: '10002',
              name: 'Недостача в банкомате №11111',
              type: 'customObject86',
              status: 'В работе',
              currency: 'RUB',
              createdAt: '01.05.2022',
              custObjDesc: 'Описание',
              potentialLossAmt: 100000,
              validationStateCd: 'В работе',
              basePotentialLossAmt: 100000,
            },
          ],
          label: 'Финансовые последствия',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              minWidth: 50,
              fieldName: 'id',
              isMultiline: false,
              isResizable: true,
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              minWidth: 100,
              fieldName: 'name',
              isMultiline: true,
              isResizable: true,
            },
            {
              key: 'potentialLossAmt',
              name: 'Потенциальная сумма потерь',
              text: 'potentialLossAmt',
              minWidth: 100,
              fieldName: 'potentialLossAmt',
              isMultiline: false,
              isResizable: true,
            },
            {
              key: 'currency',
              name: 'Валюта',
              text: 'currency',
              minWidth: 50,
              fieldName: 'currency',
              isMultiline: false,
              isResizable: true,
            },
            {
              key: 'createdAt',
              name: 'Дата создания',
              text: 'createdAt',
              minWidth: 100,
              fieldName: 'createdAt',
              isMultiline: false,
              isResizable: true,
            },
            {
              key: 'status',
              name: 'Статус',
              text: 'status',
              minWidth: 50,
              fieldName: 'status',
              isMultiline: true,
              isResizable: true,
            },
            {
              key: 'custObjDesc',
              name: 'Описание',
              text: 'custObjDesc',
              minWidth: 100,
              fieldName: 'custObjDesc',
              isMultiline: true,
              isResizable: true,
            },
            {
              key: 'validationStateCd',
              name: 'Активность',
              text: 'validationStateCd',
              minWidth: 100,
              fieldName: 'validationStateCd',
              isMultiline: true,
              isResizable: true,
            },
          ],
          compact: true,
          isFixed: true,
          constrainMode: 1,
          selectionMode: 2,
          columnReorderOptions: [
            {
              frozenColumnCountFromEnd: 1,
              frozenColumnCountFromStart: 2,
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3cnrtmf: {
        id: 'l3cnrtmf',
        name: 'l3cnrtmg',
        props: {
          iconProps: {
            iconName: 'Search',
          },
          underlined: false,
          placeholder: 'Поиск',
        },
        title: 'SearchBox',
        compSchemaId: 'f6f385f7-74db-438b-9981-bd261f8db0fc',
      },
      l3cnw5hc: {
        id: 'l3cnw5hc',
        name: 'l3cnw5hd',
        props: {
          tokens: {
            padding: '8px 8px 0',
            childrenGap: '10px',
          },
          horizontal: true,
        },
        title: 'SearchStack',
        children: ['l3cnw9zm', 'l3cnwyp8'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnw9zm: {
        id: 'l3cnw9zm',
        name: 'l3cnw9zn',
        props: {
          style: {
            minWidth: '300px',
          },
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3cnrtmf'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnwyp8: {
        id: 'l3cnwyp8',
        name: 'l3cnwyp9',
        props: {
          style: {
            minWidth: '30%',
          },
          tokens: {
            padding: '0px 0px 0px',
          },
          disableShrink: false,
        },
        title: 'Stack',
        children: ['l3cnxlxc'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cnxlxc: {
        id: 'l3cnxlxc',
        name: 'searchDropdown',
        props: {
          options: [
            {
              key: '1',
              text: 'Идентификатор',
            },
            {
              key: 'name',
              text: 'Название',
            },
            {
              key: 'potentialLossAmt',
              text: 'Потенциальная сумма потерь',
            },
            {
              key: 'currency',
              text: 'Валюта',
            },
            {
              key: 'createdAt',
              text: 'Дата создания',
            },
            {
              key: 'status',
              text: 'Статус',
            },
            {
              key: 'custObjDesc',
              text: 'Описание',
            },
            {
              key: 'validationStateCd',
              text: 'Активность',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'searchDropdown',
        injections: [{}],
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: '1',
      },
      l3cphm8j: {
        id: 'l3cphm8j',
        name: 'l3cphm8k',
        props: {
          tokens: {
            padding: '8px 0px 0px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3cphzjm', 'l3cpi7mu'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cphzjm: {
        id: 'l3cphzjm',
        name: 'l3cphzjn',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3bnos5k'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cpi7mu: {
        id: 'l3cpi7mu',
        name: 'l3cpi7mv',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3cpij25', 'l3cwkr50', 'l3cq03wn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cpij25: {
        id: 'l3cpij25',
        name: 'l3cpij26',
        props: {
          type: 'submit',
          children: 'Создать',
          iconProps: {
            iconName: 'Add',
          },
          allowDisabledFocus: false,
        },
        title: 'Add',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3cq03wn: {
        id: 'l3cq03wn',
        name: 'l3cq03wo',
        props: {
          children: 'Удалить',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3cwkr50: {
        id: 'l3cwkr50',
        name: 'l3cwkr51',
        props: {
          children: 'Экспорт в Excel',
          iconProps: {
            iconName: 'ExcelDocument',
          },
        },
        title: 'ExcelDocument',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3d1cufg: {
        id: 'l3d1cufg',
        name: 'l3d1cufh',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
          disableShrink: false,
        },
        title: 'Stack',
        children: ['l3bnos5m'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  'fc0872ac-b8ec-414f-9114-d61ae89c0a7d': {
    id: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
    title: 'IconButton',
    componentName: 'IconButton',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: ['l3ws5hyn', 'l3aardro', 'l3ws5phj', 'l3wy34pn', 'l3ws5vi6', 'l3wy26nn'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l38rka7x: {
        id: 'l38rka7x',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l38rkpvx: {
        id: 'l38rkpvx',
        name: 'props.ariaLabel',
        props: {
          label: 'ariaLabel',
        },
        title: 'ariaLabel',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l38rl5tc: {
        id: 'l38rl5tc',
        name: 'props.disabled',
        props: {
          label: 'disabled',
          boxSide: 'start',
        },
        title: 'disabled',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l38rlih0: {
        id: 'l38rlih0',
        name: 'props.checked',
        props: {
          label: 'checked',
          boxSide: 'start',
        },
        title: 'checked',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l38sfyke: {
        id: 'l38sfyke',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3aardro: {
        id: 'l3aardro',
        name: 'l3aardrp',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l38rka7x', 'l38sfyke', 'l38rkpvx'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3ws254n: {
        id: 'l3ws254n',
        name: 'l3ws254o',
        props: {
          ariaLabel: 'aria-label',
          linkFormat: 'links',
          overflowAriaLabel: 'more items',
        },
        title: 'Pivot',
        children: ['l3ws254p', 'l3ws254r'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l3ws254p: {
        id: 'l3ws254p',
        name: 'l3ws254q',
        props: {
          label: 'DefaultLabel',
          headerText: 'IconName',
        },
        title: 'PivotItem',
        children: ['l3ws254t'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3ws254r: {
        id: 'l3ws254r',
        name: 'l3ws254s',
        props: {
          headerText: 'iconProps',
        },
        title: 'PivotItem',
        children: ['l3ws254v'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3ws254t: {
        id: 'l3ws254t',
        name: 'l3ws254u',
        props: {
          tokens: {
            padding: '6px 0px 0px',
            childrenGap: '8px',
          },
        },
        title: 'Stack',
        children: ['l3ws254x', 'l3ws254z'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3ws254v: {
        id: 'l3ws254v',
        name: 'props.iconProps',
        title: 'iconProps',
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l3ws254x: {
        id: 'l3ws254x',
        name: 'props.iconProps.iconName',
        props: {
          options: [
            {
              key: '',
              text: 'Не выбрано',
            },
            {
              key: 'Add',
              text: 'Add',
            },
            {
              key: 'Delete',
              text: 'Delete',
            },
            {
              key: 'AddPerson',
              text: 'AddPerson',
            },
            {
              key: 'Save',
              text: 'Save',
            },
            {
              key: 'Previous',
              text: 'Previous',
            },
            {
              key: 'Next',
              text: 'Next',
            },
            {
              key: 'Upload',
              text: 'Upload',
            },
            {
              key: 'DownloadDocument',
              text: 'DownloadDocument',
            },
            {
              key: 'BulkUpload',
              text: 'BulkUpload',
            },
            {
              key: 'DependencyAdd',
              text: 'DependencyAdd',
            },
            {
              key: 'DependencyRemove',
              text: 'DependencyRemove',
            },
            {
              key: 'AlertSettings',
              text: 'AlertSettings',
            },
            {
              key: 'ExcelDocument',
              text: 'ExcelDocument',
            },
            {
              key: 'Search',
              text: 'Search',
            },
          ],
          placeholder: 'Выбрать ',
          defaultSelectedKey: 'AlertSettings',
        },
        title: 'iconProps.iconName',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3ws254z: {
        id: 'l3ws254z',
        name: 'l3ws2550',
        props: {
          href: 'https://developer.microsoft.com/en-us/fluentui#/styles/web/icons',
          target: '_blank',
          children: ['Fluent UI Icons'],
          underline: true,
        },
        title: 'Link',
        compSchemaId: 'fc400911-79cc-4387-a1da-72a2058eb29f',
      },
      l3ws5hyn: {
        id: 'l3ws5hyn',
        name: 'l3ws5hyo',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3ws5phj: {
        id: 'l3ws5phj',
        name: 'l3ws5phk',
        props: {
          label: 'Props',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3ws5vi6: {
        id: 'l3ws5vi6',
        name: 'l3ws5vi7',
        props: {
          label: 'IconName',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wy26nn: {
        id: 'l3wy26nn',
        name: 'l3wy26no',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3ws254n'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wy34pn: {
        id: 'l3wy34pn',
        name: 'l3wy34po',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l38rl5tc', 'l38rlih0'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  '8550ad0f-ee1f-448c-a465-458d69b69e0c': {
    id: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
    title: 'DatePicker',
    componentName: 'DatePicker',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '12px',
          },
        },
        title: 'stackRoot',
        children: ['l3a9mpvj'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l38hzk2f: {
        id: 'l38hzk2f',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l38j0x97: {
        id: 'l38j0x97',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l38j17tp: {
        id: 'l38j17tp',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l38jaigo: {
        id: 'l38jaigo',
        name: 'props.underlined',
        props: {
          label: 'underlined',
        },
        title: 'underlined',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l38jbwik: {
        id: 'l38jbwik',
        name: 'props.placeholder',
        props: {
          label: 'placeholder',
        },
        title: 'placeholder',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l38vip3t: {
        id: 'l38vip3t',
        name: 'props.borderless',
        props: {
          label: 'borderless',
        },
        title: 'borderless',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3a9mpvj: {
        id: 'l3a9mpvj',
        name: 'l3a9mpvk',
        props: {
          tokens: {
            padding: '0',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l38hzk2f', 'l38j0x97', 'l38j17tp', 'l38jaigo', 'l38vip3t', 'l3cpyyyi', 'l38jbwik', 'l3cq2cix'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3cpyyyi: {
        id: 'l3cpyyyi',
        name: 'props.disabled',
        props: {
          label: 'disabled',
          boxSide: 'start',
        },
        title: 'disabled',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3cq2cix: {
        id: 'l3cq2cix',
        name: 'defaultValue',
        props: {
          label: 'default value',
        },
        title: 'default value',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
    },
  },
  'ee4234ef-9099-8943-8968-51c00733b870': {
    id: 'ee4234ef-9099-8943-8968-51c00733b870',
    title: 'TextField',
    componentName: 'TextField',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        props: {
          tokens: {
            padding: '34px 0',
          },
        },
        title: 'stackRoot',
        children: ['l4ae9urh'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32rhbjp: {
        id: 'l32rhbjp',
        name: 'assertionBindingSchema',
        props: {
          label: 'validator',
        },
        title: 'Validator',
        compSchemaId: 'e24fad61-576a-421d-9273-02b3c365c15c',
      },
      l32v2xm8: {
        id: 'l32v2xm8',
        name: 'props.multiline',
        props: {
          label: 'multiline',
          boxSide: 'start',
        },
        title: 'multiline',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
        eventBindingSchema: {
          catalog: {
            ROOT_ID: {
              id: 'ROOT_ID',
              name: 'root',
              type: 'ROOT',
              children: ['l4dx7cac'],
            },
            l4dx7cac: {
              id: 'l4dx7cac',
              name: 'onFieldLife',
              type: 'EVENT',
              children: ['l4dyk7ji', 'l4dx7miw', 'l4dxg11h'],
            },
            l4dx7miw: {
              id: 'l4dx7miw',
              name: 'setCompProp',
              type: 'ACTION',
              props: {
                prop: 'props.hidden',
                compId: 'l4dx8onk',
                typeof: 'boolean',
                booleanValue: false,
              },
              children: ['l4dxwb53'],
            },
            l4dxg11h: {
              id: 'l4dxg11h',
              name: 'setCompProp',
              type: 'ACTION',
              props: {
                prop: 'props.hidden',
                compId: 'l4dx8onk',
                typeof: 'boolean',
                booleanValue: true,
              },
              children: ['l4dxyb2v'],
            },
            l4dxwb53: {
              id: 'l4dxwb53',
              name: 'matchPattern',
              type: 'ASSERTION',
              props: {
                name: 'props.multiline',
                pattern: 'true',
              },
            },
            l4dxyb2v: {
              id: 'l4dxyb2v',
              name: 'matchPattern',
              type: 'ASSERTION',
              props: {
                name: 'props.multiline',
                pattern: 'false',
              },
            },
            l4dyk7ji: {
              id: 'l4dyk7ji',
              name: 'setCompProp',
              type: 'ACTION',
              props: {
                prop: 'props.hidden',
                compId: 'l4dx8onk',
                typeof: 'boolean',
                booleanValue: true,
              },
            },
          },
        },
      },
      l32v9j0t: {
        id: 'l32v9j0t',
        name: 'props.underlined',
        props: {
          label: 'underlined',
          boxSide: 'start',
        },
        title: 'underlined',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3482div: {
        id: 'l3482div',
        name: 'props.disabled',
        props: {
          label: 'disabled',
          boxSide: 'start',
        },
        title: 'disabled',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l34cp5uw: {
        id: 'l34cp5uw',
        name: 'props.borderless',
        props: {
          label: 'borderless',
          boxSide: 'start',
        },
        title: 'borderless',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3bg4uqp: {
        id: 'l3bg4uqp',
        name: 'props.autoAdjustHeight',
        props: {
          label: 'autoAdjustHeight',
          boxSide: 'start',
        },
        title: 'autoAdjustHeight',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3vfbj3e: {
        id: 'l3vfbj3e',
        name: 'eventBindingSchema',
        props: {
          label: 'events',
        },
        title: 'Bindings',
        compSchemaId: 'ebeb0b32-3298-4da3-b67b-de34ee852fa1',
        assertionBindingSchema: {
          catalog: {
            ROOT_ID: {
              id: 'ROOT_ID',
              name: 'and',
              type: 'OPERATOR',
              children: ['l4cp6goz'],
            },
            l4cp6goz: {
              id: 'l4cp6goz',
              name: 'eventBindings',
              type: 'ASSERTION',
            },
          },
          eventToShowError: 'onInit',
        },
      },
      l3vhmi0x: {
        id: 'l3vhmi0x',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['8d9d7967pcced', 'l4h11ijf', 'l3482div', 'l34cp5uw', 'l32v9j0t', 'l32v2xm8', 'l4dx8onk'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vi4oeh: {
        id: 'l3vi4oeh',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['l32rhbjp', 'l3vfbj3e'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vi4zxl: {
        id: 'l3vi4zxl',
        props: {
          label: 'Bindings',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3vj10qq: {
        id: 'l3vj10qq',
        props: {
          label: 'Props',
        },
        title: 'Props',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4ae9urh: {
        id: 'l4ae9urh',
        name: 'l4ae9uri',
        props: {
          linkSize: 'normal',
          linkFormat: 'links',
          paddingLeft: '16',
          overflowBehavior: 'menu',
        },
        title: 'Pivot',
        children: ['l4ae9yfw', 'l4aeanv3', 'l4aecshl'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l4ae9yfw: {
        id: 'l4ae9yfw',
        name: 'l4ae9yfx',
        props: {
          label: 'field',
          itemKey: 'Field',
          headerText: 'Field',
        },
        title: 'Field',
        children: ['l4aeipye', 'l4aejwj4'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l4aeanv3: {
        id: 'l4aeanv3',
        name: 'l4aeanv4',
        props: {
          label: 'comp',
          itemKey: 'Comp',
          headerText: 'Comp',
        },
        title: 'Comp',
        children: ['l3vj10qq', 'l3vhmi0x'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l4aecshl: {
        id: 'l4aecshl',
        props: {
          label: 'bindings',
          itemKey: 'Binding',
          headerText: 'Binding',
        },
        title: 'Binding',
        children: ['l3vi4zxl', 'l3vi4oeh'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l4aeipye: {
        id: 'l4aeipye',
        name: 'l4aeipyf',
        props: {
          label: 't.labels.field',
        },
        title: 'Field',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4aejwj4: {
        id: 'l4aejwj4',
        name: 'l4aejwj5',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['ee4254efp9099', 'rr4254efg9099'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4dx8onk: {
        id: 'l4dx8onk',
        name: 'l4dx8onl',
        props: {
          hidden: true,
        },
        title: 'autoAdjustHeight',
        children: ['l3bg4uqp'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4h11ijf: {
        id: 'l4h11ijf',
        name: 'props.info',
        props: {
          label: 'info',
          multiline: true,
          autoAdjustHeight: true,
        },
        title: 'info',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      '8d9d7967pcced': {
        id: '8d9d7967pcced',
        name: 'props.label',
        props: {
          label: 'label',
          lable: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      ee4254efp9099: {
        id: 'ee4254efp9099',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        assertionBindingSchema: {
          catalog: {
            ROOT_ID: {
              id: 'ROOT_ID',
              name: 'and',
              type: 'OPERATOR',
              children: ['l4fbttah'],
            },
            l4fbttah: {
              id: 'l4fbttah',
              name: 'string',
              type: 'ASSERTION',
            },
          },
          eventToShowError: 'onTouched',
        },
      },
      rr4254efg9099: {
        id: 'rr4254efg9099',
        name: 'defaultValue',
        props: {
          label: 'default value',
        },
        title: 'default value',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  'e24fad61-576a-421d-9273-02b3c365c15c': {
    id: 'e24fad61-576a-421d-9273-02b3c365c15c',
    title: 'Validator',
    componentName: 'ValidatorPicker',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: ['l3wym33j', 'l3wymaot'],
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
      l32xe746: {
        id: 'l32xe746',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3wym33j: {
        id: 'l3wym33j',
        name: 'l3wym33k',
        props: {
          label: 'Main',
          children: [null],
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wymaot: {
        id: 'l3wymaot',
        name: 'l3wymaou',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l32xe746', 'l30hez8c', 'l3wyme0a'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wyme0a: {
        id: 'l3wyme0a',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  '97a78838-9477-4fff-9776-8d1fad8f53b7': {
    id: '97a78838-9477-4fff-9776-8d1fad8f53b7',
    title: 'FinancialEffectDemo',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'hello',
        props: {
          style: {
            maxWidth: '800px',
            minWidth: '800px',
          },
          tokens: {
            padding: '20px',
          },
        },
        title: 'stackRoot',
        children: ['l347y8p3', 'l34562ah', 'l3458hf1'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l31ftonj: {
        id: 'l31ftonj',
        name: 'l31ftonk',
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31ftpa6: {
        id: 'l31ftpa6',
        name: 'l31ftpa7',
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31icz1a: {
        id: 'l31icz1a',
        name: 'l31icz1b',
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l31k7y0x: {
        id: 'l31k7y0x',
        name: 'l31k7y0y',
        props: {
          label: 'Label3',
          headerText: 'HeaderText3',
        },
        title: 'PivotItem',
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l31li3g9: {
        id: 'l31li3g9',
        name: 'l31li3ga',
        props: {
          label: 'Краткое описание',
        },
        title: 'Description',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31li3gb: {
        id: 'l31li3gb',
        name: 'l31li3gc',
        props: {
          label: 'Название',
        },
        title: 'Name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31mltxm: {
        id: 'l31mltxm',
        name: 'l31mltxn',
        props: {
          tokens: {
            padding: '20px',
          },
        },
        title: 'StackRoot',
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32mqp7s: {
        id: 'l32mqp7s',
        name: 'l32mqp7t',
        props: {
          label: 'Pivot',
          linkSize: 'normal',
          ariaLabel: 'aria-label',
          linkFormat: 'links',
          overflowBehavior: 'menu',
          overflowAriaLabel: 'more items',
        },
        title: 'Pivot',
        children: ['l32mrboa', 'l38vwdbc', 'l39ugk75', 'l34ivhua'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l32mrboa: {
        id: 'l32mrboa',
        name: 'mainTab',
        props: {
          headerText: 'Сведения',
        },
        title: 'MainTab',
        children: ['l3a5ozvs', 'l3a4xodn', 'l3a6jyxd', 'l3a6kybm', 'l3a8f44o', 'l3aa0918'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l32uu7qw: {
        id: 'l32uu7qw',
        name: 'name1',
        props: {
          value: 'Текст',
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34562ah: {
        id: 'l34562ah',
        name: 'l34562ai',
        props: {
          tokens: {
            padding: '0px',
          },
          horizontal: false,
        },
        title: 'HeadStack',
        children: ['l34c8zba', 'l3aaw5au', 'l3bc3gwt'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3458hf1: {
        id: 'l3458hf1',
        name: 'l3458hf2',
        props: {
          tokens: {
            padding: '0 16px 0',
            maxWidth: '900px',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l32mqp7s'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l345emub: {
        id: 'l345emub',
        name: 'l345emuc',
        props: {
          tokens: {
            padding: '5px',
          },
        },
        title: 'Stack',
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l347an6d: {
        id: 'l347an6d',
        name: 'l347an6e',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l347an6f: {
        id: 'l347an6f',
        name: 'l347an6g',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l347ao4r: {
        id: 'l347ao4r',
        name: 'l347ao4s',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l347ao4t: {
        id: 'l347ao4t',
        name: 'l347ao4u',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l347dnut: {
        id: 'l347dnut',
        name: 'custObj86Id',
        props: {
          value: '123',
          chidren: [null],
          variant: 'xxLarge',
          children: ['Финансовое последствие'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l347y8p3: {
        id: 'l347y8p3',
        name: 'l347y8p4',
        props: {
          tokens: {
            padding: '0 0 16px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l347dnut', 'l3bgub8z'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3483q02: {
        id: 'l3483q02',
        name: 'l3483q03',
        props: {
          value: '123',
          chidren: [null],
          variant: 'mediumPlus',
          children: ['Инцидент'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l348g0nh: {
        id: 'l348g0nh',
        name: 'l348g0ni',
        props: {
          tokens: {
            padding: '5px',
          },
        },
        title: 'Stack',
        children: ['l348cmkn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348g0nj: {
        id: 'l348g0nj',
        name: 'l348g0nk',
        props: {
          tokens: {
            padding: '0px',
          },
        },
        title: 'Stack',
        children: ['l3481ar4'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l348t3wu: {
        id: 'l348t3wu',
        name: 'incidentStatus',
        props: {
          variant: 'medium',
          children: ['Создание инцидента'],
        },
        title: 'Text',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34c8zba: {
        id: 'l34c8zba',
        name: 'l34c8zbb',
        props: {
          tokens: {
            padding: '0 0 16px',
            childrenGap: '16px',
          },
        },
        title: 'LocationStack',
        children: ['l34cazll', 'l34cbp5y', 'l34cboq5', 'l34cbo46', 'l34cgvni', 'l34ci1ur'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34cazll: {
        id: 'l34cazll',
        name: 'managementOrg',
        props: {
          label: 'managementOrg',
          variant: 'medium',
          children: ['Орг. структура: Банк > Головной офис > Отделение №1234'],
        },
        title: 'managementOrg',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cbo46: {
        id: 'l34cbo46',
        name: 'financialStatementItem',
        props: {
          label: 'financialStatementItem',
          variant: 'medium',
          children: ['Источник ОР: Недостатки процессов'],
        },
        title: 'financialStatementItem',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cboq5: {
        id: 'l34cboq5',
        name: 'cause',
        props: {
          label: 'cause',
          variant: 'medium',
          children: ['Вид нефинансового риска: Операционный'],
        },
        title: 'cause',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cbp5y: {
        id: 'l34cbp5y',
        name: 'riskCategory',
        props: {
          label: 'location',
          variant: 'medium',
          children: ['Тип события: Преднамеренные действия персонала '],
        },
        title: 'riskCategory',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34cgvni: {
        id: 'l34cgvni',
        name: 'process',
        props: {
          label: 'process',
          variant: 'medium',
          children: ['Бизнес-процесс: Кредитование ФЛ'],
        },
        title: 'process',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34ci1ur: {
        id: 'l34ci1ur',
        name: 'businessLine',
        props: {
          label: 'businessLine',
          variant: 'medium',
          children: ['Направление деятельности: Управление активами'],
        },
        title: 'businessLine',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l34gesfh: {
        id: 'l34gesfh',
        name: 'l34gesfi',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a5n97i'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34ivhua: {
        id: 'l34ivhua',
        name: 'l34ivhub',
        props: {
          headerText: 'Администрирование',
        },
        title: 'Admin',
        children: ['l3a52960', 'l38x7n05', 'l34ivhuc', 'l34ivhue', 'l3a4v5pq'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l34ivhuc: {
        id: 'l34ivhuc',
        name: 'l34ivhud',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34ivhue: {
        id: 'l34ivhue',
        name: 'l34ivhuf',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j29ci: {
        id: 'l34j29ci',
        name: 'l34j29cj',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34j29ck: {
        id: 'l34j29ck',
        name: 'l34j29cl',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j2mm4: {
        id: 'l34j2mm4',
        name: 'l34j2mm5',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l34j2mm6: {
        id: 'l34j2mm6',
        name: 'l34j2mm7',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34j9za6: {
        id: 'l34j9za6',
        name: 'l34j9za7',
        props: {
          tokens: {
            padding: '5px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l34gesfh', 'l345h991'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l34ja18r: {
        id: 'l34ja18r',
        name: 'l34ja18s',
        props: {
          tokens: {
            padding: '5px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l34gesfh', 'l345h991'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l38vwdbc: {
        id: 'l38vwdbc',
        name: 'lboTab',
        props: {
          label: 'DefaultLabel',
          headerText: 'Связанный инцидент',
        },
        title: 'LinkedBusinessObjects Tab',
        children: ['l39xwyw8'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l38vxv0f: {
        id: 'l38vxv0f',
        name: 'l38vxv0g',
        props: {
          children: ['Связанный инцидент'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l38vxv0h: {
        id: 'l38vxv0h',
        name: 'l38vxv0i',
        props: {
          items: [
            {
              id: '10000',
              name: 'Инцидент ОР',
              type: 'customObject86',
            },
          ],
          label: 'Инциденты',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l38x7n05: {
        id: 'l38x7n05',
        name: 'sourceSystemCd',
        props: {
          label: 'Источник данных',
          options: [
            {
              key: 'GRC',
              text: 'SAS Risk Governance And Compliance Manager',
            },
            {
              key: 'EXT',
              text: 'Интеграция из АС',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
          defaultSelectedKey: 'options[0]?.key.toString()',
        },
        title: 'sourceSystemCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'GRC',
      },
      l39ugk75: {
        id: 'l39ugk75',
        name: 'CommentsAndAttachementsTab',
        props: {
          label: 'Комментарии и вложения',
          headerText: 'Комментарии и вложения',
        },
        title: 'CommentsAndAttachementsTab',
        children: ['l39xwc4x'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l39undmw: {
        id: 'l39undmw',
        name: 'l39undmx',
        props: {
          items: [
            {
              id: '10000',
              name: 'Описание.docx',
              type: 'docx',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Вложение с описанием инцидента',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 100,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'type',
              name: 'Тип',
              text: 'type',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'type',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'AttachmentsTable',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l39uo0ju: {
        id: 'l39uo0ju',
        name: 'l39uo0jv',
        props: {
          items: [
            {
              date: '05.05.2022',
              name: 'Финансовое последствие успешно заведено в системе',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Комментарии',
          columns: [
            {
              key: 'name',
              name: 'Комментарий',
              text: 'name',
              maxWidth: 200,
              minWidth: 100,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'date',
              name: 'Дата',
              text: 'date',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'date',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'CommentsTable',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l39xu5na: {
        id: 'l39xu5na',
        name: 'l39xu5nb',
        props: {
          checked: false,
          disabled: false,
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'Upload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5nc: {
        id: 'l39xu5nc',
        name: 'l39xu5nd',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5ne: {
        id: 'l39xu5ne',
        name: 'l39xu5nf',
        props: {
          iconProps: {
            iconName: 'BulkUpload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5ng: {
        id: 'l39xu5ng',
        name: 'l39xu5nh',
        props: {
          iconProps: {
            iconName: 'DownloadDocument',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39xu5ni: {
        id: 'l39xu5ni',
        name: 'l39xu5nj',
        props: {
          children: ['Вложения'],
          disabled: false,
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l39xu92p: {
        id: 'l39xu92p',
        name: 'l39xu92q',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l39xu5ni', 'l39xubx0'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39xubx0: {
        id: 'l39xubx0',
        name: 'l39xubx1',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l39xu5na', 'l39xu5ne', 'l39xu5ng', 'l39xu5nc'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39xwc4x: {
        id: 'l39xwc4x',
        name: 'l39xwc4y',
        props: {
          tokens: {
            padding: '16px 10px 0',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3a01t7m', 'l3a025ti'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39xwyw8: {
        id: 'l39xwyw8',
        name: 'l39xwyw9',
        props: {
          tokens: {
            padding: '16px 10px 0',
          },
        },
        title: 'Stack',
        children: ['l38vxv0f', 'l38vxv0h'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39zrckx: {
        id: 'l39zrckx',
        name: 'l39zrcky',
        props: {
          children: ['Комментарии'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l39zrckz: {
        id: 'l39zrckz',
        name: 'l39zrcl0',
        props: {
          checked: false,
          disabled: false,
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'CommentAdd',
          },
        },
        title: 'CommentAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39zrcl5: {
        id: 'l39zrcl5',
        name: 'l39zrcl6',
        props: {
          checked: false,
          disabled: false,
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l39zrgha: {
        id: 'l39zrgha',
        name: 'l39zrghb',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l39zrckx', 'l39zrkyy'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l39zrkyy: {
        id: 'l39zrkyy',
        name: 'l39zrkyz',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l39zrckz', 'l39zrcl5'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a01t7m: {
        id: 'l3a01t7m',
        name: 'l3a01t7n',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l39xu92p', 'l39undmw'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a025ti: {
        id: 'l3a025ti',
        name: 'l3a025tj',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l39zrgha', 'l39uo0ju'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a4rc7n: {
        id: 'l3a4rc7n',
        name: 'effectNatureCd',
        props: {
          label: 'Сущность последствия',
          options: [
            {
              key: 'Direct',
              text: 'Прямые потери',
            },
            {
              key: 'Indirect',
              text: 'Косвенные потери',
            },
            {
              key: 'Potential',
              text: 'Потенциальные потери',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'effectNatureCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'Potential',
      },
      l3a4v5pq: {
        id: 'l3a4v5pq',
        name: 'co87_ops_compEffectTypeMain',
        props: {
          label: 'Тип последствия (комплаенс)',
          options: [
            {
              key: 'Quality',
              text: 'Качественные потери',
            },
            {
              key: 'Potential',
              text: 'Потенциальные потери',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'co87_ops_compEffectTypeMain',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3a4xodn: {
        id: 'l3a4xodn',
        name: 'l3a4xodo',
        props: {
          tokens: {
            padding: '0',
            childrenGap: '5%',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3a4rc7n'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a52960: {
        id: 'l3a52960',
        name: 'l3a52961',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3a52962'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a52962: {
        id: 'l3a52962',
        name: 'co87_ops_effectType',
        props: {
          label: 'Вид последствия (неактивное)',
          options: [
            {
              key: 'VALDEC',
              text: 'Снижение стоимости активов',
            },
            {
              key: 'WRTOFF',
              text: 'Досрочное списание материальных и нематериальных, финансовых активов',
            },
            {
              key: 'LEGAL',
              text: 'Судебные расходы',
            },
            {
              key: 'FINES',
              text: 'Штрафы / обязательные платежи',
            },
            {
              key: 'PAYMTS',
              text: 'Денежные выплаты клиентам и контрагентам',
            },
            {
              key: '3RDPRT',
              text: 'Потери вследствие противоправных действий третьих лиц',
            },
            {
              key: 'EMPLOY',
              text: 'Потери вследствие умышленных и неумышленных действий сотрудников Банка',
            },
            {
              key: 'REP3RD',
              text: 'Затраты на восстановление вследствие противоправных действий третьих лиц или сотрудников Банка',
            },
            {
              key: 'REPDIS',
              text: 'Затраты на восстановление хозяйственной деятельности и устранение последствий ошибок/аварий/стих. бедствий',
            },
            {
              key: 'OBLIG',
              text: 'Финансовые потери из-за неисполнения контрагентом обязательств',
            },
            {
              key: 'OTHER',
              text: 'Прочие убытки',
            },
            {
              key: '0',
              text: 'Отсутствует',
            },
          ],
          disabled: true,
        },
        title: 'co87_ops_effectType',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: '0',
      },
      l3a5n97i: {
        id: 'l3a5n97i',
        name: 'co87_ops_effectType_DL',
        props: {
          label: 'Вид последствия для прямых последствий',
          options: [
            {
              key: '11',
              text: 'Денежные выплаты (или риск денежных выплат) в виде штрафов со стороны компетентных органов в отношении сделок, связанных с нарушением режима эмбарго и санкций',
            },
            {
              key: '2',
              text: 'Денежные выплаты клиентам и контрагентам в целях компенсации им во внесудебном порядке убытков, понесенных ими по вине 3х лиц, в т.ч. Компенсированные Банком хищения ср-в клиентов и контрагентов',
            },
            {
              key: '3',
              text: 'Денежные выплаты работникам Банка в целях компенсации им во внесудебном порядке убытков, понесенных ими по вине Банка',
            },
            {
              key: '1',
              text: 'Досрочное списание (выбытие, потеря, уничтожение) материальных и нематериальных, финансовых активов в результате реализации события операционного риска',
            },
            {
              key: '9',
              text: 'Отрицательный финансовый результат от невыгодных для Банка сделок, совершенных по причине операционного риска',
            },
            {
              key: '12',
              text: 'Потери вследствие умышленных и неумышленных действий сотрудников Банка',
            },
            {
              key: '4',
              text: 'Потери от ошибочных платежей ',
            },
            {
              key: '10',
              text: 'Прочие потери, связанные с реализацией события операционного риска или устранением последствий события операционного риска',
            },
            {
              key: '7',
              text: 'Расходы (выплаты), связанные с решениями суда и (или) представительством Банка в судах по делам, связанных с потерями от реализации событий операционного риска',
            },
            {
              key: '5',
              text: 'Расходы на устранение последствий реализации события операционного риска, направленные на восстановление деятельности или на снижение потерь от реализовавшегося события операционного риска',
            },
            {
              key: '6',
              text: 'Снижение (обесценение) стоимости активов ',
            },
            {
              key: '8',
              text: 'Штрафы, наложенные исполнительными органами государственной власти (или) Банком России',
            },
            {
              key: '13',
              text: 'Денежные выплаты клиентам и контрагентам в целях компенсации им во внесудебном порядке убытков, понесенных ими по вине Банка',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'co87_ops_effectType_DL',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3a5ozvs: {
        id: 'l3a5ozvs',
        name: 'l3a5ozvt',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '400px',
          },
        },
        title: 'Stack',
        children: ['l3bj6epq'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a6jyxd: {
        id: 'l3a6jyxd',
        name: 'l3a6jyxe',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a6mgx4'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a6kybm: {
        id: 'l3a6kybm',
        name: 'l3a6kybn',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a6mkms'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a6mgx4: {
        id: 'l3a6mgx4',
        name: 'custObjNm',
        props: {
          label: 'Название последствия',
          disabled: false,
          underlined: false,
        },
        title: 'custObjNm',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'Название последствия события ОР',
      },
      l3a6mkms: {
        id: 'l3a6mkms',
        name: 'custObjDesc',
        props: {
          label: 'Описание последстсвия',
          disabled: false,
          multiline: true,
          underlined: false,
        },
        title: 'custObjDesc',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'Описание последствия события ОР',
      },
      l3a8f44o: {
        id: 'l3a8f44o',
        name: 'l3a8f44p',
        props: {
          linkFormat: 'tabs',
          overflowBehavior: 'menu',
        },
        title: 'Pivot',
        children: ['l3a8fdm7', 'l3a8g01l', 'l3a8gjen'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l3a8fdm7: {
        id: 'l3a8fdm7',
        name: 'l3a8fdm8',
        props: {
          label: 'DefaultLabel',
          itemKey: 'Direct',
          itemIcon: 'Dropdown',
          headerText: 'Прямые последствия',
        },
        title: 'Direct',
        children: ['l34gesfh', 'l3a9esfj'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3a8g01l: {
        id: 'l3a8g01l',
        name: 'l3a8g01m',
        props: {
          itemKey: 'Indirect',
          itemIcon: 'Dropdown',
          headerText: 'Непрямые последствия',
        },
        title: 'Indirect',
        children: ['l3a8j9j3', 'l3a9hvyq'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3a8gjen: {
        id: 'l3a8gjen',
        name: 'l3a8gjeo',
        props: {
          itemKey: 'Potential',
          itemIcon: 'Dropdown',
          headerText: 'Потенциальные последствия',
        },
        title: 'Potential',
        children: ['l3a8miwn', 'l3a9jmui'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3a8j9j3: {
        id: 'l3a8j9j3',
        name: 'l3a8j9j4',
        props: {
          tokens: {
            padding: '0',
            maxWidth: 'auto',
          },
        },
        title: 'Stack',
        children: ['l3a8j9j9'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a8j9j9: {
        id: 'l3a8j9j9',
        name: 'l3a8j9ja',
        props: {
          label: 'Вид последствия для непрямых последствий',
          options: [
            {
              key: '1',
              text: 'Недополученные доходы от приостановления или прекращения совершения операций, вызванных событиями операционного риска (например, приостановления или прекращения работы систем, оборудования)',
            },
            {
              key: '2',
              text: 'Неполученные доходы, связанные с не проведением отдельных сделок и операций по причине реализации событий операционного риска, не связанных с приостановлением и (или) прекращением совершения операций',
            },
            {
              key: '3',
              text: 'Повышение стоимости заимствований, например, стоимости привлечения кредитных средств, в результате события операционного риска',
            },
            {
              key: '5',
              text: 'Потери, связанные с восстановлением ликвидности из-за оттока денежных средств по причине реализации события операционного риска',
            },
            {
              key: '6',
              text: 'Прочие потери, связанные с устранением последствий или снижением потерь от реализации операционного риска, за исключением потерь, определенных в соответствии с подпунктами 3.12.8 и 3.12.10',
            },
            {
              key: '4',
              text: 'Снижение рыночной стоимости акций Банка или инструментов капитала Банка и по причине реализации события операционного риска',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'co87_ops_effectType_DL',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3a8miwn: {
        id: 'l3a8miwn',
        name: 'l3a8miwo',
        props: {
          tokens: {
            padding: '0',
            maxWidth: 'auto',
          },
        },
        title: 'Stack',
        children: ['l3a8miwp'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a8miwp: {
        id: 'l3a8miwp',
        name: 'l3a8miwq',
        props: {
          label: 'Вид последствия для потенциальных последствий',
          options: [
            {
              key: '3',
              text: 'Другие потенциальные потери',
            },
            {
              key: '1',
              text: 'Потери (в том числе хищение) средств клиентов, контрагентов, работников и третьих лиц, которые не были компенсированы Банком, с учетом положений абзаца восьмого пункта 6.5, включая потери средств физических лиц, в том числе индивидуальных предпренимателей, юридических лиц, штрафы, наложенные на должностных лиц Банка',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'co87_ops_effectType_DL',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: '3',
      },
      l3a9esfj: {
        id: 'l3a9esfj',
        name: 'l3a9esfk',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a9esfl'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9esfl: {
        id: 'l3a9esfl',
        name: 'co87_ops_effectType_DL_4',
        props: {
          label: 'Подвид последствия для прямых последствий',
          options: [
            {
              key: '2',
              text: 'Потери в виде уплаченных комиссий по проведению ошибочного платежа',
            },
            {
              key: '2',
              text: 'Потери в размере ошибочного платежа',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'co87_ops_effectType_DL_4',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3a9hvyq: {
        id: 'l3a9hvyq',
        name: 'l3a9hvyr',
        props: {
          tokens: {
            padding: '0',
            maxWidth: 'auto',
          },
        },
        title: 'Stack',
        children: ['l3a9hvys'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9hvys: {
        id: 'l3a9hvys',
        name: 'l3a9hvyt',
        props: {
          label: 'Подвид последствия для непрямых последствий',
          options: [],
          disabled: true,
          placeholder: 'Неприменимо',
        },
        title: 'co87_ops_effectType_DL',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3a9jmui: {
        id: 'l3a9jmui',
        name: 'l3a9jmuj',
        props: {
          tokens: {
            padding: '0',
            maxWidth: 'auto',
          },
        },
        title: 'Stack',
        children: ['l3a9jxb8'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9jxb8: {
        id: 'l3a9jxb8',
        name: 'co87_str_otherEffectType',
        props: {
          label: 'Прочие потери',
          disabled: false,
          underlined: false,
        },
        title: 'co87_str_otherEffectType',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3a9lgff: {
        id: 'l3a9lgff',
        name: 'l3a9lgfg',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '300px',
          },
        },
        title: 'Stack',
        children: ['l3a9ljkr'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9ljkr: {
        id: 'l3a9ljkr',
        name: 'createdAt',
        props: {
          label: 'Дата ввода',
          disabled: false,
          borderless: false,
          underlined: false,
        },
        title: 'DatePicker',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3a9u4j9: {
        id: 'l3a9u4j9',
        name: 'l3a9u4ja',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a9u4jf'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9u4jb: {
        id: 'l3a9u4jb',
        name: 'l3a9u4jc',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3a9u4jh'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9u4jd: {
        id: 'l3a9u4jd',
        name: 'l3a9u4je',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3a9u4jj'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3a9u4jf: {
        id: 'l3a9u4jf',
        name: 'lossAmt',
        props: {
          label: 'Прогнозируемая сумма',
          placeholder: 'Введите число',
        },
        title: 'lossAmt',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3a9u4jh: {
        id: 'l3a9u4jh',
        name: 'l3a9u4ji',
        props: {
          label: 'Валюта',
          options: [
            {
              key: 'RUB',
              text: 'RUB',
            },
          ],
          placeholder: 'Выберите значение',
        },
        title: 'Dropdown',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'RUB',
      },
      l3a9u4jj: {
        id: 'l3a9u4jj',
        name: 'lossAmt',
        props: {
          label: 'Прогнозируемая сумма (RUB)',
          disabled: true,
          borderless: false,
          underlined: true,
        },
        title: 'baseLossAmt',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3a9uukk: {
        id: 'l3a9uukk',
        name: 'l3a9uukl',
        props: {
          tokens: {
            padding: '0',
            childrenGap: '5%',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3a9u4j9', 'l3a9u4jb'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aa0918: {
        id: 'l3aa0918',
        name: 'l3aa0919',
        props: {
          tokens: {
            padding: '6px 0 0',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3a9lgff', 'l3a9uukk', 'l3a9u4jd', 'l3aa1ia6', 'l3aa3lu1', 'l3aa4m81', 'l3aaaob2', 'l3aac0ms'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aa1ia6: {
        id: 'l3aa1ia6',
        name: 'l3aa1ia7',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3aa1ia8'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aa1ia8: {
        id: 'l3aa1ia8',
        name: 'co87_str_ledgerCd',
        props: {
          label: 'Номер счета',
          disabled: false,
          underlined: false,
        },
        title: 'co87_str_ledgerCd',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3aa3lu1: {
        id: 'l3aa3lu1',
        name: 'l3aa3lu2',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '300px',
          },
        },
        title: 'Stack',
        children: ['l3aa3lu3'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aa3lu3: {
        id: 'l3aa3lu3',
        name: 'co87_dte_settlementDt',
        props: {
          label: 'Дата урегулирования',
          disabled: false,
          borderless: false,
          underlined: false,
        },
        title: 'co87_dte_settlementDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3aa4m81: {
        id: 'l3aa4m81',
        name: 'l3aa4m82',
        props: {
          tokens: {
            padding: '0',
            maxWidth: '300px',
          },
        },
        title: 'Stack',
        children: ['l3aa4m83'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aa4m83: {
        id: 'l3aa4m83',
        name: 'co87_dte_provisionDt',
        props: {
          label: 'Дата резервирования',
          disabled: false,
          borderless: false,
          underlined: false,
        },
        title: 'co87_dte_provisionDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3aaaob2: {
        id: 'l3aaaob2',
        name: 'l3aaaob3',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3aaaob4'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aaaob4: {
        id: 'l3aaaob4',
        name: 'co87_str_wiringId',
        props: {
          label: 'ID Проводки',
          disabled: false,
          underlined: false,
        },
        title: 'co87_str_wiringId',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3aac0ms: {
        id: 'l3aac0ms',
        name: 'l3aac0mt',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3aac0mu'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aac0mu: {
        id: 'l3aac0mu',
        name: 'co87_ops_financialStatusCd',
        props: {
          label: 'Статус последствия',
          options: [
            {
              key: 'PRO',
              text: 'Резерв под потерю',
            },
            {
              key: 'CST',
              text: 'Затраты',
            },
            {
              key: 'EST',
              text: 'Экспертная оценка (ожидаемая потеря/возмещение)',
            },
            {
              key: 'SET',
              text: 'Реализовавшаяся потеря/возмещение',
            },
            {
              key: 'NRM',
              text: 'Потенциальная потеря',
            },
            {
              key: 'MSG',
              text: 'Недополученный доход',
            },
          ],
          disabled: false,
          placeholder: 'Выберите значение',
        },
        title: 'co87_ops_financialStatusCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'SET',
      },
      l3aau0cj: {
        id: 'l3aau0cj',
        name: 'sharedLossFlg',
        props: {
          label: 'Учитывать последствие в инциденте',
          boxSide: 'start',
          checked: true,
          disabled: true,
        },
        title: 'sharedLossFlg',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3aav9ka: {
        id: 'l3aav9ka',
        name: 'l3aav9kb',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3aav9kc'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aav9kc: {
        id: 'l3aav9kc',
        name: 'co87_dte_sharedLossDt',
        props: {
          label: 'Дата последнего изменения',
          disabled: false,
          borderless: false,
          underlined: true,
        },
        title: 'co87_dte_sharedLossDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3aaw5au: {
        id: 'l3aaw5au',
        name: 'l3aaw5av',
        props: {
          tokens: {
            padding: '0',
            childrenGap: '48px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3aawhze', 'l3aav9ka'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3aawhze: {
        id: 'l3aawhze',
        name: 'l3aawhzf',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3aau0cj'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bc3gwt: {
        id: 'l3bc3gwt',
        name: 'l3bc3gwu',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3bc3mdq'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bc3mdq: {
        id: 'l3bc3mdq',
        name: 'co87_bol_siRiskIB',
        props: {
          label: 'Является потерей риска информационной безопасности',
          boxSide: 'start',
        },
        title: 'co87_bol_siRiskIB',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3bgub8z: {
        id: 'l3bgub8z',
        name: 'l3bgub90',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3bgub91'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3bgub91: {
        id: 'l3bgub91',
        name: 'l3bgub92',
        props: {
          type: 'submit',
          children: 'Сохранить',
          iconProps: {
            iconName: 'Save',
          },
        },
        title: 'Save',
        value: 'Сохранить',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3bj6epq: {
        id: 'l3bj6epq',
        name: 'custObj87Id',
        props: {
          label: 'Идентификатор последствия',
          disabled: true,
          underlined: true,
        },
        title: 'custObj87Id',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: '10000',
      },
      '43fa6880ds24': {
        id: '43fa6880ds24',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  'fc400911-79cc-4387-a1da-72a2058eb29f': {
    id: 'fc400911-79cc-4387-a1da-72a2058eb29f',
    title: 'Link',
    componentName: 'Link',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
          },
        },
        title: 'stackRoot',
        children: [
          'l3wrhey8',
          'l3vhfvu0',
          'l3wri27y',
          'l3wyfk73',
          'l3wriaim',
          'l3wyfyix',
          'l3wrimt6',
          'l3wyghuy',
          'l3wykyvi',
          'l3wylhgb',
        ],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32urk0v: {
        id: 'l32urk0v',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32urqxr: {
        id: 'l32urqxr',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l347hgee: {
        id: 'l347hgee',
        name: 'props.children[0]',
        props: {
          label: 'text',
          multiline: false,
          underlined: false,
          autoAdjustHeight: false,
        },
        title: 'text',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l34843yu: {
        id: 'l34843yu',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3a49mr7: {
        id: 'l3a49mr7',
        name: 'l3a49mr8',
        props: {
          label: 'injection from',
        },
        title: 'injection from',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3a49mr9: {
        id: 'l3a49mr9',
        name: 'l3a49mra',
        props: {
          label: 'injection to',
        },
        title: 'injection to',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3cqwhed: {
        id: 'l3cqwhed',
        name: 'props.underline',
        props: {
          label: 'underline',
          boxSide: 'start',
        },
        title: 'underline',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3cs8c0t: {
        id: 'l3cs8c0t',
        name: 'props.onClick',
        props: {
          label: 'onClick',
        },
        title: 'onClick',
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l3csa26u: {
        id: 'l3csa26u',
        name: 'props.href',
        props: {
          label: 'href',
          multiline: true,
          underlined: false,
          autoAdjustHeight: true,
        },
        title: 'href',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3csd12r: {
        id: 'l3csd12r',
        name: 'props.disabled',
        props: {
          label: 'disabled',
          boxSide: 'start',
        },
        title: 'disabled',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3vhfvu0: {
        id: 'l3vhfvu0',
        name: 'l3vhfvu1',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l347hgee', 'l3csa26u', 'l3wyi5rl', 'l32urk0v', 'l34843yu', 'l32urqxr'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wrhey8: {
        id: 'l3wrhey8',
        name: 'l3wrhey9',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wri27y: {
        id: 'l3wri27y',
        name: 'l3wri27z',
        props: {
          label: 'Props',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wriaim: {
        id: 'l3wriaim',
        name: 'l3wriain',
        props: {
          label: 'Injections',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wrimt6: {
        id: 'l3wrimt6',
        name: 'l3wrimt7',
        props: {
          label: 'OnClick',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wyfk73: {
        id: 'l3wyfk73',
        name: 'l3wyfk74',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3csd12r', 'l3cqwhed'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wyfyix: {
        id: 'l3wyfyix',
        name: 'l3wyfyiy',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3a49mr7', 'l3a49mr9'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wyghuy: {
        id: 'l3wyghuy',
        name: 'l3wyghuz',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l3cs8c0t'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wyi5rl: {
        id: 'l3wyi5rl',
        name: 'props.target',
        props: {
          label: 'target',
          options: [
            {
              key: '',
              text: 'Не выбрано',
            },
            {
              key: '_self',
              text: '_self',
            },
            {
              key: '_blank',
              text: '_blank',
            },
            {
              key: '_parent',
              text: '_parent',
            },
            {
              key: '_top',
              text: '_top',
            },
          ],
        },
        title: 'target',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3wykyvi: {
        id: 'l3wykyvi',
        name: 'l3wykyvj',
        props: {
          label: 'Validator',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wylf8j: {
        id: 'l3wylf8j',
        name: 'validator',
        title: 'Validator',
        compSchemaId: 'e24fad61-576a-421d-9273-02b3c365c15c',
      },
      l3wylhgb: {
        id: 'l3wylhgb',
        name: 'l3wylhgc',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3wylf8j'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  '96cc8e0c-69af-44c7-b9c3-2339dc6e545f': {
    id: '96cc8e0c-69af-44c7-b9c3-2339dc6e545f',
    title: '123',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        title: 'stackRoot',
        children: [
          'l4h5ae3l',
          'l4gurvtg',
          'l3x5g39q',
          'l3oiwamz',
          'l3x37brz',
          'l3vc9khl',
          'l3litj36',
          'l3gbcrlq',
          'l32ywmnq',
        ],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32yuz3b: {
        id: 'l32yuz3b',
        name: 'l32yuz3c',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l32ywmnq: {
        id: 'l32ywmnq',
        name: 'name',
        props: {
          label: 'test',
        },
        title: 'test',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l38n7inn: {
        id: 'l38n7inn',
        name: 'l38n7ino',
        title: 'NumberField',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3gbcrlq: {
        id: 'l3gbcrlq',
        name: 'l3gbcrlr',
        props: {
          children: ['jhj'],
        },
        title: 'Text',
        l3a49mr8: 'context.formState.values.name',
        l3a49mra: 'props.children[0]',
        injection: [
          {
            to: 'props.children[0]',
            from: 'context.formState.values.name',
          },
        ],
        injections: [
          {
            to: 'props.children[0]',
            from: 'context.formState.values.name',
          },
        ],
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3litj36: {
        id: 'l3litj36',
        name: 'l3litj37',
        props: {
          tokens: {
            childrenGap: '5px',
          },
        },
        title: 'Collapse123',
        children: ['l32yuz3b', 'l38n7inn'],
        compSchemaId: '0a4d5bbc-a6c7-487a-88cc-af71aece38b7',
      },
      l3oiwamz: {
        id: 'l3oiwamz',
        name: 'l3oiwan0',
        props: {
          type: 'submit',
        },
        title: 'ActionButton',
        compSchemaId: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
      },
      l3vc9khl: {
        id: 'l3vc9khl',
        name: 'l3vc9khm',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l3x37brz: {
        id: 'l3x37brz',
        name: 'l3x37bs0',
        props: {
          label: 'TextField',
        },
        title: 'TextField',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3x5g39q: {
        id: 'l3x5g39q',
        name: 'l3x5g39r',
        title: 'MultiCheckbox',
        compSchemaId: '5fb7aae3-7a53-4573-9641-2beaebe7b836',
      },
      l4gurvtg: {
        id: 'l4gurvtg',
        name: 'l4gurvth',
        props: {
          value: '2022-05-31T21:00:00.000Z',
        },
        title: 'DatePicker',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
        defaultValue: '1655499600',
      },
      l4h5ae3l: {
        id: 'l4h5ae3l',
        name: 'l4h5ae3m',
        title: 'DatePicker',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
    },
  },
  'f278867b-106c-4f95-b425-32a7c14a3e1a': {
    id: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
    title: 'JSONEditor',
    componentName: 'JSONEditor',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: ['l3wy1du0', 'l3wy1yfd', 'l3wy1nf2', 'l3wy27pt'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32ysobu: {
        id: 'l32ysobu',
        name: 'injections[0].from',
        props: {
          label: 'injection from',
        },
        title: 'injection from',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32ytgoy: {
        id: 'l32ytgoy',
        name: 'injections[0].to',
        props: {
          label: 'injection to',
        },
        title: 'injection to',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l332pvnt: {
        id: 'l332pvnt',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l332rkxd: {
        id: 'l332rkxd',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l332rzwp: {
        id: 'l332rzwp',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3wy1du0: {
        id: 'l3wy1du0',
        name: 'l3wy1du1',
        props: {
          label: 'Main',
          padding: '10px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wy1nf2: {
        id: 'l3wy1nf2',
        name: 'l3wy1nf3',
        props: {
          label: 'Injections',
          padding: '10px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wy1yfd: {
        id: 'l3wy1yfd',
        name: 'l3wy1yfe',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l332pvnt', 'l332rzwp', 'l332rkxd'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wy27pt: {
        id: 'l3wy27pt',
        name: 'l3wy27pu',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l32ysobu', 'l32ytgoy'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  '02add00e-8d79-4aa3-944d-a538539a8096': {
    id: '02add00e-8d79-4aa3-944d-a538539a8096',
    title: 'Label',
    componentName: 'Label',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '20px',
          },
        },
        title: 'stackRoot',
        children: ['l31iby2p', 'l348c02j', 'l3wr01i2', 'l34c7dzz'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l31iby2p: {
        id: 'l31iby2p',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l348c02j: {
        id: 'l348c02j',
        name: 'props.children[0]',
        props: {
          label: 'value',
        },
        title: 'value',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l34c5488: {
        id: 'l34c5488',
        name: 'props.disabled',
        props: {
          label: 'disabled',
          boxSide: 'end',
        },
        title: 'disabled',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l34c5gke: {
        id: 'l34c5gke',
        name: 'props.required',
        props: {
          label: 'required',
          boxSide: 'end',
        },
        title: 'required',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l34c7dzz: {
        id: 'l34c7dzz',
        name: 'l34c7e00',
        props: {
          tokens: {
            padding: '0px 0px 0px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l34c5488', 'l34c5gke'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wr01i2: {
        id: 'l3wr01i2',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  'afaa57e6-1925-4b1b-933a-cb7af80587af': {
    id: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
    title: 'Pivot',
    componentName: 'Pivot',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: ['l3wxa62d', 'l3wx8fl3', 'l3wxcqzx', 'l3wxc4s0'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l31dn5pn: {
        id: 'l31dn5pn',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l31m1vw3: {
        id: 'l31m1vw3',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3450k3p: {
        id: 'l3450k3p',
        name: 'props.overflowBehavior',
        props: {
          label: 'overflowBehavior',
          options: [
            {
              key: '',
              text: 'Не выбрано',
            },
            {
              key: 'none',
              text: 'none',
            },
            {
              key: 'menu',
              text: 'menu',
            },
          ],
        },
        title: 'overflowBehavior',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l34j5e36: {
        id: 'l34j5e36',
        name: 'props.linkFormat',
        props: {
          label: 'linkFormat',
          options: [
            {
              key: '',
              text: 'Не выбрано',
            },
            {
              key: 'tabs',
              text: 'tabs',
            },
            {
              key: 'links',
              text: 'links',
            },
          ],
        },
        title: 'linkFormat',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3wx8fl3: {
        id: 'l3wx8fl3',
        name: 'l3wx8fl4',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['l31dn5pn', 'l31m1vw3'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxa62d: {
        id: 'l3wxa62d',
        name: 'l3wxa62e',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxc4s0: {
        id: 'l3wxc4s0',
        name: 'l3wxc4s1',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l4duj5sp', 'l34j5e36', 'l3450k3p'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxcqzx: {
        id: 'l3wxcqzx',
        name: 'l3wxcqzy',
        props: {
          label: 'Props',
          children: [null],
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4duj5sp: {
        id: 'l4duj5sp',
        name: 'props.paddingLeft',
        props: {
          label: 'padding left',
        },
        title: 'padding left',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
    },
  },
  'ee4254ef-9099-4289-be68-51ce733b3376': {
    id: 'ee4254ef-9099-4289-be68-51ce733b3376',
    title: 'StackRoot',
    componentName: 'Stack',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        props: {
          tokens: {
            padding: '34px 0 0 0',
            childrenGap: '0',
          },
        },
        title: 'stackRoot',
        children: ['l3wxy160', 'l3wxw1o2'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32zobsf: {
        id: 'l32zobsf',
        name: 'props.style.minWidth',
        props: {
          label: 'min width',
        },
        title: 'min width',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l39uoujr: {
        id: 'l39uoujr',
        name: 'props.style.maxWidth',
        props: {
          label: 'max width',
        },
        title: 'max width',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3d6lg5i: {
        id: 'l3d6lg5i',
        name: 'props.style.maxHeight',
        props: {
          label: 'max height',
        },
        title: 'max height',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vhkrvd: {
        id: 'l3vhkrvd',
        name: 'props.tokens.childrenGap',
        props: {
          label: 'children gap',
        },
        title: 'childrenGap',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3wxw1o2: {
        id: 'l3wxw1o2',
        name: 'l3wxw1o3',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['ee4254efs9099', 'ee4254efp9099', 'l3vhkrvd', 'l39uoujr', 'l32zobsf', 'l3d6lg5i'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxy160: {
        id: 'l3wxy160',
        name: 'l3wxy161',
        props: {
          label: 'Props',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      ee4254efp9099: {
        id: 'ee4254efp9099',
        name: 'props.tokens.padding',
        props: {
          label: 'padding',
        },
        title: 'padding',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      ee4254efs9099: {
        id: 'ee4254efs9099',
        name: 'props.horizontal',
        props: {
          label: 'horizontal',
        },
        title: 'horizontal',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
    },
  },
  '4e6245fc-20c8-437e-a4e9-c2458fb6de70': {
    id: '4e6245fc-20c8-437e-a4e9-c2458fb6de70',
    title: 'DropdownMultipleSelect',
    componentName: 'DropdownMultipleSelect',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: ['l3wxupqg', 'l3wxuudm', 'l3wxvq07', 'l3wxvvfi', 'l3wxv8rf', 'l3wxvg6k', 'l3wxwfg8', 'l3wxwt7t'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l34gyjeg: {
        id: 'l34gyjeg',
        name: 'injections[0].to',
        props: {
          label: 'injection to',
        },
        title: 'injection to',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l34gyjei: {
        id: 'l34gyjei',
        name: 'injections[0].from',
        props: {
          label: 'injection from',
        },
        title: 'injection from',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l34gyjek: {
        id: 'l34gyjek',
        name: 'props.disabled',
        props: {
          label: 'disabled',
          boxSide: 'end',
        },
        title: 'disabled',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l34gyjem: {
        id: 'l34gyjem',
        name: 'props.placeholder',
        props: {
          label: 'placeholder',
        },
        title: 'placeholder',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l34gyjeo: {
        id: 'l34gyjeo',
        name: 'props.options',
        title: 'options',
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34gyjeq: {
        id: 'l34gyjeq',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l34gyjes: {
        id: 'l34gyjes',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l34gyjeu: {
        id: 'l34gyjeu',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3wxujf0: {
        id: 'l3wxujf0',
        name: 'l3wxujf1',
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxupqg: {
        id: 'l3wxupqg',
        name: 'l3wxupqh',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxuudm: {
        id: 'l3wxuudm',
        name: 'l3wxuudn',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l34gyjeu', 'l34gyjes', 'l34gyjeq'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxv8rf: {
        id: 'l3wxv8rf',
        name: 'l3wxv8rg',
        props: {
          label: 'Options',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxvg6k: {
        id: 'l3wxvg6k',
        name: 'l3wxvg6l',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l34gyjeo'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxvq07: {
        id: 'l3wxvq07',
        name: 'l3wxvq08',
        props: {
          label: 'Props',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxvvfi: {
        id: 'l3wxvvfi',
        name: 'l3wxvvfj',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l34gyjem', 'l34gyjek'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxwfg8: {
        id: 'l3wxwfg8',
        name: 'l3wxwfg9',
        props: {
          label: 'Injections',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxwt7t: {
        id: 'l3wxwt7t',
        name: 'l3wxwt7u',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l34gyjei', 'l34gyjeg'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9': {
    id: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
    title: 'HorizontalLine',
    componentName: 'HorizontalLine',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
          },
        },
        title: 'stackRoot',
        children: ['l3vkeu14', 'l3vkf63d', 'l3vk9oh2', 'l3vk9zoa'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3viptss: {
        id: 'l3viptss',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vj6w1r: {
        id: 'l3vj6w1r',
        name: 'props.padding',
        props: {
          label: 'padding',
        },
        title: 'padding',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vk9oh2: {
        id: 'l3vk9oh2',
        name: 'l3vk9oh3',
        props: {
          label: 'Layout',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3vk9zoa: {
        id: 'l3vk9zoa',
        name: 'l3vk9zob',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['l3vkbl6n', 'l3vkdkbp', 'l3vj6w1r'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vkbl6n: {
        id: 'l3vkbl6n',
        name: 'props.widthLeft',
        props: {
          label: 'left',
        },
        title: 'left',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vkdkbp: {
        id: 'l3vkdkbp',
        name: 'props.widthRight',
        props: {
          label: 'right',
        },
        title: 'right',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vkeu14: {
        id: 'l3vkeu14',
        name: 'l3vkeu15',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3vkf63d: {
        id: 'l3vkf63d',
        name: 'l3vkf63e',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['l3vkglnw', 'l3viptss', 'l3wwytzl'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vkglnw: {
        id: 'l3vkglnw',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3wwytzl: {
        id: 'l3wwytzl',
        name: 'props.children[0]',
        props: {
          label: 'children',
        },
        title: 'children',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  'f6f385f7-74db-438b-9981-bd261f8db0fc': {
    id: 'f6f385f7-74db-438b-9981-bd261f8db0fc',
    title: 'SearchBox',
    componentName: 'SearchBox',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
          horizontal: false,
        },
        title: 'stackRoot',
        children: ['l3wwka3s', 'l3vhenbk', 'l3wwud5r', 'l3wwv03x', 'l3wwutop', 'l3wycfi9'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3cnkktw: {
        id: 'l3cnkktw',
        name: 'props.placeholder',
        props: {
          label: 'placeholder',
        },
        title: 'placeholder',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3cnlr65: {
        id: 'l3cnlr65',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3cnpf73: {
        id: 'l3cnpf73',
        name: 'props.underlined',
        props: {
          label: 'underlined',
          boxSide: 'start',
        },
        title: 'underlined',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3d41y6z: {
        id: 'l3d41y6z',
        name: 'l3d41y70',
        props: {
          ariaLabel: 'aria-label',
          linkFormat: 'links',
          overflowAriaLabel: 'more items',
        },
        title: 'Pivot',
        children: ['l3d41y71', 'l3d41y73'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l3d41y71: {
        id: 'l3d41y71',
        name: 'l3d41y72',
        props: {
          label: 'DefaultLabel',
          headerText: 'IconName',
        },
        title: 'PivotItem',
        children: ['l3d41y75'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3d41y73: {
        id: 'l3d41y73',
        name: 'l3d41y74',
        props: {
          headerText: 'iconProps',
        },
        title: 'PivotItem',
        children: ['l3d41y77'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3d41y75: {
        id: 'l3d41y75',
        name: 'l3d41y76',
        props: {
          tokens: {
            padding: '0px 0px 0px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3d41y79', 'l3d41y7b'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3d41y77: {
        id: 'l3d41y77',
        name: 'props.iconProps',
        props: {
          label: 'iconProps.iconName',
        },
        title: 'iconProps',
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l3d41y79: {
        id: 'l3d41y79',
        name: 'props.iconProps.iconName',
        props: {
          label: 'iconProps.iconName',
          options: [
            {
              key: '',
              text: 'Не выбрано',
            },
            {
              key: 'Add',
              text: 'Add',
            },
            {
              key: 'Delete',
              text: 'Delete',
            },
            {
              key: 'AddPerson',
              text: 'AddPerson',
            },
            {
              key: 'Save',
              text: 'Save',
            },
            {
              key: 'Previous',
              text: 'Previous',
            },
            {
              key: 'Next',
              text: 'Next',
            },
            {
              key: 'Upload',
              text: 'Upload',
            },
            {
              key: 'DownloadDocument',
              text: 'DownloadDocument',
            },
            {
              key: 'BulkUpload',
              text: 'BulkUpload',
            },
            {
              key: 'DependencyAdd',
              text: 'DependencyAdd',
            },
            {
              key: 'DependencyRemove',
              text: 'DependencyRemove',
            },
            {
              key: 'AlertSettings',
              text: 'AlertSettings',
            },
            {
              key: 'ExcelDocument',
              text: 'ExcelDocument',
            },
            {
              key: 'Search',
              text: 'Search',
            },
          ],
          defaultSelectedKey: 'AlertSettings',
        },
        title: 'iconProps.iconName',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3d41y7b: {
        id: 'l3d41y7b',
        name: 'link',
        props: {
          href: 'https://developer.microsoft.com/en-us/fluentui#/styles/web/icons',
          target: '_blank',
          children: ['Fluent UI Icons'],
          underline: true,
        },
        title: 'Link',
        compSchemaId: 'fc400911-79cc-4387-a1da-72a2058eb29f',
      },
      l3vhenbk: {
        id: 'l3vhenbk',
        name: 'l3vhenbl',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['l3cnlr65', 'l3wwjjtc', 'l3wwklbl', 'l3cnkktw'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wwjjtc: {
        id: 'l3wwjjtc',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3wwka3s: {
        id: 'l3wwka3s',
        name: 'l3wwka3t',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wwklbl: {
        id: 'l3wwklbl',
        name: 'label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3wwud5r: {
        id: 'l3wwud5r',
        name: 'l3wwud5s',
        props: {
          label: 'Props',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wwutop: {
        id: 'l3wwutop',
        name: 'l3wwutoq',
        props: {
          label: 'IconName',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wwv03x: {
        id: 'l3wwv03x',
        name: 'l3wwv03y',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3cnpf73'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wycfi9: {
        id: 'l3wycfi9',
        name: 'l3wycfia',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l3d41y6z'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  'd79d37b9-21a5-4017-a13d-27106cf749d8': {
    id: 'd79d37b9-21a5-4017-a13d-27106cf749d8',
    title: 'Incident',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          style: {
            maxWidth: '1024px',
            minWidth: '1024px',
          },
          tokens: {
            padding: '32px',
            childrenGap: '24',
          },
        },
        title: 'stackRoot',
        children: ['l4fce1yj', 'l43swq66', 'l3x1ys86', 'l3x1y33d', 'l3vm4e3w', 'l3vm4e3m'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3vm4e3m: {
        id: 'l3vm4e3m',
        name: 'l3vm4e3n',
        props: {
          tokens: {
            padding: '0 0 0',
          },
        },
        title: 'TabSection',
        children: ['l3vm4e3y'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e3s: {
        id: 'l3vm4e3s',
        name: 'l3vm4e3t',
        props: {
          style: {
            minWidth: '25%',
          },
          tokens: {
            padding: '0 16px 0 8px ',
            childrenGap: '32px',
          },
        },
        title: 'ActivityStack',
        children: ['l3vm4e48'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e3u: {
        id: 'l3vm4e3u',
        name: 'l3vm4e3v',
        props: {
          tokens: {
            padding: '0px 0px 12px',
            childrenGap: '16px',
          },
        },
        title: 'LocationStack',
        children: ['l3vm4e4a', 'l3vm4e4c', 'l3vm4e4e', 'l3vm4e4g', 'l3vm4e4i', 'l3vm4e4k'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e3w: {
        id: 'l3vm4e3w',
        name: 'values.co86_bol_needApproveBM',
        props: {
          label: 'Необходимо согласование ответственного',
          boxSide: 'start',
        },
        title: 'co86_bol_needApproveBM',
        bindings: 'bindings',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3vm4e3y: {
        id: 'l3vm4e3y',
        name: 'l3vm4e3z',
        props: {
          label: 'Pivot',
          linkSize: 'normal',
          ariaLabel: 'aria-label',
          linkFormat: 'links',
          overflowBehavior: 'menu',
          overflowAriaLabel: 'more items',
        },
        title: 'Pivot',
        children: ['l3vm4e4m', 'l3vm4e4o', 'l3vm4e4q', 'l3vm4e4s', 'l3vm4e4u', 'l3vm4e4w', 'l3vm4e4y', 'l3vm4e50'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l3vm4e46: {
        id: 'l3vm4e46',
        name: 'validationStateCd',
        props: {
          label: 'Активность',
          options: [
            {
              key: 'CRT',
              text: 'Подлежит обработке',
            },
            {
              key: 'APP',
              text: 'На согласовании',
            },
            {
              key: 'CTL',
              text: 'Диспетчеризация',
            },
            {
              key: 'INP',
              text: 'В работе',
            },
            {
              key: 'CLS',
              text: 'Завершен',
            },
            {
              key: 'FIN',
              text: 'В архиве',
            },
          ],
        },
        title: 'validationStateCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'CRT',
      },
      l3vm4e48: {
        id: 'l3vm4e48',
        name: 'status',
        props: {
          label: 'Статус',
          options: [
            {
              key: 'create',
              text: 'Создание инцидента',
            },
            {
              key: 'approval',
              text: 'Согласование инцидента',
            },
            {
              key: 'dispatching',
              text: 'Диспетчеризация инцидента',
            },
            {
              key: 'inWork',
              text: 'В работе',
            },
            {
              key: 'considerationSec',
              text: 'На рассмотрении менеджером безопасности',
            },
            {
              key: 'correction',
              text: 'Корректировка',
            },
            {
              key: 'close',
              text: 'Завершен',
            },
            {
              key: 'delete',
              text: 'Архив',
            },
          ],
        },
        title: 'status',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'create',
      },
      l3vm4e4a: {
        id: 'l3vm4e4a',
        name: 'managementOrg',
        props: {
          label: 'managementOrg',
          variant: 'medium',
          children: ['Орг. структура: Банк > Головной офис > Отделение №1234'],
        },
        title: 'managementOrg',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3vm4e4c: {
        id: 'l3vm4e4c',
        name: 'riskCategory',
        props: {
          label: 'riskCategory',
          variant: 'medium',
          children: ['Тип события: Преднамеренные действия персонала '],
        },
        title: 'riskCategory',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3vm4e4e: {
        id: 'l3vm4e4e',
        name: 'cause',
        props: {
          label: 'cause',
          variant: 'medium',
          children: ['Вид нефинансового риска: Операционный'],
        },
        title: 'cause',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3vm4e4g: {
        id: 'l3vm4e4g',
        name: 'financialStatementItem',
        props: {
          label: 'financialStatementItem',
          variant: 'medium',
          children: ['Источник ОР: Недостатки процессов'],
        },
        title: 'financialStatementItem',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3vm4e4i: {
        id: 'l3vm4e4i',
        name: 'process',
        props: {
          label: 'process',
          variant: 'medium',
          children: ['Бизнес-процесс: Кредитование ФЛ'],
        },
        title: 'process',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3vm4e4k: {
        id: 'l3vm4e4k',
        name: 'businessLine',
        props: {
          label: 'businessLine',
          variant: 'medium',
          children: ['Направление деятельности: Управление активами'],
        },
        title: 'businessLine',
        compSchemaId: '403fd9a0-7bc8-4b5e-91bf-a442d1eba806',
      },
      l3vm4e4m: {
        id: 'l3vm4e4m',
        name: 'l3vm4e4n',
        props: {
          headerText: 'Сведения',
        },
        title: 'Сведения',
        children: ['l4eja0zy', 'l3x1anl7'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3vm4e4o: {
        id: 'l3vm4e4o',
        name: 'l3vm4e4p',
        props: {
          headerText: 'Заключение ИБ',
        },
        title: 'IB Tab',
        children: ['l3vm4e5s'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3vm4e4q: {
        id: 'l3vm4e4q',
        name: 'l3vm4e4r',
        props: {
          headerText: 'Объекты ОР',
        },
        title: 'ObjectsOR',
        children: ['l3vm4e5u'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3vm4e4s: {
        id: 'l3vm4e4s',
        name: 'l3vm4e4t',
        props: {
          label: 'DefaultLabel',
          headerText: 'Даты и суммы',
        },
        title: 'Dates and Sums Tab',
        children: ['l3vm4e5w'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3vm4e4u: {
        id: 'l3vm4e4u',
        name: 'l3vm4e4v',
        props: {
          label: 'DefaultLabel',
          headerText: 'Потери и возмещения',
        },
        title: 'Effects Tab',
        children: ['l3vm4e5y'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3vm4e4w: {
        id: 'l3vm4e4w',
        name: 'l3vm4e4x',
        props: {
          headerText: 'Связанное содержимое',
        },
        title: 'LinkedBusinessObjects Tab',
        children: ['l3vm4e60'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3vm4e4y: {
        id: 'l3vm4e4y',
        name: 'l3vm4e4z',
        props: {
          label: 'Комментарии и вложения',
          headerText: 'Комментарии и вложения',
        },
        title: 'CommentsAndAttachementsTab',
        children: ['l3vm4e62'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3vm4e50: {
        id: 'l3vm4e50',
        name: 'l3vm4e51',
        props: {
          headerText: 'Администрирование',
        },
        title: 'Admin',
        children: ['l3vm4e64', 'l3vm4e66', 'l3vm4e68'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l3vm4e52: {
        id: 'l3vm4e52',
        name: 'l3vm4e53',
        props: {
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3vm4e6c', 'l3vm4e6e'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e56: {
        id: 'l3vm4e56',
        name: 'l3vm4e57',
        props: {
          style: {
            minWidth: '100%',
          },
          horizontal: true,
        },
        title: 'Дата и запрос',
        children: ['l3vm4e6o', 'l3vm4e6q'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e5e: {
        id: 'l3vm4e5e',
        name: 'l3vm4e5f',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0 16px 0 0',
            maxWidth: '50%',
          },
        },
        title: 'Срок исполнения инцидента',
        children: ['l3vm4e70'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e5k: {
        id: 'l3vm4e5k',
        name: 'l3vm4e5l',
        props: {
          style: {
            minWidth: '100%',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3vm4e78', 'l3vm4e7a'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e5q: {
        id: 'l3vm4e5q',
        name: 'values.co86_str_resp_pers',
        props: {
          items: [{}],
          label: 'Сотрудник спецподразделения',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Имя',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'Сотрудник спецподразделения',
        children: ['l3vm4eac', 'l3vm4eaa'],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e5s: {
        id: 'l3vm4e5s',
        name: 'l3vm4e5t',
        props: {
          tokens: {
            padding: '16px 10px 0',
            childrenGap: '8px',
          },
        },
        title: 'IBTabStack',
        children: ['l3vm4e7i', 'l3vm4e7k'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e5u: {
        id: 'l3vm4e5u',
        name: 'l3vm4e5v',
        props: {
          tokens: {
            padding: '16px 8px 0px',
            childrenGap: '8px',
          },
        },
        title: 'Stack',
        children: ['l3vm4e7m', 'l3vq3i99'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e5w: {
        id: 'l3vm4e5w',
        name: 'l3vm4e5x',
        props: {
          tokens: {
            padding: '16px 10px 0',
            childrenGap: '8px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3vm4e7q', 'l3vm4e7s'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e5y: {
        id: 'l3vm4e5y',
        name: 'l3vm4e5z',
        props: {
          tokens: {
            padding: '16px 10px 0',
          },
        },
        title: 'Stack',
        children: ['l3vm4e7u', 'l3vm4e7w', 'l3vm4e7y', 'l3vm4e80', 'l3vm4e82', 'l3vm4e84', 'l3vm4e86', 'l3vm4e88'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e60: {
        id: 'l3vm4e60',
        name: 'l3vm4e61',
        props: {
          tokens: {
            padding: '16px 10px 0',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3voo02v', 'l3vp8cdt', 'l3vpa6ml', 'l3vpeaov', 'l3vpivfr'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e62: {
        id: 'l3vm4e62',
        name: 'l3vm4e63',
        props: {
          tokens: {
            padding: '16px 10px 0',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3vm4e8u', 'l3vm4e8w'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e64: {
        id: 'l3vm4e64',
        name: 'sourceSystemCd',
        props: {
          label: 'Источник данных',
          options: [
            {
              key: 'GRC',
              text: 'SAS Risk Governance And Compliance Manager',
            },
            {
              key: 'EXT',
              text: 'Интеграция из АС',
            },
          ],
          defaultSelectedKey: 'options[0]?.key.toString()',
        },
        title: 'sourceSystemCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'GRC',
      },
      l3vm4e66: {
        id: 'l3vm4e66',
        name: 'l3vm4e67',
        props: {
          url: '/api/v1/schemas/risk-type',
          name: 'risk-type',
        },
        title: 'Fetcher',
        compSchemaId: 'bc5b7bf1-6abf-43b9-8cf3-bf223dbff9fe',
      },
      l3vm4e68: {
        id: 'l3vm4e68',
        name: 'l3vm4e69',
        title: 'JSON',
        injections: [
          {
            to: 'props.value',
            from: 'context',
          },
        ],
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l3vm4e6c: {
        id: 'l3vm4e6c',
        name: 'l3vm4e6d',
        props: {
          grop: '1',
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0 16px 0 0',
            childrenGap: '24px',
          },
        },
        title: 'leftColumn',
        children: ['l3vm4e8y', 'l3vm4e90', 'l3vm4e92', 'l3vm4e94', 'l3vm4e98'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e6e: {
        id: 'l3vm4e6e',
        name: 'l3vm4e6f',
        props: {
          grop: '1',
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '16px 0 0 16px',
            childrenGap: '24px',
          },
        },
        title: 'RightColumn',
        children: ['l3vm4e9a', 'l3vm4e9c', 'l3vm4e9e', 'l3vm4e9g'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e6o: {
        id: 'l3vm4e6o',
        name: 'l3vm4e6p',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0 16px 0 0',
          },
        },
        title: 'Срок исполнения (инцидент на контроле)',
        children: ['l3vm4e9u'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e6q: {
        id: 'l3vm4e6q',
        name: 'l3vm4e6r',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0 0 0 16px',
          },
        },
        title: 'Запрос владельцу процесса или руководителю',
        children: ['l3vm4e9w'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e6s: {
        id: 'l3vm4e6s',
        name: 'co86_str_CommentPO',
        props: {
          label: 'Комментарий владельца процесса или руководителя',
          multiline: true,
        },
        title: 'Комментарий владельца процесса',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vm4e6y: {
        id: 'l3vm4e6y',
        name: 'co86_str_sec_manager',
        props: {
          items: [
            {
              id: '10001',
              name: 'Ответственный со стороны ИБ',
              author: 'Ответственный',
            },
          ],
          label: 'Ответственный со стороны ИБ',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Имя',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
          selectionMode: '2',
        },
        title: 'Ответственный со стороны ИБ',
        children: ['l3vm4e9y', 'l3vm4ea0'],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e70: {
        id: 'l3vm4e70',
        name: 'l3vm4e71',
        props: {
          label: 'Срок исполнения (инцидент на уточнении в ИБ)',
        },
        title: 'co86_dte_sec_dueDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3vm4e76: {
        id: 'l3vm4e76',
        name: 'co86_str_resp_pers',
        props: {
          items: [
            {
              id: '10001',
              name: 'Ответственный за уточнение',
              author: 'Ответственный',
            },
          ],
          label: 'Ответственный за уточнение',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Имя',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'Ответственный за уточнение',
        children: ['l3vm4ea4', 'l3vm4ea2'],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e78: {
        id: 'l3vm4e78',
        name: 'l3vm4e79',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0 16px 0 0',
          },
        },
        title: 'Stack',
        children: ['l3vm4ea6'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e7a: {
        id: 'l3vm4e7a',
        name: 'l3vm4e7b',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0 0 0 16px ',
          },
        },
        title: 'Stack',
        children: ['l3vm4ea8'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e7c: {
        id: 'l3vm4e7c',
        name: 'values.co86_str_CommentRespPers',
        props: {
          label: 'Комментарий ответственного за уточнение',
          multiline: true,
        },
        title: 'Комментарий ответственного за уточнение',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vm4e7i: {
        id: 'l3vm4e7i',
        name: 'values.co86_bol_sec_approvedFlg',
        props: {
          label: 'Согласовано ИБ',
          boxSide: 'start',
        },
        title: 'co86_bol_sec_approvedFlg',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3vm4e7k: {
        id: 'l3vm4e7k',
        name: 'values.co86_str_sec_conclusion.',
        props: {
          label: 'Заключение ИБ',
          multiline: true,
        },
        title: 'co86_str_sec_conclusion',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vm4e7m: {
        id: 'l3vm4e7m',
        name: 'values.co86_bol_insuredFlg',
        props: {
          label: 'Объект застрахован',
          boxSide: 'start',
        },
        title: 'co86_bol_insuredFlg',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3vm4e7q: {
        id: 'l3vm4e7q',
        name: 'l3vm4e7r',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0 0 0',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3vm4eae', 'l3vm4eag', 'l3vm4eai'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e7s: {
        id: 'l3vm4e7s',
        name: 'l3vm4e7t',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0 0 0',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3vm4eak', 'l3vm4eam', 'l3vm4eao', 'l3vm4eaq'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e7u: {
        id: 'l3vm4e7u',
        name: 'l3vm4e7v',
        props: {
          children: ['Финансовые последствия'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3vm4e7w: {
        id: 'l3vm4e7w',
        name: 'l3vm4e7x',
        props: {
          items: [
            {
              id: '10000',
              name: 'Недостача в банкомате №11111',
              type: 'customObject87',
              value: '1000',
              currency: 'RUB',
            },
            {
              id: '10001',
              name: "Недостача в ДО 'Нью-Йоркский'",
              type: 'customObject87',
              value: '50',
              currency: 'USD',
            },
            {
              id: '10002',
              name: 'Мошеничество в особо крупном размере',
              type: 'customObject87',
              value: '100500',
              currency: 'RUB',
            },
          ],
          label: 'Финансовые последствия',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'value',
              name: 'Сумма',
              text: 'value',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'value',
              isResizable: 'true',
            },
            {
              key: 'currency',
              name: 'Валюта',
              text: 'currency',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'currency',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e7y: {
        id: 'l3vm4e7y',
        name: 'l3vm4e7z',
        props: {
          children: ['Нефинансовые последствия'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3vm4e80: {
        id: 'l3vm4e80',
        name: 'l3vm4e81',
        props: {
          items: [
            {
              id: '10000',
              name: 'Потеря репутации среди клиентов',
              type: 'customObject88',
            },
          ],
          label: 'Финансовые последствия',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e82: {
        id: 'l3vm4e82',
        name: 'l3vm4e83',
        props: {
          children: ['Прямые возмещения'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3vm4e84: {
        id: 'l3vm4e84',
        name: 'l3vm4e85',
        props: {
          items: [
            {
              id: '10000',
              name: 'Прямое возмещение',
              type: 'customObject89',
              value: '100500',
              currency: 'RUB',
            },
          ],
          label: 'Прямые возмещения',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'value',
              name: 'Сумма',
              text: 'value',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'value',
              isResizable: 'true',
            },
            {
              key: 'currency',
              name: 'Валюта',
              text: 'currency',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'currency',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e86: {
        id: 'l3vm4e86',
        name: 'l3vm4e87',
        props: {
          children: ['Страховые возмещения'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3vm4e88: {
        id: 'l3vm4e88',
        name: 'l3vm4e89',
        props: {
          items: [
            {
              id: '10000',
              name: 'Страховое возмещение',
              type: 'customObject90',
              value: '9999',
              currency: 'RUB',
            },
          ],
          label: 'Страховые возмещения',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'value',
              name: 'Сумма',
              text: 'value',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'value',
              isResizable: 'true',
            },
            {
              key: 'currency',
              name: 'Валюта',
              text: 'currency',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'currency',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e8a: {
        id: 'l3vm4e8a',
        name: 'l3vm4e8b',
        props: {
          children: ['Связанный риск'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3vm4e8c: {
        id: 'l3vm4e8c',
        name: 'l3vm4e8d',
        props: {
          items: [
            {
              id: '10000',
              name: 'Риск нарушения процедуры демонстрации',
              type: 'customObject96',
            },
          ],
          label: 'Связанный риск',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e8e: {
        id: 'l3vm4e8e',
        name: 'l3vm4e8f',
        props: {
          children: ['Проблема'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3vm4e8g: {
        id: 'l3vm4e8g',
        name: 'l3vm4e8h',
        props: {
          items: [
            {
              id: '10000',
              name: 'Проблема проведения процедуры демонстрации',
              type: 'customObject110',
            },
          ],
          label: 'Проблема',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e8i: {
        id: 'l3vm4e8i',
        name: 'l3vm4e8j',
        props: {
          children: ['Связанный инцидент'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3vm4e8k: {
        id: 'l3vm4e8k',
        name: 'l3vm4e8l',
        props: {
          items: [
            {
              id: '10001',
              name: 'Инцидент',
              type: 'customObject86',
            },
          ],
          label: 'Инциденты',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e8m: {
        id: 'l3vm4e8m',
        name: 'l3vm4e8n',
        props: {
          children: ['Связанные КИРы'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3vm4e8o: {
        id: 'l3vm4e8o',
        name: 'l3vm4e8p',
        props: {
          items: [
            {
              id: '10000',
              name: 'КИР №1',
              type: 'customObject113',
            },
            {
              id: '10001',
              name: 'КИР №2',
              type: 'customObject113',
            },
            {
              id: '10002',
              name: 'КИР №3',
              type: 'customObject113',
            },
          ],
          label: 'Связанные КИРы',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
          selectionMode: 2,
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e8q: {
        id: 'l3vm4e8q',
        name: 'l3vm4e8r',
        props: {
          children: ['План мероприятий'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3vm4e8s: {
        id: 'l3vm4e8s',
        name: 'l3vm4e8t',
        props: {
          items: [
            {
              id: '10000',
              name: 'План проведения мероприятия по демонстрации функционала АСУОР',
              type: 'customObject111',
            },
          ],
          label: 'План мероприятий',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
          ],
        },
        title: 'Table',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e8u: {
        id: 'l3vm4e8u',
        name: 'l3vm4e8v',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3vm4eas', 'l3vm4eau'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e8w: {
        id: 'l3vm4e8w',
        name: 'l3vm4e8x',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3vm4eaw', 'l3vm4eay'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e8y: {
        id: 'l3vm4e8y',
        name: 'values.custObj86Id',
        props: {
          label: 'Идентификатор инцидента',
          disabled: true,
        },
        title: 'custObj86Id',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: '10000',
      },
      l3vm4e90: {
        id: 'l3vm4e90',
        name: 'values.custObjNm',
        props: {
          label: 'Название инцидента',
        },
        title: 'custObjNm',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'Инцидент ОР',
        assertionBindingSchema: {
          catalog: {
            ROOT_ID: {
              id: 'ROOT_ID',
              name: 'and',
              type: 'OPERATOR',
              children: ['l4fk42bt'],
            },
            l4fk42bt: {
              id: 'l4fk42bt',
              name: 'string',
              type: 'ASSERTION',
            },
          },
          eventToShowError: 'onTouched',
        },
      },
      l3vm4e92: {
        id: 'l3vm4e92',
        name: 'values.summaryDescription',
        props: {
          label: 'Сводное описание',
        },
        title: 'summaryDescription',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vm4e94: {
        id: 'l3vm4e94',
        name: 'values.custObjDesc',
        props: {
          label: 'Детальное описание события',
          multiline: true,
          autoAdjustHeight: true,
        },
        title: 'custObjDesc',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vm4e98: {
        id: 'l3vm4e98',
        name: 'stepsTaken',
        props: {
          label: 'Предпринятые действия',
          multiline: true,
          autoAdjustHeight: true,
        },
        title: 'stepsTaken',
        l32rhbjq: {
          ROOT_ID: {
            id: 'ROOT_ID',
            name: 'and',
            children: ['l32rptgc'],
          },
          l32rptgc: {
            id: 'l32rptgc',
            name: 'string',
            children: [],
          },
        },
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vm4e9a: {
        id: 'l3vm4e9a',
        name: 'longTermIncidentFlg',
        props: {
          label: 'Долгосрочный инцидент',
          boxSide: 'start',
        },
        title: 'longTermIncidentFlg',
        bindings: 'bindings',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3vm4e9c: {
        id: 'l3vm4e9c',
        name: 'customerComplaintFlg',
        props: {
          label: 'Жалоба клиента',
          boxSide: 'start',
        },
        title: 'customerComplaintFlg',
        bindings: 'bindings',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3vm4e9e: {
        id: 'l3vm4e9e',
        name: 'IBRisk',
        props: {
          label: 'Риск информационной безопасности',
        },
        title: 'IBRisk',
        bindings: 'bindings',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3vm4e9g: {
        id: 'l3vm4e9g',
        name: 'l3vm4e9h',
        props: {
          tokens: {
            childrenGap: '12px',
          },
        },
        title: 'Stack',
        children: ['l3vm4ece', 'l3vm4eda'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4e9m: {
        id: 'l3vm4e9m',
        name: 'l3vm4e9n',
        props: {
          items: [
            {
              id: '10000',
              type: 'customObject92',
              causeType: 'Основная',
              custObjNm: 'Демонстрационная причина инцидента №1',
            },
            {
              id: '10001',
              type: 'customObject92',
              causeType: 'Второстепенная',
              custObjNm: 'Демонстрационная причина инцидента №2',
            },
          ],
          label: 'Причина',
          columns: [
            {
              key: '1',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'custObjNm',
              name: 'Название',
              text: 'custObjNm',
              maxWidth: 250,
              minWidth: 60,
              fieldName: 'custObjNm',
              isResizable: 'true',
            },
            {
              key: 'causeType',
              name: 'Приоритет причины',
              text: 'causeType',
              maxWidth: 150,
              minWidth: 10,
              fieldName: 'causeType',
              isResizable: 'causeType',
            },
          ],
          selectionMode: '2',
        },
        title: 'IncidentCauseTable',
        children: ['l3vm4eb8', 'l3vm4eba', 'l3vm4ebc', 'l3vm4ebe'],
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e9s: {
        id: 'l3vm4e9s',
        name: 'values.co86_str_process_owner',
        props: {
          items: [
            {
              id: '10001',
              name: 'Руководитель ответственного',
              author: 'Ответственный',
            },
          ],
          label: 'Владелец процесса или руководитель ответственного',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 200,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'Владелец процесса',
        children: ['l3vm4ebg', 'l3vm4ebi'],
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4e9u: {
        id: 'l3vm4e9u',
        name: 'l3vm4e9v',
        props: {
          label: 'Срок исполнения (инцидент на контроле)',
        },
        title: 'Срок исполнения (инцидент на контроле)',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3vm4e9w: {
        id: 'l3vm4e9w',
        name: 'values.co86_str_process_owner_inquiry',
        props: {
          label: 'Запрос владельцу процесса или руководителю',
          multiline: true,
        },
        title: 'Запрос владельцу процесса или руководителю',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vm4e9y: {
        id: 'l3vm4e9y',
        name: 'l3vm4e9z',
        props: {
          iconProps: {
            iconName: 'PeopleAdd',
          },
        },
        title: 'PeopleAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ea0: {
        id: 'l3vm4ea0',
        name: 'l3vm4ea1',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ea2: {
        id: 'l3vm4ea2',
        name: 'l3vm4ea3',
        props: {
          iconProps: {
            iconName: 'PeopleAdd',
          },
        },
        title: 'PeopleAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ea4: {
        id: 'l3vm4ea4',
        name: 'l3vm4ea5',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ea6: {
        id: 'l3vm4ea6',
        name: 'l3vm4ea7',
        props: {
          label: 'Срок исполнения (инцидент на уточнении)',
        },
        title: 'co86_dte_resp_dueDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3vm4ea8: {
        id: 'l3vm4ea8',
        name: 'l3vm4ea9',
        props: {
          label: 'Запрос ответственному за уточнение',
          multiline: true,
        },
        title: 'co86_str_process_owner_inquiry',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vm4eaa: {
        id: 'l3vm4eaa',
        name: 'l3vm4eab',
        props: {
          iconProps: {
            iconName: 'PeopleAdd',
          },
        },
        title: 'PeopleAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4eac: {
        id: 'l3vm4eac',
        name: 'l3vm4ead',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4eae: {
        id: 'l3vm4eae',
        name: 'l3vm4eaf',
        props: {
          tokens: {
            padding: '0px 0px 0px',
            maxWidth: '300px',
          },
        },
        title: 'Stack',
        children: ['l3vm4ebk'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4eag: {
        id: 'l3vm4eag',
        name: 'l3vm4eah',
        props: {
          tokens: {
            padding: '0px 0px 0px',
            maxWidth: '300px',
          },
        },
        title: 'Stack',
        children: ['l3vm4ebm', 'l3vm4ebo'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4eai: {
        id: 'l3vm4eai',
        name: 'l3vm4eaj',
        props: {
          tokens: {
            padding: '0px 0px 0px',
            maxWidth: '300px',
          },
        },
        title: 'Stack',
        children: ['l3vm4ebq'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4eak: {
        id: 'l3vm4eak',
        name: 'l3vm4eal',
        props: {
          tokens: {
            padding: '0',
            childrenGap: '6px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3vm4ebs', 'l3vm4ebu'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4eam: {
        id: 'l3vm4eam',
        name: 'l3vm4ean',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3vm4ebw'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4eao: {
        id: 'l3vm4eao',
        name: 'l3vm4eap',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3vm4eby'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4eaq: {
        id: 'l3vm4eaq',
        name: 'l3vm4ear',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3vm4ec0'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4eas: {
        id: 'l3vm4eas',
        name: 'l3vm4eat',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3vm4ec2', 'l3vm4ec4'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4eau: {
        id: 'l3vm4eau',
        props: {
          items: [
            {
              id: '10000',
              name: 'Описание.docx',
              type: 'docx',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Вложение с описанием инцидента',
          columns: [
            {
              key: 'id',
              name: 'ID',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: true,
            },
            {
              key: 'name',
              name: 'Название',
              maxWidth: 100,
              minWidth: 50,
              fieldName: 'name',
              isResizable: true,
            },
            {
              key: 'type',
              name: 'Тип',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'type',
              isResizable: true,
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: true,
            },
          ],
        },
        title: 'AttachmentsTable',
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4eaw: {
        id: 'l3vm4eaw',
        name: 'l3vm4eax',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3vm4ec6', 'l3vm4ec8'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4eay: {
        id: 'l3vm4eay',
        name: 'l3vm4eaz',
        props: {
          items: [
            {
              date: '01.05.2022',
              name: 'Инцидент заведен в системе',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Комментарии',
          columns: [
            {
              key: 'name',
              name: 'Комментарий',
              text: 'name',
              maxWidth: 200,
              minWidth: 100,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'date',
              name: 'Дата',
              text: 'date',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'date',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
        },
        title: 'CommentsTable',
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4eb2: {
        id: 'l3vm4eb2',
        name: 'Attachments',
        props: {
          items: [
            {
              id: '10000',
              name: 'Описание.docx',
              type: 'docx',
              author: 'Демонстрационный пользователь',
            },
          ],
          label: 'Вложение с описанием инцидента',
          columns: [
            {
              key: 'id',
              name: 'ID',
              text: 'id',
              maxWidth: 40,
              minWidth: 20,
              fieldName: 'id',
              isResizable: 'true',
            },
            {
              key: 'name',
              name: 'Название',
              text: 'name',
              maxWidth: 100,
              minWidth: 50,
              fieldName: 'name',
              isResizable: 'true',
            },
            {
              key: 'type',
              name: 'Тип',
              text: 'type',
              maxWidth: 70,
              minWidth: 10,
              fieldName: 'type',
              isResizable: 'true',
            },
            {
              key: 'author',
              name: 'Автор',
              text: 'author',
              maxWidth: 50,
              minWidth: 10,
              fieldName: 'author',
              isResizable: 'true',
            },
          ],
          selectionMode: '2',
        },
        title: 'Attachments',
        children: ['l3vm4ed2', 'l3vm4ed4', 'l3vm4ed6', 'l3vm4ed8'],
        injections: [{}],
        compSchemaId: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
      },
      l3vm4eb8: {
        id: 'l3vm4eb8',
        name: 'l3vm4eb9',
        props: {
          ariaLabel: 'Создать объект',
          iconProps: {
            iconName: 'Add',
          },
        },
        title: 'Add',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4eba: {
        id: 'l3vm4eba',
        name: 'l3vm4ebb',
        props: {
          ariaLabel: 'Связать объект',
          iconProps: {
            iconName: 'DependencyAdd',
          },
        },
        title: 'DependencyAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ebc: {
        id: 'l3vm4ebc',
        name: 'l3vm4ebd',
        props: {
          ariaLabel: 'Удалить связь с объектом',
          iconProps: {
            iconName: 'DependencyRemove',
          },
        },
        title: 'DependencyRemove',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ebe: {
        id: 'l3vm4ebe',
        name: 'l3vm4ebf',
        props: {
          ariaLabel: 'Удалить объект',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ebg: {
        id: 'l3vm4ebg',
        name: 'l3vm4ebh',
        props: {
          iconProps: {
            iconName: 'PeopleAdd',
          },
        },
        title: 'PeopleAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ebi: {
        id: 'l3vm4ebi',
        name: 'l3vm4ebj',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ebk: {
        id: 'l3vm4ebk',
        name: 'l3vm4ebl',
        props: {
          label: 'Дата обнаружения',
        },
        title: 'discoveryDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3vm4ebm: {
        id: 'l3vm4ebm',
        name: 'l3vm4ebn',
        props: {
          tokens: {
            padding: '0px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3vm4eci'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4ebo: {
        id: 'l3vm4ebo',
        name: 'l3vm4ebp',
        props: {
          tokens: {
            padding: '0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3vm4eck'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4ebq: {
        id: 'l3vm4ebq',
        name: 'l3vm4ebr',
        props: {
          label: 'Дата окончания',
        },
        title: 'eventEndDt',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3vm4ebs: {
        id: 'l3vm4ebs',
        name: 'l3vm4ebt',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3vm4ecm'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4ebu: {
        id: 'l3vm4ebu',
        name: 'l3vm4ebv',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3vm4eco'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4ebw: {
        id: 'l3vm4ebw',
        name: 'basePotentialLossAmt',
        props: {
          label: 'Прогнозируемая сумма (RUB)',
          disabled: true,
          underlined: true,
          placeholder: 'Введите число',
        },
        title: 'basePotentialLossAmt',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3vm4eby: {
        id: 'l3vm4eby',
        name: 'co86_str_potentionalLoss_alg',
        props: {
          label: 'Алгоритм расчета прогнозируемой суммы',
          multiline: true,
        },
        title: 'co86_str_potentionalLoss_alg',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vm4ec0: {
        id: 'l3vm4ec0',
        name: 'co86_num_Operation_volume',
        props: {
          label: 'Объем операции (RUB)',
          placeholder: 'Введите число',
        },
        title: 'co86_num_Operation_volume',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3vm4ec2: {
        id: 'l3vm4ec2',
        name: 'l3vm4ec3',
        props: {
          children: ['Вложения'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3vm4ec4: {
        id: 'l3vm4ec4',
        name: 'l3vm4ec5',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3vm4ecq', 'l3vm4ecs', 'l3vm4ecu', 'l3vm4ecw'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4ec6: {
        id: 'l3vm4ec6',
        name: 'l3vm4ec7',
        props: {
          children: ['Комментарии'],
        },
        title: 'Label',
        compSchemaId: '02add00e-8d79-4aa3-944d-a538539a8096',
      },
      l3vm4ec8: {
        id: 'l3vm4ec8',
        name: 'l3vm4ec9',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3vm4ecy', 'l3vm4ed0'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4ece: {
        id: 'l3vm4ece',
        name: 'co86_bol_otherRisk',
        props: {
          label: 'Связанный риск',
        },
        title: 'co86_bol_otherRisk',
        bindings: 'bindings',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
        eventBindingSchema: {
          catalog: {
            ROOT_ID: {
              id: 'ROOT_ID',
              name: 'root',
              type: 'ROOT',
              children: ['l4ff399l'],
            },
            l4ff399l: {
              id: 'l4ff399l',
              name: 'onFieldLife',
              type: 'EVENT',
              children: ['l4ffsgup', 'l4ff3xgn'],
            },
            l4ff3xgn: {
              id: 'l4ff3xgn',
              name: 'setCompProp',
              type: 'ACTION',
              props: {
                prop: 'props.hidden',
                compId: 'l3vm4eda',
                typeof: 'boolean',
              },
              children: ['l4ff7846'],
            },
            l4ff7846: {
              id: 'l4ff7846',
              name: 'matchPattern',
              type: 'ASSERTION',
              props: {
                name: 'co86_bol_otherRisk',
                pattern: 'true',
              },
            },
            l4ffsgup: {
              id: 'l4ffsgup',
              name: 'setCompProp',
              type: 'ACTION',
              props: {
                prop: 'props.hidden',
                compId: 'l3vm4eda',
                typeof: 'boolean',
                booleanValue: true,
              },
              children: ['l4fft1ce'],
            },
            l4fft1ce: {
              id: 'l4fft1ce',
              name: 'matchPattern',
              type: 'ASSERTION',
              props: {
                name: 'co86_bol_otherRisk',
              },
            },
          },
        },
      },
      l3vm4eci: {
        id: 'l3vm4eci',
        name: 'l3vm4ecj',
        props: {
          label: 'Дата начала',
        },
        title: 'DatePicker',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
      },
      l3vm4eck: {
        id: 'l3vm4eck',
        name: 'co86_str_eventTime',
        props: {
          label: 'Время начала',
        },
        title: 'co86_str_eventTime',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vm4ecm: {
        id: 'l3vm4ecm',
        name: 'potentialLoss',
        props: {
          label: 'Прогнозируемая сумма',
          placeholder: 'Введите число',
        },
        title: 'potentialLoss',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3vm4eco: {
        id: 'l3vm4eco',
        name: 'potentialLossCurrencyCd',
        props: {
          label: 'Валюта',
          options: [
            {
              key: 'RUB',
              text: 'RUB',
            },
          ],
        },
        title: 'potentialLossCurrencyCd',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'RUB',
      },
      l3vm4ecq: {
        id: 'l3vm4ecq',
        name: 'l3vm4ecr',
        props: {
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'Upload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ecs: {
        id: 'l3vm4ecs',
        name: 'l3vm4ect',
        props: {
          iconProps: {
            iconName: 'BulkUpload',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ecu: {
        id: 'l3vm4ecu',
        name: 'l3vm4ecv',
        props: {
          iconProps: {
            iconName: 'DownloadDocument',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ecw: {
        id: 'l3vm4ecw',
        name: 'l3vm4ecx',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'IconButton',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ecy: {
        id: 'l3vm4ecy',
        name: 'l3vm4ecz',
        props: {
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'CommentAdd',
          },
        },
        title: 'CommentAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ed0: {
        id: 'l3vm4ed0',
        name: 'l3vm4ed1',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ed2: {
        id: 'l3vm4ed2',
        name: 'l3vm4ed3',
        props: {
          ariaLabel: 'Upload File',
          iconProps: {
            iconName: 'Upload',
          },
        },
        title: 'Upload',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ed4: {
        id: 'l3vm4ed4',
        name: 'l3vm4ed5',
        props: {
          iconProps: {
            iconName: 'DownloadDocument',
          },
        },
        title: 'DownloadDocument',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ed6: {
        id: 'l3vm4ed6',
        name: 'l3vm4ed7',
        props: {
          iconProps: {
            iconName: 'BulkUpload',
          },
        },
        title: 'BulkUpload',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4ed8: {
        id: 'l3vm4ed8',
        name: 'l3vm4ed9',
        props: {
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vm4eda: {
        id: 'l3vm4eda',
        name: 'l3vm4edb',
        props: {
          hidden: true,
          tokens: {
            padding: '0 0 0 26px ',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3vm4edc', 'l4fg9n3m'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm4edc: {
        id: 'l3vm4edc',
        name: 'values.co86_opm_otherRisk',
        props: {
          options: [
            {
              key: 'OBJ1',
              text: 'Кредитный риск',
            },
            {
              key: 'OBJ2',
              text: 'Рыночный риск',
            },
            {
              key: 'OBJ3',
              text: 'Риск ликвидности',
            },
            {
              key: 'OBJ4',
              text: 'Стратегический риск',
            },
            {
              key: 'OBJ5',
              text: 'Репутационный риск',
            },
            {
              key: 'OBJ6',
              text: 'Регуляторный риск',
            },
            {
              key: 'Other',
              text: 'Другое',
            },
          ],
          childrenGap: '16',
          defaultValue: '123',
        },
        title: 'co86_opm_otherRisk',
        l4fkgrto: {
          catalog: {
            ROOT_ID: {
              id: 'ROOT_ID',
              name: 'and',
              type: 'OPERATOR',
              children: ['l4fki4c0'],
            },
            l4fki4c0: {
              id: 'l4fki4c0',
              name: 'notUndefined',
              type: 'ASSERTION',
            },
          },
          eventToShowError: 'onInit',
        },
        compSchemaId: '5fb7aae3-7a53-4573-9641-2beaebe7b836',
        eventBindingSchema: {
          catalog: {
            ROOT_ID: {
              id: 'ROOT_ID',
              name: 'root',
              type: 'ROOT',
              children: ['l4fg93vb'],
            },
            l4fg93vb: {
              id: 'l4fg93vb',
              name: 'onFieldLife',
              type: 'EVENT',
              children: ['l4fgb3da', 'l4fg9fd9'],
            },
            l4fg9fd9: {
              id: 'l4fg9fd9',
              name: 'setCompProp',
              type: 'ACTION',
              props: {
                prop: 'props.hidden',
                compId: 'l4fg9n3m',
                typeof: 'boolean',
              },
              children: ['l4fga37d'],
            },
            l4fga37d: {
              id: 'l4fga37d',
              name: 'matchPattern',
              type: 'ASSERTION',
              props: {
                name: 'values.co86_opm_otherRisk',
                pattern: 'Other',
              },
            },
            l4fgb3da: {
              id: 'l4fgb3da',
              name: 'setCompProp',
              type: 'ACTION',
              props: {
                prop: 'props.hidden',
                compId: 'l4fg9n3m',
                typeof: 'boolean',
                booleanValue: true,
              },
            },
          },
        },
        assertionBindingSchema: {
          catalog: {
            ROOT_ID: {
              id: 'ROOT_ID',
              name: 'and',
              type: 'OPERATOR',
              children: ['l4fkjkz8'],
            },
            l4fkjkz8: {
              id: 'l4fkjkz8',
              name: 'null',
              type: 'ASSERTION',
            },
          },
          eventToShowError: 'onTouched',
        },
      },
      l3vm4ede: {
        id: 'l3vm4ede',
        name: 'values.co86_str_otherRisk',
        props: {
          label: 'Другое',
        },
        title: 'co86_str_otherRisk',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        assertionBindingSchema: {
          catalog: {
            ROOT_ID: {
              id: 'ROOT_ID',
              name: 'and',
              type: 'OPERATOR',
              children: ['l4fiq5fv'],
            },
            l4fiq5fv: {
              id: 'l4fiq5fv',
              name: 'string',
              type: 'ASSERTION',
            },
          },
          eventToShowError: 'onVisited',
        },
      },
      l3vocsub: {
        id: 'l3vocsub',
        name: 'l3vocsuc',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3vocsud', 'l3vocsuf', 'l3vocsuh', 'l3vocsuj'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vocsud: {
        id: 'l3vocsud',
        name: 'l3vocsue',
        props: {
          ariaLabel: 'Создать объект',
          iconProps: {
            iconName: 'Add',
          },
        },
        title: 'Add',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vocsuf: {
        id: 'l3vocsuf',
        name: 'l3vocsug',
        props: {
          ariaLabel: 'Связать объект',
          iconProps: {
            iconName: 'DependencyAdd',
          },
        },
        title: 'DependencyAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vocsuh: {
        id: 'l3vocsuh',
        name: 'l3vocsui',
        props: {
          ariaLabel: 'Удалить связь с объектом',
          iconProps: {
            iconName: 'DependencyRemove',
          },
        },
        title: 'DependencyRemove',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vocsuj: {
        id: 'l3vocsuj',
        name: 'l3vocsuk',
        props: {
          ariaLabel: 'Удалить объект',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vod3ra: {
        id: 'l3vod3ra',
        name: 'l3vod3rb',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3vm4e8a', 'l3vocsub'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3voo02v: {
        id: 'l3voo02v',
        name: 'l3voo02w',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3vod3ra', 'l3vm4e8c'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vp8cdt: {
        id: 'l3vp8cdt',
        name: 'l3vp8cdu',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3vp8s94', 'l3vm4e8g'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vp8n5a: {
        id: 'l3vp8n5a',
        name: 'l3vp8n5b',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3vp8n5c', 'l3vp8n5e', 'l3vp8n5g', 'l3vp8n5i'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vp8n5c: {
        id: 'l3vp8n5c',
        name: 'l3vp8n5d',
        props: {
          ariaLabel: 'Создать объект',
          iconProps: {
            iconName: 'Add',
          },
        },
        title: 'Add',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vp8n5e: {
        id: 'l3vp8n5e',
        name: 'l3vp8n5f',
        props: {
          ariaLabel: 'Связать объект',
          iconProps: {
            iconName: 'DependencyAdd',
          },
        },
        title: 'DependencyAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vp8n5g: {
        id: 'l3vp8n5g',
        name: 'l3vp8n5h',
        props: {
          ariaLabel: 'Удалить связь с объектом',
          iconProps: {
            iconName: 'DependencyRemove',
          },
        },
        title: 'DependencyRemove',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vp8n5i: {
        id: 'l3vp8n5i',
        name: 'l3vp8n5j',
        props: {
          ariaLabel: 'Удалить объект',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vp8s94: {
        id: 'l3vp8s94',
        name: 'l3vp8s95',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3vm4e8e', 'l3vp8n5a'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vpa5ba: {
        id: 'l3vpa5ba',
        name: 'l3vpa5bb',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3vm4e8i', 'l3vpaez1'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vpa6ml: {
        id: 'l3vpa6ml',
        name: 'l3vpa6mm',
        title: 'Stack',
        children: ['l3vpa5ba', 'l3vm4e8k'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vpaez1: {
        id: 'l3vpaez1',
        name: 'l3vpaez2',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3vpaez3', 'l3vpaez5', 'l3vpaez7', 'l3vpaez9'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vpaez3: {
        id: 'l3vpaez3',
        name: 'l3vpaez4',
        props: {
          ariaLabel: 'Создать объект',
          iconProps: {
            iconName: 'Add',
          },
        },
        title: 'Add',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vpaez5: {
        id: 'l3vpaez5',
        name: 'l3vpaez6',
        props: {
          ariaLabel: 'Связать объект',
          iconProps: {
            iconName: 'DependencyAdd',
          },
        },
        title: 'DependencyAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vpaez7: {
        id: 'l3vpaez7',
        name: 'l3vpaez8',
        props: {
          ariaLabel: 'Удалить связь с объектом',
          iconProps: {
            iconName: 'DependencyRemove',
          },
        },
        title: 'DependencyRemove',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vpaez9: {
        id: 'l3vpaez9',
        name: 'l3vpaeza',
        props: {
          ariaLabel: 'Удалить объект',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vpeaov: {
        id: 'l3vpeaov',
        name: 'l3vpeaow',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3vpei0e', 'l3vm4e8o'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vpei0e: {
        id: 'l3vpei0e',
        name: 'l3vpei0f',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3vm4e8m', 'l3vpel7d'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vpel7d: {
        id: 'l3vpel7d',
        name: 'l3vpel7e',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3vpel7f', 'l3vpel7h', 'l3vpel7j', 'l3vpel7l'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vpel7f: {
        id: 'l3vpel7f',
        name: 'l3vpel7g',
        props: {
          ariaLabel: 'Создать объект',
          iconProps: {
            iconName: 'Add',
          },
        },
        title: 'Add',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vpel7h: {
        id: 'l3vpel7h',
        name: 'l3vpel7i',
        props: {
          ariaLabel: 'Связать объект',
          iconProps: {
            iconName: 'DependencyAdd',
          },
        },
        title: 'DependencyAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vpel7j: {
        id: 'l3vpel7j',
        name: 'l3vpel7k',
        props: {
          ariaLabel: 'Удалить связь с объектом',
          iconProps: {
            iconName: 'DependencyRemove',
          },
        },
        title: 'DependencyRemove',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vpel7l: {
        id: 'l3vpel7l',
        name: 'l3vpel7m',
        props: {
          ariaLabel: 'Удалить объект',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vpivfr: {
        id: 'l3vpivfr',
        name: 'l3vpivfs',
        props: {
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack',
        children: ['l3vpiwtr', 'l3vm4e8s'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vpiwtr: {
        id: 'l3vpiwtr',
        name: 'l3vpiwts',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: 'Stack',
        children: ['l3vm4e8q', 'l3vpjbcb'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vpjbcb: {
        id: 'l3vpjbcb',
        name: 'l3vpjbcc',
        props: {
          tokens: {
            padding: '0',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l3vpjbcd', 'l3vpjbcf', 'l3vpjbch', 'l3vpjbcj'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vpjbcd: {
        id: 'l3vpjbcd',
        name: 'l3vpjbce',
        props: {
          ariaLabel: 'Создать объект',
          iconProps: {
            iconName: 'Add',
          },
        },
        title: 'Add',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vpjbcf: {
        id: 'l3vpjbcf',
        name: 'l3vpjbcg',
        props: {
          ariaLabel: 'Связать объект',
          iconProps: {
            iconName: 'DependencyAdd',
          },
        },
        title: 'DependencyAdd',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vpjbch: {
        id: 'l3vpjbch',
        name: 'l3vpjbci',
        props: {
          ariaLabel: 'Удалить связь с объектом',
          iconProps: {
            iconName: 'DependencyRemove',
          },
        },
        title: 'DependencyRemove',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vpjbcj: {
        id: 'l3vpjbcj',
        name: 'l3vpjbck',
        props: {
          ariaLabel: 'Удалить объект',
          iconProps: {
            iconName: 'Delete',
          },
        },
        title: 'Delete',
        compSchemaId: 'fc0872ac-b8ec-414f-9114-d61ae89c0a7d',
      },
      l3vq2nvf: {
        id: 'l3vq2nvf',
        name: 'co86_opm_oprisk_objects',
        props: {
          options: [
            {
              key: 'OBJ1',
              text: 'Здания',
            },
            {
              key: 'OBJ2',
              text: 'Земельные участки',
            },
            {
              key: 'OBJ3',
              text: 'Транспортные средства',
            },
            {
              key: 'OBJ4',
              text: 'Банкоматы',
            },
            {
              key: 'OBJ5',
              text: 'Инфокиоски',
            },
            {
              key: 'OBJ6',
              text: 'Вычислительная техника',
            },
            {
              key: 'OBJ7',
              text: 'Иное оборудование (кроме банкоматов и вычислительной техники)',
            },
            {
              key: 'OBJ8',
              text: 'Мебель и предметы интерьера',
            },
            {
              key: 'OBJ9',
              text: 'Прочие материальные активы',
            },
            {
              key: 'OBJ10',
              text: 'Наличные денежные средства',
            },
            {
              key: 'OBJ11',
              text: 'Ценности в кассе и подотчете (карты, бланки ценных бумаг, монеты иностранных государств и тд.)',
            },
            {
              key: 'OBJ12',
              text: 'Драгоценные металлы в слитках',
            },
            {
              key: 'OBJ13',
              text: 'Ценные бумаги (приобретенные и выпущенные) - кроме рыночного риска',
            },
            {
              key: 'OBJ14',
              text: 'Денежные средства размещенные (в т.ч. кредиты ФЛ,  ЮЛ, МБК) - кроме кредитного риска',
            },
            {
              key: 'OBJ15',
              text: 'Прочая дебиторская задолженность',
            },
            {
              key: 'OBJ16',
              text: 'Прочая кредиторская задолженность',
            },
            {
              key: 'OBJ17',
              text: 'Права использования (неисключительные права) программного обеспечения и/или баз данных',
            },
            {
              key: 'OBJ18',
              text: 'Исключительные права на программное обеспечение и/или базы данных',
            },
            {
              key: 'OBJ19',
              text: 'Права на товарные знаки',
            },
            {
              key: 'OBJ20',
              text: 'Прочие нематериальные активы',
            },
            {
              key: 'OBJ21',
              text: 'Другое',
            },
          ],
          childrenGap: '6',
        },
        title: 'co86_opm_oprisk_objects',
        compSchemaId: '5fb7aae3-7a53-4573-9641-2beaebe7b836',
      },
      l3vq3i99: {
        id: 'l3vq3i99',
        name: 'l3vq3i9a',
        props: {
          isExpanded: true,
          labelExpanded: 'Свернуть',
          labelCollapsed: 'Развернуть',
        },
        title: 'Collapse',
        bindings: 'bindings',
        children: ['l3vq2nvf', 'l3x2g1cb'],
        compSchemaId: '0a4d5bbc-a6c7-487a-88cc-af71aece38b7',
      },
      l3x1anl7: {
        id: 'l3x1anl7',
        name: 'l3x1anl8',
        props: {
          tokens: {
            padding: '16px 8px 0px',
          },
        },
        title: 'Stack',
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3x1y33d: {
        id: 'l3x1y33d',
        name: 'l3x1y33e',
        props: {
          isExpanded: true,
          labelExpanded: 'Классификация',
          labelCollapsed: 'Классификация',
        },
        title: 'Collapse',
        children: ['l3vm4e3u'],
        compSchemaId: '0a4d5bbc-a6c7-487a-88cc-af71aece38b7',
      },
      l3x1ys86: {
        id: 'l3x1ys86',
        name: 'l3x1ys87',
        props: {
          horizontal: true,
        },
        title: 'StatusSection',
        children: ['l4f6x8qh', 'l3vm4e3s'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3x2b278: {
        id: 'l3x2b278',
        name: 'co86_str_oprisk_objects',
        props: {
          label: 'Другое',
        },
        title: 'co86_str_oprisk_objects',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3x2g1cb: {
        id: 'l3x2g1cb',
        name: 'l3x2g1cc',
        props: {
          tokens: {
            padding: '6px 0px 0px',
          },
        },
        title: 'Stack',
        children: ['l3x2b278'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l43swq66: {
        id: 'l43swq66',
        name: 'l43swq67',
        props: {
          tokens: {
            childrenGap: '32px',
          },
          horizontal: true,
          horizontalAlign: 'space-between',
        },
        title: ' NameSection',
        children: ['l43sz20l'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l43sz20l: {
        id: 'l43sz20l',
        name: 'l43sz20m',
        props: {
          style: {
            minWidth: '50%',
          },
          tokens: {
            padding: '0 16px 0 0',
            childrenGap: '24px',
          },
        },
        title: 'Left',
        children: ['l4edoptb'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4edoptb: {
        id: 'l4edoptb',
        name: 'values.custObjNm',
        props: {
          label: 'Название',
          underlined: true,
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'Инцидент ОР',
        assertionBindingSchema: {
          catalog: {
            ROOT_ID: {
              id: 'ROOT_ID',
              name: 'and',
              type: 'OPERATOR',
              children: ['l4edrbhu'],
            },
            l4edrbhu: {
              id: 'l4edrbhu',
              name: 'string',
              type: 'ASSERTION',
              children: [],
            },
          },
          eventToShowError: 'onTouched',
        },
      },
      l4eja0zy: {
        id: 'l4eja0zy',
        name: 'l4eja0zz',
        props: {
          tokens: {
            padding: '16px 8px',
            childrenGap: '32px',
          },
        },
        title: 'Padding',
        children: [
          'l3vm4e52',
          'l3vm4eb2',
          'l3vm4e9m',
          'l3vm4e9s',
          'l3vm4e56',
          'l3vm4e6s',
          'l3vm4e6y',
          'l3vm4e5e',
          'l3vm4e76',
          'l3vm4e5k',
          'l3vm4e7c',
          'l3vm4e5q',
        ],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4f6x8qh: {
        id: 'l4f6x8qh',
        name: 'l4f6x8qi',
        props: {
          style: {
            minWidth: '25%',
          },
          tokens: {
            padding: '0 24px 0 0',
          },
        },
        title: 'Stack',
        children: ['l3vm4e46'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4fce1yj: {
        id: 'l4fce1yj',
        name: 'l4fce1yk',
        props: {
          className: 'headerPortalCenter',
        },
        title: 'Portal',
        children: ['l4fcgcbu'],
        compSchemaId: '1a886589-c4ea-429c-ba54-640c30ed1885',
      },
      l4fcgcbu: {
        id: 'l4fcgcbu',
        name: 'l4fcgcbv',
        props: {
          style: {
            minWidth: '100%',
          },
          tokens: {
            padding: '0 32px 0 0 ',
            childrenGap: '6px',
          },
          horizontal: true,
          disableShrink: true,
          horizontalAlign: 'end',
        },
        title: 'Stack',
        children: ['l4gyll6o'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4fg9n3m: {
        id: 'l4fg9n3m',
        name: 'l4fg9n3n',
        props: {
          hidden: true,
        },
        title: 'Stack',
        children: ['l3vm4ede'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4gyll6o: {
        id: 'l4gyll6o',
        props: {
          form: 'main',
          text: 't.buttons.save',
        },
        title: 'Save',
        compSchemaId: 'a8461c55-eeb9-40de-8920-cb0444c5ab0b',
      },
    },
  },
  '0a4d5bbc-a6c7-487a-88cc-af71aece38b7': {
    id: '0a4d5bbc-a6c7-487a-88cc-af71aece38b7',
    title: 'Collapse',
    componentName: 'Collapse',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: ['l3wx3frj', 'l3vjb89v', 'l3wx507h', 'l3wx4ld4', 'l3wx4zjp', 'l3wx4t2w'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3lirrqt: {
        id: 'l3lirrqt',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3nkjwik: {
        id: 'l3nkjwik',
        name: 'props.labelCollapsed',
        props: {
          label: 'labelCollapsed',
        },
        title: 'labelCollapsed',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3nkku8k: {
        id: 'l3nkku8k',
        name: 'props.labelExpanded',
        props: {
          label: 'labelExpanded',
        },
        title: 'labelExpanded',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3nl0pdl: {
        id: 'l3nl0pdl',
        name: 'props.isExpanded',
        props: {
          label: 'isExpanded',
        },
        title: 'isExpanded',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3vjb89v: {
        id: 'l3vjb89v',
        name: 'l3vjb89w',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3lirrqt', 'l3nkjwik', 'l3nkku8k'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vk2c64: {
        id: 'l3vk2c64',
        name: 'eventBindingSchema',
        title: 'Bindings',
        compSchemaId: 'ebeb0b32-3298-4da3-b67b-de34ee852fa1',
      },
      l3wx3frj: {
        id: 'l3wx3frj',
        name: 'l3wx3frk',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wx4ld4: {
        id: 'l3wx4ld4',
        name: 'l3wx4ld5',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l3nl0pdl'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wx4t2w: {
        id: 'l3wx4t2w',
        name: 'l3wx4t2x',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l3vk2c64'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wx4zjp: {
        id: 'l3wx4zjp',
        name: 'l3wx4zjq',
        props: {
          label: 'Bindings',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wx507h: {
        id: 'l3wx507h',
        name: 'l3wx507i',
        props: {
          label: 'Props',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
    },
  },
  '7021a575-562a-42f8-a640-4292afb2977e': {
    id: '7021a575-562a-42f8-a640-4292afb2977e',
    title: 'Training',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '20px',
            childrenGap: '8',
          },
        },
        title: 'stackRoot',
        children: ['l4gwhiiv', 'l45gg3ha'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l45gg3ha: {
        id: 'l45gg3ha',
        name: 'l45gg3hb',
        props: {
          hidden: true,
          tokens: {
            padding: '0',
          },
        },
        title: 'Stack string',
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4gwhiiv: {
        id: 'l4gwhiiv',
        name: 'l4gwhiiw',
        title: 'DatePicker',
        compSchemaId: '8550ad0f-ee1f-448c-a465-458d69b69e0c',
        defaultValue: '1654981200',
      },
    },
  },
  '5778a519-36c7-49f5-a36a-1b5ac280b51b': {
    id: '5778a519-36c7-49f5-a36a-1b5ac280b51b',
    title: 'Table',
    componentName: 'Table',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: [
          'l3wo5pso',
          'l3wo5yzd',
          'l3wo6byd',
          'l3wyonns',
          'l3wyoekb',
          'l3wo6k78',
          'l3wocqb4',
          'l3wqdl2w',
          'l3wodkrh',
          'l3wqe01v',
        ],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32z9evy: {
        id: 'l32z9evy',
        name: 'injections[0].from',
        props: {
          label: 'inject from',
        },
        title: 'inject from',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l32za1wa: {
        id: 'l32za1wa',
        name: 'injections[0].to',
        props: {
          label: 'inject to',
        },
        title: 'inject to',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l34jmnpk: {
        id: 'l34jmnpk',
        name: 'props.items',
        title: 'items',
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34jn3df: {
        id: 'l34jn3df',
        name: 'props.columns',
        props: {
          label: 'columns',
        },
        title: 'columns',
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l34k0r3f: {
        id: 'l34k0r3f',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l38s06xu: {
        id: 'l38s06xu',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l38s0nfb: {
        id: 'l38s0nfb',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3cos3vi: {
        id: 'l3cos3vi',
        name: 'props.columnReorderOptions',
        props: {
          label: 'columnReorderOptions',
        },
        title: 'columnReorderOptions',
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l3d1e7v1: {
        id: 'l3d1e7v1',
        name: 'props.compact',
        props: {
          label: 'compact',
          boxSide: 'start',
        },
        title: 'compact',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3d5xyms: {
        id: 'l3d5xyms',
        name: 'props.isFixed',
        props: {
          label: 'isFixed',
          boxSide: 'start',
        },
        title: 'isFixed',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3wo5pso: {
        id: 'l3wo5pso',
        name: 'l3wo5psp',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wo5yzd: {
        id: 'l3wo5yzd',
        name: 'l3wo5yze',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l38s06xu', 'l38s0nfb', 'l34k0r3f'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wo6byd: {
        id: 'l3wo6byd',
        name: 'l3wo6bye',
        props: {
          label: 'Injections',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wo6k78: {
        id: 'l3wo6k78',
        name: 'l3wo6k79',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3d1e7v1', 'l3d5xyms'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wocqb4: {
        id: 'l3wocqb4',
        name: 'l3wocqb5',
        props: {
          label: 'Items',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wodkrh: {
        id: 'l3wodkrh',
        name: 'l3wodkri',
        props: {
          label: 'Columns',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wqdl2w: {
        id: 'l3wqdl2w',
        name: 'l3wqdl2x',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l34jmnpk'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wqe01v: {
        id: 'l3wqe01v',
        name: 'l3wqe01w',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l34jn3df', 'l3cos3vi'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wyoekb: {
        id: 'l3wyoekb',
        name: 'l3wyoekc',
        props: {
          label: 'Props',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wyonns: {
        id: 'l3wyonns',
        name: 'l3wyonnt',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l32z9evy', 'l32za1wa'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
    },
  },
  'ee4254ef-9099-4243-be68-51ce733b3376': {
    id: 'ee4254ef-9099-4243-be68-51ce733b3376',
    title: 'PrimaryButton',
    componentName: 'PrimaryButton',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        props: {
          tokens: {
            padding: '32px 0 0 0',
          },
        },
        title: 'stackRoot',
        children: ['l3wxklia', 'l3wxj875', 'l3wxl956', 'l3wxkyy4'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l346aszw: {
        id: 'l346aszw',
        name: 'primary',
        props: {
          label: 'primary',
          boxSide: 'start',
        },
        title: 'primary',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3bf1w2o: {
        id: 'l3bf1w2o',
        name: 'props.type',
        props: {
          label: 'type',
          options: [
            {
              key: 'reset',
              text: 'reset',
            },
            {
              key: 'submit',
              text: 'submit',
            },
            {
              key: 'button',
              text: 'button',
            },
          ],
        },
        title: 'type',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
        defaultValue: 'button',
      },
      l3wxj875: {
        id: 'l3wxj875',
        name: 'l3wxj876',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['9ba7af9ap8942', 'ee4254efh9099'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxklia: {
        id: 'l3wxklia',
        name: 'l3wxklib',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxkyy4: {
        id: 'l3wxkyy4',
        name: 'l3wxkyy5',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['l3bf1w2o', 'l4fd81yi', 'ee4254efp9099', 'l346aszw'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxl956: {
        id: 'l3wxl956',
        name: 'l3wxl957',
        props: {
          label: 'Props',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4fd81yi: {
        id: 'l4fd81yi',
        name: 'props.form',
        props: {
          label: 'form',
        },
        title: 'form',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      '9ba7af9ap8942': {
        id: '9ba7af9ap8942',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      ee4254efh9099: {
        id: 'ee4254efh9099',
        name: 'props.children',
        props: {
          label: 'text',
        },
        title: 'text',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      ee4254efp9099: {
        id: 'ee4254efp9099',
        name: 'props.disabled',
        type: 'checkbox',
        props: {
          label: 'disabled',
        },
        title: 'disabled',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
    },
  },
  '1a886589-c4ea-429c-ba54-640c30ed1885': {
    id: '1a886589-c4ea-429c-ba54-640c30ed1885',
    title: 'Portal',
    componentName: 'Portal',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
          },
        },
        title: 'stackRoot',
        children: ['l4fbvp9v', 'l4fbvp9x', 'l4fbvpa1', 'l4fbvp9z'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l4fbvp9v: {
        id: 'l4fbvp9v',
        name: 'l4fbvp9w',
        props: {
          label: 'Main',
        },
        title: 'Main',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4fbvp9x: {
        id: 'l4fbvp9x',
        name: 'l4fbvp9y',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['l4fbvpa3'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4fbvp9z: {
        id: 'l4fbvp9z',
        name: 'l4fbvpa0',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['l4fbvpa9'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4fbvpa1: {
        id: 'l4fbvpa1',
        name: 'l4fbvpa2',
        props: {
          label: 'Props',
        },
        title: 'Props',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4fbvpa3: {
        id: 'l4fbvpa3',
        name: 'l4fbvpa4',
        props: {
          label: 'title',
          multiline: false,
        },
        title: 'title',
        l3vf8mtb: {
          ROOT_ID: {
            id: 'ROOT_ID',
            name: 'root',
            type: 'ROOT',
            children: ['l3vfb9k6'],
          },
          l3vfb9k6: {
            id: 'l3vfb9k6',
            name: 'onChange',
            type: 'EVENT',
            children: ['l3vfdrnt'],
          },
          l3vfdrnt: {
            id: 'l3vfdrnt',
            name: 'setValue',
            type: 'ACTION',
            props: {
              name: 'props.label',
            },
          },
        },
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l4fbvpa9: {
        id: 'l4fbvpa9',
        name: 'props.className',
        props: {
          label: 'class',
        },
        title: 'class',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  '162b65ee-08d2-4c4e-84fc-e9583958b88c': {
    id: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
    title: 'Stack',
    componentName: 'Stack',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        title: 'stackRoot',
        children: ['l3wxn43p', 'l3wxmv01', 'l3wxqgwh', 'l3wxqwrt', 'l3wxp1nl', 'l3wxpefm'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l344kvqs: {
        id: 'l344kvqs',
        name: 'title',
        props: {
          label: 'title',
          underlined: false,
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l344mcvn: {
        id: 'l344mcvn',
        name: 'props.tokens.padding',
        props: {
          label: 'padding',
          required: false,
        },
        title: 'padding',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l345biyu: {
        id: 'l345biyu',
        name: 'props.horizontal',
        props: {
          label: 'horizontal',
          boxSide: 'start',
        },
        title: 'horizontal',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l368zif5: {
        id: 'l368zif5',
        name: 'props.style.minWidth',
        props: {
          label: 'width',
        },
        title: 'width',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3694gsk: {
        id: 'l3694gsk',
        name: 'props.tokens.childrenGap',
        props: {
          label: 'children gap',
        },
        title: 'children gap',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l36ajzcb: {
        id: 'l36ajzcb',
        name: 'props.tokens.maxWidth',
        props: {
          label: 'max width',
        },
        title: 'max width',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l38j40cj: {
        id: 'l38j40cj',
        name: 'props.horizontalAlign',
        props: {
          label: 'horizontal align',
        },
        title: 'horizontal align',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3d05xmk: {
        id: 'l3d05xmk',
        name: 'props.disableShrink',
        props: {
          label: 'disableShrink',
          boxSide: 'start',
        },
        title: 'disableShrink',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3d15ybu: {
        id: 'l3d15ybu',
        name: 'props.tokens.maxHeight',
        props: {
          label: 'max height',
        },
        title: 'max height',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3wxmv01: {
        id: 'l3wxmv01',
        name: 'l3wxmv02',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['l344kvqs'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxn43p: {
        id: 'l3wxn43p',
        name: 'l3wxn43q',
        props: {
          label: 'Main',
        },
        title: 'Main',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxp1nl: {
        id: 'l3wxp1nl',
        name: 'l3wxp1nm',
        props: {
          label: 'Props',
        },
        title: 'Props',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxpefm: {
        id: 'l3wxpefm',
        name: 'l3wxpefn',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['l3d05xmk', 'l345biyu', 'l45gaz2e'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxqgwh: {
        id: 'l3wxqgwh',
        name: 'l3wxqgwi',
        props: {
          label: 'Layout',
        },
        title: 'Layout',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxqwrt: {
        id: 'l3wxqwrt',
        name: 'l3wxqwru',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['l344mcvn', 'l368zif5', 'l36ajzcb', 'l3d15ybu', 'l3694gsk', 'l38j40cj', 'l4gynyfu', 'l4f65oq7'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l45gaz2e: {
        id: 'l45gaz2e',
        name: 'props.hidden',
        props: {
          label: 'hidden',
        },
        title: 'hidden',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l4f65oq7: {
        id: 'l4f65oq7',
        name: 'props.grop',
        props: {
          label: 'grow',
        },
        title: 'grow',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l4gynyfu: {
        id: 'l4gynyfu',
        name: 'props.verticalAlign',
        props: {
          label: 'vertical align',
        },
        title: 'vertical align',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  '5fb7aae3-7a53-4573-9641-2beaebe7b836': {
    id: '5fb7aae3-7a53-4573-9641-2beaebe7b836',
    title: 'MultiCheckbox',
    componentName: 'MultiCheckbox',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: [
          'l3wxd7l4',
          'l3wxgwyb',
          'l3wxie14',
          'l3wxj2dp',
          'l3wxfy52',
          'l3wxkkgt',
          'l4ffuzap',
          'l4fg05ix',
          'l4fkgrtn',
        ],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3vb86eh: {
        id: 'l3vb86eh',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vb9ekx: {
        id: 'l3vb9ekx',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vbangq: {
        id: 'l3vbangq',
        name: 'props.options',
        props: {
          label: 'options',
        },
        title: 'options',
        compSchemaId: 'f278867b-106c-4f95-b425-32a7c14a3e1a',
      },
      l3vbiyz8: {
        id: 'l3vbiyz8',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vc0w8o: {
        id: 'l3vc0w8o',
        name: 'injections[0].from',
        props: {
          label: 'injection from',
        },
        title: 'injection from',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3vc1unn: {
        id: 'l3vc1unn',
        name: 'injections[0].to',
        props: {
          label: 'injection to',
        },
        title: 'injection to',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l3wt405l: {
        id: 'l3wt405l',
        name: 'props.childrenGap',
        props: {
          label: 'childrenGap',
        },
        title: 'childrenGap',
        compSchemaId: '10f4b915-d03a-4849-9a3e-06bc9abc66d0',
      },
      l3wxd7l4: {
        id: 'l3wxd7l4',
        name: 'l3wxd7l5',
        props: {
          label: 'Main',
          padding: '0 0 0 4px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxfy52: {
        id: 'l3wxfy52',
        name: 'l3wxfy53',
        props: {
          label: 'Injections',
          padding: '0 0 0 8px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxgwyb: {
        id: 'l3wxgwyb',
        name: 'l3wxgwyc',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l3vbiyz8', 'l3vb86eh', 'l3vb9ekx'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxie14: {
        id: 'l3wxie14',
        name: 'l3wxie15',
        props: {
          label: 'Options',
          padding: '0 0 0 8px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxj2dp: {
        id: 'l3wxj2dp',
        name: 'l3wxj2dq',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l3vbangq', 'l3wt405l'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxkkgt: {
        id: 'l3wxkkgt',
        name: 'l3wxkkgu',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l3vc0w8o', 'l3vc1unn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4ffuzap: {
        id: 'l4ffuzap',
        name: 'l4ffuzaq',
        props: {
          label: 'Bindings',
          padding: '0 0 0 8px',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4ffzxl9: {
        id: 'l4ffzxl9',
        name: 'eventBindingSchema',
        title: 'EventBindingEditor',
        compSchemaId: 'ebeb0b32-3298-4da3-b67b-de34ee852fa1',
      },
      l4fg05ix: {
        id: 'l4fg05ix',
        name: 'l4fg05iy',
        props: {
          tokens: {
            padding: '12px 24px 24px',
          },
        },
        title: 'Stack',
        children: ['l4ffzxl9'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4fkgrtn: {
        id: 'l4fkgrtn',
        name: 'assertionBindingSchema',
        props: {
          label: 'Validator',
        },
        title: 'Validator',
        compSchemaId: 'e24fad61-576a-421d-9273-02b3c365c15c',
      },
    },
  },
  'ee4254ef-9099-9089-7468-89ce733b3376': {
    id: 'ee4254ef-9099-9089-7468-89ce733b3376',
    title: 'Checkbox',
    componentName: 'Checkbox',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        props: {
          tokens: {
            padding: '32px 0 0 0',
          },
        },
        title: 'stackRoot',
        children: ['l3wxqrsh', 'l3wxqwi1', 'l3wxsg24', 'l3wxsnon', 'l3wxt0x0', 'l3wxtb3p', 'l4go2myg', 'l4go2oe9'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l32u8w8k: {
        id: 'l32u8w8k',
        name: 'props.dontConverFalseToUndefined',
        props: {
          label: 'don`t convert false to undefined',
          boxSide: 'start',
        },
        title: 'dontConverFalseToUndefined',
        l32tx8ac: false,
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3vk5rtn: {
        id: 'l3vk5rtn',
        name: 'eventBindingSchema',
        props: {
          label: 'events',
        },
        title: 'Bindings',
        compSchemaId: 'ebeb0b32-3298-4da3-b67b-de34ee852fa1',
        assertionBindingSchema: {
          catalog: {
            ROOT_ID: {
              id: 'ROOT_ID',
              name: 'and',
              type: 'OPERATOR',
              children: ['l4cp01qy'],
            },
            l4cp01qy: {
              id: 'l4cp01qy',
              name: 'eventBindings',
              type: 'ASSERTION',
            },
          },
          eventToShowError: 'onTouched',
        },
      },
      l3wxqrsh: {
        id: 'l3wxqrsh',
        name: 'l3wxqrsi',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxqwi1: {
        id: 'l3wxqwi1',
        name: 'l3wxqwi2',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['1a61d43ck6f0f', 'dcc05499a6c54', '9a4cd3e0s4b6r'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxsg24: {
        id: 'l3wxsg24',
        name: 'l3wxsg25',
        props: {
          label: 'Props',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxsnon: {
        id: 'l3wxsnon',
        name: 'l3wxsnoo',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Stack',
        children: ['l4fngvql', 'l32u8w8k', 'ee4254efp9099'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wxt0x0: {
        id: 'l3wxt0x0',
        name: 'l3wxt0x1',
        props: {
          label: 'Bindings',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3wxtb3p: {
        id: 'l3wxtb3p',
        name: 'l3wxtb3q',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3vk5rtn'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4fngvql: {
        id: 'l4fngvql',
        name: 'default value',
        props: {
          label: 'default value',
          boxSide: 'start',
        },
        title: 'default value',
        l32tx8ac: false,
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l4go2jax: {
        id: 'l4go2jax',
        name: 'assertionBindingSchema',
        props: {
          label: 'validator',
        },
        title: 'Validator',
        compSchemaId: 'e24fad61-576a-421d-9273-02b3c365c15c',
      },
      l4go2myg: {
        id: 'l4go2myg',
        name: 'l4go2myh',
        props: {
          label: 'Assertion',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4go2oe9: {
        id: 'l4go2oe9',
        name: 'l4go2oea',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l4go2jax'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      '1a61d43ck6f0f': {
        id: '1a61d43ck6f0f',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      '9a4cd3e0s4b6r': {
        id: '9a4cd3e0s4b6r',
        name: 'props.label',
        props: {
          label: 'label',
        },
        title: 'label',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      dcc05499a6c54: {
        id: 'dcc05499a6c54',
        name: 'name',
        props: {
          label: 'name',
        },
        title: 'name',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      ee4254efp9099: {
        id: 'ee4254efp9099',
        name: 'props.disabled',
        label: 'disabled',
        props: {
          label: 'disabled',
          boxSide: 'start',
          disabled: false,
        },
        title: 'disabled',
        l32tx8ac: true,
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
    },
  },
  'a8461c55-eeb9-40de-8920-cb0444c5ab0b': {
    id: 'a8461c55-eeb9-40de-8920-cb0444c5ab0b',
    title: 'Button',
    componentName: 'Button',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          tokens: {
            padding: '32px 0 0 0',
          },
        },
        title: 'stackRoot',
        children: ['l4gxktqk'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l4gxktqk: {
        id: 'l4gxktqk',
        name: 'l4gxktql',
        props: {
          linkSize: 'normal',
          linkFormat: 'links',
          paddingLeft: '16',
          overflowBehavior: 'menu',
        },
        title: 'Pivot',
        children: ['l4gxktqo', 'l4gxktqm'],
        compSchemaId: 'afaa57e6-1925-4b1b-933a-cb7af80587af',
      },
      l4gxktqm: {
        id: 'l4gxktqm',
        name: 'l4gxktqn',
        props: {
          label: 'field',
          itemKey: 'Tree',
          headerText: 'Tree',
        },
        title: 'Tree',
        children: ['l4gxktqs', 'l4gxktqu'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l4gxktqo: {
        id: 'l4gxktqo',
        name: 'l4gxktqp',
        props: {
          label: 'comp',
          itemKey: 'Props',
          headerText: 'Props',
        },
        title: 'Props',
        children: ['l4gy7rt1', 'l4gy8l5y', 'l4gxktr0', 'l4gxktr2'],
        compSchemaId: 'f6b1a985-be84-474e-a4a5-164a76eec249',
      },
      l4gxktqs: {
        id: 'l4gxktqs',
        name: 'l4gxktqt',
        props: {
          label: 'Tree',
        },
        title: 'Tree',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4gxktqu: {
        id: 'l4gxktqu',
        name: 'l4gxktqv',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Tree',
        children: ['l4gxktr8'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4gxktr0: {
        id: 'l4gxktr0',
        name: 'l4gxktr1',
        props: {
          label: 'Style',
        },
        title: 'Style',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4gxktr2: {
        id: 'l4gxktr2',
        name: 'l4gxktr3',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Style',
        children: ['l4gxss9w'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4gxktr8: {
        id: 'l4gxktr8',
        name: 'title',
        props: {
          label: 'title',
          multiline: false,
        },
        title: 'title',
        l3vf8mtb: {
          ROOT_ID: {
            id: 'ROOT_ID',
            name: 'root',
            type: 'ROOT',
            children: ['l3vfb9k6'],
          },
          l3vfb9k6: {
            id: 'l3vfb9k6',
            name: 'onChange',
            type: 'EVENT',
            children: ['l3vfdrnt'],
          },
          l3vfdrnt: {
            id: 'l3vfdrnt',
            name: 'setValue',
            type: 'ACTION',
            props: {
              name: 'props.label',
            },
          },
        },
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l4gxss9w: {
        id: 'l4gxss9w',
        name: 'props.variant',
        props: {
          label: 'variant',
          options: [
            {
              key: 'action',
              text: 'action',
            },
            {
              key: 'icon',
              text: 'icon',
            },
          ],
        },
        title: 'variant',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l4gy6qld: {
        id: 'l4gy6qld',
        name: 'props.text',
        props: {
          label: 'text',
        },
        title: 'text',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
        defaultValue: 'Save',
      },
      l4gy7rt1: {
        id: 'l4gy7rt1',
        name: 'l4gy7rt2',
        props: {
          label: 'Main',
        },
        title: 'Main',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4gy8l5y: {
        id: 'l4gy8l5y',
        name: 'l4gy8l5z',
        props: {
          tokens: {
            padding: '24px',
            childrenGap: '24px',
          },
        },
        title: 'Main',
        children: ['l4gy6qld', 'l4gyaf0f', 'l4gyjrgu'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4gyaf0f: {
        id: 'l4gyaf0f',
        name: 'props.type',
        props: {
          label: 'type',
          options: [
            {
              key: 'reset',
              text: 'reset',
            },
            {
              key: 'submit',
              text: 'submit',
            },
          ],
        },
        title: 'type',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l4gyjrgu: {
        id: 'l4gyjrgu',
        name: 'props.form',
        props: {
          info: 'Полезно когда надо расположить кнопку вне формы\nНапример вынести ее в header используя компонент Portal',
          label: 'form',
        },
        title: 'form',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
    },
  },
  'ac5bf379-1312-4733-8676-7c7ac4b38c76': {
    id: 'ac5bf379-1312-4733-8676-7c7ac4b38c76',
    title: 'ActionButton',
    componentName: 'ActionButton',
    type: 'COMP',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        props: {
          tokens: {
            padding: '32px 0 0 0',
          },
        },
        title: 'stackRoot',
        children: ['l3vm7y1x', 'l3vm88i1', 'l3vm8s5g', 'l3vm9anz', 'l3vm8llq', 'l3wywwkt'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l346aszw: {
        id: 'l346aszw',
        name: 'props.checked',
        props: {
          label: 'checked',
          boxSide: 'start',
        },
        title: 'checked',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3bf1w2o: {
        id: 'l3bf1w2o',
        name: 'props.type',
        props: {
          label: 'type',
          options: [
            {
              key: '',
              text: 'Не выбрано',
            },
            {
              key: 'submit',
              text: 'submit',
            },
          ],
          disabled: false,
        },
        title: 'type',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3cq0xgt: {
        id: 'l3cq0xgt',
        name: 'props.iconProps.iconName',
        props: {
          options: [
            {
              key: '',
              text: 'Не выбрано',
            },
            {
              key: 'Add',
              text: 'Add',
            },
            {
              key: 'Delete',
              text: 'Delete',
            },
            {
              key: 'AddPerson',
              text: 'AddPerson',
            },
            {
              key: 'Save',
              text: 'Save',
            },
            {
              key: 'Previous',
              text: 'Previous',
            },
            {
              key: 'Next',
              text: 'Next',
            },
            {
              key: 'Upload',
              text: 'Upload',
            },
            {
              key: 'DownloadDocument',
              text: 'DownloadDocument',
            },
            {
              key: 'BulkUpload',
              text: 'BulkUpload',
            },
            {
              key: 'DependencyAdd',
              text: 'DependencyAdd',
            },
            {
              key: 'DependencyRemove',
              text: 'DependencyRemove',
            },
            {
              key: 'AlertSettings',
              text: 'AlertSettings',
            },
            {
              key: 'ExcelDocument',
              text: 'ExcelDocument',
            },
            {
              key: 'Search',
              text: 'Search',
            },
          ],
          placeholder: 'Выбрать ',
          defaultSelectedKey: 'AlertSettings',
        },
        title: 'iconProps.iconName',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l3crfnhk: {
        id: 'l3crfnhk',
        name: 'fluentUIIconsLink',
        props: {
          href: 'https://developer.microsoft.com/en-us/fluentui#/styles/web/icons',
          target: '_blank',
          children: ['Fluent UI Icons'],
          underline: true,
        },
        title: 'Link',
        compSchemaId: 'fc400911-79cc-4387-a1da-72a2058eb29f',
      },
      l3ct18zs: {
        id: 'l3ct18zs',
        name: 'props.allowDisabledFocus',
        props: {
          label: 'allowDisabledFocus',
          boxSide: 'start',
        },
        title: 'allowDisabledFocus',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
      l3vm7y1x: {
        id: 'l3vm7y1x',
        name: 'l3vm7y1y',
        props: {
          label: 'Main',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3vm88i1: {
        id: 'l3vm88i1',
        name: 'l3vm88i2',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['9ba7af9ap8942', 'l3bf1w2o', 'ee4254efh9099'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3vm8llq: {
        id: 'l3vm8llq',
        name: 'l3vm8llr',
        props: {
          label: 'Icon',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3vm8s5g: {
        id: 'l3vm8s5g',
        name: 'l3vm8s5h',
        props: {
          label: 'Props',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l3vm9anz: {
        id: 'l3vm9anz',
        name: 'l3vm9ao0',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
          horizontal: false,
        },
        title: 'Stack',
        children: ['ee4254efp9099', 'l346aszw', 'l3ct18zs'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3wywwkt: {
        id: 'l3wywwkt',
        name: 'l3wywwku',
        props: {
          tokens: {
            padding: '12px 24px 24px',
            childrenGap: '6px',
          },
        },
        title: 'Stack',
        children: ['l3cq0xgt', 'l3x25nvy', 'l3crfnhk'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l3x25nvy: {
        id: 'l3x25nvy',
        name: 'props.iconProps.iconName',
        props: {
          label: 'iconName (custom)',
        },
        title: 'iconName (custom)',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      '9ba7af9ap8942': {
        id: '9ba7af9ap8942',
        name: 'title',
        props: {
          label: 'title',
        },
        title: 'title',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      ee4254efh9099: {
        id: 'ee4254efh9099',
        name: 'props.text',
        props: {
          label: 'text',
        },
        title: 'text',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      ee4254efp9099: {
        id: 'ee4254efp9099',
        name: 'props.disabled',
        type: 'checkbox',
        props: {
          label: 'disabled',
          boxSide: 'start',
        },
        title: 'disabled',
        compSchemaId: 'ee4254ef-9099-9089-7468-89ce733b3376',
      },
    },
  },
  '664acb03-8c53-4965-9e2b-80031cfaa050': {
    id: '664acb03-8c53-4965-9e2b-80031cfaa050',
    title: 'LinkedBusinessObjects',
    componentName: null,
    type: 'FORM',
    catalog: {
      ROOT_ID: {
        id: 'ROOT_ID',
        name: 'noname',
        props: {
          style: {
            minWidth: '600px',
          },
          tokens: {
            padding: '32px 0 0 0',
            childrenGap: 'Введите число',
          },
        },
        title: 'stackRoot',
        children: ['l4h5n7yj', 'l3vpm991', 'l4h5npa3', 'l4h5j49q'],
        compSchemaId: 'ee4254ef-9099-4289-be68-51ce733b3376',
      },
      l3vpm991: {
        id: 'l3vpm991',
        name: 'l3vpm992',
        props: {
          tokens: {
            padding: '12px 24px 12px',
            childrenGap: '12px',
          },
        },
        title: 'Stack',
        children: ['l4h5fyj7', 'l4h5hiq1'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4h5fyj7: {
        id: 'l4h5fyj7',
        name: 'l4h5fyj8',
        props: {
          label: 'LinkTypeId',
        },
        title: 'TextField',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l4h5hiq1: {
        id: 'l4h5hiq1',
        name: 'l4h5hiq2',
        props: {
          label: 'LinkTypeNm',
        },
        title: 'TextField',
        compSchemaId: 'ee4234ef-9099-8943-8968-51c00733b870',
      },
      l4h5i2io: {
        id: 'l4h5i2io',
        name: 'businessObject1',
        props: {
          label: 'BusinessObject1',
          options: [
            {
              key: '',
              text: 'Не выбрано',
            },
            {
              key: 'INCIDENT',
              text: 'Инцидент',
            },
            {
              key: 'FINANCIAL_EFFECT',
              text: 'Финансовое последствие',
            },
            {
              key: 'NON_FINANCIAL_EFFECT',
              text: 'Нефинансовое последствие',
            },
            {
              key: 'DIRECT_RECOVERY',
              text: 'Прямое возмещение',
            },
            {
              key: 'INSURANCE_RECOVERY',
              text: 'Страховое возмещение',
            },
          ],
        },
        title: 'Dropdown',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l4h5i4zg: {
        id: 'l4h5i4zg',
        name: 'businessObject2',
        props: {
          label: 'BusinessObject2',
          options: [
            {
              key: '',
              text: 'Не выбрано',
            },
            {
              key: 'INCIDENT',
              text: 'Инцидент',
            },
            {
              key: 'FINANCIAL_EFFECT',
              text: 'Финансовое последствие',
            },
            {
              key: 'NON_FINANCIAL_EFFECT',
              text: 'Нефинансовое последствие',
            },
            {
              key: 'DIRECT_RECOVERY',
              text: 'Прямое возмещение',
            },
            {
              key: 'INSURANCE_RECOVERY',
              text: 'Страховое возмещение',
            },
            {
              key: 'MANAGEMENT_ORG',
              text: 'Организационная структура',
            },
            {
              key: 'PROCESS',
              text: 'Бизнес-процесс',
            },
            {
              key: 'BUSINESS_LINE',
              text: 'Направление деятельности',
            },
          ],
        },
        title: 'Dropdown',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
      l4h5j49q: {
        id: 'l4h5j49q',
        name: 'l4h5j49r',
        props: {
          tokens: {
            padding: '12px 24px 12px',
            childrenGap: '24px',
          },
          horizontal: true,
        },
        title: 'Stack',
        children: ['l4h5i2io', 'l4h5i4zg', 'l4h5vsb2'],
        compSchemaId: '162b65ee-08d2-4c4e-84fc-e9583958b88c',
      },
      l4h5n7yj: {
        id: 'l4h5n7yj',
        name: 'l4h5n7yk',
        props: {
          label: 'LinkType',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4h5npa3: {
        id: 'l4h5npa3',
        name: 'l4h5npa4',
        props: {
          label: 'BusinessObjects',
        },
        title: 'HorizontalLine',
        compSchemaId: 'b2ac41d2-caf0-4b7d-8816-e2145c3d19c9',
      },
      l4h5vsb2: {
        id: 'l4h5vsb2',
        name: 'l4h5vsb3',
        props: {
          label: 'Type',
          options: [
            {
              key: 'S',
              text: 'STRONG',
            },
            {
              key: 'W',
              text: 'WEAK',
            },
            {
              key: 'NONE',
              text: 'NONE',
            },
          ],
        },
        title: 'Dropdown',
        compSchemaId: 'cd1c9df4-f5dd-426c-9d26-a0ec40638601',
      },
    },
  },
}

export default schemas
