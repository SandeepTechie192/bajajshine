import { useState } from 'react';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import Blower9 from "./assets/Blower9.png";
import Polo12 from "./assets/Polo12.png";
import Blaze12 from "./assets/Blaze12.png";
import BlazeTower12 from "./assets/Blazetower12.png";
import Glasstop12 from "./assets/Glasstop12.png";
import Jimmymini12 from "./assets/Jimmymini12.png";
import JimmyLong12 from "./assets/JimmyLong12.png";
import Flappy from "./assets/Flappy.png";
import Platina from "./assets/Platina.png";
import Desire from "./assets/Desire.png";
import Vayugt from "./assets/Vayugt.png";
import Blast16 from "./assets/Blast16.png";
import BlastTower16 from "./assets/Blasttower16.png";
import Discovery from "./assets/Discovery.png";
import Fusion from "./assets/Fusion.png";
import Alpha24 from "./assets/Alpha24.png";
import Daisy from "./assets/Daisy.png";
import Bull18 from "./assets/Bull18.png";
import Biggbull18 from "./assets/Biggbull18.png";
import Biggbull20 from "./assets/Biggbull20.png";
import Biggbull26 from "./assets/Biggbull26.png";
import Biggbull262 from "./assets/Biggbull262.png";

interface Cooler {
  id: number;
  name: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  price: string;
}

