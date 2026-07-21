'use client';

import React, { useState } from 'react';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { BagMarquee } from '../components/BagMarquee';
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

  return (
    <main style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />

      {/* Faixa visual compacta no lugar da antiga dobra de categorias */}
      <BagMarquee />

      <ProductCatalog
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <CustomOrdersSection />
      <AboutSection />
      <CourseSection />
      <SocialSection />
      <FaqSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
