# Nature Credit Website

A modern, responsive website for nature-based carbon credit investments built with Gatsby, React, and Tailwind CSS.

## Features

- 🌱 **Nature-themed Design**: Beautiful, nature-inspired color palette and design elements
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Gatsby for optimal loading speeds
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS
- 🔍 **SEO Optimized**: Built-in SEO features with React Helmet
- 📊 **Impact Tracking**: Visual representation of environmental impact

## Tech Stack

- **Gatsby** - Static site generator
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **React Helmet** - Document head management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nature-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run develop
```

4. Open your browser and navigate to `http://localhost:8000`

### Available Scripts

- `npm run develop` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── Hero.js         # Hero section
│   ├── Features.js     # Features section
│   ├── Impact.js       # Impact statistics
│   └── Layout.js       # Main layout wrapper
├── pages/              # Gatsby pages
│   └── index.js        # Homepage
├── styles/             # Global styles
│   └── global.css      # Tailwind CSS imports
└── images/             # Static images
```

## Design System

The website uses a custom color palette inspired by nature:

- **Nature Green**: Primary brand color (#32995a)
- **Earth Brown**: Secondary color (#b09673)
- **Neutral Grays**: For text and backgrounds

## Deployment

This site can be deployed to any static hosting service:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Upload the `public` folder after building

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
