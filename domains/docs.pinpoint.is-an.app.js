addSubDomain({
    description: 'documentation of API service designed to provide accurate and consistent location information based on pincodes', // describe your project in this field
    domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
    subdomain: 'docs.pinpoint', // desired subdomain name
    owner: {
      repo: 'https://github.com/RajasBhagatkar/docs.pinpoint.git',
      email: 'pinpoint@devildesk.anonaddy.com',
    },
    record: {
      CNAME: 'https://docs-pinpoint-jelajucdz-devildesks-projects.vercel.app/', // hosted on vercel

    },
    //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                    // should provide valid a SSL certificate and protection CF will be disabled
    // nested: [{ // in addition, you may define the required nested subdomains
    //   subdomain: 'foo',
    //   record: {
    //     CNAME: '...',
    //   },
    //   proxy: false,
    // }, {
    //   subdomain: 'bar',
    //   record: {
    //     A: ['...'],
    //   },
    //   proxy: true,
    // }]
  })