"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { StarsCanvas } from "@/components/main/star-background";

const ResumePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/PK.RESUME.jpg';
    link.download = 'PK.RESUME.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>Resume | Pranav Kadam</title>
        <meta name="description" content="Pranav Kadam's Resume" />
      </Head>
      
      <div className="relative w-full min-h-screen pt-24 pb-16 px-4 bg-[#030014]">
        {/* Main content container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-purple-500">Resume</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Resume Image Container */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl shadow-2xl shadow-purple-500/20 overflow-hidden mb-8">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold text-white">Resume</h2>
            </div>
            
            <div className="p-3 sm:p-6 flex justify-center">
              {isClient ? (
                <div className="w-full max-w-4xl">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 bg-gray-800/30">
                    <Image
                      src="/PK.RESUME.jpg"
                      alt="Pranav Kadam's Resume"
                      width={800}
                      height={1000}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 bg-gray-800/30 rounded-xl w-full max-w-4xl">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"></div>
                    <p className="text-gray-300">Loading resume...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Download Button */}
          <div className="flex justify-center">
            <button
              onClick={downloadResume}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePage;