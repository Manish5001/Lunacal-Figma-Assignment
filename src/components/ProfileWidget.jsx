import React, { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const ProfileWidget = () => {
  const [activeTab, setActiveTab] = useState('About Me');
  const [images, setImages] = useState([
    'https://thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?x37549',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6_8yDxqoyNfD-eguSXOuptRfXHcVC859sw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkH7KRMfe1bI-MxLljcumYDcKRyBGruDPLZg&s',
  ]);

  const addImage = () => {
    setImages([...images, '/api/placeholder/100/100']);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-8">
      <div className="w-2/3 space-y-4">
        
        {/* Tabs Section */}
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg text-gray-300">
          <div className="flex space-x-4 mb-4 justify-center">
            {['About Me', 'Experiences', 'Recommended'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full border border-gray-600 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gray-700 text-white shadow-lg'
                    : 'bg-gray-600 text-gray-400'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="text-sm">
            {activeTab === 'About Me' && (
              <>
                <p className="font-light">
                  Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                </p>
                <p className="mt-2 font-light">
                  I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school so my calendar is usually blocked between 9-10 AM. This is a...
                </p>
              </>
            )}
            {activeTab === 'Experiences' && (
              <>
                <p>10 years of experience in the sales field.
                Proven track record of success in exceeding sales goals.
                Expertise in developing and executing effective sales strategies.
                Strong communication, interpersonal, and presentation skills.
                Passionate about helping clients find the right solutions to meet their business needs.</p>
              </>
            )}
            {activeTab === 'Recommended' && (
              <>
                <p>"Dave is a true professional who is dedicated to his clients' success. He is always willing to go the extra mile to make sure his clients are satisfied. I highly recommend him! - John Smith, CEO, Acme Corporation"
                "Dave's knowledge of the Salesforce platform is unmatched. He helped us implement a new CRM system that has significantly improved our sales process. I would recommend Dave to any company looking to improve their sales performance. - Jane Doe, Sales Manager, XYZ Company"</p>
              </>
            )}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-medium">Gallery</span>
            <div className="flex space-x-2 items-center">
              <button
                className="bg-gradient-to-r from-gray-700 to-gray-500 text-white px-4 py-2 rounded-full text-sm flex items-center shadow-lg transition-all duration-300 hover:from-gray-600 hover:to-gray-400"
                onClick={addImage}
              >
                <Plus size={16} className="mr-1" /> ADD IMAGE
              </button>
              <button className="bg-gray-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-600">
                <ChevronLeft size={16} />
              </button>
              <button className="bg-gray-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-600">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWidget;
