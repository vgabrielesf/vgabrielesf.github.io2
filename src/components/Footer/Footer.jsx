import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/vitoria-gabriele-s-figueiredo-860bba296',
            color: 'hover:text-blue-400'
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/vgabrielesf/',
            color: 'hover:text-gray-400'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            url: 'mailto:vitoria@exemplo.com',
            color: 'hover:text-green-400'
        }
    ];

    return (
        <footer className="bg-gray-900 dark:bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Personal Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-blue-400">Vitória Gabriele</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Desenvolvedora Full Stack apaixonada por criar soluções digitais 
                            inovadoras e experiências de usuário excepcionais.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                    Portfólio
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Conecte-se Comigo</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 bg-gray-800 rounded-lg ${social.color} transition-all duration-200 transform hover:scale-110`}
                                        aria-label={social.name}
                                    >
                                        <IconComponent size={20} />
                                    </a>
                                );
                            })}
                        </div>
                        
                        {/* Contact Info */}
                        <div className="text-gray-300 text-sm space-y-1">
                            <p>📧 contato@techcorp.com</p>
                            <p>📱 (11) 99999-9999</p>
                            <p>📍 São Paulo, SP - Brasil</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} TechCorp. Todos os direitos reservados.
                    </p>
                    <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
                        Feito com <FaHeart className="text-red-500 mx-1" size={12} /> em React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;