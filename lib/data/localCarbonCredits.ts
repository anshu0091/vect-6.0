// Local fallback data for marketplace when API is not responding
export interface LocalCarbonCredit {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  projectName: string;
  location: string;
  certificationBody: string;
  vintage: string;
  imageUrl: string;
  seller: string;
  carbonReduction: number;
  expiryDate?: string;
  category: 'renewable' | 'forestry' | 'agriculture' | 'waste' | 'other';
  status: 'available' | 'sold' | 'pending';
}

export const localCarbonCredits: LocalCarbonCredit[] = [
  {
    id: 'local-1',
    name: 'Amazon Rainforest Conservation',
    description: 'Carbon credits from protecting the Amazon rainforest from deforestation.',
    price: 15.50,
    quantity: 1000,
    projectName: 'Amazon Preservation Initiative',
    location: 'Brazil',
    certificationBody: 'Verra',
    vintage: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop',
    seller: 'marketplace@vectorium.com',
    carbonReduction: 1000,
    category: 'forestry',
    status: 'available'
  },
  {
    id: 'local-2',
    name: 'Wind Farm Project',
    description: 'Credits generated from a wind farm project reducing fossil fuel dependency.',
    price: 12.75,
    quantity: 500,
    projectName: 'Clean Wind Energy',
    location: 'Germany',
    certificationBody: 'Gold Standard',
    vintage: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop',
    seller: 'marketplace@vectorium.com',
    carbonReduction: 500,
    category: 'renewable',
    status: 'available'
  },
  {
    id: 'local-3',
    name: 'Sustainable Agriculture',
    description: 'Carbon sequestration through sustainable farming practices.',
    price: 18.25,
    quantity: 750,
    projectName: 'Green Farming Initiative',
    location: 'India',
    certificationBody: 'Climate Action Reserve',
    vintage: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop',
    seller: 'marketplace@vectorium.com',
    carbonReduction: 750,
    category: 'agriculture',
    status: 'available'
  },
  {
    id: 'local-4',
    name: 'Methane Capture Project',
    description: 'Capturing methane emissions from waste management facilities.',
    price: 20.00,
    quantity: 300,
    projectName: 'Waste to Energy',
    location: 'United States',
    certificationBody: 'American Carbon Registry',
    vintage: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop',
    seller: 'marketplace@vectorium.com',
    carbonReduction: 300,
    category: 'waste',
    status: 'available'
  },
  {
    id: 'local-5',
    name: 'Solar Power Plant',
    description: 'Credits from a large-scale solar power installation.',
    price: 14.50,
    quantity: 1200,
    projectName: 'Solar Energy Solutions',
    location: 'Australia',
    certificationBody: 'Verra',
    vintage: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
    seller: 'marketplace@vectorium.com',
    carbonReduction: 1200,
    category: 'renewable',
    status: 'available'
  },
  {
    id: 'local-6',
    name: 'Mangrove Restoration',
    description: 'Restoring mangrove ecosystems for carbon sequestration and coastal protection.',
    price: 22.75,
    quantity: 600,
    projectName: 'Coastal Ecosystem Restoration',
    location: 'Indonesia',
    certificationBody: 'Plan Vivo',
    vintage: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=2071&auto=format&fit=crop',
    seller: 'marketplace@vectorium.com',
    carbonReduction: 600,
    category: 'forestry',
    status: 'available'
  },
  {
    id: 'local-7',
    name: 'Biogas Plant Initiative',
    description: 'Converting organic waste to clean energy and reducing methane emissions.',
    price: 16.80,
    quantity: 850,
    projectName: 'Clean Energy from Waste',
    location: 'Kenya',
    certificationBody: 'Gold Standard',
    vintage: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1497436072909-f5e4be1713a0?q=80&w=2032&auto=format&fit=crop',
    seller: 'marketplace@vectorium.com',
    carbonReduction: 850,
    category: 'waste',
    status: 'available'
  },
  {
    id: 'local-8',
    name: 'Reforestation Project',
    description: 'Large-scale tree planting initiative for carbon sequestration.',
    price: 13.25,
    quantity: 2000,
    projectName: 'Green Earth Reforestation',
    location: 'Canada',
    certificationBody: 'Verra',
    vintage: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop',
    seller: 'marketplace@vectorium.com',
    carbonReduction: 2000,
    category: 'forestry',
    status: 'available'
  },
  {
    id: 'local-9',
    name: 'Hydroelectric Power',
    description: 'Clean energy generation from renewable water sources.',
    price: 11.90,
    quantity: 1500,
    projectName: 'Renewable Hydro Energy',
    location: 'Norway',
    certificationBody: 'Climate Action Reserve',
    vintage: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    seller: 'marketplace@vectorium.com',
    carbonReduction: 1500,
    category: 'renewable',
    status: 'available'
  },
  {
    id: 'local-10',
    name: 'Organic Farming Initiative',
    description: 'Sustainable agriculture practices reducing carbon footprint.',
    price: 19.50,
    quantity: 400,
    projectName: 'Sustainable Organic Farms',
    location: 'Netherlands',
    certificationBody: 'Plan Vivo',
    vintage: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop',
    seller: 'marketplace@vectorium.com',
    carbonReduction: 400,
    category: 'agriculture',
    status: 'available'
  }
];

// Helper function to filter local data
export const filterLocalCredits = (
  credits: LocalCarbonCredit[],
  filters: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    location?: string;
    vintage?: string;
  }
) => {
  return credits.filter(credit => {
    if (filters.category && credit.category !== filters.category) return false;
    if (filters.minPrice && credit.price < filters.minPrice) return false;
    if (filters.maxPrice && credit.price > filters.maxPrice) return false;
    if (filters.location && credit.location !== filters.location) return false;
    if (filters.vintage && credit.vintage !== filters.vintage) return false;
    return true;
  });
};