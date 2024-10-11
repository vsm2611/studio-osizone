import { defineField, defineType } from 'sanity'

export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'category',
            type: 'string',
        }),
        defineField({
            name: 'date',
            type: 'datetime',
        }),
        defineField({
            name: 'readingTime',
            type: 'string',
        }),
        defineField({
            name: 'comment',
            type: 'string',
        }),
        defineField({
            name: 'like',
            type: 'string',
        }),
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'details',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'slug',
            type: 'slug',
        }),

        defineField({
            name: 'doorsOpen',
            type: 'number',
        }),
        defineField({
            name: 'tickets',
            type: 'url',
        }),
    ],
})