"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image } from "@/types";

import GalleryTab from "./gallery-tab";

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({
    images = []
}) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        <GalleryTab key={image} image={image} />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="aspect-square w-full">
                {images.map((image) => (
                    <Tab.Panel key={image}>
                        <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                            <NextImage
                                fill
                                src={image}
                                alt="Image"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover object-center"
                                placeholder="blur"
                                blurDataURL={image}
                                priority
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
}

export default Gallery;