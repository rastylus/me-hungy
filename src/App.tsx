import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Autocomplete,
  TextField,
} from '@mui/material'
import { mockRecipes } from './recipes/recipes.mock'
import { RecipeDisplay } from './recipes/RecipeDisplay'
import type { Recipe } from './recipes/recipes.types'
import './App.css'

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(mockRecipes[0])

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Me Hungy - Recipe Finder
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Autocomplete
          value={selectedRecipe}
          onChange={(_, newValue) => {
            setSelectedRecipe(newValue);
          }}
          options={mockRecipes}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search and select a recipe"
              placeholder="Type to search or click to browse..."
            />
          )}
          sx={{ mb: 3 }}
          openOnFocus
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
        />

        {selectedRecipe && <RecipeDisplay recipe={selectedRecipe} />}
      </Container>
    </Box>
  )
}

export default App
