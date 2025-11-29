import React from 'react';
import CourseCard from '@/components/CourseCard';
import Navbar from '@/components/Navbar';
import VideoBackground from '@/components/VideoBackground';
import ParticleBackground from '@/components/ParticleBackground';

const semiconductorCourses = [
  {
    title: "VLSI Design Fundamentals",
    description: "Learn VLSI design principles, circuit design, layout techniques, and simulation using industry-standard EDA tools.",
    price: 399,
    duration: "16 weeks",
    category: "Semiconductor",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    title: "Semiconductor Manufacturing",
    description: "Explore semiconductor fabrication processes, clean room operations, and quality control in semiconductor manufacturing.",
    price: 429,
    duration: "15 weeks",
    category: "Semiconductor",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  }
];

const SemiconductorCourses = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <ParticleBackground />
      <VideoBackground videoUrl="/video4.mp4" />
      <Navbar />
      <div className="relative z-10 pt-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
              Semiconductor <span className="text-gradient ">Technology Courses</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master semiconductor technology with our industry-aligned courses.
              Learn from experienced professionals and gain hands-on experience in semiconductor design and manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {semiconductorCourses.map((course, index) => (
              <CourseCard
                key={index}
                {...course}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemiconductorCourses;
