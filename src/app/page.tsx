'use client';

import React, { useState } from 'react';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { CategorySection } from '../components/CategorySection';
import { ProductCatalog } from '../components/ProductCatalog';
import { CustomOrdersSection } from '../components/CustomOrdersSection';
import { AboutSection } from '../components/AboutSection';
import { CourseSection } from '../components/CourseSection';
import { SocialSection } from '../components/SocialSection';
import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <main style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Header & Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Categories Showcase */}
      <CategorySection onSelectCategory={handleSelectCategory} />

      {/* Product Catalog */}
      <ProductCatalog
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Custom Orders / Sob Medida Section */}
      <CustomOrdersSection />

      {/* About Gisa Section */}
      <AboutSection />

      {/* Courses Section */}
      <CourseSection />

      {/* Instagram & YouTube Social Section */}
      <SocialSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Site Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppFloat />
    </main>
  );
}
