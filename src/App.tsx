import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  TextField,
  Container,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from '@mui/material'
import { mockRecipes } from './recipes/recipes.mock'
import { RecipeDisplay } from './recipes/RecipeDisplay'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | string>(mockRecipes[0].id)

  const filteredRecipes = mockRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const selectedRecipe = mockRecipes.find((recipe) => recipe.id === selectedRecipeId)

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
            onChange={(e) => setSelectedRecipeId(e.target.value as number | string)}
          >
            {filteredRecipes.map((recipe) => (
              <MenuItem key={recipe.id} value={recipe.id}>
                {recipe.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedRecipe && <RecipeDisplay recipe={selectedRecipe} />}
      </Container>
    </Box>
  )
}

export default App
