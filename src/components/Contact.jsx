import { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios'

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const userID = import.meta.env.VITE_USER_ID
const serviceID = import.meta.env.VITE_SERVICE_ID
const templateID = import.meta.env.VITE_TEMPLATE_ID

const Contact = () => {
  const formRef = useRef();
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = form

    setLoading(true);

   const data = {
      service_id: serviceID,
      template_id: templateID,
      user_id: userID,
      template_params: {
        'from_name': 'Portfolio Site',
        'to_name': form.name,
        'from_email': form.email,
        'message' : form.message
      }
   };
    
   const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)

    setLoading(false)
    
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>{" "}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>{" "}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit rounded-xl
             text-white font-bold shadow-md shadow-primary"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
