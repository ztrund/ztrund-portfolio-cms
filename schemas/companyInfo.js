export default { //Change this to personal info eventually
    name: 'companyInfo',
    title: 'Company Information',
    type: 'document',
    fields: [
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            description: 'The company name will be displayed prominently across the site. If a company logo is not provided, the company name will be used in its place in the header.',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'favicon',
            title: 'Website Favicon',
            type: 'image',
            description: 'This image will be used as the website favicon. The image should be square, ideally 192x192px or larger. Ensure all important content is placed within the center of the image.',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
    ]
}