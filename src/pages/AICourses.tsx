import React from 'react';
import CourseCard from '@/components/CourseCard';
import Navbar from '@/components/Navbar';
import VideoBackground from '@/components/VideoBackground';
import ParticleBackground from '@/components/ParticleBackground';

const aiCourses = [
  {
    title: "Machine Learning Fundamentals",
    description: "Learn the core concepts of machine learning, including supervised and unsupervised learning, model evaluation, and practical implementation using popular frameworks.",
    price: 299,
    duration: "12 weeks",
    category: "AI",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    title: "Deep Learning Specialization",
    description: "Master deep neural networks, CNN, RNN, and transformers. Build and train advanced deep learning models for real-world applications.",
    price: 399,
    duration: "16 weeks",
    category: "AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    title: "Natural Language Processing",
    description: "Explore NLP techniques, text processing, sentiment analysis, and language generation using state-of-the-art models like BERT and GPT.",
    price: 349,
    duration: "14 weeks",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    title: "Computer Vision Applications",
    description: "Learn image processing, object detection, facial recognition, and video analysis using modern computer vision techniques and frameworks.",
    price: 329,
    duration: "10 weeks",
    category: "AI",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
  }
];

const AICourses = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <ParticleBackground />
      <VideoBackground videoUrl="/video2.mp4" />
      <Navbar />
      <div className="relative z-10 pt-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
        Artificial <span className="text-gradient ">Intelligence Courses</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into the world of artificial intelligence with our comprehensive courses.
            Learn from industry experts and gain practical experience in building AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCourses.map((course, index) => (
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

export default AICourses;