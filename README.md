# Blog Platform

This is a dynamic blog platform built with [Next.js](https://nextjs.org), demonstrating server-side rendering (SSR), client-side rendering (CSR), and API integration. The platform includes a homepage, blog list, and detailed blog post pages.

## Getting Started

To set up and run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/nisvem/blog-platform
   cd blog-platform
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features

- **Homepage:** Displays a list of the most recent blog posts with titles, short descriptions, and publication dates. Includes a search bar to filter posts by keywords.
- **Blog Post Pages:** Dynamic routes to display individual blog posts with title, author, publication date, and content.
- **API Integration:** Fetches blog data dynamically for SSR and CSR using a public API.
- **Search Functionality:** Allows users to search and filter blog posts based on title or content with debounced input for performance optimization.
- **Global State Management:** Utilizes Zustand for managing the state of the blog list, including search filters and loading states.
- **Styling:** Styled with Tailwind CSS for responsive design across desktop, tablet, and mobile views.
- **Load More:** Implements a "Load more" functionality for the blog list.

## Advanced Features

- **Performance Optimization:** Includes image optimization, static generation for commonly accessed pages, and code-splitting.
- **Accessibility:** Follows best practices for accessibility, including ARIA roles and keyboard navigation.

## Assumptions and Limitations

- The application uses a mock API for demonstration purposes.
- Some features like light/dark mode toggle are not implemented.

## API Integration

The application fetches blog data from a public API. You can configure the API endpoint in the environment variables.

## Deployment

The application is deployed on Vercel. You can view the live version at [Deployment URL].

## Documentation

For more details on Next.js, refer to the [Next.js Documentation](https://nextjs.org/docs).
