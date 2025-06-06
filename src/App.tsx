import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Smartphone, 
  Tv, 
  Monitor, 
  Shield, 
  CreditCard, 
  Headphones, 
  Server,
  Check,
  Play,
  Users,
  Film,
  Zap,
  Star,
  ArrowRight,
  Download,
  Globe,
  Clock,
  Crown,
  Sparkles,
  Eye
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://web.whatsapp.com/send/?phone=+5513991828682&text=%2AVim+pelo+site%2C+quero+fazer+um+teste+gr%C3%A1tis.+%2A', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-lg shadow-2xl border-b border-emerald-500/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <Eye className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                CrocFlix
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-emerald-400 transition-all duration-300 font-medium">
                Início
              </a>
              <a href="#features" className="text-white hover:text-emerald-400 transition-all duration-300 font-medium">
                Recursos
              </a>
              <a href="#plans" className="text-white hover:text-emerald-400 transition-all duration-300 font-medium">
                Planos
              </a>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Teste Grátis
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-700/50">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#home" className="text-white hover:text-emerald-400 transition-colors font-medium">
                  Início
                </a>
                <a href="#features" className="text-white hover:text-emerald-400 transition-colors font-medium">
                  Recursos
                </a>
                <a href="#plans" className="text-white hover:text-emerald-400 transition-colors font-medium">
                  Planos
                </a>
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold w-full"
                >
                  Teste Grátis
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 via-slate-900/30 to-green-900/50"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-6">
                <Sparkles className="text-emerald-400 mr-2" size={20} />
                <span className="text-emerald-200 font-medium">Assista seus programas favoritos sem travamento</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
                A <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">MELHOR</span> DO BRASIL
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300">+ DE 85 MIL CONTEÚDOS!</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                CANAIS, FILMES E SÉRIES EM <span className="text-emerald-400 font-semibold">HD, FULL HD E 4K</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  onClick={handleWhatsAppClick}
                  className="group bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 flex items-center justify-center"
                >
                  QUERO ACESSAR O CROCFLIX
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="border-2 border-white/30 hover:border-emerald-400 text-white hover:text-emerald-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                  Ver Demonstração
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">85K+</div>
                  <div className="text-sm text-gray-400">Conteúdos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">4K</div>
                  <div className="text-sm text-gray-400">Qualidade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-gray-400">Suporte</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Mockup */}
                <div className="relative z-10 w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl transform rotate-6 hover:rotate-3 transition-all duration-500">
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                    {/* Screen Content */}
                    <div className="h-full bg-gradient-to-b from-gray-900 to-black p-4">
                      <div className="grid grid-cols-2 gap-2 h-full">
                        <div className="bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-lg backdrop-blur-sm border border-emerald-500/20"></div>
                        <div className="bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-lg backdrop-blur-sm border border-yellow-500/20"></div>
                        <div className="bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-lg backdrop-blur-sm border border-green-500/20"></div>
                        <div className="bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-lg backdrop-blur-sm border border-teal-500/20"></div>
                      </div>
                    </div>
                    
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-4 shadow-lg animate-bounce">
                  <Play className="text-white" size={24} />
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3 shadow-lg animate-pulse">
                  <Download className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Watch Anywhere Section */}
      <section id="features" className="py-20 bg-gradient-to-r from-slate-900/50 to-emerald-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Floating Cards */}
              <div className="relative z-10 space-y-6">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                      <Tv className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Smart TV</h3>
                      <p className="text-gray-400">Assista na sua TV</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300 ml-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3">
                      <Smartphone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Mobile</h3>
                      <p className="text-gray-400">No seu celular</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full p-3">
                      <Monitor className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Desktop</h3>
                      <p className="text-gray-400">No computador</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">ASSISTA</span>
                  <br />
                  ONDE QUISER
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  O CrocFlix oferece um aplicativo de streaming exclusivo para você. 
                  Baixe também e assista tudo o que quiser onde quiser!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-emerald-400 font-bold text-xl mb-2">+85 MIL CONTEÚDOS</h3>
                    <p className="text-gray-400 leading-relaxed">Os melhores filmes e séries estão na tela que você desejar.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Film className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-yellow-400 font-bold text-xl mb-2">CANAIS DE TODOS OS GÊNEROS</h3>
                    <p className="text-gray-400 leading-relaxed">Acesse seus canais favoritos de todos os gêneros, tudo em HD, Full HD e 4K.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-teal-400 font-bold text-xl mb-2">CONTEÚDOS FILMES E SÉRIES</h3>
                    <p className="text-gray-400 leading-relaxed">Desfrute todos os filmes, séries e documentários sem travamentos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CrocFlix HD Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-900/30 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-emerald-400 mb-4 font-semibold text-lg tracking-wide uppercase">
              A MELHOR QUALIDADE DO MERCADO
            </p>
            <h2 className="text-5xl md:text-6xl font-black">
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">CrocFlix</span> HD
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl text-center shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-4 border border-gray-700/30">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-emerald-400 font-bold text-xl mb-4">PROTEÇÃO</h3>
              <p className="text-gray-400 leading-relaxed">
                Estamos sempre atentos às necessidades dos clientes com proteção automática de dados.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl text-center shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 transform hover:-translate-y-4 border border-gray-700/30">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <CreditCard className="text-white" size={32} />
              </div>
              <h3 className="text-yellow-400 font-bold text-xl mb-4">PAGAMENTO</h3>
              <p className="text-gray-400 leading-relaxed">
                Segurança no pagamento em até 12x nos cartões e através de PIX. Aceita cartão de todos os bancos.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl text-center shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 transform hover:-translate-y-4 border border-gray-700/30">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Headphones className="text-white" size={32} />
              </div>
              <h3 className="text-teal-400 font-bold text-xl mb-4">SUPORTE TÉCNICO</h3>
              <p className="text-gray-400 leading-relaxed">
                Suporte através do Telegram, totalmente profissional em texto via app.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-8 rounded-3xl text-center shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:-translate-y-4 border border-gray-700/30">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Server className="text-white" size={32} />
              </div>
              <h3 className="text-green-400 font-bold text-xl mb-4">SERVIDORES</h3>
              <p className="text-gray-400 leading-relaxed">
                Nós possuímos os melhores servidores para não criar problemas através do app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900/50 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              CONHEÇA OS <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">NOSSOS PLANOS</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              Fique bem à vontade para escolher, temos uma boa funcionalidade de tempo para você se atualizar e descobrir mais coisas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Monthly Plan */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-700/50 group">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full px-4 py-2 inline-block mb-4">
                  <span className="text-emerald-400 font-semibold">Plano Mensal</span>
                </div>
                <div className="text-5xl font-black text-white mb-2">R$29,99</div>
                <div className="text-gray-400">por mês</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Teste Grátis Antes de Pagar</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">1 Tela</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Qualidade HD/FHD/4K</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Canais / Filmes / Séries</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">VOD Completo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Suporte 24/7</span>
                </li>
              </ul>
              
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white py-4 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg"
              >
                SOLICITAR SEU TESTE
              </button>
            </div>

            {/* Quarterly Plan - Featured */}
            <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 transform hover:-translate-y-2 border-2 border-emerald-500/50 relative group scale-105">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg flex items-center">
                  <Crown className="mr-2" size={16} />
                  MAIS POPULAR
                </div>
              </div>
              
              <div className="text-center mb-8 pt-4">
                <div className="bg-gradient-to-r from-emerald-400/30 to-green-400/30 rounded-full px-4 py-2 inline-block mb-4">
                  <span className="text-emerald-300 font-semibold">Plano Trimestral</span>
                </div>
                <div className="text-5xl font-black text-white mb-2">R$79,99</div>
                <div className="text-emerald-200">3 meses</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-300 flex-shrink-0" size={20} />
                  <span className="text-white">Teste Grátis Antes de Pagar</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-300 flex-shrink-0" size={20} />
                  <span className="text-white font-semibold">2 Telas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-300 flex-shrink-0" size={20} />
                  <span className="text-white">Qualidade HD/FHD/4K</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-300 flex-shrink-0" size={20} />
                  <span className="text-white">Canais / Filmes / Séries</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-300 flex-shrink-0" size={20} />
                  <span className="text-white">VOD Completo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-emerald-300 flex-shrink-0" size={20} />
                  <span className="text-white">Suporte Prioritário</span>
                </li>
              </ul>
              
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-white hover:bg-gray-100 text-emerald-600 py-4 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg"
              >
                SOLICITAR SEU TESTE
              </button>
            </div>

            {/* Semi-annual Plan */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-700/50 group">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full px-4 py-2 inline-block mb-4">
                  <span className="text-teal-400 font-semibold">Plano Semestral</span>
                </div>
                <div className="text-5xl font-black text-white mb-2">R$189,99</div>
                <div className="text-gray-400">6 meses</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="text-teal-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Teste Grátis Antes de Pagar</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-teal-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">1 Tela</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-teal-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Qualidade HD/FHD/4K</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-teal-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Canais / Filmes / Séries</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-teal-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">VOD Completo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="text-teal-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Suporte 24/7</span>
                </li>
              </ul>
              
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-4 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg"
              >
                SOLICITAR SEU TESTE
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto border border-gray-700/30">
              <h3 className="text-3xl font-bold mb-4">
                Não tem certeza? <span className="text-emerald-400">Teste grátis por 7 dias!</span>
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Experimente todos os recursos do CrocFlix sem compromisso. Cancele quando quiser.
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                COMEÇAR TESTE GRÁTIS NO CROCFLIX
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
                  <Eye className="text-white" size={20} />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  CrocFlix
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A melhor plataforma de streaming do Brasil com mais de 85 mil conteúdos em HD, Full HD e 4K.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                  <Globe className="text-white" size={20} />
                </div>
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-3">
                  <Clock className="text-white" size={20} />
                </div>
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full p-3">
                  <Shield className="text-white" size={20} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Início</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Recursos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Planos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Suporte</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Cookies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">LGPD</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              © 2024 CrocFlix. Todos os direitos reservados. Desenvolvido com ❤️ no Brasil.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;