import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { media } from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'ecommerce-cms',

  projectId: '0p0im478',
  dataset: 'production',

  plugins: [structureTool(
    {
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Content and Info')
              .child(
                S.document()
                  .schemaType('content')
                  .documentId('content')),
            ...S.documentTypeListItems().filter(listItem => !['content'].includes(listItem.getId())),
          ]),
    }
  ), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
