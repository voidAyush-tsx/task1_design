"use client";
import React, { useEffect, useRef } from 'react';
import { Star, GraduationCap } from 'lucide-react';
import Nav from '../components/nav';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple fade-in animations on mount
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.style.transition = 'all 0.8s ease-out';
          heroRef.current.style.opacity = '1';
          heroRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
    }
  }, []);

  const features = [
    {
      image: "👤",
      title: "A Resume Format That Gets You Interviews",
      description: "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes."
    },
    {
      image: "✉️",
      title: "A Cover Letter Style That Stands Out Strong",
      description: "Stand out with a cover letter that speaks directly to the role and reflects your strengths."
    },
    {
      image: "📱",
      title: "A LinkedIn Profile That Works For You",
      description: "Attract the right eyes, start conversations, and show up in recruiter searches."
    },
    {
      image: "💼",
      title: "An Interview Strategy That Builds Confidence",
      description: "Interview preparation with real HR professionals so you speak clearly confidently."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Nav />
     {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 to-pink-200 pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center" ref={heroRef}>
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Resume
                  <br />
                  <span className="text-red-500">Deserves A Yes</span> Let's
                  <br />
                  Make It Happen
                </h1>
              </div>
              
              <div className="space-y-4 text-gray-700 text-sm sm:text-base max-w-xl">
                <p>If Your Resume Isn't Getting Responses, It's Time For An Upgrade.</p>
                <p>Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land More Interviews. Our Resumes Are Designed To Get Your Foot In The Door And Place Your Name At The Top Of The Shortlist.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-white text-red-500 border-2 border-red-500 rounded-full font-semibold hover:bg-red-50 transition-colors">
                  RESUME PAKAGES
                </button>
                <button className="px-8 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors">
                  CONTACT US
                </button>
              </div>
            </div>

            {/* Right Content - Image with Stats */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image Placeholder */}
                <div className="w-72 h-96 sm:w-80 sm:h-[28rem] bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-end justify-center overflow-hidden">
                  <div className="text-center text-6xl pb-8">👩‍🎓</div>
                </div>

                {/* Rating Card */}
                <div className="absolute top-16 -left-4 sm:left-0 bg-white rounded-2xl shadow-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3">
                  <div className="text-3xl sm:text-4xl font-bold text-teal-500">4.9</div>
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-700">Instructor Rating</div>
                  </div>
                </div>

                {/* Resume Count Card */}
                <div className="absolute bottom-8 -right-4 sm:right-0 bg-white rounded-2xl shadow-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800">260+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Online Resume<br/>Created</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-pink-100 text-sm font-semibold px-6 py-2 rounded-full mb-6">
              What You Get
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              You're Not Just <span className="text-red-500">Another Applicant</span> And Your
              <br className="hidden sm:block" />
              Resume Shouldn't Look Like One
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-6xl sm:text-7xl mb-6">{feature.image}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}