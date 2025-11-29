"use client";

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Users, 
  GraduationCap, 
  Heart, 
  Award,
  Clock,
  ChevronLeft,
  ChevronRight,
 
  School,
  Droplets
} from 'lucide-react';

const Chak172Page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const villageImages = [
    "https://img.freepik.com/free-vector/gradient-landscape-background-daylight_52683-74373.jpg?semt=ais_hybrid&w=740&q=80",
    "/villages/chak172/water-plant.jpg", 
    "/villages/chak172/school-building.jpg",
    "/villages/chak172/masjid.jpg",
    "/villages/chak172/community.jpg"
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === villageImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === villageImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? villageImages.length - 1 : prev - 1
    );
  };

  return (
    <>
   

      <div className="min-h-screen bg-white">
        {/* Simple Image Slider */}
        <section className="relative h-96 bg-gray-900">
          <div className="relative h-full overflow-hidden">
            {villageImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              </div>
            ))}
            
            {/* Slider Controls */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {villageImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl sm:text-5xl font-black mb-4">Chak No. 172/9-L</h1>
              <p className="text-xl text-white/90">A Model Village Transformed by Community Development</p>
            </div>
          </div>
        </section>

        {/* Comprehensive Article Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-black text-gray-800 mb-6">The Remarkable Journey of Chak 172: From Struggle to Sustainable Development</h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Nestled in the heart of Tehsil Chichawatni, District Sahiwal, lies Chak No. 172/9-L - 
                a village that has become a shining example of community-led transformation. Established 
                in the early 1900s, this agricultural community has witnessed a remarkable evolution 
                from basic rural settlement to a model village, thanks to the concerted efforts of 
                <Link href="/projects" className="text-[#0A400C] font-semibold mx-1">Hamdard Committee's development initiatives</Link>.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Historical Roots and Early Challenges</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Originally settled by predominantly Arain agricultural families, Chak 172 faced 
                numerous challenges that are common to rural Pakistan. The village struggled with 
                inadequate infrastructure, limited access to clean water, and educational facilities 
                that couldn't meet the growing needs of its 2,500 residents.
              </p>

              <div className="bg-gray-50 border-l-4 border-[#0A400C] p-6 my-8">
                <p className="text-gray-700 italic">
                  "Before the intervention of Hamdard Committee, our village lacked basic amenities. 
                  The roads were unpaved, drinking water was contaminated, and our schools needed 
                  serious improvements." - Muhammad Aslam, Village Lumberdar
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Educational Transformation</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the most significant transformations has been in the education sector. The village 
                boasts two government high schools - one for boys and one for girls - that have undergone 
                substantial improvements through 
                <Link href="/projects" className="text-[#0A400C] font-semibold mx-1">Hamdard Committee's education development projects</Link>. 
                These schools now serve over 600 students with improved facilities including science labs, 
                computer rooms, and better classroom infrastructure.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Religious and Community Infrastructure</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The village takes pride in its five mosques, with the Markazi Masjid Al-Hadith serving 
                as the central place of worship for the community. Through the 
                <Link href="/projects" className="text-[#0A400C] font-semibold mx-1">mosque renovation project</Link>, 
                these religious institutions have been modernized with better facilities, sound systems, 
                and improved water arrangements for wudu (ablution).
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Sustainable Development Projects</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The installation of an 
                <Link href="/services/ro-plant" className="text-[#0A400C] font-semibold mx-1">RO water filtration plant</Link> 
                has been a game-changer for the village, providing clean drinking water to all 400+ households 
                and significantly reducing waterborne diseases. The comprehensive 
                <Link href="/services/street-lights" className="text-[#0A400C] font-semibold mx-1">street paving and lighting project</Link> 
                has improved mobility and safety, while the underground drainage system has eliminated 
                flooding and sanitation issues.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Healthcare and Emergency Services</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Regular 
                <Link href="/events/medical-camp-2024" className="text-[#0A400C] font-semibold mx-1">medical camps</Link> 
                organized by Hamdard Committee provide essential healthcare services to villagers. The 
                24/7 
                <Link href="/services/ambulance" className="text-[#0A400C] font-semibold mx-1">ambulance service</Link> 
                ensures that emergency medical transportation is always available, a crucial service 
                that has saved numerous lives in critical situations.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Community Engagement and Events</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The village actively participates in various community events including the annual 
                <Link href="/events/blood-donation-drive-2020" className="text-[#0A400C] font-semibold mx-1">blood donation drive</Link> 
                and regular 
                <Link href="/events/plant-distribution" className="text-[#0A400C] font-semibold mx-1">tree plantation campaigns</Link>. 
                These initiatives not only address immediate needs but also foster a sense of community 
                ownership and environmental consciousness.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Economic Landscape and Occupations</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Agriculture remains the backbone of the village economy, with 45% of residents engaged 
                in farming wheat, cotton, and sugarcane. The village also has a significant number of 
                skilled workers, drivers, and overseas workers who contribute to the local economy 
                through remittances.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Future Vision and Ongoing Initiatives</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Current 
                <Link href="/projects" className="text-[#0A400C] font-semibold mx-1">ongoing projects</Link> 
                include adult literacy programs, women's skill development centers, and youth sports 
                facilities development. The planned establishment of a community health center and 
                digital library promises to take the village's development to the next level.
              </p>

              <div className="bg-gradient-to-r from-[#0A400C] to-[#819067] rounded-2xl p-8 text-white my-12">
                <h4 className="text-2xl font-bold mb-4">The Impact of Collective Effort</h4>
                <p className="text-lg">
                  The transformation of Chak 172 demonstrates how strategic interventions, community 
                  participation, and sustainable development practices can create lasting change. 
                  From improved education and healthcare to better infrastructure and economic 
                  opportunities, the village stands as a testament to what can be achieved when 
                  communities and organizations work together toward common goals.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Key Infrastructure Developments</h3>
              
              <ul className="text-gray-700 space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Droplets className="w-5 h-5 text-[#0A400C] flex-shrink-0" />
                  <span><strong>Water Supply:</strong> RO filtration plant serving entire village</span>
                </li>
                <li className="flex items-center space-x-3">
                  <School className="w-5 h-5 text-[#0A400C] flex-shrink-0" />
                  <span><strong>Education:</strong> Two government high schools with modern facilities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <School className="w-5 h-5 text-[#0A400C] flex-shrink-0" />
                  <span><strong>Religious:</strong> Five mosques with Markazi Masjid as central hub</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-[#0A400C] flex-shrink-0" />
                  <span><strong>Healthcare:</strong> Regular medical camps and 24/7 ambulance service</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                The story of Chak 172 continues to evolve, with new chapters being written through 
                ongoing 
                <Link href="/projects" className="text-[#0A400C] font-semibold mx-1">development projects</Link> 
                and community initiatives. As the village progresses, it serves as an inspiring model 
                for rural development across the region.
              </p>

              <div className="border-t border-gray-200 pt-8 mt-12">
                <p className="text-gray-600 text-sm">
                  <strong>Last Updated:</strong> December 2024 | 
                  <Link href="/contact" className="text-[#0A400C] ml-2">Contact Hamdard Committee</Link> | 
                  <Link href="/donate" className="text-[#0A400C] ml-2">Support Village Development</Link>
                </p>
              </div>

            </article>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <Users className="w-8 h-8 text-[#0A400C] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">2,500+</div>
                <div className="text-sm text-gray-600">Residents</div>
              </div>
              <div>
                <GraduationCap className="w-8 h-8 text-[#0A400C] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">2</div>
                <div className="text-sm text-gray-600">High Schools</div>
              </div>
              <div>
                <School className="w-8 h-8 text-[#0A400C] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">5</div>
                <div className="text-sm text-gray-600">Mosques</div>
              </div>
              <div>
                <Heart className="w-8 h-8 text-[#0A400C] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">2019</div>
                <div className="text-sm text-gray-600">Transformation Started</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Chak172Page;