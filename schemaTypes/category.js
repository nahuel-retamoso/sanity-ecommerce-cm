export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'subcategories',
            title: 'Subcategories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'subcategory' }] }]
          }
    ]
}