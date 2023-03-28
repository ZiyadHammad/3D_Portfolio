import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {SectionWrapper} from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Greetings, visitors to my portfolio! I am a full-stack software engineer
        situated in Northern Virginia, and I take great pride in my meticulous
        approach to development. My primary motivation is to continuously expand
        my skills and knowledge to develop innovative products that improve our
        daily lives. With a background in sales, management, and marketing, I
        possess a customer-centric outlook that informs my web development
        approach, ensuring a seamless and enjoyable user experience. In my free
        time, I enjoy video gaming, bodybuilding, and cooking. If you would like
        to connect with me, feel free to follow me on my social media platforms.
        I take pride in being a quick learner and working closely with my
        clients to create efficient, scalable, and user-friendly solutions that
        solve real-world problems. I believe in collaboration and would love to
        work together to bring your ideas to life.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about')
