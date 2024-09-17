import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Yusuf Mansoor",
          from_email: form.email,
          to_email: "rr931996@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <section className="mt-12 flex flex-col gap-4">
          <p className={styles.sectionSubText}>Education</p>
          <div className="text-white font-medium mb-2">
            <p>BE (CSE) | 2019 Brahmdevdada Mane Institute Of Technology, (Solapur)</p>
            <p>Diploma (CSE) | 2015 Brahmdevdada Mane Polytecnic, (Solapur)</p>
            <p>SSC | 2011 Saraswti vidya Mandir (Pune)</p>
          </div>
        </section>

        <section className="mt-12 flex flex-col gap-4">
          <p className={styles.sectionSubText}>Additional Details</p>
          <div className="text-white font-medium mb-2">
            <p>
              <a href="tel:9097818906" className="hover:underline">Phone Number:  8668543345</a>
            </p>
            <p>
              <a href="mailto:work.myusuf@gmail.com" className="hover:underline">Email Id:  work.myusuf@gmail.com</a>
            </p>
            <p>
              <a href="www.linkedin.com/in/yusuf-mansoor-93a94618b" className="hover:underline">Linkedin:  @YusufMansoor</a>
            </p>
            <p>Address:  Kajalnagar Majrewadi solapur</p>
          </div>
        </section>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
