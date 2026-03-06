# Bade Sahab Ka Family Dhaba

A beautiful, fully responsive website for an authentic Indian dhaba restaurant built with React and Vite.

## Features

✅ Fully Responsive Design - Mobile, tablet, and desktop
✅ Beautiful UI - Modern gradients and smooth animations
✅ Fast Performance - Vite for rapid development
✅ React Components - Modular and reusable
✅ Complete Sections:
- Home/Hero Section
- Menu with 8+ dishes
- About Section
- Customer Testimonials
- Contact Form
- Footer

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/justakashk/bade-sahab-ka-dhaba.git
cd bade-sahab-ka-dhaba
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open at http://localhost:3000

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
bade-sahab-ka-dhaba/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── components/
│       ├── Navbar.jsx & Navbar.css
│       ├── Hero.jsx & Hero.css
│       ├── Menu.jsx & Menu.css
│       ├── About.jsx & About.css
│       ├── Testimonials.jsx & Testimonials.css
│       ├── Contact.jsx & Contact.css
│       └── Footer.jsx & Footer.css
└── public/
```

## Technologies Used

- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations and gradients
- **Responsive Design** - Mobile-first approach

## Features Included

### Navbar
- Sticky navigation
- Mobile hamburger menu
- Smooth scroll links

### Hero Section
- Full viewport background
- Call-to-action button
- Smooth animations

### Menu Section
- 8 sample dishes
- Category badges
- Price display
- Hover animations
- Add to cart functionality

### About Section
- Restaurant story
- Feature highlights
- Image showcase

### Testimonials
- Customer reviews
- Star ratings
- Avatar images
- Glassmorphism design

### Contact Section
- Contact information
- Functional contact form
- Location, phone, hours

### Footer
- Newsletter signup
- Social media links
- Quick links
- Copyright info

## Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #d4a574;
  --dark-color: #2c1810;
  --light-color: #f5f5f5;
  --accent-color: #c44536;
  --text-color: #333;
}
```

### Menu Items
Edit the `menuItems` array in `src/components/Menu.jsx`

### Contact Information
Update contact details in `src/components/Contact.jsx` and `src/components/Footer.jsx`

## License

MIT License - Feel free to use this project for your own purposes.

## Author

Created by justakashk

## Support

For questions or issues, please create an issue on GitHub.

Enjoy your Dhaba website! 🍖🔥