const coolers: Cooler[] = [
  {
    id: 1,
    name: '9" BLOWER 15L',
    image: Blower9,
    shortDesc: 'Powerfull blower with 15L capacity.',
    fullDesc: 'The bajajshine 9"Blower 15L is a high-performance blower designed for maximum cooling. It features premium honeycomb cooling pads, a 15-L water tank for uninterrupted cooling, and a powerful blower motor that ensures massive air throw. Its durable build and sleek design make it a perfect fit for modern homes.',
    features: ['Dimensions - 10.5x11x21','Tank capacity - 15L/21L', 'Honeycomb Cooling Pads', 'Powerful Air Throw','3-Speed Control', 'Auto swing'],
    price: '₹8,499'
  },
  {
    id: 2,
    name: '12" POLO 30L',
    image: Polo12,
    shortDesc: 'Personal cooler, 30L capacity.',
    fullDesc: 'Stay cool and comfortable with the bajajshine Polo 30L. This compact yet highly efficient personal cooler is perfect for bedrooms or small living areas. It comes with ultra-quiet operation, and low power consumption. Easy to move and easy to maintain.',
    features: ['Dimensions - 17.5x14x30','Tank capacity - 30L', 'Honeycomb Cooling Pads', 'Low Noise Operation', 'Energy Efficient', 'Dust Filter','3-Speed Control', 'Auto swing'],
    price: '₹5,999'
  },
  {
    id: 3,
    name: '12" BLAZE 30L',
    image: Blaze12,
    shortDesc: 'Personal cooler, 30L capacity.',
    fullDesc: 'Stay cool and comfortable with the bajajshine Polo 30L. This compact yet highly efficient personal cooler is perfect for bedrooms or small living areas. It comes with ultra-quiet operation, and low power consumption. Easy to move and easy to maintain.',
    features: ['Dimensions - 17.5x14x30','Tank capacity - 30L', 'Honeycomb Cooling Pads', 'Low Noise Operation', 'Energy Efficient', 'Dust Filter','3-Speed Control', 'Auto swing'],
    price: '₹11,299'
  },
    {
    id: 4,
    name: '12" BLAZE TOWER 60L',
    image: BlazeTower12,
    shortDesc: 'Personal cooler, 60L capacity.',
    fullDesc: 'The bajajshine Blaze Tower 60L is a high-performance personal cooler designed for maximum cooling. It features premium honeycomb cooling pads, a large 60L water tank for uninterrupted cooling, and a powerful fan motor that ensures massive air throw. Its durable build and sleek design make it a perfect fit for modern homes.',
    features: ['Dimensions - 17.5x14x50','Tank capacity - 60L', 'Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing'],
    price: '₹8,499'
  },
  {
    id: 5,
    name: '12" GLASSTOP 50L',
    image: Glasstop12,
    shortDesc: 'Personal cooler, 50L capacity.',
    fullDesc: 'The bajajshine Glasstop 50L is a high-performance personal cooler designed for maximum cooling. It features premium honeycomb cooling pads, a large 50L water tank for uninterrupted cooling, and a powerful fan motor that ensures massive air throw. Its durable build and sleek design make it a perfect fit for modern homes.',
    features: ['Dimensions - 20x16x30','Tank capacity - 50L', 'Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing','Ice Chamber'],
    price: '₹5,999'
  },
  {
    id: 6,
    name: '12" JIMMY MINI 35L',
    image: Jimmymini12,
    shortDesc: 'Heavy duty commercial cooler, massive air throw.',
    fullDesc: 'When you need serious cooling power, the bajajshine Jimmy mini 35L. Built for heavy-duty usage, this cooler is equipped with a massive 35L tank, thick cooling pads, and an aerodynamic fan design for huge air displacement.',
    features: ['Dimensions - 18x14x44','Tank capacity - 35L', 'Heavy Duty Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing'],
    price: '₹11,299'
  },
    {
    id: 7,
    name: '12" JIMMY LONG 70L',
    image: JimmyLong12,
    shortDesc: 'Heavy duty commercial cooler, massive air throw.',
 fullDesc: 'When you need serious cooling power, the bajajshine Jimmy long 70L. Built for heavy-duty usage, this cooler is equipped with a massive 70L tank, thick cooling pads, and an aerodynamic fan design for huge air displacement.',
    features: ['Dimensions - 20x16x60','Tank capacity - 70L', 'Heavy Duty Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing'],
    price: '₹8,499'
  },
  {
    id: 8,
    name: 'FLAPPY 60L/90L',
    image: Flappy,
    shortDesc: 'Personal cooler, 60L/90L capacity.',
    fullDesc: 'Stay cool and comfortable with the bajajshine Flappy 60L/90L.Highly efficient personal cooler is perfect for bedrooms or small living areas. It comes with ultra-quiet operation, and low power consumption. Easy to move and easy to maintain.',
    features: ['Dimensions - 24x21x37','Tank capacity - 60L/90L', 'Heavy Duty Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing','Ice Chamber'],
    price: '₹5,999'
  },
  {
    id: 9,
    name: 'PLATINA 60L/90L',
    image: Platina,
    shortDesc: 'Heavy duty industrial cooler, massive air throw.',
    fullDesc: 'When you need serious cooling power, the bajajshine Platina 60L/90L delivers. Built for heavy-duty usage, this cooler is equipped with a massive 60L/90L tank, thick cooling pads, and an aerodynamic fan design for huge air displacement.',
    features: ['Dimensions - 24x21x37','Tank capacity - 60L/90L', 'Heavy Duty Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing','Ice Chamber'],
    price: '₹11,299'
  },
    {
    id: 10,
    name: 'DESIRE 60L/90L',
    image: Desire,
    shortDesc: 'Powerful desert cooler with 50L capacity.',
    fullDesc: 'The Bajajshine Artic 50L is a high-performance desert cooler designed for maximum cooling in large spaces. It features premium honeycomb cooling pads, a large 50L water tank for uninterrupted cooling, and a powerful fan motor that ensures massive air throw. Its durable build and sleek design make it a perfect fit for modern homes and open spaces.',
    features: ['Dimensions - 24x21x37','Tank capacity - 60L/90L', 'Heavy Duty Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing','Ice Chamber'],
    price: '₹8,499'
  },
  {
    id: 11,
    name: 'VAYU-GT 90L',
    image: Vayugt,
    shortDesc: 'Commercial cooler, 90L capacity.',
    fullDesc: 'Designed for heavy-duty use, it offers ample storage capacity, efficient cooling, and durable construction ideal for restaurants, cafes, and retail stores. Featuring adjustable shelves, easy temperature control, and energy-efficient operation, it ensures reliable performance while enhancing product visibility and accessibility.',
    features: ['Tank capacity - 90L', 'Heavy Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing','Ice Chamber'],
    price: '₹5,999'
  },
  {
    id: 12,
    name: '16" BLAST',
    image: Blast16,
    shortDesc: 'Personal cooler, 60L capacity.',
    fullDesc: 'When you need serious cooling power, the Bajajshine Polar 65L delivers. Built for heavy-duty usage, this cooler is equipped with a massive 65L tank, thick cooling pads, and an aerodynamic fan design for huge air displacement. Ideal for large halls, patios, or commercial spaces.',
    features: ['Dimensions - 42x21x26','Tank capacity - 60L', 'Heavy Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing','Ice Chamber'],
    price: '₹11,299'
  },
   {
    id: 13,
    name: '16" BLAST TOWER 90L',
    image: BlastTower16,
    shortDesc: 'Personal cooler, 90L capacity.',
    fullDesc: 'Stay cool and comfortable with the bajajshine Blast Tower 90L.Highly efficient personal cooler is perfect for bedrooms or small living areas. It comes with ultra-quiet operation, and low power consumption. Easy to move and easy to maintain.',
    features: ['Dimensions - 24x21x26','Tank capacity - 90L', 'Heavy Duty Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing','Ice Chamber'],
    price: '₹5,999'
  },
  {
    id: 14,
    name: 'DISCOVERY 90L',
    image: Discovery,
    shortDesc: 'Heavy duty personal cooler, massive air throw.',
    fullDesc: 'When you need serious cooling power, the bajajshine Discovery 90L delivers. Built for heavy-duty usage, this cooler is equipped with a massive 90L tank, thick cooling pads, and an aerodynamic fan design for huge air displacement.',
    features: ['Dimensions - 24x20x50','Tank capacity - 90L', 'Heavy Duty Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing','Ice Chamber'],
    price: '₹11,299'
  },
    {
    id: 15,
    name: 'FUSION 90L',
    image: Fusion,
    shortDesc: 'Powerful tower cooler with 90L capacity.',
    fullDesc: 'The bajajshine Fusion 90L is a high-performance tower cooler designed for maximum cooling in large spaces. It features premium honeycomb cooling pads, a large 90L water tank for uninterrupted cooling, and a powerful fan motor that ensures massive air throw. Its durable build and sleek design make it a perfect fit for modern homes and open spaces.',
    features: ['Dimensions - 24x20x50','Tank capacity - 90L', 'Heavy Duty Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing'],
    price: '₹8,499'
  },
  {
    id: 16,
    name: 'ALPHA 24" 150L',
    image: Alpha24,
    shortDesc: 'Heavy duty commercial cooler, massive air throw.',
    fullDesc: 'Designed for heavy-duty use, it offers ample storage capacity, efficient cooling, and durable construction ideal for restaurants, cafes, and retail stores. Featuring easy temperature control, and energy-efficient operation, it ensures reliable performance while enhancing product visibility and accessibility.',
    features: ['Tank capacity - 150L', 'Heavy Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing'],
    price: '₹5,999'
  },
  {
    id: 17,
    name: 'DAISY 18" 90L',
    image: Daisy,
    shortDesc: 'Commercial cooler, 90L capacity.',
    fullDesc: 'When you need serious cooling power, the bajajshine Daisy 90L delivers. Built for heavy-duty usage, this cooler is equipped with a massive 90L tank, thick cooling pads, and an aerodynamic fan design for huge air displacement. Ideal for large halls, patios, or commercial spaces.',
    features: ['Dimensions - 29x18x44','Tank capacity - 90L', 'Heavy Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing'],
    price: '₹11,299'
  },
     {
    id: 18,
    name: 'BULL 18" 90L',
    image: Bull18,
    shortDesc: 'Powerful commercial cooler with 90L capacity.',
    fullDesc: 'When you need serious cooling power, the bajajshine Bull 90L delivers. Built for heavy-duty usage, this cooler is equipped with a massive 90L tank, thick cooling pads, and an aerodynamic fan design for huge air displacement. Ideal for large halls, patios, or commercial spaces.',
    features: ['Dimensions - 26x17x46','Tank capacity - 90L', 'Heavy Duty Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing'],
    price: '₹8,499'
  },
  {
    id: 19,
    name: 'BIGGBULL 18" 90L',
    image: Biggbull18,
    shortDesc: 'Commercial cooler, 90L capacity.',
    fullDesc: 'Designed for heavy-duty use, it offers ample storage capacity, efficient cooling, and durable construction ideal for restaurants, cafes, and retail stores. Featuring adjustable shelves, easy temperature control, and energy-efficient operation, it ensures reliable performance while enhancing product visibility and accessibility.',
    features: ['Dimensions - 26x17x46','Tank capacity - 90L', 'Heavy Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing'],
    price: '₹5,999'
  },
  {
    id: 20,
    name: 'BIGGBULL 20" 120L',
    image: Biggbull20,
    shortDesc: 'Commercial cooler, 120L capacity.',
    fullDesc: 'When you need serious cooling power, the bajajshine biggbull 120L delivers. Built for heavy-duty usage, this cooler is equipped with a massive 120L tank, thick cooling pads, and an aerodynamic fan design for huge air displacement. Ideal for large halls, patios, or commercial spaces.',
    features: ['Dimensions - 34x22x52','Tank capacity - 120L', 'Heavy Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control'],
    price: '₹11,299'
  },
    {
    id: 21,
    name: 'BIGGBULL 26" 175L',
    image: Biggbull26,
    shortDesc: 'Commercial cooler, 175L capacity.',
    fullDesc: 'When you need serious cooling power, the bajajshine biggbull 175L delivers. Built for heavy-duty usage, this cooler is equipped with a massive 175L tank, thick cooling pads, and an aerodynamic fan design for huge air displacement. Ideal for large halls, patios, or commercial spaces.',
    features: ['Dimensions - 34x26x57','Tank capacity - 175L', 'Heavy Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control'],
    price: '₹11,299'
  },
      {
    id: 22,
    name: 'BIGGBULL 26" 175L',
    image: Biggbull262,
    shortDesc: 'Commercial cooler, 60L capacity.',
    fullDesc: 'When you need serious cooling power, the bajajshine biggbull 175L delivers. Built for heavy-duty usage, this cooler is equipped with a massive 175L tank, thick cooling pads, and an aerodynamic fan design for huge air displacement. Ideal for large halls, patios, or commercial spaces.',
    features: ['Dimensions - 34x26x57','Tank capacity - 175L', 'Heavy Motor','Honeycomb Cooling Pads', 'Powerful Air Throw', '3-Speed Control','Auto swing'],
    price: '₹11,299'
  }
];

