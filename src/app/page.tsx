"use client";
import React from 'react';
import { Star, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Nav from '../components/nav';

export default function Home() {
  const features = [
    {
      image: <Image src="/feature_1.png" alt="Resume" width={200} height={150} className="w-[200px] mx-auto" />,
      title: "A Resume Format That Gets You Interviews",
      description: "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes."
    },
    {
      image: <Image src="/feature_2.png" alt="Cover Letter" width={200} height={150} className="w-[200px] mx-auto" />,
      title: "A Cover Letter Style That Stands Out Strong",
      description: "Stand out with a cover letter that speaks directly to the role and reflects your strengths."
    },
    {
      image: <Image src="/feature_3.png" alt="LinkedIn" width={200} height={150} className="w-[200px] mx-auto" />,
      title: "A LinkedIn Profile That Works For You",
      description: "Attract the right eyes, start conversations, and show up in recruiter searches."
    },
    {
      image: <Image src="/feature_4.png" alt="Interview" width={200} height={150} className="w-[200px] mx-auto" />,
      title: "An Interview Strategy That Builds Confidence",
      description: "Interview preparation with real HR professionals so you speak clearly confidently."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-figtree">
      <Nav />
      <section className="bg-gradient-to-br from-pink-100 to-pink-200 text-black pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:gap-12 items-center md:items-end lg:justify-between w-full md:pl-24 md:pr-10 px-5 pt-12 pb-0">
          <div className="flex-col text-center space-y-6 lg:space-y-8 pb-44">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text font-bold leading-tight">
                Your Resume
                <br />
                <span className="text-[#FA1239]">Deserves A Yes</span> Let's
                <br />
                Make It Happen
              </h1>
            </div>
            
            <div className="space-y-4 text-sm sm:text-base max-w-xl">
              <p>If Your Resume Isn't Getting Responses, It's Time For An Upgrade. Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land More Interviews. Our Resumes Are Designed To Get Your Foot In The Door And Place Your Name At The Top Of The Shortlist.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-fit mx-auto sm:mx-0">
              <button className="px-8 py-3 bg-white text-red-500 border-2 border-red-500 rounded-full font-semibold mx-auto">
                RESUME PAKAGES
              </button>
              <button className="px-8 py-3 bg-red-500 text-white rounded-full font-semibold mx-auto">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end px-24">
            <Image
              src="/study_girl.png"
              alt="Study girl"
              width={500}
              height={727}
              className="object-cover w-[320px] sm:w-[450px] flex items-center justify-center"
            />

            <div className="absolute text-[14px] md:text-2xl bottom-20 md:bottom-52 left-12 md:left-4 sm:left-0 bg-white rounded-2xl shadow-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3">
              <div className="text-3xl sm:text-5xl font-bold text-teal-500">4.9</div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="font-semibold text-gray-700">Instructor Rating</div>
              </div>
            </div>

            <div className="absolute text-[14px] sm:text-2xl bottom-2 right-5 sm:right-16 bg-white rounded-2xl shadow-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3">
              <Image
                src="/cap.png"
                alt="Scholars"
                width={80}
                height={80}
                className="object-cover w-[36px] sm:w-[80px] flex items-center justify-center"
              />
              <div>
                <div className="text-[16px] sm:text-3xl font-bold text-black">260+</div>
                <div className="text-[10px] sm:text-[14px] text-gray-600">Online Resume<br/>Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 text-black sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-13">
            <div className="inline-block bg-[rgba(253,146,164,0.3)] text-base font-semibold px-6 py-3 rounded-md mb-8">
              What You Get
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              You're Not Just <span className="text-red-500">Another Applicant</span> And Your
              <br className="hidden sm:block" />
              Resume Shouldn't Look Like One
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-none shadow-md"
              >
                <div className="mb-5">{feature.image}</div>
                <h3 className="text-2xl sm:text-xl font-medium mb-4 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[18px] font-normal text-[#595959] leading-relaxed">
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