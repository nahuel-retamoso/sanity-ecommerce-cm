import { defineField, defineType } from "sanity"

export default defineField ({
    name:'content',
    title: 'Info and Content',
    type: 'document',
    fields: [
        {
          name: 'slider',
          title: 'Slider',
          type: 'string'
        },
        {
          name: 'title',
          title: 'Main product title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Main product description',
          type: 'text'
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image'
        },
        {
          name: 'featured',
          title: 'Featured',
          type: 'array',
          of: [{
            type: 'reference',
            to: [
              {type: 'product'},
            ]
          }]
        },
        {
          name: 'facebook',
          title: 'Facebook link',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram link',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter Link',
          type: 'url'
        },
        {
          name: 'atencion',
          title: 'Suport number',
          type: 'number'
        },
        {
          name: 'hours',
          title: 'Hours',
          type: 'string'
        }
      ]
})