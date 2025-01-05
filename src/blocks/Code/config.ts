import type { Block } from 'payload'

export const Code: Block = {
  slug: 'code',
  interfaceName: 'CodeBlock',
  fields: [
    {
      name: 'language',
      type: 'select',
      defaultValue: 'typescript',
      options: [
        {
          label: 'Typescript',
          value: 'typescript',
        },
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'CSS',
          value: 'css',
        },
        {
          label: 'HTML',
          value: 'html',
        },
        {
          label: 'JSON',
          value: 'json',
        },
        {
          label: 'rust',
          value: 'rust',
        },
        {
          label: 'python',
          value: 'python',
        },
        {
          label: 'shell',
          value: 'shell',
        }
      ],
    },
    {
      name: 'code',
      type: 'code',
      label: false,
      required: true,
    },
  ],
}
