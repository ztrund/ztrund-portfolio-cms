export default {
    title: "Projects",
    name: "projects",
    type: "document",
    fields: [
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            description: "The slug is used to generate the URL for the project page.",
            options: {
                source: "projectTitle",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Project Title",
            name: "projectTitle",
            type: "string",
            description: "The name of the project.",
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Description',
            name: 'description',
            type: 'array',
            description: "A brief summary of the project.",
            of: [{type: 'block'}],
            validation: Rule => Rule.required(),
        },
        {
            title: "Role",
            name: "role",
            type: "string",
            description: "Your specific role in the project.",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Languages",
            name: "languages",
            type: "array",
            of: [{type: "string"}],
            description: "Programming languages used in the project.",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Technologies",
            name: "technologies",
            type: "array",
            of: [{type: "string"}],
            description: "Technologies, libraries, frameworks, and tools used in the project.",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Code Link",
            name: "codeLink",
            type: "url",
            description: "Link to the source code (e.g., GitHub repository).",
        },
        {
            title: "Live Link",
            name: "liveLink",
            type: "url",
            description: "Link to the live version of the project (if applicable).",
        },
        {
            title: "Other Links",
            name: "otherLinks",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            title: "Link Title",
                            name: "linkTitle",
                            type: "string",
                            description: "Title of the link.",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            title: "Link URL",
                            name: "linkUrl",
                            type: "url",
                            description: "URL of the link.",
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
        },
        {
            title: "Media Items",
            name: "mediaItems",
            type: "array",
            of: [{type: "media"}],
            description: "One or more media items of the puppy (photos or videos).",
            validation: (Rule) => Rule.required().custom((mediaItems) => {
                if (!mediaItems) {
                    return 'At least one Image is required';
                }
                const imageItems = mediaItems.filter(item => item.type === 'image');
                return imageItems.length > 0 ? true : 'At least one Image is required';
            }),
        },
        {
            title: "Challenges",
            name: "challenges",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            title: "Challenge Description",
                            name: "challengeDescription",
                            type: "string",
                            description: "Description of the challenge faced in the project.",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            title: "Solution Description",
                            name: "solutionDescription",
                            type: "string",
                            description: "Description of how the challenge was overcome.",
                            validation: (Rule) => Rule.required(),
                        }
                    ]
                }
            ],
            description: "Challenges faced and solutions found during the project.",
        },
    ],
};
