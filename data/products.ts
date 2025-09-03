// Images are served from the public directory via string paths
import type { StaticImageData } from 'next/image';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string | StaticImageData;
  category: 'cars' | 'helicopters' | 'drones' | 'accessories';
  description: string;
  specs: Record<string, string>;
  featured?: boolean;
}

export const products: Product[] = [
  // RC Cars
  {
    id: 'car-001',
    name: 'Thunder Bolt Racing Car',
    price: 299.99,
    image: '/images/Cars/c1.jpg',
    category: 'cars',
    description: 'High-speed racing car with advanced suspension and drift capabilities.',
    specs: {
      'Scale': '1:10',
      'Speed': '45 mph',
      'Battery': '7.4V LiPo',
      'Range': '100m'
    },
    featured: true
  },
  {
    id: 'car-002',
    name: 'Off-Road Beast',
    price: 349.99,
    image: '/images/Cars/c2.jpg',
    category: 'cars',
    description: 'Rugged off-road vehicle built for extreme terrain adventures.',
    specs: {
      'Scale': '1:8',
      'Speed': '40 mph',
      'Battery': '11.1V LiPo',
      'Range': '120m'
    }
  },
  {
    id: 'car-003',
    name: 'Street Racer Pro',
    price: 199.99,
    image: '/images/Cars/c3.jpg',
    category: 'cars',
    description: 'Professional-grade street racing car with precision controls.',
    specs: {
      'Scale': '1:12',
      'Speed': '35 mph',
      'Battery': '7.4V LiPo',
      'Range': '80m'
    }
  },
  // {
  //   id: 'car-004'
  // Helicopters
  {
    id: 'heli-001',
    name: 'Sky Master Pro',
    price: 459.99,
    image: '/images/Helicopter/h1.webp',
    category: 'helicopters',
    description: 'Professional-grade helicopter with 6-axis gyro stabilization.',
    specs: {
      'Channels': '6CH',
      'Flight Time': '12 minutes',
      'Battery': '11.1V LiPo',
      'Range': '150m'
    },
    featured: true
  },
  {
    id: 'heli-002',
    name: 'Apache Thunder',
    price: 599.99,
    image: '/images/Helicopter/h2.jpg',
    category: 'helicopters',
    description: 'Military-style attack helicopter with realistic details.',
    specs: {
      'Channels': '4CH',
      'Flight Time': '10 minutes',
      'Battery': '7.4V LiPo',
      'Range': '100m'
    }
  },
  {
    id: 'heli-003',
    name: 'Micro Copter',
    price: 89.99,
    image: '/images/Helicopter/h3.webp',
    category: 'helicopters',
    description: 'Compact indoor helicopter perfect for beginners.',
    specs: {
      'Channels': '3.5CH',
      'Flight Time': '8 minutes',
      'Battery': '3.7V LiPo',
      'Range': '30m'
    }
  },
    // {
    //   id: 'heli-

  // Drones
  {
    id: 'drone-001',
    name: 'Phoenix 4K Pro',
    price: 899.99,
    image: '/images/Drone/d1.jpg',
    category: 'drones',
    description: 'Professional 4K camera drone with gimbal stabilization.',
    specs: {
      'Camera': '4K@60fps',
      'Flight Time': '30 minutes',
      'Battery': '11.1V LiPo',
      'Range': '2km'
    },
    featured: true
  },
  {
    id: 'drone-002',
    name: 'Racing Falcon',
    price: 559.99,
    image: '/images/Drone/d2.jpg',
    category: 'drones',
    description: 'High-speed racing drone built for competitive flying.',
    specs: {
      'Speed': '80 mph',
      'Flight Time': '8 minutes',
      'Battery': '14.8V LiPo',
      'Range': '500m'
    }
  },
  {
    id: 'drone-003',
    name: 'Stealth Recon',
    price: 1299.99,
    image: '/images/Drone/d3.jpg',
    category: 'drones',
    description: 'Military-inspired reconnaissance drone with thermal imaging.',
    specs: {
      'Camera': '4K + Thermal',
      'Flight Time': '45 minutes',
      'Battery': '22.2V LiPo',
      'Range': '5km'
    }
  },

  // Accessories
  {
    id: 'acc-001',
    name: 'LiPo Battery Pack 7.4V',
    price: 39.99,
    image: '/images/Accessories/a1.jpg',
    category: 'accessories',
    description: 'High-capacity 7.4V LiPo battery for extended flight time.',
    specs: {
      'Voltage': '7.4V',
      'Capacity': '2200mAh',
      'Discharge': '25C',
      'Connector': 'XT60'
    }
  },
  {
    id: 'acc-002',
    name: 'Pro Controller TX16S',
    price: 299.99,
    image: '/images/Accessories/a2.webp',
    category: 'accessories',
    description: 'Professional 16-channel radio transmitter with touch screen.',
    specs: {
      'Channels': '16CH',
      'Protocol': '2.4GHz',
      'Range': '2km',
      'Battery': 'Internal Li-ion'
    },
    featured: true
  },
  {
    id: 'acc-003',
    name: 'Rapid Charger Station',
    price: 149.99,
    image: '/images/Accessories/a3.jpg',
    category: 'accessories',
    description: 'Fast charging station for multiple battery types.',
    specs: {
      'Ports': '4 charging ports',
      'Power': '200W',
      'Types': 'LiPo/NiMH/Li-ion',
      'Features': 'Balance charging'
    }
  },
];

export const categories = [
  {
    id: 'cars',
    name: 'RC Cars',
    description: 'High-performance remote control cars for every terrain',
    image: '/images/Cars/c1.jpg'
  },
  {
    id: 'helicopters',
    name: 'Helicopters',
    description: 'Professional and hobby helicopters for aerial adventures',
    image: '/images/Helicopter/h1.webp'
  },
  {
    id: 'drones',
    name: 'Drones',
    description: 'Advanced drones with cutting-edge technology',
    image: '/images/Drone/d1.jpg'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential accessories and parts for your RC vehicles',
    image: '/images/Accessories/a1.jpg'
  }
];