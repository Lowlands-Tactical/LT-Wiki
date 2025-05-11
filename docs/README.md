# Documentation Site

This is a documentation site built with GitHub Pages and Jekyll.

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

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This documentation is licensed under the MIT License. 