import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Home, 
  ArrowLeft, 
  Compass, 
  RefreshCw,
  AlertCircle,
  Navigation,
  Sparkles,
  Clock,
  MapPin,
  Users,
  Heart
} from 'lucide-react';

const NotFoundPage = () => {
  const suggestedPages = [
    { 
      path: '/', 
      name: 'Home', 
      description: 'Return to homepage',
      icon: Home
    },
    { 
      path: '/about', 
      name: 'About Us', 
      description: 'Learn about our mission',
      icon: Users
    },
    { 
      path: '/donate', 
      name: 'Donate', 
      description: 'Support our cause',
      icon: Heart
    },
    { 
      path: '/contact', 
      name: 'Contact', 
      description: 'Get in touch with us',
      icon: MapPin
    },
  ];

  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Hamdard Committee</title>
        <meta 
          name="description" 
          content="The page you're looking for doesn't exist. Let us help you find your way back to Hamdard Committee's website." 
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://hamdardcommittee.org/404" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
    

        {/* Main Content */}
        <section className="bg-gradient-to-br from-[#0A400C] to-[#819067] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* 404 Number */}
              <div className="relative inline-block mb-8">
                <div className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent relative z-10">
                  404
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-white/20 blur-xl z-0">
                  404
                </div>
              </div>

              {/* Main Message */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-6">
                <AlertCircle className="w-5 h-5" />
                <span className="font-semibold">Page Not Found</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                Lost Your Way?
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                The page you're looking for seems to have wandered off into the unknown. 
                Don't worry, we'll help you navigate back to familiar territory.
              </p>

              {/* Error Details */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-amber-300" />
                  <span className="font-semibold">Error Details</span>
                </div>
                
                <div className="text-left space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Status Code:</span>
                    <span className="font-mono text-red-300">404 Not Found</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Current Time:</span>
                    <span className="font-mono">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Path:</span>
                    <span className="font-mono truncate max-w-[150px]">
                      {window.location.pathname}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                  onClick={handleGoBack}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 shadow-lg font-semibold group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Go Back</span>
                </button>

                <button
                  onClick={handleRetry}
                  className="flex items-center space-x-3 bg-white text-[#0A400C] px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 shadow-xl font-semibold group"
                >
                  <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Retry Page</span>
                </button>

                <Link to="/">
                  <div className="flex items-center space-x-3 bg-white text-[#0A400C] px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 shadow-xl font-semibold group">
                    <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Go Home</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested Pages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Compass className="w-6 h-6 text-[#0A400C]" />
                <h2 className="text-3xl font-black text-gray-800">Suggested Pages</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Here are some pages that might help you find what you're looking for
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {suggestedPages.map((page, index) => {
                const Icon = page.icon;
                return (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="block group"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#0A400C] hover:shadow-xl transition-all duration-300 h-full">
                      <div className="text-center">
                        <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-[#0A400C] to-[#819067] mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-[#0A400C] transition-colors">
                          {page.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {page.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-gradient-to-r from-[#0A400C] to-[#819067] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Need Help?</span>
            </div>
            <h3 className="text-3xl font-black mb-6">We're Here to Assist You</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you can't find what you're looking for or need assistance, 
              our team is ready to help you navigate our website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-white text-[#0A400C] px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold group"
              >
                <Navigation className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Contact Support</span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center space-x-3 bg-white/20 text-white px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30"
              >
                <span>Learn About Us</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophical Message */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3 text-gray-500">
              <Sparkles className="w-5 h-5" />
              <span className="text-lg italic">"Every wrong turn is an opportunity to discover new paths of service"</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFoundPage;