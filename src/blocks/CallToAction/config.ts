import type { Block } from 'payload'

import {
  AlignFeature, BlockquoteFeature,
  BoldFeature, ChecklistFeature,
  FixedToolbarFeature,
  HeadingFeature, IndentFeature,
  InlineToolbarFeature, ItalicFeature,
  lexicalEditor, OrderedListFeature, StrikethroughFeature, UnderlineFeature, UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../fields/linkGroup'

export const CallToAction: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'richText',
      type: 'richText',
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
      label: false,
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
}
