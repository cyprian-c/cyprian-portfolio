"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+254) 788 523 896",
    href: "tel:+254788523896",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ocharo.dev@gmail.com",
    href: "mailto:ocharo.dev@gmail.com",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    description: "+254 788 523 896",
    href: "https://wa.me/254788523896",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Ongata Rongai, Nairobi, Kenya",
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.firstname.trim()) {
      setErrorMessage("Please enter your first name.");
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("Please write a message describing your inquiry.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit your message.");
      }

      setStatus("success");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage(
        err.message ||
          "Could not send message. Please reach out directly to ocharo.dev@gmail.com."
      );
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form column */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center gap-6 p-10 bg-[#27272c] rounded-xl border border-accent/20">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent text-4xl">
                  <FaCheckCircle />
                </div>
                <h3 className="text-3xl text-accent font-bold">
                  Message Sent Successfully!
                </h3>
                <p className="text-white/70 max-w-md">
                  Thank you for reaching out. Your inquiry has been received, and
                  Cyprian will get back to you shortly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Button
                    size="md"
                    onClick={() => setStatus("idle")}
                    className="max-w-44"
                  >
                    Send Another
                  </Button>
                  <a
                    href="https://wa.me/254788523896"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="md" className="gap-2">
                      <FaWhatsapp className="text-green-500 text-lg" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-8 md:p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-3xl md:text-4xl text-accent font-semibold">
                  Let's work together
                </h3>
                <p className="text-white/60 text-sm md:text-base">
                  Have a project in mind, an opportunity, or need custom
                  software built? Leave a message below or reach out via direct
                  channels.
                </p>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First name *"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* select */}
                <Select
                  value={formData.service}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development (Next.js / React)
                      </SelectItem>
                      <SelectItem value="Full-Stack Systems">
                        Full-Stack Software & Systems (Laravel / Next.js)
                      </SelectItem>
                      <SelectItem value="UI/UX Design">
                        UI/UX & Product Design
                      </SelectItem>
                      <SelectItem value="Graphic Design">
                        Branding & Graphic Design
                      </SelectItem>
                      <SelectItem value="SEO Optimization">
                        SEO & Performance Optimization
                      </SelectItem>
                      <SelectItem value="Consultancy">
                        Technical Architecture & Consultancy
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* textarea */}
                <Textarea
                  name="message"
                  className="h-[180px]"
                  placeholder="Type your message here * (e.g. project scope, timeline, ideas)"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                {/* submit button */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    type="submit"
                    size="md"
                    className="w-full sm:w-auto min-w-44 flex items-center justify-center gap-2"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="text-sm" />
                      </>
                    )}
                  </Button>

                  <a
                    href="mailto:ocharo.dev@gmail.com"
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-300"
                  >
                    Or email directly: ocharo.dev@gmail.com
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* info column */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8 w-full max-w-[480px]">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center shrink-0">
                      <div className="text-[26px] xl:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-base md:text-xl font-medium text-white hover:text-accent transition-colors duration-300 break-all"
                        >
                          {item.description}
                        </a>
                      ) : (
                        <h3 className="text-base md:text-xl font-medium text-white">
                          {item.description}
                        </h3>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;