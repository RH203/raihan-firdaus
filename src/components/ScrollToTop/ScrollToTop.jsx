import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ ease: "linear", duration: 0.4 }}
      onClick={scrollToTop}
      className="animate-bounce btn btn-primary fixed bottom-5 right-5  text-white p-3 rounded-full shadow-lg focus:outline-none"
      style={{ display: visible ? "block" : "none" }}
    >
      <FaArrowUp size={25} className={"text-black"} />
    </motion.button>
  );
};

export default ScrollToTop;