import type { Ingredient } from './recipes.types';

export const mockIngredients: Ingredient[] = [
  // Proteins
  { id: '1', name: 'chicken breast' },
  { id: '2', name: 'ground beef' },
  { id: '3', name: 'salmon' },
  { id: '4', name: 'shrimp' },
  { id: '5', name: 'bacon' },
  { id: '6', name: 'pancetta' },
  { id: '7', name: 'eggs' },
  { id: '8', name: 'tofu' },

  // Dairy
  { id: '9', name: 'milk' },
  { id: '10', name: 'butter' },
  { id: '11', name: 'cream' },
  { id: '12', name: 'Parmesan cheese' },
  { id: '13', name: 'mozzarella cheese' },
  { id: '14', name: 'cheddar cheese' },
  { id: '15', name: 'feta cheese' },
  { id: '16', name: 'Pecorino Romano cheese' },
  { id: '17', name: 'ricotta cheese' },
  { id: '18', name: 'sour cream' },
  { id: '19', name: 'yogurt' },

  // Vegetables
  { id: '20', name: 'tomatoes' },
  { id: '21', name: 'onion' },
  { id: '22', name: 'red onion' },
  { id: '23', name: 'garlic' },
  { id: '24', name: 'bell peppers' },
  { id: '25', name: 'cucumber' },
  { id: '26', name: 'lettuce' },
  { id: '27', name: 'spinach' },
  { id: '28', name: 'carrots' },
  { id: '29', name: 'broccoli' },
  { id: '30', name: 'mushrooms' },
  { id: '31', name: 'zucchini' },
  { id: '32', name: 'potatoes' },
  { id: '33', name: 'sweet potatoes' },
  { id: '34', name: 'corn' },
  { id: '35', name: 'green beans' },
  { id: '36', name: 'asparagus' },
  { id: '37', name: 'celery' },

  // Grains & Pasta
  { id: '38', name: 'rice' },
  { id: '39', name: 'arborio rice' },
  { id: '40', name: 'quinoa' },
  { id: '41', name: 'spaghetti' },
  { id: '42', name: 'penne' },
  { id: '43', name: 'fettuccine' },
  { id: '44', name: 'all-purpose flour' },
  { id: '45', name: 'bread' },
  { id: '46', name: 'tortillas' },
  { id: '47', name: 'taco shells' },

  // Fruits
  { id: '48', name: 'bananas' },
  { id: '49', name: 'apples' },
  { id: '50', name: 'lemons' },
  { id: '51', name: 'limes' },
  { id: '52', name: 'avocado' },
  { id: '53', name: 'strawberries' },
  { id: '54', name: 'blueberries' },

  // Herbs & Spices
  { id: '55', name: 'black pepper' },
  { id: '56', name: 'salt' },
  { id: '57', name: 'dried oregano' },
  { id: '58', name: 'basil' },
  { id: '59', name: 'parsley' },
  { id: '60', name: 'cilantro' },
  { id: '61', name: 'thyme' },
  { id: '62', name: 'rosemary' },
  { id: '63', name: 'cumin' },
  { id: '64', name: 'paprika' },
  { id: '65', name: 'chili powder' },
  { id: '66', name: 'taco seasoning' },
  { id: '67', name: 'cinnamon' },
  { id: '68', name: 'vanilla extract' },

  // Oils & Vinegars
  { id: '69', name: 'olive oil' },
  { id: '70', name: 'sesame oil' },
  { id: '71', name: 'vegetable oil' },
  { id: '72', name: 'balsamic vinegar' },
  { id: '73', name: 'white vinegar' },

  // Sauces & Condiments
  { id: '74', name: 'soy sauce' },
  { id: '75', name: 'hot sauce' },
  { id: '76', name: 'ketchup' },
  { id: '77', name: 'mustard' },
  { id: '78', name: 'mayonnaise' },
  { id: '79', name: 'salsa' },
  { id: '80', name: 'pesto' },
  { id: '81', name: 'tomato sauce' },
  { id: '82', name: 'tomato paste' },

  // Other
  { id: '83', name: 'vegetable broth' },
  { id: '84', name: 'chicken broth' },
  { id: '85', name: 'white wine' },
  { id: '86', name: 'red wine' },
  { id: '87', name: 'honey' },
  { id: '88', name: 'maple syrup' },
  { id: '89', name: 'sugar' },
  { id: '90', name: 'brown sugar' },
  { id: '91', name: 'baking powder' },
  { id: '92', name: 'baking soda' },
  { id: '93', name: 'Kalamata olives' },
  { id: '94', name: 'capers' },
  { id: '95', name: 'nuts' },
  { id: '96', name: 'breadcrumbs' },
];

// Helper function to find ingredient by name
export const findIngredientByName = (name: string): Ingredient | undefined => {
  return mockIngredients.find(
    (ingredient) => ingredient.name.toLowerCase() === name.toLowerCase()
  );
};

// Helper function to get ingredients by category (based on position in array)
export const getIngredientsByCategory = (category: string): Ingredient[] => {
  const categories: Record<string, [number, number]> = {
    proteins: [0, 7],
    dairy: [8, 18],
    vegetables: [19, 36],
    grains: [37, 46],
    fruits: [47, 53],
    herbs: [54, 67],
    oils: [68, 72],
    sauces: [73, 81],
    other: [82, 95],
  };

  const range = categories[category.toLowerCase()];
  if (!range) return [];
  
  return mockIngredients.slice(range[0], range[1] + 1);
};
