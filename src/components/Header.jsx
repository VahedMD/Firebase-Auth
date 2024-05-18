import React from "react";
import icon from "../media/icons/icon.png";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FaCogs, FaHome, FaSignInAlt } from "react-icons/fa";
import {
  FaBuildingUser,
  FaMapLocationDot,
  FaMoneyCheckDollar,
  FaUserPlus,
} from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex items-center justify-between px-3 max-w-6xl mx-auto">
        <Link to="/">
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={icon} alt="icon" className="w-8" />
            <p className="font-logo text-xl font-bold drop-shadow-logo">
              AiBiS Wildfire
            </p>
          </motion.div>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-6 "
          >
            <motion.li
              whileTap={{ scale: 0.4 }}
              className="text-sm text-primary duration-100 transition-all ease-in-out cursor-pointer uppercase"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 py-3 font-semibold border-b-4 text-black border-b-red-500"
                    : "flex items-center gap-1 py-3 font-semibold text-gray-400 hover:text-amber-400"
                }
              >
                <FaHome />
                Home
              </NavLink>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.4 }}
              className="text-sm text-primary duration-100 transition-all ease-in-out cursor-pointer uppercase"
            >
              <NavLink
                to="/applications"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 py-3 font-semibold border-b-4 text-black border-b-red-500"
                    : "flex items-center gap-1 py-3 font-semibold text-gray-400 hover:text-amber-400"
                }
              >
                <FaCogs />
                apps
              </NavLink>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.4 }}
              className="text-sm text-primary duration-100 transition-all ease-in-out cursor-pointer uppercase"
            >
              <NavLink
                to="/maps"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 py-3 font-semibold border-b-4 text-black border-b-red-500"
                    : "flex items-center gap-1 py-3 font-semibold text-gray-400 hover:text-amber-400"
                }
              >
                <FaMapLocationDot />
                maps
              </NavLink>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.4 }}
              className="text-sm text-primary duration-100 transition-all ease-in-out cursor-pointer uppercase"
            >
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 py-3 font-semibold border-b-4 text-black border-b-red-500"
                    : "flex items-center gap-1 py-3 font-semibold text-gray-400 hover:text-amber-400"
                }
              >
                <FaMoneyCheckDollar />
                pricing
              </NavLink>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.4 }}
              className="text-sm text-primary  duration-100 transition-all ease-in-out cursor-pointer uppercase"
            >
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 py-3 font-semibold border-b-4 text-black border-b-red-500"
                    : "flex items-center gap-1 py-3 font-semibold text-gray-400 hover:text-amber-400"
                }
              >
                <FaBuildingUser />
                company
              </NavLink>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.4 }}
              className="text-sm text-primary  duration-100 transition-all ease-in-out cursor-pointer uppercase"
            >
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 py-3 font-semibold border-b-4 text-black border-b-red-500"
                    : "flex items-center gap-1 py-3 font-semibold text-gray-400 hover:text-amber-400"
                }
              >
                <FaUserPlus />
                Sign Up
              </NavLink>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.4 }}
              className="text-sm text-primary duration-100 transition-all ease-in-out cursor-pointer uppercase"
            >
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 py-3 font-semibold border-b-4 text-black border-b-red-500"
                    : "flex items-center gap-1 py-3 font-semibold text-gray-400 hover:text-amber-400"
                }
              >
                <FaSignInAlt />
                Log in
              </NavLink>
            </motion.li>
          </motion.ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
