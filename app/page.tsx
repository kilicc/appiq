'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

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
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image 
              src="/appiqlogo.png" 
              alt="Appiq Logo" 
              width={40} 
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-semibold">Appiq</span>
          </div>
          <button
            onClick={() => setShowContactModal(true)}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 text-sm font-medium border border-white/20"
          >
            Bize Ulaşın
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Appiq Telefon Mağazası
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto">
            İzmir Buca'da telefon satışı, alımı ve tamiri için güvenilir adresiniz
          </p>

          {/* 3 Ana Buton */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            <button
              onClick={() => handleWhatsApp("Merhaba, telefon satın almak istiyorum.")}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-2xl font-semibold mb-3">Telefon Satın Al</h3>
                <p className="text-gray-400 mb-4">En yeni modelleri keşfedin</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsApp("Merhaba, telefon satın almak istiyorum.");
                    }}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePhoneCall();
                    }}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    Ara
                  </button>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleWhatsApp("Merhaba, telefon satmak istiyorum.")}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-semibold mb-3">Telefon Sat</h3>
                <p className="text-gray-400 mb-4">Telefonunuzu değerinde satın</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsApp("Merhaba, telefon satmak istiyorum.");
                    }}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePhoneCall();
                    }}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    Ara
                  </button>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleWhatsApp("Merhaba, telefonumu tamir ettirmek istiyorum.")}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-semibold mb-3">Telefon Tamiri</h3>
                <p className="text-gray-400 mb-4">Profesyonel tamir hizmeti</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsApp("Merhaba, telefonumu tamir ettirmek istiyorum.");
                    }}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePhoneCall();
                    }}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    Ara
                  </button>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Haberler Bölümü */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Güncel Haberler</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Telefon dünyasından son gelişmeler</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <div
                key={item.id}
                className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS Bölümü */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Merak ettiklerinizin cevapları</p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  <span className="text-2xl text-gray-400 flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t border-white/10">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image 
              src="/appiqlogo.png" 
              alt="Appiq Logo" 
              width={32} 
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-semibold">Appiq</span>
          </div>
          <p className="text-gray-400 mb-4">İzmir, Buca - Telefon Mağazası</p>
          <p className="text-sm text-gray-500">© 2025 Appiq. Tüm hakları saklıdır.</p>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-gray-900 rounded-3xl p-8 max-w-md w-full border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Bize Ulaşın</h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-sm text-gray-400 mb-2">Adres</p>
                <p className="font-medium">İzmir, Buca</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-sm text-gray-400 mb-2">Telefon</p>
                <a href={`tel:${phoneNumber}`} className="font-medium hover:text-blue-400">
                  {phoneNumber}
                </a>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => handleWhatsApp("Merhaba, bilgi almak istiyorum.")}
                  className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-medium transition-colors"
                >
                  WhatsApp
                </button>
                <button
                  onClick={handlePhoneCall}
                  className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition-colors"
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

