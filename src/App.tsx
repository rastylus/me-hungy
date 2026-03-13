import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  TextField,
  Container,
  Paper,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Box,
  Stack,
} from '@mui/material'
import './App.css'

// Sample recipe data
const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    ingredients: [
      '400g spaghetti',
      '200g pancetta or guanciale',
      '4 large eggs',
      '100g Pecorino Romano cheese',
      'Black pepper',
      'Salt',
    ],
    steps: [
      'Bring a large pot of salted water to boil and cook spaghetti',
      'Cut pancetta into small pieces and fry until crispy',
      'Beat eggs with grated cheese and black pepper',
      'Drain pasta, reserving pasta water',
      'Remove pan from heat, add pasta to pancetta',
      'Add egg mixture, tossing quickly (add pasta water if needed)',
      'Serve immediately with extra cheese and pepper',
    ],
  },
  {
    id: 2,
    name: 'Chicken Stir Fry',
    ingredients: [
      '500g chicken breast',
      '2 bell peppers',
      '1 onion',
      '3 cloves garlic',
      'Soy sauce',
      'Sesame oil',
      'Rice',
    ],
    steps: [
      'Cut chicken into bite-sized pieces',
      'Slice vegetables',
      'Heat wok with sesame oil',
      'Cook chicken until golden',
      'Add vegetables and stir fry',
      'Add soy sauce and garlic',
      'Serve over rice',
    ],
  },
  {
    id: 3,
    name: 'Greek Salad',
    ingredients: [
      '4 tomatoes',
      '1 cucumber',
      '1 red onion',
      '200g feta cheese',
      'Kalamata olives',
      'Olive oil',
      'Oregano',
    ],
    steps: [
      'Chop tomatoes and cucumber into chunks',
      'Slice red onion thinly',
      'Combine vegetables in a bowl',
      'Add olives and crumbled feta',
      'Drizzle with olive oil',
      'Sprinkle with oregano',
      'Toss gently and serve',
    ],
  },
]

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRecipeId, setSelectedRecipeId] = useState(recipes[0].id)

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const selectedRecipe = recipes.find((recipe) => recipe.id === selectedRecipeId)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Me Hungy - Recipe Finder
          </Typography>
          <TextField
            placeholder="Search recipes..."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
              width: 300,
            }}
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Select Recipe</InputLabel>
          <Select
            value={selectedRecipeId}
            label="Select Recipe"
            onChange={(e) => setSelectedRecipeId(e.target.value as number)}
          >
            {filteredRecipes.map((recipe) => (
              <MenuItem key={recipe.id} value={recipe.id}>
                {recipe.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedRecipe && (
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
          >
            <Box sx={{ flex: 1 }}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Ingredients
                </Typography>
                <List>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText primary={`• ${ingredient}`} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Steps
                </Typography>
                <List>
                  {selectedRecipe.steps.map((step, index) => (
                    <ListItem key={index} disablePadding sx={{ mb: 2 }}>
                      <ListItemText
                        primary={`${index + 1}. ${step}`}
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>
          </Stack>
        )}
      </Container>
    </Box>
  )
}

export default App
