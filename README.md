-- ░ ░░░░ ░░ ░░░ ░░░ ░░░ ░░░░ ░░░ ░░░ ░░ ░░░ ░░ ░░ ░░
-- ▒ ▒▒▒▒ ▒▒ ▒▒ ▒▒ ▒▒▒▒ ▒▒ ▒▒▒▒ ▒▒ ▒▒▒▒ ▒▒▒▒▒ ▒▒▒▒▒ ▒▒ ▒▒ ▒▒▒▒▒▒▒▒ ▒▒▒▒ ▒
-- ▓ ▓▓▓▓ ▓▓ ▓ ▓ ▓▓ ▓▓▓▓▓▓▓▓ ▓▓ ▓▓▓▓ ▓▓▓▓▓ ▓▓▓▓▓ ▓ ▓ ▓▓ ▓▓▓▓ ▓▓▓▓ ▓
-- █ ████ ██ ██ ██ ████ ██ ████ ██ █████ █████ ██ ██ ████████ ████ █
-- ██ ███ ███ ███ ███ ████ ██ ████ ██ ██ ███ ██ ██ ██
--

Dependencies:
npm install react-router-dom@latest
npm install serpapi <!-- npm<Google Event API handler 200 calls per month> -->

File structure:

src/
│
├
├── assets/ # images, icons
├── components/ # reusable UI components
├── pages/ # app "screens" (e.g., Home, EventDetail)
├── styles/ # CSS files (global.css, mobile.css, etc.)
│ ├── base/
│ │ ├── \_reset.css # CSS Reset (e.g., Eric Meyer or modern-normalize)
│ │ ├── \_typography.css # Global font styles, headings, paragraphs
│ │ └── \_globals.css # General layout rules, box-sizing, links, lists
│ │
│ ├── tokens/
│ │ ├── \_colors.css # Central color palette (brand, neutrals, etc.)
│ │ ├── \_spacing.css # Margin, padding, spacing utilities
│ │ └── \_typescale.css # Font sizes, line heights, font weights
│ │
│ ├── components/
│ │ ├── button.css # Styles for <Button />
│ │ ├── input.css # Styles for <Input />
│ │ └── card.css # Styles for EventCard, NFTCard, etc.
│ │
│ ├── layout/
│ │ ├── grid.css # Grid/Flexbox utilities
│ │ └── containers.css # Page/container width and padding helpers
│ │
│ └── index.css # Import all the above in order
|
├── App.jsx # main app logic
└── main.jsx # entry point
