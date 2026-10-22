import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import ThemeToggle from "./ThemeToggle";

const NavLink = ({ nav, active, onClick }) => {
  return (
    <li
      className={`${
        active === nav.title ? "text-white" : "text-secondary"
      } text-[18px] font-medium cursor-pointer relative group`}
      onClick={onClick}
    >
      <a
        href={`#${nav.id}`}
        className="transition-colors duration-300 hover:text-white"
      >
        {nav.title}
      </a>
      {/* Animated underline */}
      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 bg-[#915EFF] rounded-full"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      {/* Active indicator */}
      {active === nav.title && (
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 bg-[#915EFF] rounded-full"
          layoutId="activeNav"
          style={{ width: "100%" }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </li>
  );
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Yusuf Mansoor &nbsp;
            <span className="sm:block hidden"> | Web Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-10">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((nav) => (
              <NavLink
                key={nav.id}
                nav={nav}
                active={active}
                onClick={() => setActive(nav.title)}
              />
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
          <ThemeToggle />
          <motion.img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-6 bg-tertiary/95 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-white/10 shadow-xl"
              >
                <motion.ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                  {navLinks.map((nav) => (
                    <motion.li
                      key={nav.id}
                      variants={mobileItemVariants}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-secondary"
                      } hover:text-white transition-colors duration-300`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
