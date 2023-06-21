import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Experience from './Experiences';
import '@fontsource/poppins';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const { id } = section;

        if (section.offsetTop <= scrollPosition + 200) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-poppins w-screen">
      <nav className="bg-teal-900 fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="ml-4">
                <h1 className="text-xl font-semibold text-white">Pierre-Baptiste Rozic</h1>
              </div>
            </div>
            <div className="hidden sm:flex">
              <Link
                to="about"
                className={`text-gray-300 hover:bg-teal-800 px-3 py-2 cursor-pointer rounded-md ${activeSection === 'about' ? 'active-link font-bold text-white' : ''}`}
                spy={true}
                duration={100}
                onSetActive={() => setActiveSection('about')}
              >
                À Propos
              </Link>
              <Link
                to="experience"
                className={`text-gray-300 hover:bg-teal-800 px-3 py-2 cursor-pointer rounded-md ${activeSection === 'experience' ? 'active-link font-bold text-white' : ''}`}
                spy={true}
                duration={100}
                onSetActive={() => setActiveSection('experience')}
              >
                Expérience
              </Link>
              <Link
                to="projects"
                className={`text-gray-300 hover:bg-teal-800 px-3 py-2 cursor-pointer rounded-md ${activeSection === 'projects' ? 'active-link font-bold text-white' : ''}`}
                spy={true}
                duration={100}
                onSetActive={() => setActiveSection('projects')}
              >
                Projets
              </Link>
            </div>
            <div className="flex">
              <a href="#about" className="text-gray-300 hover:bg-teal-800 px-3 py-2 rounded-md text-sm font-medium">FR</a>
              <a href="#experience" className="text-gray-300 hover:bg-teal-800 px-3 py-2 rounded-md text-sm font-medium">EN</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="min-h-screen  overflow-x-hidden w-screen pt-16">
        <section id="about" className="w-screen min-h-screen bg-gradient-to-b from-lime-200 to-amber-200 flex sm:flex-col flex-col items-center">
          <div className="w-screen lg:h-9/12 flex lg:flex-row flex-col justify-center">
            <div className="lg:w-2/5 sm:w-full lg:h-full flex flex-col lg:items-end md:items-start items-center justify-start lg:p-20 pt-10">
              <div className="rounded-t-full overflow-hidden w-72 h-72">
                <Image src="/images/profile-pic.jpeg" alt="Photo profil" width="400" height="400" />

              </div>
              <div className="w-72 h-16 bg-teal-900 flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lime-200 h-8 w-8" />
                <h1 className="text-xl font-semibold text-lime-200 ml-5" >
                  Paris, France
                </h1>
              </div>

            </div>
            <div className="lg:w-3/5 w-full pt-20 lg:px-20 px-5 h-full flex flex-col justify-start">
              <h1 className="text-4xl lg:text-5xl font-semibold text-teal-900	" >
                Pierre-Baptiste Rozic
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-amber-500 mt-5" >
                Développeur Fullstack Junior
              </h2>
              <p className="text-1xl lg:w-10/12 font-medium text-justify mt-10 text-teal-900 mb-3">
                Après une expérience très enrichissante en tant que Data Analyst, où j'ai pu découvrir le milieu de la Tech et du code (Python, SQL), j'ai décidé de me réorienter vers le développement Web.
              </p>
              <p className="text-1xl  lg:w-10/12  font-medium text-justify text-teal-900 mb-3">
                Récemment reconverti grâce à un bootcamp intensif de 3 mois, je suis maintenant à la recherche de nouvelles opportunités stimulantes en tant que développeur.
              </p>
              <p className="text-1xl  lg:w-10/12  font-medium text-justify text-teal-900">
                Avec ma solide base en analyse de données et ma maîtrise des langages de programmation (Node.js, React.js), je suis prêt à relever de nouveaux défis en mettant mes compétences au service de projets passionnants.
              </p>

            </div>
          </div>

          <div className="w-full flex flex-col items-center pb-20" >
            <h1 className="text-4xl lg:text-5xl font-semibold text-teal-900 mb-5 mt-5 lg:mt-0" >
              Mes compétences
            </h1>
            <div className="flex w-full flex-col lg:flex-row items-center justify-around">
              <div className="flex flex-col lg:w-1/3 lg:px-5 items-center">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-500 mb-5" >
                  Backend
                </h2>
                <div className="flex lg:flex-wrap justify-center">
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center lg:text-base text-sm mb-2">
                    Node.js</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center lg:text-base text-sm mb-2">
                    Express</p>
                </div>
              </div>
              <div className="flex flex-col lg:w-1/3 lg:px-5 items-center">
                <h2 className="text-2xl lg:text-3xl  font-semibold text-amber-500 mb-5" >
                  Frontend
                </h2>
                <div className="flex flex-wrap justify-center">
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center lg:text-base text-sm mb-2">
                    React</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center lg:text-base text-sm  mb-2">
                    React Native</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center lg:text-base text-sm mb-2">
                    Redux</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center lg:text-base text-sm mb-2">
                    HTML5</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center lg:text-base text-sm mb-2">
                    CSS3</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center lg:text-base text-sm mb-2">
                    TAILWIND</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center lg:text-base text-sm mb-2">
                    TypeScript</p>
                </div>
              </div>
              <div className="flex flex-col lg:w-1/3 lg:px-5  items-center">
                <h2 className="text-2xl lg:text-3xl  font-semibold text-amber-500  mb-5" >
                  Data
                </h2>
                <div className="flex flex-wrap justify-center">
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center mb-2">
                    MongoDB</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center mb-2">
                    SQL</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center mb-2">
                    Metabase</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center mb-2">
                    Python</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center mb-2">
                    Pandas</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center mb-2">
                    NumPy</p>
                  <p className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-2 text-center mb-2">
                    SQLAlchemy</p>

                </div>
              </div>
            </div>
          </div>

        </section>
        <section id="experience" className="pt-10 w-full min-h-screen flex flex-col lg:flex-row lg:items-start justify-center">
          <div className="lg:w-1/2 h-full flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-teal-900 mb-5" >
              EDUCATION
            </h2>
          </div>
          <div className="lg:w-1/2 h-full flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-teal-900 mb-5" >
              EXPERIENCES
            </h2>
              <Experience date="Août  2021 -  Jui 2022"
               job="Data Analyst" 
               company="Effilab"
                description="Développement de scripts Python impactant l'ensemble du parc de clients pour répondre à des problématiques Business. Création d'un algorithme de gestion des dépenses publicitaires sur Google et Bing."  
               skills={['Python', 'NumPy', 'Panda','postgreSQL', 'Metabase', 'SQLAlchemy']}
                />
              <Experience date="Août  2021 -  Jui 2022"
               job="Business Analyst SEA" 
               company="Effilab"
                description="Développement de scripts Python impactant l'ensemble du parc de clients pour répondre à des problématiques Business. Création d'un algorithme de gestion des dépenses publicitaires sur Google et Bing."  
               skills={['postgreSQL', 'Metabase', 'SEA']}
                />          </div>


        </section>
        <section id="projects" className="w-full h-screen bg-gradient-to-b from-amber-200 to-lime-200 flex flex-col items-center">
          {/* Projects section content */}
        </section>
      </main>
    </div>
  );
}

export default Home;
