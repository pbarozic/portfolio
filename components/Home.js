import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Footer from './Footer';

import Experience from './Experiences';
import '@fontsource/poppins';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


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
    <div className="w-screen font-source-sans-3">
      <nav className="bg-teal-900 fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="ml-4">
              <Link
                to="about"
                className={`text-xl font-semibold hover:bg-teal-800 text-white px-3 py-2 cursor-pointer rounded-md ${activeSection === 'about' ? 'active-link font-bold text-white' : ''}`}
                spy={true}
                duration={100}
                onSetActive={() => setActiveSection('about')}
              >
               Pierre-Baptiste Rozic
                </Link>
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
                offset={-50}
                onSetActive={() => setActiveSection('experience')}
              >
                Expérience
              </Link>
              <Link
                to="projects"
                className={`text-gray-300 hover:bg-teal-800 px-3 py-2 cursor-pointer rounded-md ${activeSection === 'projects' ? 'active-link font-bold text-white' : ''}`}
                spy={true}
                duration={100}
                offset={-50}

                onSetActive={() => setActiveSection('projects')}
              >
                Projets
              </Link>
            </div>
            <div className="flex">
              <div className="flex">
                <a href="https://github.com/pbarozic" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-300 hover:text-teal-800 mr-5" size={32} />
                </a>

                <a href="https://www.linkedin.com/in/pierre-baptiste-rozic-6098ab90" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-300 hover:text-teal-800" size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="min-h-screen  overflow-x-hidden w-screen pt-16">
        <section id="about" className="w-screen min-h-screen 
