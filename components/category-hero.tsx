import Image from 'next/image';

interface CategoryHeroProps {
  title: string;
  description: string;
  image: string;
}

export function CategoryHero({ title, description, image }: CategoryHeroProps) {
  return (
    <section className="relative h-80 bg-gradient-to-r from-blue-900 to-orange-600 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-orange-600/80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100">{description}</p>
        </div>
      </div>
    </section>
  );
}