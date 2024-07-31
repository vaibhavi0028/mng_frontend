import React from "react";
import Image from "next/image";
import styles from "@/styles/FirstComponent.module.css";

const FirstComponent: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.sameline}>
          <div className={styles.horizontalBar}></div>
          <p className={styles.expertText}>EXPERT MEDICAL TREATMENT</p>
        </div>
        <h1 className={styles.mainHeading}>
          We follow a holistic approach to health care.
        </h1>
        <p className={styles.subText}>
          Lorem ipsum dolor sit amet consectet <br />
          piscing elit, sed do eiusmod.
        </p>
        <button className={styles.appointmentButton}>
          Book an Appointment
        </button>
      </div>
      <div className={styles.rightContainer}>
        <Image
          src="/image.svg"
          alt="Medical illustration"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default FirstComponent;
