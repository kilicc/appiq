'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number, duration: number}>>([]);

  useEffect(() => {
    setMounted(true);
    // Generate particles only on client side
    const generatedParticles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2
    }));
    setParticles(generatedParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // WhatsApp ve telefon numaraları - Buraya kendi numaralarınızı ekleyin
  const whatsappNumber = "905551234567"; // Örnek: 90 ile başlayan Türkiye numarası
  const phoneNumber = "+905551234567"; // Örnek: +90 ile başlayan numara

  const handleWhatsApp = (message: string) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const faqs = [
    {
      question: "Telefon tamiri ne kadar sürer?",
      answer: "Telefon tamiri genellikle 1-3 iş günü içinde tamamlanmaktadır. Acil durumlarda aynı gün hizmet sunmaktayız."
    },
    {
      question: "İkinci el telefon alıyor musunuz?",
      answer: "Evet, ikinci el telefonlarınızı değerinde alıyoruz. Telefonunuzun marka, model ve durumuna göre fiyat belirlenmektedir."
    },
    {
      question: "Garanti var mı?",
      answer: "Satın aldığınız tüm telefonlar için garanti sağlıyoruz. Tamir hizmetlerimiz için de garanti vermekteyiz."
    },
    {
      question: "Hangi markaları satıyorsunuz?",
      answer: "Apple, Samsung, Xiaomi, Huawei ve diğer popüler markaların tüm modellerini stoklarımızda bulabilirsiniz."
    },
    {
      question: "Kredi kartı ile ödeme yapabilir miyim?",
      answer: "Evet, nakit, kredi kartı ve banka kartı ile ödeme kabul ediyoruz. Taksit seçenekleri de mevcuttur."
    },
    {
      question: "Adresiniz nerede?",
      answer: "Mağazamız İzmir, Buca ilçesinde bulunmaktadır. Detaylı adres bilgisi için 'Bize Ulaşın' butonuna tıklayabilirsiniz."
    }
  ];

  const news = [
    {
      id: 1,
      title: "iPhone 16 Serisi Yeni Özelliklerle Geliyor",
      date: "15 Ocak 2025",
      description: "Apple'ın yeni iPhone 16 serisi, gelişmiş AI özellikleri ve daha güçlü işlemci ile kullanıcıların karşısına çıkıyor.",
      category: "Yeni Model"
    },
    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra Güncellemesi",
      date: "12 Ocak 2025",
      description: "Samsung, Galaxy S24 Ultra için yeni yazılım güncellemesi yayınladı. Performans ve pil ömrü iyileştirmeleri içeriyor.",
      category: "Güncelleme"
    },
    {
      id: 3,
      title: "Xiaomi 15 Pro Ön İnceleme",
      date: "10 Ocak 2025",
      description: "Xiaomi'nin yeni amiral gemisi modeli Xiaomi 15 Pro, kamera ve performans testlerinden geçti. Detaylar burada.",
      category: "Yeni Model"
    },
    {
      id: 4,
      title: "iOS 18.3 Güncellemesi Yayınlandı",
      date: "8 Ocak 2025",
      description: "Apple, iOS 18.3 güncellemesini yayınladı. Güvenlik düzeltmeleri ve yeni özellikler içeriyor.",
      category: "Güncelleme"
    },
    {
      id: 5,
      title: "OnePlus 13 Özellikleri Açıklandı",
      date: "5 Ocak 2025",
      description: "OnePlus 13'ün teknik özellikleri resmi olarak açıklandı. Snapdragon 8 Gen 4 işlemci ve 120W hızlı şarj desteği.",
      category: "Yeni Model"
    },
    {
      id: 6,
      title: "Android 15 Beta Testleri Başladı",
      date: "3 Ocak 2025",
      description: "Google, Android 15'in beta sürümünü seçili cihazlar için yayınladı. Yeni özellikler ve iyileştirmeler test ediliyor.",
      category: "Güncelleme"
    }
  ];

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      {/* Rich Background with Multiple Layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
      
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>
      
      {/* Mouse Follow Gradient - Only render on client */}
      {mounted && (
        <div 
          className="fixed inset-0 opacity-40 pointer-events-none transition-all duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), transparent 50%)`
          }}
        />
      )}
      
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-30" />
      
      {/* Diagonal Lines Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.03)_49%,rgba(59,130,246,0.03)_51%,transparent_52%)] bg-[size:40px_40px] pointer-events-none opacity-50" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              <Image 
                src="/appiqlogo.png" 
                alt="Appiq Logo" 
                width={85} 
                height={85}
                className="rounded-xl relative z-10 transform group-hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </div>
            <span className="text-3xl font-extrabold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
              Appiq
            </span>
          </div>
          <button
            onClick={() => setShowContactModal(true)}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-full transition-all duration-300 text-sm font-semibold border border-white/20 hover:border-white/40 backdrop-blur-sm hover:scale-105 shadow-lg hover:shadow-blue-500/20"
          >
            Bize Ulaşın
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Floating Particles Effect - Only render on client */}
          {mounted && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {particles.map((particle, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animationDelay: `${particle.delay}s`,
                    animationDuration: `${particle.duration}s`
                  }}
                />
              ))}
            </div>
          )}

          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 backdrop-blur-sm">
              ✨ İzmir'in Güvenilir Telefon Mağazası
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-gradient">
              Appiq
            </span>
            <br />
            <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Telefon Mağazası
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              İzmir'de telefon satışı, alımı ve tamiri için güvenilir adresiniz
            </span>
          </p>

          {/* 3 Ana Buton */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            <div
              onClick={() => handleWhatsApp("Merhaba, telefon satın almak istiyorum.")}
              className="group relative p-12 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl border-2 border-white/20 hover:border-blue-500/60 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Animated Background Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/15 to-blue-500/25 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.1)_90deg,transparent_180deg)] opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="text-7xl mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:drop-shadow-2xl group-hover:drop-shadow-blue-500/50 pointer-events-none">
                  📱
                </div>
                <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-blue-100 group-hover:to-white transition-all duration-500 drop-shadow-lg pointer-events-none">
                  Telefon Satın Al
                </h3>
                <p className="text-gray-300 mb-8 text-base leading-relaxed group-hover:text-gray-200 transition-colors pointer-events-none">En yeni modelleri keşfedin ve size en uygun telefonu bulun</p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsApp("Merhaba, telefon satın almak istiyorum.");
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl text-sm font-bold transition-all duration-300 shadow-xl hover:shadow-green-500/40 transform hover:scale-110 hover:-translate-y-1"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePhoneCall();
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl text-sm font-bold transition-all duration-300 shadow-xl hover:shadow-blue-500/40 transform hover:scale-110 hover:-translate-y-1"
                  >
                    Ara
                  </button>
                </div>
              </div>
            </div>

            <div
              onClick={() => handleWhatsApp("Merhaba, telefon satmak istiyorum.")}
              className="group relative p-12 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl border-2 border-white/20 hover:border-green-500/60 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Animated Background Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/15 to-green-500/25 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(34,197,94,0.1)_90deg,transparent_180deg)] opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="text-7xl mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:drop-shadow-2xl group-hover:drop-shadow-green-500/50 pointer-events-none">
                  💰
                </div>
                <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-white via-green-200 to-green-300 bg-clip-text text-transparent group-hover:from-green-300 group-hover:via-green-100 group-hover:to-white transition-all duration-500 drop-shadow-lg pointer-events-none">
                  Telefon Sat
                </h3>
                <p className="text-gray-300 mb-8 text-base leading-relaxed group-hover:text-gray-200 transition-colors pointer-events-none">Telefonunuzu değerinde satın ve en iyi fiyatı alın</p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsApp("Merhaba, telefon satmak istiyorum.");
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl text-sm font-bold transition-all duration-300 shadow-xl hover:shadow-green-500/40 transform hover:scale-110 hover:-translate-y-1"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePhoneCall();
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl text-sm font-bold transition-all duration-300 shadow-xl hover:shadow-blue-500/40 transform hover:scale-110 hover:-translate-y-1"
                  >
                    Ara
                  </button>
                </div>
              </div>
            </div>

            <div
              onClick={() => handleWhatsApp("Merhaba, telefonumu tamir ettirmek istiyorum.")}
              className="group relative p-12 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl border-2 border-white/20 hover:border-purple-500/60 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Animated Background Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/15 to-purple-500/25 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(168,85,247,0.1)_90deg,transparent_180deg)] opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="text-7xl mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:drop-shadow-2xl group-hover:drop-shadow-purple-500/50 pointer-events-none">
                  🔧
                </div>
                <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-purple-100 group-hover:to-white transition-all duration-500 drop-shadow-lg pointer-events-none">
                  Telefon Tamiri
                </h3>
                <p className="text-gray-300 mb-8 text-base leading-relaxed group-hover:text-gray-200 transition-colors pointer-events-none">Profesyonel tamir hizmeti ile telefonunuzu yenileyin</p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsApp("Merhaba, telefonumu tamir ettirmek istiyorum.");
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl text-sm font-bold transition-all duration-300 shadow-xl hover:shadow-green-500/40 transform hover:scale-110 hover:-translate-y-1"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePhoneCall();
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl text-sm font-bold transition-all duration-300 shadow-xl hover:shadow-blue-500/40 transform hover:scale-110 hover:-translate-y-1"
                  >
                    Ara
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Haberler Bölümü */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 backdrop-blur-sm">
                📰 Güncel Haberler
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Telefon Dünyasından Haberler
            </h2>
            <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
              En yeni modeller, güncellemeler ve teknoloji haberleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={item.id}
                className="group relative p-8 bg-gradient-to-br from-white/5 via-white/3 to-transparent rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
                      item.category === 'Yeni Model' 
                        ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-300 border border-green-500/30' 
                        : 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-blue-300 border border-blue-500/30'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                  
                  {/* Read More Indicator */}
                  <div className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-semibold mr-2">Devamını Oku</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS Bölümü */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 backdrop-blur-sm">
                ❓ Sıkça Sorulan Sorular
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
              Merak Ettikleriniz
            </h2>
            <p className="text-center text-gray-400 text-lg">
              En çok sorulan soruların cevapları
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 via-white/3 to-transparent rounded-2xl border border-white/10 hover:border-purple-500/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-lg font-bold pr-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl text-purple-300 font-light">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 py-6 border-t border-white/10 bg-gradient-to-br from-white/5 to-transparent animate-fadeIn">
                    <p className="text-gray-300 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand Section */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  <Image 
                    src="/appiqlogo.png" 
                    alt="Appiq Logo" 
                    width={80} 
                    height={80}
                    className="rounded-xl relative z-10 transform group-hover:scale-110 transition-transform duration-300 shadow-2xl"
                  />
                </div>
                <span className="text-3xl font-extrabold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Appiq
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-xs mx-auto">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">İzmir'de telefon satışı, alımı ve tamiri için güvenilir adresiniz</span>. <span className="text-gray-400">En yeni modeller ve profesyonel hizmet.</span>
              </p>
              <div className="flex gap-3 justify-center">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500/30 border border-white/20 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30">
                  <span className="text-lg">📱</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500/30 border border-white/20 hover:border-green-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30">
                  <span className="text-lg">💬</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500/30 border border-white/20 hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30">
                  <span className="text-lg">📧</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Hızlı Erişim
              </h4>
              <ul className="space-y-3 flex flex-col items-center">
                <li>
                  <button
                    onClick={() => handleWhatsApp("Merhaba, telefon satın almak istiyorum.")}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium hover:translate-x-2 transform"
                  >
                    → Telefon Satın Al
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleWhatsApp("Merhaba, telefon satmak istiyorum.")}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-medium hover:translate-x-2 transform"
                  >
                    → Telefon Sat
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleWhatsApp("Merhaba, telefonumu tamir ettirmek istiyorum.")}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm font-medium hover:translate-x-2 transform"
                  >
                    → Telefon Tamiri
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium hover:translate-x-2 transform"
                  >
                    → Bize Ulaşın
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                İletişim
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-gray-400 hover:text-white transition-colors w-full">
                  <span className="text-xl">📍</span>
                  <span className="text-sm">İzmir, Buca</span>
                </div>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-3 text-gray-400 hover:text-blue-400 transition-colors w-full"
                >
                  <span className="text-xl">📞</span>
                  <span className="text-sm font-medium">{phoneNumber}</span>
                </a>
                <button
                  onClick={() => handleWhatsApp("Merhaba, bilgi almak istiyorum.")}
                  className="flex items-center justify-center gap-3 text-gray-400 hover:text-green-400 transition-colors w-full"
                >
                  <span className="text-xl">💬</span>
                  <span className="text-sm font-medium">WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
              onClick={() => handleWhatsApp("Merhaba, bilgi almak istiyorum.")}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-green-500/40 transform hover:scale-105 hover:-translate-y-1 text-base"
            >
              💬 WhatsApp ile İletişim
            </button>
            <button
              onClick={handlePhoneCall}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 hover:-translate-y-1 text-base"
            >
              📞 Hemen Ara
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">
              © 2025 <span className="font-semibold text-gray-400">Appiq</span>. Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-gray-600">
              İzmir'de telefon satışı, alımı ve tamiri
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-3xl p-10 max-w-md w-full border border-white/20 shadow-2xl shadow-blue-500/20 transform scale-100 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Bize Ulaşın
              </h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300 transform hover:rotate-90"
              >
                ×
              </button>
            </div>
            <div className="space-y-5">
              <div className="p-5 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-sm text-gray-400 mb-2 font-medium">📍 Adres</p>
                <p className="font-semibold text-lg">İzmir, Buca</p>
              </div>
              <div className="p-5 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-sm text-gray-400 mb-2 font-medium">📞 Telefon</p>
                <a href={`tel:${phoneNumber}`} className="font-semibold text-lg hover:text-blue-400 transition-colors">
                  {phoneNumber}
                </a>
              </div>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => handleWhatsApp("Merhaba, bilgi almak istiyorum.")}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:scale-105"
                >
                  WhatsApp
                </button>
                <button
                  onClick={handlePhoneCall}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:scale-105"
                >
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