bg-teal-50	
         flex sm:flex-col flex-col items-center">
          {/* bg-gradient-to-b from-teal-200 to-amber-100 */}
          <div className="w-screen lg:h-9/12 flex lg:flex-row flex-col justify-center">
            <div className="lg:w-2/5 sm:w-full lg:h-full flex flex-col lg:items-end md:items-start items-center justify-start lg:px-20 lg:pt-20 lg:pb-10 pt-10">
              <div className="rounded-t-full overflow-hidden w-72 h-72 border-teal-900 border-2">
                <Image src="/images/profile-pic.jpeg" alt="Photo profil" width="400" height="400" />

              </div>
              <div className="w-72 h-12 bg-teal-900 flex flex-col items-start justify-around pl-2">
                <div className="flex" >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-teal-100 h-6 w-6" />
                  <h1 className="text-base font-semibold text-teal-100 ml-5" >
                    Paris, France
                  </h1>
                </div>


              
              </div>
              <div className="w-72 h-12 border-teal-900 border-2 flex flex-col items-start justify-around pl-2">

              <div className="flex" >
                  <FontAwesomeIcon icon={faEnvelope} className="text-teal-900 h-6 w-6" />

                  <a href="mailto:pierrebaptiste.rozic@gmail.com" className="tracking-tight	text-base font-semibold hover:text-teal-700 text-teal-900 ml-5">
                    pierrebaptiste.rozic@gmail.com
                  </a>
                </div>
                </div>
            </div>
            <div className="lg:w-3/5 w-full lg:pt-20 pt-10 lg:px-20 px-5 h-full flex flex-col justify-start">
              <h1 className="text-4xl lg:text-5xl font-semibold text-teal-900	" >
                Pierre-Baptiste Rozic
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-orange-400 mt-5" >
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
              <div className="flex lg:justify-start justify-center">
                <a
                  href="https://drive.google.com/file/d/1InoDEZ8luldFn2yOM4p6l7dXLX_BVywg/view?usp=sharing"
                  target="_blank"
                  className="bg-orange-400 hover:bg-orange-500 w-1/4 justify-self-center text-white font-bold mt-5 py-2 px-4 rounded-full mr-2 text-center lg:text-base text-sm mb-2"
                >
                  Mon CV
                </a>
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col items-center pb-20 mt-5" >
            <h1 className="text-3xl lg:text-4xl font-semibold text-teal-900 mb-5 lg:mt-0" >
              Mes compétences
            </h1>
            <div className="flex w-full flex-col lg:flex-row lg:justify-start justify-around">
              <div className="flex flex-col lg:w-1/3 lg:px-5 items-center">
                <h2 className="text-2xl lg:text-3xl font-semibold text-orange-400 mb-5" >
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
                <h2 className="text-2xl lg:text-3xl  font-semibold text-orange-400 mb-5" >
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
                <h2 className="text-2xl lg:text-3xl  font-semibold text-orange-400  mb-5" >
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
        <section id="experience" className="pt-10 w-screen min-h-screen flex flex-col lg:flex-row lg:items-start justify-center pb-3">
          <div className="lg:w-5/12 w-full h-full flex flex-col items-center">
          <div className="flex flex-col items-center mb-5">
            <h2 className="text-3xl font-semibold text-teal-900" >
              FORMATION
            </h2>
            <hr className="w-1/2 bg-orange-400 h-2 mt-2" />
            </div>

            <ul className="space-y-4 pl-4 border-l-2 flex flex-col items-start border-gray-500 lg:ml-0 ml-4">
              <li className="flex justify-start w-full">
                <span className="w-7 h-7 bg-gray-500 rounded-full mt-1 ml-[-1.9rem]"></span>
                <Experience date="Mars 2023 -  Juin 2023"
                  job="Bootcamp Développeur Fullstack"
                  company="La Capsule"
                  intro="Coding Bootcamp de 10 semaines - Développeur web et mobile Fullstack JavaScript"
                  description={[
                    "Conception et prototypage d’applications web et mobile",
                    "Programmation Backend et Frontend",
                    "Base de données : MongoDB",
                    "Workflow : Git / Github"
                  ]}
                  skills={['React', 'React Native', 'HTML 5', 'CSS', 'Node.js', 'Express', 'Redux', 'MongoDB', 'Github']}
                />
              </li>
              <li className="flex items-start">
                <span className="w-7 h-7 bg-gray-500 rounded-full mt-1 ml-[-1.9rem]"></span>
                <Experience
                  date="Sept 2013 -  Fév 2018"
                  job="Master 2 en Management"
                  company="Toulouse Business School"
                  intro="Programme grande école - Spécialisation Management international"
                  description={[
                    "Activités et associations:  Welcome Team - Association en charge de l'accueil des étudiants étrangers à TBS.",
                    "Semestre à l'étranger : Arizona State University à Phoenix, USA",

                  ]}

                />
              </li>
            </ul>

          </div>
          <div className="lg:w-5/12 h-full flex flex-col items-center">
          <div className="flex flex-col items-center mb-5">
            <h2 className="text-3xl font-semibold text-teal-900" >
              EXPÉRIENCES
            </h2>
            <hr className="w-1/2 bg-orange-400 h-2 mt-2" />
            </div>

            <ul className="space-y-4 pl-4 border-l-2 flex flex-col items-start border-gray-500 lg:ml-0 ml-4">
              <li className="flex justify-start">
                <span className="w-7 h-7 bg-gray-500 rounded-full mt-1 ml-[-1.9rem]"></span>
                <Experience
                  date="Juil 2021 - Juil 2022"
                  job="Data Analyst"
                  company="Effilab"
                  description={[
                    "Développement de scripts Python pour répondre à des problématiques Business.",
                    "Création d'un algorithme de gestion des dépenses publicitaires sur Google Ads.",
                    "Automatisation de process opérationnels via des scripts Python.",
                    "Création de dashboards via requêtes SQL (PostgreSQL, Metabase)"
                  ]}
                  skills={['Python', 'NumPy', 'Pandas', 'postgreSQL', 'Metabase', 'SQLAlchemy']}
                />
              </li>
              <li className="flex items-start">
                <span className="w-7 h-7 bg-gray-500 rounded-full mt-1 ml-[-1.9rem]"></span>
                <Experience
                  date="Juin 2019 - Juillet 2021"
                  job="Business Analyst SEA"
                  company="Effilab"
                  description={[
                    "Génération de leads qualifiés via des campagnes d'acquisition sur les réseaux de recherche (Google Ads, Bing Ads) pour un portefeuille de 1500 clients PMEs-TPEs, et pour le site Ootravaux.fr.",
                    "Création de dashboards via requêtes SQL (PostgreSQL, Metabase) de suivi de la performance. Analyse et optimisation des campagnes d'acquisition.",
                    "Fort investissement dans le recrutement et la formation initiale et continue des différentes équipes, rédaction de supports internes de partage de connaissances."
                  ]}
                  skills={['postgreSQL', 'Metabase', 'SEA']}
                />
              </li>
            </ul>

          </div>


        </section> 
        <section id="projects" className="w-full min-h-screen lg:h-72 bg-teal-50 flex flex-col items-center">
        <div className="flex flex-col items-center mb-5">
        <h1 className="text-4xl lg:text-3xl font-semibold text-teal-900  mt-5 lg:mt-0 pt-5" >
           PROJETS
          </h1>
          <hr className="w-1/2 bg-orange-400 h-2 mt-2" />

          </div>
          <div className="group lg:h-4/6 h-full w-5/6 flex lg:flex-row flex-col bg-teal-900 rounded-2xl hover:bg-teal-800 mb-5 py-3">
            <div className="lg:w-1/2 h-full flex flex-col justify-start items-center">
              <div className="overflow-hidden">

                <Image src="/images/logo.png"
                  alt="Photo profil"
                  objectFit="contain"
                  width={150}
                  height={150}
                />
              </div>

              <p className="text-base  lg:w-10/12  font-medium text-justify text-white mb-3 lg:px-0 px-4">
                Application Mobile permettant d'organiser des sessions de Basket sur des terrains publics partout en France.
                Ce projet a été développé dans le cadre de ma formation à La Capsule (Bootcamp de 3 mois), en collaboration avec 3 autres développeurs afin de livrer un Minimum Viable Product (MVP) en 10 jours.
              </p>
              <div className="w-5/6 justify-start items-center">
                <div className="flex items-center">
              <p className="mr-5 text-white font-bold text-xl">
                Backend:
              </p>
              <a href="https://github.com/michaelrasolo/backend-gametime" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-300 hover:text-white mr-5" size={24} />
                </a>
                </div>
              <div className="flex">
              <p className="bg-orange-400 hover:bg-amber-300 text-white font-bold h-6 py-2 px-4 rounded-full mr-2 flex flex-col justify-center text-center text-xs my-2">
                Node.js                            </p>
              <p className="bg-orange-400 hover:bg-amber-300 text-white font-bold h-6 py-2 px-4 rounded-full mr-2 flex flex-col justify-center text-center text-xs my-2">
                Express                          </p>
              <p className="bg-orange-400 hover:bg-amber-300 text-white font-bold h-6 py-2 px-4 rounded-full mr-2 flex flex-col justify-center text-center text-xs my-2">
                MongoDB                         </p>
             
                </div>
                </div>
                <div className="w-5/6 justify-start items-center">
                <div className="flex items-center">

                <p className="mr-5 text-white font-bold text-xl">
                Frontend:
              </p>
              <a href="https://github.com/michaelrasolo/gametime-front" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-300 hover:text-white mr-5" size={24} />
                </a>
              </div>
              <div className="flex">

              <p className="bg-orange-400 hover:bg-amber-300 text-white font-bold h-6 py-2 px-4 rounded-full mr-2 flex flex-col justify-center text-center text-xs my-2">
                React Native                            </p>
              <p className="bg-orange-400 hover:bg-amber-300 text-white font-bold h-6 py-2 px-4 rounded-full mr-2 flex flex-col justify-center text-center text-xs my-2">
                Expo                         </p>
              <p className="bg-orange-400 hover:bg-amber-300 text-white font-bold h-6 py-2 px-4 rounded-full mr-2 flex flex-col justify-center text-center text-xs my-2">
                Redux                        </p>
       
                </div>

                </div>

            </div>
            <div className="lg:w-1/2 h-full flex flex-col pb-3 items-center">
              <div className="flex">
                <Image src="/images/screen search.png"
                  alt="screen appli search"
                  objectFit="contain"

                  width={900}
                  height={1800}
                />

                <Image src="/images/screen map.png"
                  alt="screen appli map"
                  objectFit="contain"

                  width={900}
                  height={1800}
                />

                <Image src="/images/screen chat.png"
                  alt="screen appli chat"
                  objectFit="contain"

                  width={900}
                  height={1800}
                />
              </div>
              <div>
                <a
                  href="https://drive.google.com/file/d/1LtxMaIspYyy1IxkUKa4b7Xka9DObgOIy/view?usp=sharing"
                  target="_blank"
                  className="bg-orange-400 hover:bg-amber-600 w-1/4 justify-self-center text-white font-bold mt-5 py-2 px-4 rounded-full mr-2 text-center lg:text-base text-sm mb-2"
                >
                  Voir la démo
                </a>
              </div>

            </div>

          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
