const ghpages = require('gh-pages')

ghpages.publish('public', {
  branch: 'main',
  repo: 'https://github.com/timeline-notes/timeline-notes.github.io.git'
}, () => {
  console.log('Deployed "public" to  "main" branch in Github')
})
