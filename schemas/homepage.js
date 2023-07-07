export default {
    name: 'homepage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required(),
        },
        {
            title: "Programming Languages",
            name: "languages",
            type: "array",
            of: [{ type: "string" }],
            description: "Programming language proficiency.",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Technologies and Tools",
            name: "technologies",
            type: "array",
            of: [{ type: "string" }],
            description: "Technologies, libraries, frameworks, and tools proficiency.",
            validation: (Rule) => Rule.required(),
        },
    ],
};
