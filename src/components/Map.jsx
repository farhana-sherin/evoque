import React from "react";

export const Map = () => {
  return (
    <div className="pt-24"> 
      {/* ✅ Page wrapper with top padding so it doesn't hide behind fixed header */}
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">Find Us Here</h2>

      {/* Store Info */}
      <div className="text-center mb-12">
        <h3 className="text-xl font-semibold mb-2">Our Store</h3>
        <p className="mb-1">EVOQUE ALATHIYUR,KERALA</p>
        <p className="mb-1">📞 +91 7733003005</p>
        <p className="mb-1">✉️ info@shoestore.com</p>
        <p className="text-gray-600">🕒 Mon - Sun, 10:00 AM - 10:00 PM</p>
      </div>

      {/* Map */}
      <div className="w-full h-[60vh] mb-12">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4912030853893!2d76.03471947451811!3d10.850194857829761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b7be9e80ffbf%3A0xc9b6c3995fb38812!2sTEGRAND%20INFOTECH!5e0!3m2!1sen!2sin!4v1759716352217!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      

      
    </div>
  );
};
