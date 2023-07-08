export default {
    name: 'metaDescriptions',
    title: 'Meta Descriptions',
    type: 'document',
    fields: [
        {
            name: 'home',
            title: 'Home',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'about',
            title: 'About',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'projects',
            title: 'Projects',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'contact',
            title: 'Contact',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'project',
            title: 'Project',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
    ]
}