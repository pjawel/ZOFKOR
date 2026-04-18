/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Calendar, Users, Utensils, Heart, ChevronRight } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";

const CONTACT_INFO = {
  name: "ZOFKOR Korycka Z.",
  prevName: "ZYGKOR - Korycki Z.",
  address: "Kaleń, 09-550 Szczawin Kościelny",
  phone: "570 765 864",
  email: "zofkor@op.pl"
};

const Section = ({ title, subtitle, children, className = "", id }: { title: string, subtitle?: string, children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-gold font-medium uppercase tracking-widest text-sm"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="w-24 h-px bg-brand-gold mx-auto mt-6" />
    </div>
    {children}
  </section>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-beige">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-white border-b border-brand-border"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold tracking-widest text-brand-gold leading-none">ZOFKOR</h1>
            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mt-1 font-semibold">Korycka Z.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-[13px] font-bold uppercase tracking-wider text-gray-600">
            <a href="#o-nas" className="hover:text-brand-gold transition-colors">Start</a>
            <a href="#o-nas" className="hover:text-brand-gold transition-colors">O Nas</a>
            <a href="#oferta" className="hover:text-brand-gold transition-colors">Sala</a>
            <a href="#galeria" className="hover:text-brand-gold transition-colors">Galeria</a>
            <a href="#opinie" className="hover:text-brand-gold transition-colors">Opinie</a>
            <a href="#kontakt" className="hover:text-brand-gold transition-colors">Kontakt</a>
          </div>
          <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="bg-brand-gold text-white px-8 py-3 text-[13px] font-bold uppercase tracking-widest hover:bg-brand-gold/90 transition-all flex items-center gap-2">
            <Phone size={14} />
            <span>570 765 864</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-[104px] grid md:grid-cols-2 min-h-[600px] border-b border-brand-border bg-white overflow-hidden">
        <div className="p-12 md:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-secondary-bg text-brand-gold text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
              Dawniej ZYGKOR - Korycki Z.
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-brand-dark leading-[1.1] mb-8">
              Twój wymarzony dzień w sercu Mazowsza.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
              Zapraszamy do Domu Weselnego ZOFKOR, gdzie tradycyjna gościnność łączy się z nowoczesnym komfortem. Tworzymy niezapomniane wspomnienia od pokoleń.
            </p>
            <a href="#kontakt" className="inline-block bg-brand-gold text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-brand-gold/90 transition-all shadow-md">
              REZERWUJ TERMIN
            </a>
          </motion.div>
        </div>
        <div className="relative bg-[#eee] min-h-[400px]">
          <img 
            src="https://scontent-waw2-1.xx.fbcdn.net/v/t1.6435-9/45233649_2170226169898675_5002520496105848832_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=Wi0a6JzCsksQ7kNvwH2QZTN&_nc_oc=AdqkrC9sF4_5JcoL-Xmd9183LesXv2o64wkzi-mqlKVmlD_bwEXmsgr1_kOj7wXhQNg&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=lj-pON8gmf9g4JVA-Z-KoA&_nc_ss=7a3a8&oh=00_Af0chXrgIurMmmnLJ_FfXpp5vHbrWU0KDTsKeGpsoh39dA&oe=6A0AC44A" 
            alt="Wizualizacja Sali Weselnej" 
            className="w-full h-full object-cover grayscale-[20%] sepia-[10%] opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
        </div>
      </section>

      {/* Contact Strip */}
      <section className="grid md:grid-cols-4 bg-white border-b border-brand-border">
        <div className="p-10 border-r border-brand-border last:border-r-0 flex flex-col justify-center">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-2">Lokalizacja</span>
          <span className="text-sm font-bold text-brand-dark">Kaleń, 09-550 Szczawin Kościelny</span>
        </div>
        <div className="p-10 border-r border-brand-border last:border-r-0 flex flex-col justify-center">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-2">Telefon</span>
          <span className="text-sm font-bold text-brand-dark">570 765 864</span>
        </div>
        <div className="p-10 border-r border-brand-border last:border-r-0 flex flex-col justify-center">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-2">E-Mail</span>
          <span className="text-sm font-bold text-brand-dark">zofkor@op.pl</span>
        </div>
        <div className="p-10 border-r border-brand-border last:border-r-0 flex flex-col justify-center">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-2">Dostępność</span>
          <span className="text-sm font-bold text-brand-dark">Pn - Sb: 09:00 - 18:00</span>
        </div>
      </section>

      {/* Rest of Content - Intro */}
      <Section id="o-nas" title="O Naszej Sali" subtitle="Tradycja i nowoczesność" className="bg-brand-beige">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-[16px] leading-[1.8] text-gray-600">
            <p>
              Dom Weselny <span className="font-bold text-brand-dark">ZOFKOR</span> to miejsce z wieloletnią historią, które przeszło gruntowny lifting, by sprostać oczekiwaniom najbardziej wymagających gości.
            </p>
            <p>
              Znajdujemy się w malowniczej miejscowości Kaleń, w gminie Szczawin Kościelny. Nasza sala to idealne połączenie przestronności, doskonałej akustyki i ciepłego, rodzinnego klimatu.
            </p>
            <div className="pt-6">
              <span className="font-serif italic text-3xl text-brand-gold">Zofia Korycka</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-white p-4 border border-brand-border shadow-sm">
              <img src="https://scontent-waw2-2.xx.fbcdn.net/v/t1.6435-9/53690253_2247687945485830_1220774978497019904_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8jTzeIryS_sQ7kNvwFCPf-d&_nc_oc=AdoEvMsQvix6pZ0VOpP8fths3Jk8LNBEb4zAP8OD1DzOwrig-VnQAFAjmzgrcFCjLPQ&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=CK7eDornswJFk-cS85W5wA&_nc_ss=7a3a8&oh=00_Af0LiAJgqSFnrjow-qXBI8r_u1N7N8PeIW1FfOquR0ARiQ&oe=6A0AC09B" alt="Interior" className="w-full h-full object-cover grayscale-[10%]" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-secondary-bg -z-10" />
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <div id="oferta" className="bg-white border-y border-brand-border">
        <Section title="Nasza Oferta" subtitle="Co nas wyróżnia">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Users size={24} />, title: "Przyjęcia do 250 osób", desc: "Przestronna, w pełni klimatyzowana sala z parkietem do tańca, idealna na duże wesela i kameralne uroczystości." },
              { icon: <Utensils size={24} />, title: "Wyśmienita Kuchnia", desc: "Tradycyjne polskie smaki przygotowywane na miejscu ze świeżych produktów przez doświadczonych kucharzy." },
              { icon: <Calendar size={24} />, title: "Kompleksowa Obsługa", desc: "Pomagamy w organizacji od A do Z – od dekoracji, przez menu, po dobór profesjonalnych podwykonawców." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="w-12 h-12 flex items-center justify-center text-brand-gold mb-6 border-b border-brand-gold/20 pb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 text-brand-dark">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Gallery Highlight */}
      <section id="galeria" className="py-24 bg-brand-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end border-b border-brand-border pb-8">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-2 block">Inspiracje</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">Galeria</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
          <div className="col-span-2 row-span-2 aspect-square border border-brand-border p-3 bg-white">
            <img src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/557235124_1316430906936095_2569791822352151570_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=t9Y6goPXAAMQ7kNvwH938ou&_nc_oc=AdpnfxAULXWE3hGHAGkZW4B_vxbw4nls7MxtuAAEV4cfHE9nH1vO6yZyQj-KDx_zdE8&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=SVBNDwYD62gGNL5d0qELww&_nc_ss=7a3a8&oh=00_Af0aTOsARGPN_J3mV_e92ujp7WzwLtTAuX8cNNw65RHNbQ&oe=69E91507" alt="Gallery" className="w-full h-full object-cover grayscale-[10%]" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-square border border-brand-border p-2 bg-white">
            <img src="https://scontent-waw2-1.xx.fbcdn.net/v/t1.6435-9/45338164_2170239493230676_6412533537550893056_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f798df&_nc_ohc=w86XPoV2mvYQ7kNvwFlrvCR&_nc_oc=AdrUBK2esFCeo6qj9Is_xs6lA2Vm0OJ4JrjsvqVqZT73NqhIFDnGs7PMc1ie1EJyzH4&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=2c_R66tKpWuzXznL8b2bIQ&_nc_ss=7a3a8&oh=00_Af3ZJDIsXgZ6go5kodZ5NlnuQptq_To0rukeHaI_vtborQ&oe=6A0A9B6E" alt="Gallery" className="w-full h-full object-cover grayscale-[10%]" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-square border border-brand-border p-2 bg-white">
            <img src="https://scontent-waw2-1.xx.fbcdn.net/v/t1.6435-9/45304125_2170239609897331_2706559008344375296_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f798df&_nc_ohc=KJU7xz3Ez1MQ7kNvwEV6Ycq&_nc_oc=AdpMs_Lsbk1Q-9n_N7AhRCCboj5rjXg_QK4oRab3DA9gxVU6XW1Ne9FwlFkWAb5HXE8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=m-IZAwhgUTXrMXI2fAqE5Q&_nc_ss=7a3a8&oh=00_Af03aGyU0CwxIHYVruM2gxSUv_1Nbv-er0LM4somH6QlLg&oe=6A0AB272" alt="Gallery" className="w-full h-full object-cover grayscale-[10%]" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-square border border-brand-border p-2 bg-white">
            <img src="https://scontent-waw2-2.xx.fbcdn.net/v/t1.6435-9/45202775_2170239639897328_8829313597810147328_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f798df&_nc_ohc=0hECPgAifvIQ7kNvwGhXt5U&_nc_oc=AdqzEFQrHX3gf5fBKFhcspOvIH_Rbgg8XrjGdYiztxtf6FWsDHyYPUh60xQ8qRXaabk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=-1l52A_ZQK53BXuyJH7nzQ&_nc_ss=7a3a8&oh=00_Af3bjgDogWHxSuGdRP7w6UYyB2p54r4I5acsIpV4h9mw5Q&oe=6A0ABD6B" alt="Gallery" className="w-full h-full object-cover grayscale-[10%]" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-square border border-brand-border p-2 bg-white">
            <img src="https://scontent-waw2-2.xx.fbcdn.net/v/t1.6435-9/45265399_2170240486563910_5702898085760335872_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f798df&_nc_ohc=GBMKUNGWV08Q7kNvwGxs85-&_nc_oc=Adp5X7gIatolB5omapv31FwtvYtgT9I4jKPvaz4P2GNi2WLvZ_Y5q9Lqy31nb-ATuWk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=1_4lDtFpyastCeOkyo8xCw&_nc_ss=7a3a8&oh=00_Af3idfQ-uDm3524MoLJZgBr4VgTq5nO3q6xnJULsWntepg&oe=6A0A98F7" alt="Gallery" className="w-full h-full object-cover grayscale-[10%]" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Section id="opinie" title="Opinie Gości" subtitle="Wasze wspomnienia" className="bg-white">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              name: "Anna i Tomasz", 
              text: "Najpiękniejsza sala w okolicy! Jedzenie przepyszne, a obsługa na najwyższym poziomie. Z czystym sumieniem polecamy każdemu, kto marzy o idealnym weselu.",
              rating: 5
            },
            { 
              name: "Karolina S.", 
              text: "Wesele w Zofkorze to była najlepsza decyzja. Wszystko dopięte na ostatni guzik. Pani Zofia to profesjonalistka w każdym calu, która dba o każdy detal.",
              rating: 5
            },
            { 
              name: "Marek i Ewa", 
              text: "Piękne wnętrza, świetna akustyka i pyszne potrawy. Goście byli zachwyceni klimatem i gościnnością. Dziękujemy za niezapomnianą noc!",
              rating: 5
            }
          ].map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-beige p-8 border border-brand-border flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-brand-gold mb-6">
                  {[...Array(review.rating)].map((_, i) => <Heart key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-6">"{review.text}"</p>
              </div>
              <h4 className="text-brand-dark font-bold text-sm uppercase tracking-widest">— {review.name}</h4>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a 
            href="https://www.facebook.com/profile.php?id=100057075956692&sk=reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-dark hover:text-brand-gold transition-colors border-b border-brand-dark hover:border-brand-gold pb-1"
          >
            Zobacz wszystkie opinie na Facebooku <ChevronRight size={14} />
          </a>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="kontakt" title="Kontakt" subtitle="Bądźmy w kontakcie" className="bg-white border-t border-brand-border text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          {[
            { icon: <MapPin size={24} />, label: "Lokalizacja", value: "Kaleń, 09-550 Szczawin Kościelny", sub: "Polska" },
            { icon: <Phone size={24} />, label: "Telefon", value: CONTACT_INFO.phone, sub: "Pn - Sb: 09:00 - 18:00" },
            { icon: <Mail size={24} />, label: "Email", value: CONTACT_INFO.email, sub: "Odpowiadamy w 24h" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-3">{item.label}</h4>
                <p className="text-lg font-bold text-brand-dark">{item.value}</p>
                <p className="text-xs text-gray-400 mt-1 font-medium">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-brand-beige py-16 px-12 border-t border-brand-border text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-extrabold tracking-widest text-brand-gold leading-none">ZOFKOR</h4>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-2 font-bold">Dom Weselny Korycka Z.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500">
            <a href="https://www.facebook.com/profile.php?id=100057075956692" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Facebook</a>
          </div>
          <div className="pt-10 border-t border-brand-border w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              &copy; 2024 Dom Weselny ZOFKOR | Kalen, Poland
            </span>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              Designed for Excellence
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

