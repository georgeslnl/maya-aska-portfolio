# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'jacquarda': ['Jacquarda Bastarda 9', 'cursive'],
      },
    },
  },
  plugins: [],
};

```

# postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# package.json

```json
{
  "name": "maya-aska",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.25.7",
    "eslint": "^8",
    "eslint-config-next": "14.2.14",
    "next": "^14.2.14",
    "postcss": "^8",
    "tailwindcss": "^3.4.1"
  }
}

```

# next.config.mjs

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```

# jsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

# README.md

```md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

# src/app/page.js

```js
import Image from "next/image";
import Header from "./components/Header";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>Welcome to the home page!</p>
    </Layout>
  );
}

```

# src/app/layout.js

```js
import "./globals.css";

export const metadata = {
  title: "Maya-Aska",
  description: "Portfolio of Maya Aska"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

```

# src/app/globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jacquarda+Bastarda+9&display=swap');


@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: 'Cormorant Garamond', serif;
}

h1 {
  font-family: 'Jacquarda Bastarda 9', cursive;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

```

# src/app/favicon.ico

This is a binary file of the type: Binary

# src/app/fonts/GeistVF.woff

This is a binary file of the type: Binary

# src/app/fonts/GeistMonoVF.woff

This is a binary file of the type: Binary

# src/app/components/Sidebar.jsx

```jsx
import React from 'react';

const SideNav = () => {
  const works = [
    "Gentlewoman",
    "Onna",
    "Card",
    "Noiseless Portraits",
    "Lady Liberty",
    "Temporary Teeth"
  ];

  return (
    <nav className="h-full w-64 p-8 bg-white text-black font-cormorant">
      <h2 className="text-3xl mb-6 font-jacquarda">Works</h2>
      <ul className="space-y-2">
        {works.map((work, index) => (
          <li key={index} className="text-lg hover:underline cursor-pointer">
            {work}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
```

# src/app/components/Layout.jsx

```jsx
import React from 'react';
import Header from './header';
import SideNav from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen p-4">
      <Header/>
      {/* Main content */}
      <div className="flex flex-row flex-grow">
        {/* Sidebar (Navbar) */}
        <SideNav/>
        {/* Content */}
        <div className="w-4/5 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
```

# src/app/components/Header.jsx

```jsx
import React from 'react';

const Header = () => {
    return (
        <div className="flex flex-row justify-between items-center">
            <h1 className="text-7xl mb-10">Maya-Aska</h1>
            <div className="flex gap-3">
                <h2 className="text-lg">INFO</h2>
                <h2 className="text-lg text-stone-700">INSTAGRAM</h2>
            </div>
        </div>
    );
};

export default Header;
```

