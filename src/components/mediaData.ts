// Layer 1 (20 images)
export const LAYER1 = Array.from({ length: 20 }, (_, i) => 
  `/images/layer1/${String(i + 1).padStart(2, "0")}.jpg`
);

// Layer 2 (20 images)
export const LAYER2 = Array.from({ length: 20 }, (_, i) => 
  `/images/layer2/${String(i + 1).padStart(2, "0")}.jpg`
);

// Layer 3 (20 images)
export const LAYER3 = Array.from({ length: 20 }, (_, i) => 
  `/images/layer3/${String(i + 1).padStart(2, "0")}.jpg`
);

// 30 homepage videos
export const HOME_VIDEOS = Array.from({ length: 30 }, (_, i) => 
  `/videos/home/video${String(i + 1).padStart(2, "0")}.mp4`
);

// 20 trending shorts
export const TRENDING_SHORTS = Array.from({ length: 20 }, (_, i) => 
  `/videos/shorts/short${String(i + 1).padStart(2, "0")}.mp4`
);
