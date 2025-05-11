# Lowlands Tactical Wiki

This is the documentation site for Lowlands Tactical, built with Jekyll and Just the Docs theme.

## Local Development

To run this site locally:

1. Install Ruby and Jekyll:
   ```bash
   gem install jekyll bundler
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

## Adding New Pages

1. Create a new `.md` file in the root directory
2. Add the following front matter at the top of the file:
   ```yaml
   ---
   layout: default
   title: Your Page Title
   ---
   ```
3. Write your content using Markdown

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Contributing

Please see our [Contributing Guide](contributing.md) for more information on how to contribute to this documentation.

## License

This documentation is licensed under the MIT License. 