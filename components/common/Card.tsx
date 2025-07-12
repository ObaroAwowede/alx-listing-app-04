import React from "react";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";

const Card: React.FC<PropertyProps> = ({ name, image, price, rating }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative h-48 w-full">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span>{rating.toFixed(2)}</span>
        </div>
        <p className="mt-2 text-lg font-bold">${price}</p>
      </div>
    </div>
  );
};

export default Card;
