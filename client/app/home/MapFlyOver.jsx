"use client";

// Use public env variable in client
const mapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  ? `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Toronto+Pearson+International+Airport,Ontario+Canada&zoom=10`
  : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.436678355847!2d-79.6285174!3d43.6795503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d5a1a1c70f%3A0x4c8ff8570a898b0a!2sToronto%20Pearson%20International%20Airport!5e0!3m2!1sen!2sca!4v1715887893372!5m2!1sen!2sca";

export default function YYZFlyover() {
  return (
    <div className="bg-muted rounded-xl p-6 shadow-inner w-full h-full max-w-md flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">Where am I?</h2>
      <div className="w-full flex-1 min-h-[300px] aspect-video rounded-lg overflow-hidden shadow">
        <iframe
          title="Toronto Pearson International Airport Map"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0 w-full h-full"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapsUrl}
        ></iframe>
      </div>
    </div>
  );
}
