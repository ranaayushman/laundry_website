export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  location: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dhanraj Yadav",
    rating: 5,
    comment: "Excellent service! My clothes always come back fresh and perfectly cleaned. The pickup and delivery service is very convenient. Highly recommend Daily Wear for anyone looking for reliable laundry service.",
    location: "Sector 15, Noida",
    service: "Washing & Folding"
  },
  {
    id: 2,
    name: "Tanmay",
    rating: 5,
    comment: "Been using Daily Wear for over 6 months now. Their dry cleaning service is outstanding, especially for my formal shirts and suits. Professional staff and always on time with deliveries.",
    location: "Laxmi Nagar, Delhi",
    service: "Dry Cleaning"
  },
  {
    id: 3,
    name: "Rishu",
    rating: 5,
    comment: "Amazing quality and very affordable prices. The same-day service saved me multiple times when I needed clothes urgently. Great customer service and eco-friendly products. Will definitely continue using their service!",
    location: "Vaishali, Ghaziabad",
    service: "Express Service"
  }
];