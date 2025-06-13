
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza tu Negocio en 24 Horas" subheadline="Para los dueños de pequeñas empresas que desean vender online, entregamos un sitio web de ventas en menos de un día con soporte 24/7." cta1="Inicia Ahora" />
<How step1Title="Comunícanos tu necesidad" step1Desc="Haznos saber tus metas de digitalización." step2Title="Diseñamos tu plataforma" step2Desc="Creamos tu sitio web de ventas en 24 horas." step3Title="Inicia las ventas digitales" step3Desc="Empieza a vender online con nuestro soporte 24/7." />
<Aboutus headline="WebGo: Digitaliza tus ventas fácilmente" subheadline="WebGo ofrece soluciones de comercio electrónico rápidas y eficientes, liberándote del tiempo y esfuerzo de la gestión online." beneficiotitulo1="Ventas automatizadas" beneficio1="Aumenta tus ganancias sin esfuerzo adicional" beneficiotitulo2="Tiempo optimizado" beneficio2="Libera tu agenda de la gestión digital" />
<Services heading="Impulsa tus Ventas Digitales" description="Con [producto] a un precio de $1234, transformamos tu negocio en Santiago en una exitosa tienda online. No necesitas conocimientos técnicos ni tiempo extra para gestionarlo." services={[{"name":"Diseño Web Rápido","icon":"rocket","description":"Obtén tu sitio web en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia permanente para resolver tus dudas."},{"name":"Optimización SEO","icon":"search","description":"Posicionamos tu negocio en los primeros lugares de Google."},{"name":"Gestión de Redes Sociales","icon":"users","description":"Aumentamos tu visibilidad en las plataformas digitales."},{"name":"Estrategias de Marketing","icon":"bullseye","description":"Creamos planes efectivos para atraer a tus clientes ideales."},{"name":"Analítica Web","icon":"chart-bar","description":"Rastreamos y analizamos el comportamiento de tus visitantes."}]} />
<BeforeAndAfter subheadline="Exhibiendo éxitos digitales, transformando ideas en realidad." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas?","respuesta":"WebGo se especializa en llevar negocios al mundo digital. Podemos crear una plataforma de ventas en línea para tu negocio, lo que te permitirá vender tus productos a un público más amplio. Además, te ayudamos a optimizar tu sitio para los motores de búsqueda, lo que aumenta tu visibilidad en línea y atrae más clientes."},{"pregunta":"¿Cómo se compara el precio de los servicios de WebGo con los de otros proveedores?","respuesta":"El servicio de WebGo es altamente competitivo en términos de precio. Ofrecemos paquetes asequibles y adaptados a las necesidades de cada negocio, garantizando que obtengas el mejor valor por tu inversión."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿WebGo puede cuidar de eso por mí?","respuesta":"¡Por supuesto! Nuestros expertos en WebGo están aquí para manejar todo lo relacionado con tu sitio web, desde la creación hasta su mantenimiento diario. Esto te permite concentrarte en lo que mejor sabes hacer: administrar tu negocio."},{"pregunta":"Mis clientes no saben cómo comprar en línea, ¿WebGo puede hacer que el proceso sea fácil para ellos?","respuesta":"Absolutamente. En WebGo, diseñamos sitios web intuitivos y fáciles de usar. Nuestro objetivo es que tus clientes tengan una experiencia de compra en línea sin problemas, independientemente de su nivel de habilidad técnica."},{"pregunta":"Quiero mantener mis ventas por recomendación pero también vender en línea, ¿es posible con WebGo?","respuesta":"Definitivamente. En WebGo, no solo construimos tu tienda en línea, sino que también integramos herramientas como testimonios y sistemas de revisión para aprovechar tus ventas por recomendación. Esto fomenta la confianza en tu marca y puede incrementar tus ventas en línea."}]} />
<BookAppointment 
                      heading="Impulsa Tus Ventas Digitales, Santiago" 
                      description="Conviértete en el líder de tu mercado con WebGo. Nos encargamos de todo para que vendas online sin distracciones."
                      formPostUrl="https://webgo-generator.vercel.app//api/sendForm"
                      siteOwnerId="FC78ACRULQRtDYY2AonQHk5pMhm1"
                    />
<Footer />
    </main>
  );
}
