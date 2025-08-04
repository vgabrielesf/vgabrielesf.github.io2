import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Modal from '../components/Modal/Modal';
import Footer from '../components/Footer/Footer';
import { portfolioData, skills, education, certifications, projects, contact } from '../data/services';

const Typewriter = ({ text, speed = 120, pause = 1200 }) => {
    const [displayed, setDisplayed] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayed(text.slice(0, index + 1));
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            const resetTimeout = setTimeout(() => {
                setDisplayed('');
                setIndex(0);
            }, pause);
            return () => clearTimeout(resetTimeout);
        }
    }, [index, text, speed, pause]);

    return (
        <span style={{fontFamily: 'Poppins, sans-serif'}}>{displayed}<span className="typewriter-cursor">|</span></span>
    );
};

const Home = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEducationType, setSelectedEducationType] = useState('superior');
    const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

    const certificates = [
        {
            id: 1,
            title: "Banco de Dados",
            description: "Certificação em modelagem e administração de bancos de dados",
            image: "/assets/Banco de Dados.jpg"
        },
        {
            id: 2,
            title: "Python 3",
            description: "Curso completo de programação Python 3",
            image: "/assets/Curso Python 3.jpg"
        },
        {
            id: 3,
            title: "FullStack Developer",
            description: "Certificação em desenvolvimento full stack",
            image: "/assets/FullStack Developer.jpg"
        },
        {
            id: 4,
            title: "NoSQL com MongoDB - Parte 1",
            description: "Fundamentos de bancos NoSQL com MongoDB",
            image: "/assets/NoSQL com MongoDB_Página_1.jpg"
        },
        {
            id: 5,
            title: "NoSQL com MongoDB - Parte 2",
            description: "Técnicas avançadas em MongoDB",
            image: "/assets/NoSQL com MongoDB_Página_2.jpg"
        }
    ];

    const nextCertificates = () => {
        setCurrentCertificateIndex(prev => 
            prev + 1 >= certificates.length - 2 ? 0 : prev + 1
        );
    };

    const prevCertificates = () => {
        setCurrentCertificateIndex(prev => 
            prev - 1 < 0 ? Math.max(0, certificates.length - 3) : prev - 1
        );
    };

    const visibleCertificates = certificates.slice(currentCertificateIndex, currentCertificateIndex + 3);

    const handleCertificateClick = (certificate) => {
        setSelectedCertificate(certificate);
        setIsCertificateModalOpen(true);
    };

    const closeCertificateModal = () => {
        setIsCertificateModalOpen(false);
        setSelectedCertificate(null);
    };

    // Effect para fechar modal com ESC
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isCertificateModalOpen) {
                closeCertificateModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isCertificateModalOpen]);

    const handleLearnMore = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Header />
            
            {/* Hero Section */}
            <section id="home" className="pt-16 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                        {/* Lado esquerdo - Texto */}
                        <div className="flex-1 text-left">
                            <h1 className="text-xl md:text-3xl mb-4 animate-slide-up" style={{fontFamily: 'Poppins, sans-serif'}}>
                                Olá, sou a 
                            </h1>
                            <h2 className="text-3xl md:text-5xl mb-4 animate-slide-up text-orange-400" style={{fontFamily: 'Poppins, sans-serif'}}>
                                <Typewriter text="Vitória Gabriele" speed={120} pause={1200} />
                            </h2>
                            <h3 className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up" style={{fontFamily: 'Poppins, sans-serif'}}>
                                Full Stack Developer
                            </h3>
                            <div className="flex flex-row gap-4 animate-slide-up justify-start">
                                <a 
                                    href="#portfolio"
                                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200 transform hover:scale-105"
                                >
                                    Ver Meu Trabalho
                                </a>
                                <a 
                                    href="#contact"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200"
                                >
                                    Entre em Contato
                                </a>
                            </div>
                        </div>

                        {/* Lado direito - Avatar */}
                        <div className="hidden lg:flex flex-shrink-0 lg:ml-12">
                            <div className="w-40 h-40 lg:w-48 lg:h-48 bg-white/20 rounded-full flex items-center justify-center animate-slide-up backdrop-blur-sm border-4 border-white/30">
                                <span className="text-5xl lg:text-6xl font-bold text-white">VG</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-3 text-center" style={{fontFamily: 'Poppins, sans-serif'}}>
                            Sobre Mim
                        </h2>
                        <p className="text-base md:text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-2 text-center">
                            Desenvolvedora Full Stack entusiasmada por tecnologia, com experiência tanto em frontend quanto backend, além de desenvolvimento de aplicativos mobile e softwares. Meu foco está sempre na qualidade do código e na experiência do usuário final.
                        </p>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                        <div className="flex-1 w-full lg:w-1/2 flex flex-col items-center">
                            <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-6 text-center" style={{fontFamily: 'Poppins, sans-serif'}}>
                                Minha Jornada
                            </h3>
                            <p className="text-base md:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-center">
                                Comecei minha jornada na programação com o objetivo de automatizar modelagens 3D, buscando integrar programação com softwares como Inventor e Rhinoceros. 
                                Ao longo dos anos, desenvolvi expertise em tecnologias modernas de desenvolvimento web, sempre buscando aprender e me adaptar às novas tendências do mercado.
                            </p>
                        </div>
                                                
                        {/* Lado direito - Formação */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center">
                            <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-6 text-center" style={{fontFamily: 'Poppins, sans-serif'}}>
                                Formação
                            </h3>
                            <div className="flex flex-col lg:flex-row gap-6 w-full justify-center items-center">
                                {/* Botões na esquerda */}
                                <div className="flex flex-col gap-4 w-full lg:w-auto">
                                    <button 
                                        onClick={() => setSelectedEducationType('superior')}
                                        className={`w-full px-6 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                                            selectedEducationType === 'superior'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                                        }`}
                                    >
                                        Superior
                                    </button>
                                    
                                    <button 
                                        onClick={() => setSelectedEducationType('tecnico')}
                                        className={`w-full px-6 py-3 rounded-lg transition-all duration-200 whitespace-nowrap ${
                                            selectedEducationType === 'tecnico'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                                        }`}
                                    >
                                        Técnico
                                    </button>
                                </div>

                                {/* Conteúdo na direita */}
                                <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-blue-600">
                                    {selectedEducationType === 'superior' && (
                                        <div className="fade-in">
                                            <h4 className="text-lg text-gray-900 dark:text-white mb-2">
                                                Análise e Desenvolvimento de Sistemas
                                            </h4>
                                            <p className="text-base md:text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                Formação focada em desenvolvimento de software, programação e análise de sistemas.
                                            </p>
                                        </div>
                                    )}
                                    
                                    {selectedEducationType === 'tecnico' && (
                                        <div className="fade-in">
                                            <h4 className="text-lg text-gray-900 dark:text-white mb-2">
                                                Técnico em Eletromecânica
                                            </h4>
                                            <p className="text-base md:text-sm text-gray-600 dark:text-gray-400 text-center mt-1">
                                                Formação em sistemas elétricos, mecânicos e automação industrial.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                            Habilidades
                        </h2>

                    </div>

                    {/* Skills Grid */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-x-1 gap-y-8 w-full max-w-6xl place-items-center">
                            {/* JavaScript */}
                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 animate-float group-hover:animate-pulse">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="JavaScript" className="w-12 h-12" style={{filter: 'brightness(0) saturate(100%) invert(29%) sepia(99%) saturate(1769%) hue-rotate(215deg) brightness(93%) contrast(101%)'}} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JavaScript</span>
                            </div>

                            {/* TypeScript */}
                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 animate-float group-hover:animate-pulse">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" alt="TypeScript" className="w-12 h-12" style={{filter: 'brightness(0) saturate(100%) invert(29%) sepia(99%) saturate(1769%) hue-rotate(215deg) brightness(93%) contrast(101%)'}} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">TypeScript</span>
                            </div>

                            {/* Node.js */}
                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 animate-float group-hover:animate-pulse">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" alt="Node.js" className="w-12 h-12" style={{filter: 'brightness(0) saturate(100%) invert(29%) sepia(99%) saturate(1769%) hue-rotate(215deg) brightness(93%) contrast(101%)'}} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Node.js</span>
                            </div>

                            {/* HTML5 */}
                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 animate-float group-hover:animate-pulse">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" alt="HTML5" className="w-12 h-12" style={{filter: 'brightness(0) saturate(100%) invert(29%) sepia(99%) saturate(1769%) hue-rotate(215deg) brightness(93%) contrast(101%)'}} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">HTML5</span>
                            </div>

                            {/* CSS3 */}
                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 animate-float group-hover:animate-pulse">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" alt="CSS3" className="w-12 h-12" style={{filter: 'brightness(0) saturate(100%) invert(29%) sepia(99%) saturate(1769%) hue-rotate(215deg) brightness(93%) contrast(101%)'}} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CSS3</span>
                            </div>

                            {/* Python */}
                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 animate-float group-hover:animate-pulse">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" alt="Python" className="w-12 h-12" style={{filter: 'brightness(0) saturate(100%) invert(29%) sepia(99%) saturate(1769%) hue-rotate(215deg) brightness(93%) contrast(101%)'}} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Python</span>
                            </div>

                            {/* Dart */}
                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 animate-float group-hover:animate-pulse">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-plain.svg" alt="Dart" className="w-12 h-12" style={{filter: 'brightness(0) saturate(100%) invert(29%) sepia(99%) saturate(1769%) hue-rotate(215deg) brightness(93%) contrast(101%)'}} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dart</span>
                            </div>

                            {/* Flutter */}
                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 animate-float group-hover:animate-pulse">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg" alt="Flutter" className="w-12 h-12" style={{filter: 'brightness(0) saturate(100%) invert(29%) sepia(99%) saturate(1769%) hue-rotate(215deg) brightness(93%) contrast(101%)'}} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Flutter</span>
                            </div>

                            {/* Java */}
                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 animate-float group-hover:animate-pulse">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" alt="Java" className="w-12 h-12" style={{filter: 'brightness(0) saturate(100%) invert(29%) sepia(99%) saturate(1769%) hue-rotate(215deg) brightness(93%) contrast(101%)'}} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Java</span>
                            </div>

                            {/* PostgreSQL */}
                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 animate-float group-hover:animate-pulse">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" alt="PostgreSQL" className="w-12 h-12" style={{filter: 'brightness(0) saturate(100%) invert(29%) sepia(99%) saturate(1769%) hue-rotate(215deg) brightness(93%) contrast(101%)'}} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificates Section */}
            <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                           Certificados
                        </h2>
                    </div>

                    {/* Certificates Carousel with Navigation */}
                    <div className="relative">
                        {/* Left Arrow */}
                        <button 
                            onClick={prevCertificates}
                            className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={currentCertificateIndex === 0}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Right Arrow */}
                        <button 
                            onClick={nextCertificates}
                            className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={currentCertificateIndex >= certificates.length - 3}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Certificates Grid */}
                        <div className="mx-4 md:mx-24">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {(window.innerWidth < 768 ? visibleCertificates.slice(0, 1) : visibleCertificates).map((certificate, index) => (
                                    <div 
                                        key={certificate.id} 
                                        onClick={() => handleCertificateClick(certificate)}
                                        className={`group flex flex-col items-center text-center p-5 ${window.innerWidth < 768 ? '' : 'bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-blue-400'} transition-all duration-300 cursor-pointer`} 
                                        style={window.innerWidth < 768 ? {boxShadow: 'none', border: 'none', background: 'none', padding: 0} : { animation: `fadeInSlide 0.5s ease-out ${index * 0.1}s both` }}
                                    >
                                        <div className="aspect-[4/3] overflow-hidden relative flex items-center justify-center mb-3 w-full" style={{minHeight: '200px', maxHeight: '200px'}}>
                                            <img 
                                                src={certificate.image}
                                                alt={`Certificado ${certificate.title}`}
                                                className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                                                loading="eager"
                                                style={{width: '100%', height: '100%', margin: 0}}
                                            />
                                        </div>
                                        <h3 className="text-xl text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-center" style={{fontFamily: 'Poppins, sans-serif'}}>
                                            {certificate.title}
                                        </h3>
                                        <span className="inline-block bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-0.5 rounded mb-0 mt-1">
                                            Maxiox
                                        </span>
                                        {/* Indicador de hover só em telas maiores */}
                                        {window.innerWidth >= 768 && (
                                            <div className="mt-1 flex items-center justify-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <span className="text-xs font-medium mr-1">Clique para ampliar</span>
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: certificates.length - 2 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentCertificateIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                        currentCertificateIndex === index
                                            ? 'bg-blue-600 scale-125'
                                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                            Meus Projetos
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                            Conheça alguns dos projetos que desenvolvi, demonstrando minhas habilidades técnicas e criatividade.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((item, index) => (
                            <div 
                                key={item.id}
                                className="animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <ServiceCard
                                    service={item}
                                    onLearnMore={handleLearnMore}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                        Vamos Trabalhar Juntos?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                        Estou sempre aberta a novas oportunidades e projetos interessantes. 
                        Entre em contato e vamos conversar!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                        <a 
                            href={`mailto:${portfolioData.personalInfo.email}`}
                            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200 transform hover:scale-105"
                        >
                            <span>📧</span>
                            Enviar Email
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/vitoria-gabriele-s-figueiredo-860bba296"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200"
                        >
                            <span>💼</span>
                            LinkedIn
                        </a>
                        <a 
                            href="https://github.com/vgabrielesf/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200"
                        >
                            <span>🐙</span>
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            {isCertificateModalOpen && selectedCertificate && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fadeIn"
                    onClick={closeCertificateModal}
                >
                    <div 
                        className="relative max-w-4xl max-h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden transform animate-slideUp shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeCertificateModal}
                            className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        {/* Certificate Image */}
                        <div className="relative">
                            <img 
                                src={selectedCertificate.image} 
                                alt={`Certificado ${selectedCertificate.title}`}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                        </div>
                        
                        {/* Certificate Info */}
                        <div className="p-6 bg-white dark:bg-gray-800">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {selectedCertificate.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {selectedCertificate.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal */}
            <Modal 
                isOpen={isModalOpen}
                onClose={closeModal}
                service={selectedItem}
            />

            <Footer />
        </div>
    );
};

export default Home;