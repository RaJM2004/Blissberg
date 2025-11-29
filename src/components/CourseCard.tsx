import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  category: string;
  price: number;
  image?: string;
  isNew?: boolean; // Optional tag like 'New'
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  category,
  price,
  image = '/placeholder.svg',
  isNew = false,
}) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* New Tag */}
      {isNew && (
        <div className="absolute top-4 right-4 z-10 bg-blissberg-accent text-white text-xs px-2 py-1 rounded-full shadow">
          New
        </div>
      )}

      {/* Image */}
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">{title}</CardTitle>
          <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-full">
            {category}
          </span>
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          Duration: {duration}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-white/80">{description}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <Button className="bg-gradient-to-r from-blissberg-primary to-blissberg-accent hover:opacity-90 transition-opacity">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
