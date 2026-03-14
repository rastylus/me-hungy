# Me Hungy 🍽️

A modern recipe finder application built with React, TypeScript, and Material UI. Browse recipes, adjust serving sizes, and view detailed cooking instructions with ingredient lists.

## Features

- **Recipe Browser**: Search and select from a collection of recipes
- **Dynamic Serving Adjustment**: Scale ingredient quantities up or down based on serving size
- **Detailed Recipe Views**: View ingredients, step-by-step instructions, prep/cook times, and difficulty levels
- **Material UI Design**: Clean, responsive interface built with Material UI components
- **Tag-based Organization**: Recipes categorized by cuisine, dietary preferences, and cooking style

## Tech Stack

- **React 19** with TypeScript
- **Material UI 7** for UI components
- **Vite** for fast development and building
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rastylus/me-hungy.git

# Navigate to project directory
cd me-hungy

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── recipes/
│   ├── recipes.types.ts      # TypeScript interfaces
│   ├── recipes.mock.ts       # Mock recipe data
│   ├── ingredients.mock.ts   # Mock ingredient data
│   └── RecipeDisplay.tsx     # Recipe display component
├── App.tsx                   # Main application component
└── main.tsx                  # Application entry point
```

## Features in Detail

### Recipe Display
Each recipe includes:
- Recipe name and description
- Preparation and cooking times
- Difficulty level (easy/medium/hard)
- Tags for categorization
- Complete ingredient list with quantities
- Step-by-step cooking instructions

### Serving Size Adjustment
- Increase or decrease servings with +/- buttons
- Direct input for custom serving sizes
- Automatic scaling of all ingredient quantities
- Display of original serving size for reference

## Roadmap

### Planned Features
- [ ] Add ability to create and save custom recipes
- [ ] Implement recipe favorites/bookmarks
- [ ] Add shopping list generation from recipe ingredients
- [ ] Filter recipes by dietary restrictions (vegetarian, vegan, gluten-free, etc.)
- [ ] Add recipe ratings and reviews
- [ ] Implement recipe categories/collections
- [ ] Add timer functionality for cooking steps
- [ ] Support for imperial/metric unit conversion
- [ ] Add recipe images/photos
- [ ] Implement recipe sharing functionality
- [ ] Add dark mode support
- [ ] Create mobile-responsive design improvements
- [ ] Add nutritional information per serving
- [ ] Implement recipe import from URLs
- [ ] Add multi-language support

### In Progress
- [ ] None currently

### Completed
- [x] Basic recipe display with ingredients and steps
- [x] Search and browse functionality with autocomplete
- [x] Dynamic serving size adjustment with quantity scaling
- [x] Recipe metadata (prep time, cook time, difficulty, tags)
- [x] Material UI integration
- [x] TypeScript type system for recipes and ingredients

## License

MIT

---

Built with ❤️ using React + Vite
