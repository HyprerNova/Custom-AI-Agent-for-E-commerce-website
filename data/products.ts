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
    image: 'https://www.hearnshobbies.com/cdn/shop/articles/How-fast-can-RC-cars-go.jpg?v=1663931507',
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
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1738089615-81t7DubsCrL.jpg?crop=0.691xw:0.986xh;0.152xw,0&resize=980:*',
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
    image: 'https://content.instructables.com/FWX/DKBH/GB0JQNK3/FWXDKBHGB0JQNK3.jpg?auto=webp',
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
    image: 'https://rcdrone.top/cdn/shop/products/S8c0a215f9c4a45c688d79b04f525a0f4r.jpg?v=1711183808',
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
    image: 'https://rukminim2.flixcart.com/image/704/844/remote-control-toy/3/x/r/v912-4-channel-big-rc-helicopter-2-4-ghz-toyzio-original-imaeqrf6z7njveyh.jpeg?q=90&crop=false',
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
    image: 'https://www.exhobby.com/cdn/shop/collections/RC_helicopter_collection.jpg?v=1721701145',
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
    image: 'https://se-cdn.djiits.com/tpc/uploads/carousel/image/f96def8770cb7529d7a98731fa2117dd@ultra.jpg',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33XkqlK4g3aJe5ZyLT2FBCh09huhtdVaK_w&s',
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
    image: 'https://cdn.shopclues.com/images1/thumbnails/97146/320/320/143833012-97146724-1551073139.jpg',
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