export default {
    name: 'subcategory',
    title: 'Subcategory',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'parentCategory',
        title: 'Parent Category',
        type: 'reference',
        to: [{ type: 'category' }]
      }
    ]
  }
  