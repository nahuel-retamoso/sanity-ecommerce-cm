import { defineType } from "sanity"

export default defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'product',
            title: 'Product',
            type: 'string',
        },
    ]
})