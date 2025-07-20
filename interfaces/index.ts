export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    onClick: () => void;
}
  
export interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    reviews: [
        {
            name: string;
            rating: number;
            comment: string;
            avatar: string;
        }
    ]
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    image: string;
    discount: string;
    description: string;
}

export interface PillProps {
    label: string;
    active?: boolean;
    onClick?: (label: string) => void;
}

export interface BookingProps {
    price: number;
}

export interface Review {
    name: string;
    rating: number;
    comment: string;
    avatar: string;
}

export interface ReviewProps {
    reviews: Review[];
}

export interface BookingDetails {
  propertyName: string;
  startDate: string; 
  totalNights: number;
  bookingFee: number;
  price: number;
}