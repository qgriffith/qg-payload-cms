import type { Block, Field } from 'payload'

import {
  AlignFeature, BlockquoteFeature,
  BoldFeature, ChecklistFeature,
  FixedToolbarFeature,
  HeadingFeature, IndentFeature,
  InlineToolbarFeature, ItalicFeature,
  lexicalEditor, OrderedListFeature, StrikethroughFeature, UnderlineFeature, UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        label: 'One Third',
        value: 'oneThird',
      },
      {
        label: 'Half',
        value: 'half',
      },
      {
        label: 'Two Thirds',
        value: 'twoThirds',
      },
      {
        label: 'Full',
        value: 'full',
      },
    ],
  },
  {
    name: 'richText',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ defaultFeatures }) => {
        return [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          UnderlineFeature(),
          BoldFeature(),
          ItalicFeature(),
          StrikethroughFeature(),
          AlignFeature(),
          IndentFeature(),
          UnorderedListFeature(),
          OrderedListFeature(),
          ChecklistFeature(),
          BlockquoteFeature(),
        ]
      },
    }),
    label: false,
  },
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
]

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
