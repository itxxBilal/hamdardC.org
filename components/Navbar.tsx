"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Heart,
  Phone,
  Mail,
  ChevronDown,
  Clock,
  MapPin,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface NavLink {
  path?: string;
  label: string;
  dropdown?: Array<{ path: string; label: string }>;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Handle scroll effect for navbar and check mobile device
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkMobile();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const navLinks: NavLink[] = [
    { path: "/", label: "Home" },
    {
      label: "About Us",
      dropdown: [
        { path: "/about", label: "About Us" },
        { path: "/about/founder", label: "Founder" },
        { path: "/about/team", label: "Team" },
        { path: "/about/mission", label: "Our Mission & Vision" },
        { path: "/about/volunteers", label: "Our Volunteers" },

      ],
    },
    {
      label: "Services",
      dropdown: [
        { path: "/services", label: "All Services" },
        { path: "/services/ambulance", label: "Ambulance Service" },
        { path: "/services/ro-plant", label: "RO Water Plant" },
        { path: "/services/usher-zakat", label: "Usher/Zakat" },
        { path: "/services/bartan", label: "Bartan Service" },
        { path: "/services/qabarstan-eid-gha", label: "Qabarstan & Eid Gha" },
      ],
    },
    {
      label: "Projects",
      dropdown: [
        { path: "/projects", label: "All Projects" },
        { path: "/projects/marriage-hall", label: "Marriage Hall" },
        { path: "/projects/dispensary", label: "Dispensary" },
        { path: "/projects/sports-ground", label: "Sports Ground" },
      ],
    },
    {
      label: "Events",
      dropdown: [
        { path: "/events", label: "All Events" },
        { path: "/events/medical-camp-2024", label: "Medical Camp Event" },
        { path: "/events/blood-donation-drive-2020", label: "Blood Camp" },
        { path: "/events/plant-distribution", label: "Plant Distribution" },
      ],
    },
    {
      label: "More",
      dropdown: [
        { path: "/become-volunteer", label: "Become Volunteer" },
        // { path: "/volunteers", label: "Our Volunteers" },
        { path: "/news", label: "News" },
        { path: "/gallery", label: "Gallery" },
        { path: "/contact", label: "Contact" },
        { path: "/notifications", label: "Notifications" },
        { path: "/complain", label: "Complain" },
        { path: "villages/chakno-172-9l", label: "Village Profile" },
      ],
    },
  ];

  // Check if the current path matches '/admin' or any sub-route of '/admin'
  const isAdminRoute = pathname.startsWith("/admin") || pathname === "/dashboard";

  // If on an admin route or dashboard, hide the navbar
  if (isAdminRoute) {
    return null;
  }

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const isActiveDropdown = (dropdownItems: Array<{ path: string; label: string }>) => {
    return dropdownItems.some((item) => isActiveLink(item.path));
  };

  const handleDropdownEnter = (label: string) => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    // Set timeout to hide dropdown after 1-2 seconds
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay for better UX
  };

  const handleDropdownMouseEnter = () => {
    // Clear timeout when mouse enters dropdown
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    handleDropdownLeave();
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className="font-sans">
      {/* Top Bar - Hidden on Mobile */}
      <div
        className={`bg-linear-to-r from-[#0A400C] to-[#819067] text-white py-2 px-4 ${isMobile ? "hidden" : "block"
          }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 transition-all duration-300 hover:text-[#e8f5e9]">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+92-310-7591175</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 transition-all duration-300 hover:text-[#e8f5e9]">
              <Mail className="w-4 h-4" />
              <span className="font-medium">
                hamdardcommitteeofficial@gmail.com
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-[#e8f5e9]">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="font-medium">Serving Since 2019</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Chichawatni, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white sticky top-0 z-50 transition-all duration-500 ${isScrolled ? "shadow-2xl border-b border-gray-100" : "shadow-lg"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Show only logo on mobile, full logo on desktop */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-linear-to-br from-[#0A400C] to-[#819067] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <img
                    src="/WhiteLogo.svg"
                    className="w-11 h-11 text-white"
                    alt="Hamdard Committee Logo"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white"></div>
              </div>
              {/* Hide text on mobile, show on desktop */}
              <div className={`flex flex-col ${isMobile ? "hidden" : "block"}`}>
                <h1 className="text-xl font-black text-gray-800 group-hover:text-[#0A400C] transition-colors duration-300 leading-tight">
                  Hamdard Committee
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  Khidmat ka safar, insaniyat ke liye
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((item) => {
                if (item.path) {
                  // Regular link
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`relative font-semibold transition-all duration-300 px-4 py-2 rounded-lg mx-1 ${isActiveLink(item.path)
                          ? "text-[#0A400C] bg-[#0A400C]/5"
                          : "text-gray-700 hover:text-[#0A400C] hover:bg-gray-50"
                        }`}
                    >
                      {item.label}
                      {isActiveLink(item.path) && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-linear-to-r from-[#0A400C] to-[#819067] rounded-full"></div>
                      )}
                    </Link>
                  );
                } else if (item.dropdown) {
                  // Dropdown menu
                  const isActive = isActiveDropdown(item.dropdown);
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        className={`relative font-semibold transition-all duration-300 px-4 py-2 rounded-lg mx-1 flex items-center space-x-1 group ${isActive
                            ? "text-[#0A400C] bg-[#0A400C]/5"
                            : "text-gray-700 hover:text-[#0A400C] hover:bg-gray-50"
                          }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""
                            } group-hover:rotate-180`}
                        />
                        {isActive && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-linear-to-r from-[#0A400C] to-[#819067] rounded-full"></div>
                        )}
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.label && (
                        <div
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 animate-in fade-in-0 zoom-in-95 duration-300"
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              href={dropdownItem.path}
                              className={`block px-4 py-3 text-sm transition-all duration-300 border-l-2 mx-2 rounded-lg ${isActiveLink(dropdownItem.path)
                                  ? "bg-linear-to-r from-[#0A400C]/5 to-[#819067]/5 text-[#0A400C] font-semibold border-l-[#0A400C]"
                                  : "text-gray-700 hover:text-[#0A400C] hover:bg-gray-50 border-l-transparent hover:border-l-[#819067]"
                                }`}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              })}

              {/* Donate Button */}
              <Link
                href="/donate"
                className="ml-4 bg-linear-to-r from-[#0A400C] to-[#819067] text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold shadow-lg flex items-center space-x-2"
              >
                <Heart className="w-4 h-4" />
                <span>Donate Now</span>
              </Link>
            </div>

            {/* Mobile menu button - Show only Donate button and menu icon */}
            <div className="lg:hidden flex items-center space-x-2">
              <Link
                href="/donate"
                className="bg-linear-to-r from-[#0A400C] to-[#819067] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm flex items-center space-x-1"
              >
                <Heart className="w-3 h-3" />
                <span>Donate</span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navLinks.map((item) => {
                  if (item.path) {
                    // Regular mobile link
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={closeMobileMenu}
                        className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${isActiveLink(item.path)
                            ? "text-[#0A400C] bg-linear-to-r from-[#0A400C]/5 to-[#819067]/5"
                            : "text-gray-700 hover:text-[#0A400C] hover:bg-gray-50"
                          }`}
                      >
                        {item.label}
                      </Link>
                    );
                  } else if (item.dropdown) {
                    // Mobile dropdown
                    const isActive = isActiveDropdown(item.dropdown);
                    const isExpanded = activeDropdown === item.label;

                    return (
                      <div key={item.label} className="space-y-1">
                        <button
                          onClick={() =>
                            setActiveDropdown(isExpanded ? null : item.label)
                          }
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${isActive
                              ? "text-[#0A400C] bg-linear-to-r from-[#0A400C]/5 to-[#819067]/5"
                              : "text-gray-700 hover:text-[#0A400C] hover:bg-gray-50"
                            }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                              }`}
                          />
                        </button>

                        {/* Mobile Dropdown Items */}
                        {isExpanded && (
                          <div className="ml-4 space-y-1 border-l-2 border-[#819067]/20 pl-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                href={dropdownItem.path}
                                onClick={closeMobileMenu}
                                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${isActiveLink(dropdownItem.path)
                                    ? "text-[#0A400C] bg-[#0A400C]/5 font-semibold"
                                    : "text-gray-600 hover:text-[#0A400C] hover:bg-gray-50"
                                  }`}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}

                {/* Mobile Donate Button */}
                <Link
                  href="/donate"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-xl text-base font-semibold bg-linear-to-r from-[#0A400C] to-[#819067] text-white hover:shadow-lg text-center mt-2 transition-all duration-300 items-center justify-center space-x-2"
                >
                  <Heart className="w-4 h-4" />
                  <span>Donate Now</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;