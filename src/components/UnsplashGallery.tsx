import React, { useEffect, useState } from "react";

interface UnsplashImage {
  id: string;
  urls: { small: string; full: string };
  alt_description: string;
  links: { html: string };
}

const ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY"; // Replace with your Unsplash Access Key
const QUERY = "nature"; // You can change the search query
const COUNT = 12; // Number of images to fetch

const UnsplashGallery: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=${COUNT}&query=${QUERY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images from Unsplash.");
        }
        const data = await response.json();
        setImages(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Unsplash Image Gallery</h2>
      {loading && <p>Loading images...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="rounded overflow-hidden shadow-lg bg-white">
            <a href={img.links.html} target="_blank" rel="noopener noreferrer">
              <img
                src={img.urls.small}
                alt={img.alt_description || "Unsplash Image"}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-2 text-xs break-all">
              <span className="font-semibold">URL: </span>
              <a
                href={img.urls.full}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {img.urls.full}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnsplashGallery;