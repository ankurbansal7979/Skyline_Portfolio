import { DivideIcon as LucideIcon } from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  image: string;
  delay?: number;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  contact: {
    email?: string;
    phone?: string;
    linkedin?: string;
  };
  delay?: number;
}

export interface GalleryItemProps {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}