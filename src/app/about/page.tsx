import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | DigiWorld Infotech — Digital Marketing Agency',
  description:
    'Learn how DigiWorld Infotech drives digital success through creativity, data-driven strategies, and cutting-edge technology. Discover our 9-step solution process, core values, and team.',
};

export default function AboutPage() {
  return <AboutClient />;
}
