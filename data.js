const categories = [
    { id: 1, name: 'Pizza', icon: '🍕' },
    { id: 2, name: 'Burger', icon: '🍔' },
    { id: 3, name: 'Biryani', icon: '🍛' },
    { id: 4, name: 'Desserts', icon: '🍰' },
    { id: 5, name: 'Drinks', icon: '🥤' }
];

const restaurants = [
    {
        id: 1,
        name: 'Pizza Hut',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60',
        rating: 4.5,
        deliveryTime: '30-40 min',
        categories: ['Pizza']
    },
    {
        id: 2,
        name: 'Burger King',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=60',
        rating: 4.2,
        deliveryTime: '20-30 min',
        categories: ['Burger']
    },
    {
        id: 3,
        name: 'Paradise Biryani',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&w=800&q=60',
        rating: 4.8,
        deliveryTime: '45-55 min',
        categories: ['Biryani']
    }
];

const foodItems = [
    {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic cheese and tomato sauce',
        price: 299,
        category: 'Pizza',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 1
    },
    {
        id: 2,
        name: 'Veg Whopper',
        description: 'Flame-grilled plant-based patty',
        price: 199,
        category: 'Burger',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 2
    },
    {
        id: 3,
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice with chicken',
        price: 349,
        category: 'Biryani',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&w=800&q=60',
        isVeg: false,
        restaurantId: 3
    },
    {
        id: 4,
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center',
        price: 149,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1624353335558-eb922c19e592?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 1
    }
];

// Exporting for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categories, restaurants, foodItems };
}
