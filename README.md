# Meme Manager

A Next.js + TypeScript application for browsing memes with static site generation (SSG).

## Demo

Check out the live demo: [Meme Test Task Demo](https://demo-meme-manager.example.com)

## Features

- Browse memes in both Table and List views
- Edit meme details in the Table view
- Static site generation for optimal performance
- Fully responsive design
- Built with TypeScript for type safety

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework with SSG support
- [TypeScript](https://www.typescriptlang.org/) - Static typing
- [React](https://reactjs.org/) - UI library
- [TailwindCss](https://tailwindcss.com) - For styling

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/WatarJoy/meme-test-task.git
cd meme-test-task
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Build the static site:

```bash
npm run build
# or
yarn build
```

### Running Production Build

Start the production server:

```bash
npm run start
# or
yarn start
```

## Pages

### Table View (`/table`)

The Table view displays memes in a structured table format with the following features:

- Columns for meme title, image preview, id, and actions
- Edit functionality to modify meme details
- Sorting and filtering options

### List View (`/list`)

The List view presents memes in a grid or list layout:

- Visual-focused display with larger meme previews
- Quick view of basic meme information
- Links to the Table view for editing

## Static Site Generation

This project utilizes Next.js Static Site Generation (SSG) for optimal performance:

- All pages are pre-rendered at build time
- Meme data is loaded during build and embedded in the static pages
- No server-side rendering or API calls needed at runtime
- Extremely fast page loads and navigation

## Customization

### Adding New Memes

To add new memes to the project:

1. Add meme images to the `public/` directory
2. Update the meme data in `data/memes.ts`
3. Rebuild the project to generate new static pages