const WHATSAPP_NUMBER = '+916287246263'; 

// Catalog Component
function Catalog({ searchTerm }: { searchTerm: string }) {
  const navigate = useNavigate();

  const filteredCoolers = coolers.filter(cooler => 
    cooler.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">Our Cooler Catalog</h1>
      {filteredCoolers.length === 0 ? (
        <p className="text-gray-500 text-center py-12 text-lg">No coolers found matching "{searchTerm}"</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCoolers.map((cooler) => (
            <div 
              key={cooler.id} 
              className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer flex flex-col"
              onClick={() => navigate(`/cooler/${cooler.id}`)}
            >
              <div className="h-64 bg-gray-100 p-4 flex items-center justify-center">
                <img src={cooler.image} alt={cooler.name} className="h-full object-contain mix-blend-multiply" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{cooler.name}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{cooler.shortDesc}</p>
                <div className="mt-auto flex justify-between items-center">
                  {/* <span className="text-blue-700 font-semibold">{cooler.price}</span> */}
                  <span className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition duration-200 ml-auto">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Product Detail Component
function CoolerDetail() {
  const { id } = useParams<{ id: string }>();
  const selectedCooler = coolers.find(c => c.id === Number(id));

  if (!selectedCooler) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Cooler not found!</h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block hover:underline">&larr; Back to Catalog</Link>
      </div>
    );
  }

  const handleEnquiry = (coolerName: string) => {
    const message = `Hello, I would like to enquire about the ${coolerName} cooler. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium pb-1 inline-flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Catalog
        </Link>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Product Image Side */}
        <div className="md:w-1/2 p-4 sm:p-8 bg-gray-50 flex items-center justify-center min-h-[400px]">
          <img 
            src={selectedCooler.image} 
            alt={selectedCooler.name} 
            className="w-full max-h-[500px] object-contain mix-blend-multiply drop-shadow-md" 
          />
        </div>

        {/* Product Info Side */}
        <div className="md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedCooler.name}</h1>
          {/* <p className="text-2xl font-semibold text-blue-700 mb-6">{selectedCooler.price}</p> */}
          
          <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Description</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            {selectedCooler.fullDesc}
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
          <ul className="mb-8 space-y-2">
            {selectedCooler.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6 border-t border-gray-100">
            <button 
              onClick={() => handleEnquiry(selectedCooler.name)}
              className="w-full sm:w-auto flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-sm transition duration-200"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.57-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.738 10.564 10.563 0 5.827-4.739 10.563-10.564 10.563z"></path>
              </svg>
              Enquire on WhatsApp
            </button>
            <p className="text-xs text-gray-400 mt-3 text-center sm:text-left">
              Redirects to WhatsApp with a pre-filled message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Layout
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (window.location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow z-10 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" onClick={() => setSearchTerm('')} className="text-2xl sm:text-3xl font-bold text-blue-900 tracking-tight cursor-pointer no-underline">
            bajaj<span className="text-blue-500">shine</span>
            <span className="block text-xs sm:text-sm font-normal text-gray-500 mt-0.5">Elevate your everyday</span>
          </Link>

          <div className="relative w-48 sm:w-64 md:w-80">
            <input 
              type="text" 
              placeholder="Search coolers..." 
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        <Routes>
          <Route path="/" element={<Catalog searchTerm={searchTerm} />} />
          <Route path="/cooler/:id" element={<CoolerDetail />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-auto border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-white tracking-tight no-underline mb-4 block">
              bajaj<span className="text-blue-500">shine</span>
            </span>
            <p className="text-sm text-gray-400 max-w-xs">
              Elevate your everyday with our premium range of air coolers and home appliances. Built for performance and reliability.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-sm">
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Customer Care: <span className="ml-1 font-semibold text-white">+916287246263</span>
              </p>
              <p className="flex items-center text-sm">
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                bajajshineappliances@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/share/1UkBH8iSb3/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200" aria-label="Facebook">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/bajajshineappliance?igsh=a2d6bWxtOHM3cGVi" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors duration-200" aria-label="Instagram">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.952-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
              </a>
              {/* WhatsApp */}
              <a href={`https://wa.me/${+916287246263}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors duration-200" aria-label="WhatsApp">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.57-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.738 10.564 10.563 0 5.827-4.739 10.563-10.564 10.563z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Bajajshine. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
