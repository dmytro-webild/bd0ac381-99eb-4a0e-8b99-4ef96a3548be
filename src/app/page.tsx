"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { CalendarDays, Flame, MapPin, Smile, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Beranda",
          id: "#hero",
        },
        {
          name: "Tentang Kami",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Testimoni",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Kontak",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/front-view-female-courier-yellow-uniform-cap-holding-food-package-plastic-card-pink-wall_140725-38310.jpg"
      logoAlt="Restoran Ayam Lezat Logo"
      brandName="Restoran Ayam Lezat"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="Nikmati Kelezatan Ayam Panggang Sempurna"
      description="Di Restoran Ayam Lezat, kami menyajikan hidangan ayam panggang dengan resep rahasia yang telah diwariskan turun-temurun, memberikan cita rasa yang tak terlupakan di setiap gigitan."
      buttons={[
        {
          text: "Pesan Sekarang",
          href: "#contact",
        },
        {
          text: "Lihat Menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/baked-chicken-with-baby-potatoes-salad-green-background_127032-3474.jpg"
      imageAlt="Ayam Panggang utuh dengan hiasan"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-african-american-female-with-broad-pleasant-smile-rests-sidewalk-cafe-alone-enjoys-good-rest-summer-vacation_273609-3491.jpg",
          alt: "Happy customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-woman-with-salad_1303-3887.jpg",
          alt: "Happy customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/curly-woman-with-cheerful-expression-eats-delicious-dessert-being-good-mood-spends-spare-time-cozy-coffee-shop-enjoys-tasty-fruit-salad-attractive-female-rests-after-excursion-alone_273609-2101.jpg",
          alt: "Happy customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5060.jpg",
          alt: "Happy customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-dining-table-while-communicating-with-her-husband_637285-3516.jpg",
          alt: "Happy customer 5",
        },
      ]}
      avatarText="Lebih dari 10.000 pelanggan puas!"
      marqueeItems={[
        {
          type: "text",
          text: "Lezat Tiada Tara",
        },
        {
          type: "text-icon",
          text: "Bumbu Rahasia",
          icon: Sparkles,
        },
        {
          type: "text",
          text: "Selalu Fresh",
        },
        {
          type: "text-icon",
          text: "Pelayanan Terbaik",
          icon: Smile,
        },
        {
          type: "text",
          text: "Kelezatan Otentik",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Kisah Kelezatan Kami"
      metrics={[
        {
          icon: CalendarDays,
          label: "Tahun Berdiri",
          value: "2005",
        },
        {
          icon: MapPin,
          label: "Lokasi",
          value: "3 Cabang",
        },
        {
          icon: Flame,
          label: "Resep Unik",
          value: "1 Rahasia",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Ayam Segar Pilihan",
          description: "Kami hanya menggunakan ayam segar berkualitas tinggi yang dipilih setiap hari dari peternak terpercaya.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-spiced-chicken-with-seasonings-dark-blue-background-food-spice-pepper-dish-dinner-meat-color-baking_179666-17833.jpg",
          imageAlt: "Ayam segar mentah",
          buttonIcon: "Feather",
        },
        {
          title: "Bumbu Rahasia Istimewa",
          description: "Resep bumbu rahasia kami yang telah diwariskan turun-temurun, menciptakan cita rasa otentik yang tak tertandingi.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-spices-composition_23-2147684885.jpg",
          imageAlt: "Remah-rempah untuk bumbu",
          buttonIcon: "Sparkles",
        },
        {
          title: "Pelayanan Ramah & Cepat",
          description: "Tim kami selalu siap melayani Anda dengan senyum dan profesionalisme, memastikan pengalaman makan yang menyenangkan.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-making-home-comfortable_23-2149092051.jpg",
          imageAlt: "Pelayan restoran tersenyum",
          buttonIcon: "Smile",
        },
        {
          title: "Suasana Nyaman",
          description: "Nikmati hidangan Anda dalam suasana restoran yang bersih, nyaman, dan cocok untuk keluarga atau teman.",
          imageSrc: "http://img.b2bpic.net/free-photo/person-cafe-enjoying-book_23-2150064701.jpg",
          imageAlt: "Interior restoran yang nyaman",
          buttonIcon: "Home",
        },
      ]}
      title="Mengapa Memilih Kami?"
      description="Kami berkomitmen untuk memberikan pengalaman bersantap terbaik dengan fokus pada kualitas dan kepuasan pelanggan, dari bahan baku hingga pelayanan."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Ayam Panggang Original",
          price: "Rp 35.000",
          imageSrc: "http://img.b2bpic.net/free-photo/roasted-chicken-bowl-with-potato-knife-napkin-lemon-sauce-fork-desk_23-2148029547.jpg",
          imageAlt: "Ayam Panggang Original",
        },
        {
          id: "2",
          name: "Ayam Bakar Madu",
          price: "Rp 38.000",
          imageSrc: "http://img.b2bpic.net/free-photo/meat-kebabs-wooden-skewers-with-potherbs_23-2147852330.jpg",
          imageAlt: "Ayam Bakar Madu",
        },
        {
          id: "3",
          name: "Ayam Geprek Pedas",
          price: "Rp 32.000",
          imageSrc: "http://img.b2bpic.net/free-photo/crispy-fried-chicken-wooden-plate-with-tomato-sauce_1150-20206.jpg",
          imageAlt: "Ayam Geprek Pedas",
        },
        {
          id: "4",
          name: "Nasi Ayam Hainan",
          price: "Rp 40.000",
          imageSrc: "http://img.b2bpic.net/free-photo/steamed-pork-with-spicy-sauce-lemon-with-berry-rice_1339-6384.jpg",
          imageAlt: "Nasi Ayam Hainan",
        },
        {
          id: "5",
          name: "Sayap Ayam Krispi",
          price: "Rp 28.000",
          imageSrc: "http://img.b2bpic.net/free-photo/cookies-brown-tasty-sweet-grey-floor_179666-399.jpg",
          imageAlt: "Sayap Ayam Krispi",
        },
        {
          id: "6",
          name: "Burger Ayam Spesial",
          price: "Rp 45.000",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-chicken-doner-pita-bread-with-ketchup-mayonnaise-french-fries-vegetable-salad-board_141793-2822.jpg",
          imageAlt: "Burger Ayam Spesial",
        },
      ]}
      title="Menu Andalan Kami"
      description="Dari ayam panggang klasik hingga variasi pedas yang menggoda, temukan favorit Anda di sini. Setiap hidangan disiapkan dengan cinta dan bahan terbaik."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Rina Sari",
          role: "Pecinta Kuliner",
          testimonial: "Ayam panggangnya juara! Bumbunya meresap sempurna, kulitnya garing. Pasti akan kembali lagi dan mencoba menu lain.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-african-american-female-has-broad-shining-smile-communicates-via-cell-phone-dinner-break-exotic-cafe-has-pleasant-conversation-with-relatives-shares-impressions-about-vacations_273609-2192.jpg",
        },
        {
          id: "2",
          name: "Andi Pratama",
          role: "Food Blogger",
          testimonial: "Setiap kunjungan selalu memuaskan. Ayam bakarnya lembut, sambalnya nampol! Sangat direkomendasikan untuk penggemar ayam.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-counter_1170-668.jpg",
        },
        {
          id: "3",
          name: "Dewi Cahyani",
          role: "Ibu Rumah Tangga",
          testimonial: "Tempat favorit keluarga kami untuk makan malam. Anak-anak suka ayam krispinya, dan saya suka suasana yang nyaman.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-drinking-brotherhood-table-restaurant_23-2148014461.jpg",
        },
        {
          id: "4",
          name: "Budi Santoso",
          role: "Karyawan Swasta",
          testimonial: "Pelayanan cepat dan ramah, cocok untuk makan siang di sela-sela jam kerja. Ayam gepreknya pedasnya pas bikin nagih!",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-smiling-brunette-asian-woman-sitting-with-graphic-pen-looking-happy-drawing_1258-199033.jpg",
        },
        {
          id: "5",
          name: "Siska Wijaya",
          role: "Mahasiswa",
          testimonial: "Harganya terjangkau dengan porsi yang mengenyangkan. Nasi ayam Hainannya otentik banget, serasa di luar negeri!",
          imageSrc: "http://img.b2bpic.net/free-photo/mature-man-eating-sushi-restaurant_23-2148465242.jpg",
        },
      ]}
      title="Apa Kata Pelanggan Kami?"
      description="Dengar langsung dari mereka yang telah merasakan kelezatan dan keramahan Restoran Ayam Lezat. Kepuasan Anda adalah prioritas kami."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Apakah menerima reservasi tempat?",
          content: "Ya, kami sangat menganjurkan Anda untuk melakukan reservasi, terutama untuk kelompok besar atau pada akhir pekan, untuk memastikan ketersediaan tempat.",
        },
        {
          id: "q2",
          title: "Apakah ada pilihan menu vegetarian atau vegan?",
          content: "Saat ini, menu utama kami berfokus pada hidangan ayam. Namun, kami memiliki beberapa pilihan lauk dan salad yang cocok untuk vegetarian.",
        },
        {
          id: "q3",
          title: "Apakah ada layanan pengiriman (delivery)?",
          content: "Tentu, kami menyediakan layanan pengiriman melalui aplikasi ojek online terkemuka. Anda dapat memesan hidangan favorit Anda langsung dari rumah.",
        },
      ]}
      sideTitle="Pertanyaan Umum"
      sideDescription="Kami telah mengumpulkan jawaban untuk pertanyaan yang sering diajukan oleh pelanggan kami. Jika pertanyaan Anda tidak terjawab di sini, jangan ragu untuk menghubungi kami."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Kunjungi Kami Hari Ini! Dapatkan pengalaman bersantap ayam terbaik di kota."
      buttons={[
        {
          text: "Lihat Lokasi",
          href: "https://maps.google.com/?q=Restoran+Ayam+Lezat",
        },
        {
          text: "Hubungi Kami",
          href: "tel:+628123456789",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="http://img.b2bpic.net/free-photo/front-view-female-courier-yellow-uniform-cap-holding-food-package-plastic-card-pink-wall_140725-38310.jpg"
      logoAlt="Restoran Ayam Lezat Logo"
      columns={[
        {
          items: [
            {
              label: "Beranda",
              href: "#hero",
            },
            {
              label: "Tentang Kami",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#menu",
            },
          ],
        },
        {
          items: [
            {
              label: "Testimoni",
              href: "#testimonials",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Kontak",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privasi",
              href: "#",
            },
            {
              label: "Syarat & Ketentuan",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Restoran Ayam Lezat"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
