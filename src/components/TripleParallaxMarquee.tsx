import React from 'react';
import { LAYER1, LAYER2, LAYER3 } from './mediaData';

const TripleParallaxMarquee: React.FC = () => {
  return (
    <section className="relative space-y-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">AESTHETIC GALLERY</h2>
        <p className="text-muted-foreground">Capturing Life's Beautiful Moments</p>
      </div>

      {/* Layer 1 - Scrolls Right */}
      <div className="overflow-hidden">
        <div className="flex gap-3 animate-scroll-right hover:pause">
          {[...LAYER1, ...LAYER1].map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-32 h-20 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Layer 2 - Scrolls Left */}
      <div className="overflow-hidden">
        <div className="flex gap-3 animate-scroll-left hover:pause">
          {[...LAYER2, ...LAYER2].map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-32 h-20 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Layer 3 - Scrolls Right */}
      <div className="overflow-hidden">
        <div className="flex gap-3 animate-scroll-right hover:pause">
          {[...LAYER3, ...LAYER3].map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-32 h-20 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripleParallaxMarquee;