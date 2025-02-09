import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import awakenLogo from '@/assets/awaken-logo.png'; // Cambia el logo
import testimonio1 from '@/assets/testimonio1.jpg';
import testimonio2 from '@/assets/testimonio2.jpg';
import testimonio3 from '@/assets/testimonio3.jpg';
import aliado1 from '@/assets/aliado1.png';
import aliado2 from '@/assets/aliado2.png';
import aliado3 from '@/assets/aliado3.png';
import aliado4 from '@/assets/aliado4.png';
import { GiWeightLiftingUp, GiRunningShoe, GiMountainClimbing, GiIceCube } from "react-icons/gi";
import { TbYoga } from "react-icons/tb";
import { FiBox } from "react-icons/fi";

export default function AwakenPage() {
  const actividades = [
    {
      icon: <GiWeightLiftingUp className="w-12 h-12 text-red-600" />,
      title: "Entrenamiento de Pesas",
      desc: "Fortalece tu cuerpo y construye músculo con nuestras rutinas personalizadas.",
    },
    {
      icon: <GiRunningShoe className="w-12 h-12 text-red-600" />,
      title: "Running",
      desc: "Mejora tu resistencia y velocidad con nuestros programas de running.",
    },
    {
      icon: <TbYoga className="w-12 h-12 text-red-600" />,
      title: "Yoga",
      desc: "Encuentra equilibrio y paz interior con nuestras clases de yoga.",
    },
    {
      icon: <GiMountainClimbing className="w-12 h-12 text-red-600" />,
      title: "Caminatas en Montaña",
      desc: "Conéctate con la naturaleza y desafía tus límites en nuestras caminatas.",
    },
    {
      icon: <GiIceCube className="w-12 h-12 text-red-600" />,
      title: "Inmersión en Hielo",
      desc: "Fortalece tu mente y cuerpo con la terapia de frío.",
    },
    {
      icon: <FiBox className="w-12 h-12 text-red-600" />,
      title: "Crossfit",
      desc: "Entrenamientos intensos para mejorar tu condición física.",
    },
  ];

  const testimonios = [
    { text: 'Awaken ha transformado mi vida. El equilibrio entre pesas, running y yoga es increíble.', name: 'Isabela Gómez', photo: testimonio1 },
    { text: 'Las caminatas en la montaña me han ayudado a desconectar y recargar energías.', name: 'Leonardo Martinez', photo: testimonio2 },
    { text: 'La inmersión en hielo es una experiencia única que recomiendo a todos.', name: 'Blanca Velasquez', photo: testimonio3 },
  ];

  const aliados = [aliado1, aliado2, aliado3, aliado4];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica de auto-play para pantallas móviles
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const interval = isMobile ? setInterval(() => nextSlide(), 5000) : null;
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % actividades.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + actividades.length) % actividades.length);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">

      {/* Main Navigation */}
      <header className="bg-black shadow-md h-16 flex items-center px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={awakenLogo} alt="Awaken" className="h-12" />
        </Link>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto lg:hidden block text-gray-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menú de navegación */}
        <nav
          className={`lg:flex gap-4 ml-auto ${isMenuOpen ? "block" : "hidden"
            } absolute lg:static top-16 right-4 bg-black shadow-lg rounded-md lg:shadow-none lg:bg-transparent p-4 lg:p-0`}
          style={{ width: "max-content" }}
        >
          {[
            "Actividades",
            "Eventos",
            "Productos",
            "Quienes Somos",
            "Contacto",
          ].map((item) => (
            <Link
              key={item}
              to="#"
              className="text-sm font-bold hover:text-red-500 block lg:inline-block mb-2 lg:mb-0"
            >
              {item}
            </Link>
          ))}
          <div className="flex items-center space-x-6 ml-auto">

            {/* Instagram Logo */}
            <a
              href="https://www.instagram.com/awaken_runfast/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </nav>

      </header>

      {/* Hero Section */}
      <section
        className="w-full h-full py-60 text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: `url('awaken-logo.png')`, // Cambia la imagen de fondo
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Despierta tu potencial</h1>
          <p className="text-lg mb-6">Combina fuerza, resistencia y paz interior con Awaken.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-red-600 text-white font-bold rounded-full hover:bg-red-700">
              Únete Ahora
            </Button>
            <Button size="lg" className="bg-gray-800 text-white font-bold rounded-full hover:bg-gray-700">
              Conoce Más
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Actividades */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Nuestras Actividades
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {actividades.map((actividad, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {actividad.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{actividad.title}</h3>
                <p className="text-gray-300">{actividad.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Dos Columnas */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:flex lg:items-center">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-white leading-tight mb-8">
              Explora <span className="text-red-600">Awaken</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              En Awaken nos enfocamos en el desarrollo integral del cuerpo y la mente a través de{" "}
              <span className="text-red-600 font-semibold">
                entrenamientos híbridos
              </span>
              , combinando fuerza, resistencia y bienestar. Ofrecemos experiencias únicas diseñadas para transformar tu vida.
            </p>
            <div className="space-y-8">
              {[
                {
                  title: "Fuerza y Resistencia",
                  desc: "Mejora tu condición física con entrenamientos de pesas, running y crossfit.",
                },
                {
                  title: "Conexión con la Naturaleza",
                  desc: "Descubre la paz interior con nuestras caminatas en la montaña y retiros de fuerza interior.",
                },
                {
                  title: "Bienestar Integral",
                  desc: "Equilibra cuerpo y mente con yoga, meditación y terapia de frío.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12 relative">
            <img
              src="awaken-sec.png" // Cambia por la imagen principal de Awaken
              alt="Awaken Comunidad"
              className="rounded-xl shadow-lg w-full object-cover h-[600px]"
            />
            <img
              src={awakenLogo} // Usa el logo de Awaken
              alt="Awaken Logo"
              className="absolute bottom-4 right-4 w-24 h-24 rounded-full border-4 border-white shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Sección de Merchandising */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Merch Awaken
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "camiseta2.jpeg",
                title: "Camiseta Deportiva Awaken",
                desc: "Diseño exclusivo para entrenamientos y running.",
              },
              {
                image: "camiseta1.png",
                title: "Camiseta Esqueleto",
                desc: "Ideal para actividades al aire libre y deportes extremos.",
              },
              {
                image: "camiseta3.png",
                title: "Blusa Deportiva",
                desc: "Especial para chicas Hybrid.",
              },
            ].map((producto, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={producto.image}
                  alt={producto.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-white">{producto.title}</h3>
                <p className="text-gray-300">{producto.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto flex justify-between">
          <p className="text-sm">&copy; 2025 Awaken. Todos los derechos reservados.</p>
          <nav className="flex gap-4">
            <Link to="#" className="hover:text-red-600">Términos</Link>
            <Link to="#" className="hover:text-red-600">Privacidad</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}