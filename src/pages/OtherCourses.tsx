import React from 'react';
import CourseCard from '@/components/CourseCard';
import Navbar from '@/components/Navbar';
import VideoBackground from '@/components/VideoBackground';
import ParticleBackground from '@/components/ParticleBackground';

const otherCourses = [
  {
    title: "Java Programming Masterclass",
    description: "Comprehensive Java programming course covering core concepts, object-oriented programming, and enterprise Java development.",
    price: 299,
    duration: "16 weeks",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Python for Data Science",
    description: "Learn Python programming with focus on data analysis, visualization, and machine learning applications.",
    price: 279,
    duration: "12 weeks",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "DevOps Engineering",
    description: "Master DevOps practices, including CI/CD, containerization, infrastructure as code, and cloud deployment.",
    price: 349,
    duration: "14 weeks",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Oracle Database Administration",
    description: "Learn Oracle database management, including installation, configuration, backup, recovery, and performance tuning.",
    price: 399,
    duration: "15 weeks",
    category: "Database",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Full Stack Web Development",
    description: "Comprehensive web development course covering both frontend and backend technologies.",
    price: 449,
    duration: "20 weeks",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Cloud Computing with AWS",
    description: "Learn cloud architecture, services, and deployment using Amazon Web Services (AWS).",
    price: 329,
    duration: "12 weeks",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

const OtherCourses = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <ParticleBackground />
      <VideoBackground videoUrl="/video3.mp4" />
      <Navbar />
      <div className="relative z-10 pt-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
           Technology <span className="text-gradient ">Courses</span>
          </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of technology courses designed to help you master
              various programming languages, tools, and technologies used in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCourses.map((course, index) => (
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

export default OtherCourses;