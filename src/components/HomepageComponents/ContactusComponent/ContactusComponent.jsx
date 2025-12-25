"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";
import { toast } from "react-toastify";
import styles from "./ContactusComponent.module.css";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().min(8, "Invalid phone number").required("Phone number is required"),
  country: yup.string().required("Country is required"),
  service: yup.string().required("Select your service"),
  budget: yup.string().required("Select your project budget"),
  description: yup.string().min(10, "Describe your project in more detail").required("Please describe your project"),
  terms: yup.bool().oneOf([true], "You must accept the terms and conditions"),
});

const ContactusComponent = ({ inSight }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleDropdownOpen = () => {
    setDropdownOpen(true);
    if (window.__lenis?.stop) window.__lenis.stop();
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
    if (window.__lenis?.start) window.__lenis.start();
  };

  useEffect(() => {
    let dropdown = null;
    let touchStartY = 0;
    let lastTouchY = 0;
    let mo = null;

    const onWheel = (e) => {
      if (!dropdown) return;
      e.preventDefault();
      e.stopPropagation();
      dropdown.scrollTop += e.deltaY;
    };

    const onTouchStart = (e) => {
      touchStartY = lastTouchY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const delta = lastTouchY - currentY;
      lastTouchY = currentY;
      dropdown.scrollTop += delta;
      e.preventDefault();
      e.stopPropagation();
    };

    const attachEvents = () => {
      dropdown = document.querySelector(".react-tel-input .country-list");
      if (!dropdown) return false;

      dropdown.style.overscrollBehavior = "contain";

      dropdown.addEventListener("wheel", onWheel, { passive: false });
      dropdown.addEventListener("touchstart", onTouchStart, { passive: false });
      dropdown.addEventListener("touchmove", onTouchMove, { passive: false });

      return true;
    };

    if (!attachEvents()) {
      mo = new MutationObserver(() => {
        if (attachEvents()) mo.disconnect();
      });

      mo.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      if (dropdown) {
        dropdown.removeEventListener("wheel", onWheel);
        dropdown.removeEventListener("touchstart", onTouchStart);
        dropdown.removeEventListener("touchmove", onTouchMove);
      }
      mo?.disconnect();
      window.__lenis?.start?.();
    };
  }, [isDropdownOpen]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.success) {
        toast.success("✅ Form submitted successfully!", { position: "top-right" });
        reset();
      } else {
        toast.error("❌ Failed to send email. Try again.", { position: "top-right" });
      }
    } catch (err) {
      toast.error("⚠️ Something went wrong.", { position: "top-right" });
    }
  };

  return (
    <section className={inSight ? styles.contactSectionInsight : styles.contactSection}>
      <div className={styles.formWrapper}>
        <div className={styles.leftBox}>
          <div className={styles.leftBoxFirstSide}>
            <h2 className={styles.leftHeading}>
              We have Patience, Passion and Numbers too!
            </h2>

            <div className={styles.statsGrid}>
              {[
                { value: "12+", label: "Years of experience" },
                { value: "850+", label: "Mobile apps delivered" },
                { value: "120+", label: "Dedicated + remote developer" },
                { value: "100%", label: "Passion + delivery score" },
              ].map((stat, i) => (
                <div key={i} className={styles.statBox}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                  <div className={styles.underline}></div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.featuredWrapper}>
            <p className={styles.featuredHeading}>Featured on</p>
            <div className={styles.featuredLogos}>
              {["googleagency", "clutch", "clutchsecond", "clutch"].map(
                (logo) => (
                  <Image
                    key={logo}
                    src={`/assets/Images/${logo}.webp`}
                    alt={logo}
                    width={80}
                    height={75}
                  />
                )
              )}
            </div>
          </div>
        </div>

        <div className={styles.rightBox}>
          <h2 className={styles.formHeading}>
            <b>C</b>reate a <b>P</b>roduct with a <b>T</b>eam that <b>D</b>elivers.
          </h2>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.row}>
              <div className={styles.field}>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  {...register("fullName")}
                  className={styles.formInput}
                />
                <p className={styles.error}>{errors.fullName?.message}</p>
              </div>

              <div className={styles.field}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className={styles.formInput}
                />
                <p className={styles.error}>{errors.email?.message}</p>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <PhoneInput
                  country={"in"}
                  placeholder="Enter your phone number"
                  inputClass={styles.phoneInput}
                  onFocus={handleDropdownOpen}
                  onBlur={handleDropdownClose}
                  inputProps={{ name: "phone", required: true }}
                  onChange={(value) =>
                    setValue("phone", value, { shouldValidate: true })
                  }
                />
                <p className={styles.error}>{errors.phone?.message}</p>
              </div>

              <div className={styles.field}>
                <input
                  type="text"
                  placeholder="Enter your country"
                  {...register("country")}
                  className={styles.formInput}
                />
                <p className={styles.error}>{errors.country?.message}</p>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <select {...register("service")} className={styles.formSelect}>
                  <option value="">Select your service</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>UI/UX Design</option>
                  <option>AI/ML Solutions</option>
                </select>
                <p className={styles.error}>{errors.service?.message}</p>
              </div>

              <div className={styles.field}>
                <select {...register("budget")} className={styles.formSelect}>
                  <option value="">Select your project budget</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $50,000</option>
                  <option>$50,000+</option>
                </select>
                <p className={styles.error}>{errors.budget?.message}</p>
              </div>
            </div>

            <div className={styles.field}>
              <textarea
                placeholder="Brief about the project"
                {...register("description")}
                className={styles.formTextarea}
              ></textarea>
              <p className={styles.error}>{errors.description?.message}</p>
            </div>

            <div className={styles.termsRow}>
              <label className={styles.checkboxContainer}>
                <input type="checkbox" {...register("terms")} />
              </label>
              <p className={styles.termstext}>
                I have read and agree to the{" "}
                <a href="#" className={styles.link}>Terms and Conditions</a> and{" "}
                <a href="#" className={styles.link}>Privacy Policy</a>.
              </p>
            </div>
            <p className={styles.error}>{errors.terms?.message}</p>

            <PrimaryButton
              text={isSubmitting ? "Submitting..." : "Send Message"}
              bgColor="#002c22"
              textGradient="#fff"
              className={styles.submitButton}
              type="submit"
              disabled={isSubmitting}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactusComponent;
