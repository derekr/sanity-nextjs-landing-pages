export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d12f0ad7d8d87acec7598c8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sm9oja5p',
                  apiId: 'c9a0f5e4-1bbd-4233-98d8-534389f21827'
                },
                {
                  buildHookId: '5d12f0ad0908c244c408da17',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-j7xpzozr',
                  apiId: 'c0e4196c-934c-4569-87ef-aad21615d0b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/derekr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-j7xpzozr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
