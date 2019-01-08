
exports.onCreateWebpackConfig = ({ stage, actions }) => {
    console.log(`hello`)
    if (stage === 'build-html') {
        actions.setWebpackConfig({ 
            module: {
                rules: [
                  {
                    test: /@typeform/,
                    loader: 'null-loader',
                  },
                ],
              }
        })
    }
}
