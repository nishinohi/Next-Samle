const styleguide = require('@vercel/style-guide/prettier')

module.exports = {
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
  semi: false,
  max_line_length: 120,
}
