import { useState, useMemo } from 'react'
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Autocomplete,
  TextField,
  Chip,
} from '@mui/material'
import { mockRecipes } from './recipes/recipes.mock'
import { RecipeDisplay } from './recipes/RecipeDisplay'
import type { Recipe } from './recipes/recipes.types'
import './App.css'

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(mockRecipes[0])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get all unique tags from recipes
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>()
    mockRecipes.forEach(recipe => {
      recipe.tags?.forEach(tag => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  }, [])

  // Filter recipes based on selected tags
  const filteredRecipes = useMemo(() => {
    if (selectedTags.length === 0) return mockRecipes
    return mockRecipes.filter(recipe => 
      selectedTags.every(tag => recipe.tags?.includes(tag))
    )
  }, [selectedTags])

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ bgcolor: 'purple' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Me Hungy - Recipe Finder
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Autocomplete
          multiple
          value={selectedTags}
          onChange={(_, newValue) => {
            setSelectedTags(newValue);
            setSelectedRecipe(null); // Reset selection when filters change
          }}
          options={allTags}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Filter by tags"
              placeholder="Select tags to filter recipes..."
            />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option}
                {...getTagProps({ index })}
                key={option}
              />
            ))
          }
          sx={{ mb: 2 }}
        />

        <Autocomplete
          value={selectedRecipe}
          onChange={(_, newValue) => {
            setSelectedRecipe(newValue);
          }}
          options={filteredRecipes}
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
