export default {
    name: 'about',
    title: 'About Me',
    type: 'document',
    fields: [
        {
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [{type: 'block'}],
            validation: Rule => Rule.required(),
        },
        {
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'education',
            title: 'Education',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'degree',
                        type: 'string',
                        title: 'Degree',
                    },
                    {
                        name: 'university',
                        type: 'string',
                        title: 'University',
                    },
                    {
                        name: 'year',
                        type: 'date',
                        title: 'Year',
                        options: {
                            dateFormat: 'YYYY',
                        }
                    },
                ],
            }],
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{type: 'string'}],
            description: 'List of skills',
        },
    ],
};