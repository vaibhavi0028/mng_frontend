import React from "react";
import Image from "next/legacy/image";
import styles from "@/styles/SecondComponent.module.css";

const SecondComponent: React.FC = () => {
  const logos = [
    { src: "/logo1.svg", alt: "Logo 1" },
    { src: "/logo2.svg", alt: "Logo 2" },
    { src: "/logo3.svg", alt: "Logo 3" },
    { src: "/logo4.svg", alt: "Logo 4" },
    { src: "/logo5.svg", alt: "Logo 5" },
  ];

  return (
    <div className={styles.container}>
      {logos.map((logo, index) => (
        <div key={index} className={styles.logoContainer}>
          <Image src={logo.src} alt={logo.alt} width={100} height={50} />
          <p className={styles.logoText}>Logoipsum</p>
        </div>
      ))}
    </div>
  );
};

export default SecondComponent;