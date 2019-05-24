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
                  buildHookId: '5ce854b53b675ffeb3c2b471',
                  title: 'Sanity Studio',
                  name: 'virtual-pitching-site-studio',
                  apiId: '1cdc0767-614b-4d91-a147-f7ae74afdfd9'
                },
                {
                  buildHookId: '5ce854b59efd16dfa7c7738d',
                  title: 'Landing pages Website',
                  name: 'virtual-pitching-site',
                  apiId: '8417f4ad-fb19-4973-a3b5-272f417e1a78'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gerdums/virtual-pitching-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://virtual-pitching-site.netlify.com', category: 'apps'}
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
