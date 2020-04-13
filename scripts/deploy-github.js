const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/nicolas-camacho/nicolas-camacho.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
