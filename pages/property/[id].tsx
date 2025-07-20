import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { PropertyProps } from "@/interfaces";

export default function PropertyDetailPage() {
  const { query, isReady } = useRouter();
  const id = Array.isArray(query.id) ? query.id[0] : query.id;
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isReady || !id) return;
    (async () => {
      try {
        const slug = encodeURIComponent(id);
        const { data } = await axios.get<PropertyProps>(
          `/api/properties/${slug}`
        );
        setProperty(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [isReady, id]);

  if (loading) return <p>Loading…</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <>
      <PropertyDetail property={property} />
      <BookingSection price={property.price} />
      <ReviewSection propertyId={id!} />
    </>
  );
}