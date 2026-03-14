import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
  Divider,
  Stack,
  Button,
  TextField,
} from '@mui/material';
import type { Recipe } from './recipes.types';

interface RecipeDisplayProps {
  recipe: Recipe;
}

export function RecipeDisplay({ recipe }: RecipeDisplayProps) {
  const originalServings = recipe.servings || 1;
  const [adjustedServings, setAdjustedServings] = useState(originalServings);
  
  const scalingFactor = adjustedServings / originalServings;

  const handleIncreaseServings = () => {
    setAdjustedServings(prev => prev + 1);
  };

  const handleDecreaseServings = () => {
    setAdjustedServings(prev => Math.max(1, prev - 1));
  };

  const handleServingsChange = (value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num > 0) {
      setAdjustedServings(num);
    }
  };

  const scaleQuantity = (amount: number): string => {
    const scaled = amount * scalingFactor;
    // Round to 2 decimal places and remove trailing zeros
    return parseFloat(scaled.toFixed(2)).toString();
  };

  return (
    <Card>
      <CardContent>
        {/* Recipe Header */}
        <Typography variant="h4" component="h2" gutterBottom>
          {recipe.name}
        </Typography>
        
        {recipe.description && (
          <Typography variant="body1" color="text.secondary" paragraph>
            {recipe.description}
          </Typography>
        )}

        {/* Recipe Metadata */}
        <Stack direction="row" spacing={2} sx={{ mb: 2 }} flexWrap="wrap">
          {recipe.prepTime !== undefined && (
            <Chip
              label={`Prep: ${recipe.prepTime} min`}
              size="small"
              variant="outlined"
            />
          )}
          {recipe.cookTime !== undefined && (
            <Chip
              label={`Cook: ${recipe.cookTime} min`}
              size="small"
              variant="outlined"
            />
          )}
          {recipe.difficulty && (
            <Chip
              label={recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
              size="small"
              color={
                recipe.difficulty === 'easy'
                  ? 'success'
                  : recipe.difficulty === 'medium'
                  ? 'warning'
                  : 'error'
              }
            />
          )}
        </Stack>

        {/* Serving Size Adjuster */}
        {recipe.servings !== undefined && (
          <Box sx={{ mb: 3 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="body1" fontWeight="medium">
                Servings:
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Button 
                  size="small" 
                  variant="outlined"
                  onClick={handleDecreaseServings}
                  disabled={adjustedServings <= 1}
                  sx={{ minWidth: '32px', px: 1 }}
                >
                  −
                </Button>
                <TextField
                  size="small"
                  value={adjustedServings}
                  onChange={(e) => handleServingsChange(e.target.value)}
                  sx={{ width: '70px' }}
                  inputProps={{ 
                    style: { textAlign: 'center' },
                    min: 1,
                    type: 'number'
                  }}
                />
                <Button 
                  size="small" 
                  variant="outlined"
                  onClick={handleIncreaseServings}
                  sx={{ minWidth: '32px', px: 1 }}
                >
                  +
                </Button>
              </Stack>
              {adjustedServings !== originalServings && (
                <Typography variant="body2" color="text.secondary">
                  (original: {originalServings})
                </Typography>
              )}
            </Stack>
          </Box>
        )}

        {/* Tags */}
        {recipe.tags && recipe.tags.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {recipe.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" />
              ))}
            </Stack>
          </Box>
        )}

        <Divider sx={{ my: 2 }} />

        {/* Ingredients Section */}
        <Typography variant="h5" component="h3" gutterBottom>
          Ingredients
        </Typography>
        <List dense>
          {recipe.ingredients.map((ingredient, index) => {
            const quantityStr = ingredient.quantity
              ? `${scaleQuantity(ingredient.quantity.amount)} ${ingredient.quantity.unit}`
              : '';
            const displayText = [quantityStr, ingredient.name, ingredient.notes]
              .filter(Boolean)
              .join(' ');
            
            return (
              <ListItem key={ingredient.id || index} disablePadding>
                <ListItemText
                  primary={`• ${displayText}`}
                  primaryTypographyProps={{ variant: 'body2' }}
                />
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Steps Section */}
        <Typography variant="h5" component="h3" gutterBottom>
          Instructions
        </Typography>
        <List>
          {recipe.steps.map((step, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 1.5 }}>
              <ListItemText
                primary={`${index + 1}. ${step}`}
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

