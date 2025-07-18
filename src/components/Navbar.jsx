import React from 'react';
import { motion } from 'framer-motion';
import { FileIcon, Folders, HomeIcon, SeparatorVertical } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { IoPerson } from 'react-icons/io5';
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import { PiXLogo } from 'react-icons/pi';
import { RiLinksLine } from 'react-icons/ri';
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="w-full py-6 flex justify-center fixed top-0 z-50">
      <div className="rounded-2xl w-[850px] max-lg:w-[800px] max-[400px]:w-[345px] max-[450px]:w-[400px] max-[350px]:w-[330px] max-[321px]:w-[310px] px-2 py-1 bg-white bg-opacity-10 backdrop-blur-lg border dark:border-white/20 flex items-center justify-center dark:shadow-none shadow">
        <div className="flex justify-center px-2 items-center max-sm:gap-4 gap-12 max-[400px]:gap-4 max-[450px]:gap-5 transition-all">

          {/* Home */}
          <Link to="/">

            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300"
              data-tooltip-id="home-tooltip"
              data-tooltip-content="Home">
              <Tooltip id="home-tooltip" style={{
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '10px',
                padding: '4px 8px',
                borderRadius: '6px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                zIndex: 9999,
              }} />
              <HomeIcon
                className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname === "/" ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}`}
              />

            </motion.div>

          </Link>


          {/* Projects */}
          <Link to="/projects">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300"
              data-tooltip-id="projects-tooltip"
              data-tooltip-content="Projects">
              <Tooltip id="projects-tooltip" style={{
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '10px',
                padding: '4px 8px',
                borderRadius: '6px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                zIndex: 9999,
              }} />
              <Folders className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname === "/projects" ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}`} />
            </motion.div>
          </Link>

          {/* About */}
          <Link to="/about">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300"
              data-tooltip-id="about-tooltip"
              data-tooltip-content="About">
              <Tooltip id="about-tooltip" style={{
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '10px',
                padding: '4px 8px',
                borderRadius: '6px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                zIndex: 9999,
              }} />
              <IoPerson
                className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname === "/about" ? "dark:!text-[#FFC83D] !text-[#cc9e2b]" : ""}`}
              />
            </motion.div>
          </Link>


         
          <a href="https://drive.google.com/file/d/16VAYIjaeAnD1UditSsEg-iK2q7RsY_06/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300" data-tooltip-id="resume-tooltip"
              data-tooltip-content="Resume">
              <Tooltip id="resume-tooltip" style={{
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '10px',
                padding: '4px 8px',
                borderRadius: '6px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                zIndex: 9999,
              }} />
              <FileIcon className="w-[19px] h-[19px] text-black" />
            </motion.div>
          </a>

          <a href="https://github.com/Prince1895" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300" data-tooltip-id="github-tooltip"
              data-tooltip-content="Github">
              <Tooltip id="github-tooltip" style={{
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '10px',
                padding: '4px 8px',
                borderRadius: '6px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                zIndex: 9999,
              }} />
              <RxGithubLogo className="w-[19px] h-[19px] text-black" />
            </motion.div>
          </a>

          <a href="https://x.com/Chauhan18Prince" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300" data-tooltip-id="x-tooltip"
              data-tooltip-content="X">
              <Tooltip id="x-tooltip" style={{
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '10px',
                padding: '4px 8px',
                borderRadius: '6px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                zIndex: 9999,
              }} />
              <PiXLogo className="w-[19px] h-[19px] text-black" />
            </motion.div>
          </a>

          <a href="https://linkedin.com/in/prince1184/" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300" data-tooltip-id="linkedin-tooltip"
              data-tooltip-content="LinkedIn">
              <Tooltip id="linkedin-tooltip" style={{
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '10px',
                padding: '4px 8px',
                borderRadius: '6px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                zIndex: 9999,
              }} />
              <RxLinkedinLogo className="w-[19px] h-[19px] text-black" />
            </motion.div>
          </a>

          <a href="https://linktr.ee/prince1184" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="hover:px-3 py-2.5 hover:bg-[#F4F4F5] rounded-full transition-all duration-300" data-tooltip-id="linktree-tooltip"
              data-tooltip-content="LinkTree">
              <Tooltip id="linktree-tooltip" style={{
                backgroundColor: '#000',
                color: '#fff',
                fontSize: '10px',
                padding: '4px 8px',
                borderRadius: '6px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                zIndex: 9999,
              }} />
              <RiLinksLine className="w-[19px] h-[19px] text-black" />
            </motion.div>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
