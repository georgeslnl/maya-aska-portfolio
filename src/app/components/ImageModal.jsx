import Image from "next/image";
import { useEffect } from 'react';

export const ImageModal = ({ images, selectedImage, onClose, onNext, onPrev, selectedIndex }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            e.preventDefault();
            console.log(e.key);
          if (e.key === 'Escape' || e.key === ' ') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
      }, [onClose]);
    
      if (!selectedImage) return null;
    return (
        selectedImage && (
            <div
                className="fixed inset-0 bg-black/90 z-50 p-10 flex items-center justify-center"
                onClick={onClose}
            >
                <button
                    aria-label="Close Modal"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div
                    className="relative md:w-1/2"
                    onClick={e => e.stopPropagation()}
                >
                    <Image
                        src={selectedImage}
                        alt={images[selectedIndex].alt}
                        layout="responsive"
                        priority
                    />
                </div>
            </div>
        )
    )
};