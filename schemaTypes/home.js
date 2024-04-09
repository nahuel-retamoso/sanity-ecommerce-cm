import { defineField, defineType } from "sanity"

export default defineField ({
    name:'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'slider',
            title: 'Slider Text',
            type: 'string',
        },
        {
            name: 'banner',
            title: 'Banner',
            type: 'string',
        },
        {
            name: 'picks',
            title: 'Picked products',
            type: 'string',
        },
    ]
})