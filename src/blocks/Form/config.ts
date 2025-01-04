import type { Block } from 'payload'

import {
  AlignFeature, BlockquoteFeature,
  BoldFeature, ChecklistFeature,
  FixedToolbarFeature,
  HeadingFeature, IndentFeature,
  InlineToolbarFeature, ItalicFeature,
  lexicalEditor, OrderedListFeature, StrikethroughFeature, UnderlineFeature, UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

export const FormBlock: Block = {
  slug: 'formBlock',
  interfaceName: 'FormBlock',
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'enableIntro',
      type: 'checkbox',
      label: 'Enable Intro Content',
    },
    {
      name: 'introContent',
      type: 'richText',
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [
            ...defaultFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
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
      label: 'Intro Content',
    },
  ],
  graphQL: {
    singularName: 'FormBlock',
  },
  labels: {
    plural: 'Form Blocks',
    singular: 'Form Block',
  },
}
