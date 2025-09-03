import { products } from '@/data/products';
import { ProductCard } from '@/components/product-card';
import { CategoryHero } from '@/components/category-hero';

export default function HelicoptersPage() {
  const helicopterProducts = products.filter(product => product.category === 'helicopters');

  return (
    <div className="min-h-screen">
      <CategoryHero
        title="RC Helicopters"
        description="Take to the skies with our precision-engineered helicopters, from beginner-friendly models to professional-grade aircraft."
        image="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">All Helicopters ({helicopterProducts.length})</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {helicopterProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}