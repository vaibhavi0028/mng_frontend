import React from 'react';
import Image from "next/legacy/image";
import styles from '@/styles/FourthComponent.module.css';

const FourthComponent: React.FC = () => {
  const cardData = [
    { icon: '/tooth.svg', heading: 'Dental Care', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { icon: '/tooth.svg', heading: 'Individual & Family', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { icon: '/tooth2.svg', heading: 'Medicalaid', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
    { icon: '/tooth.svg', heading: 'Employer', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.services}>SERVICES</h2>
      <h1 className={styles.experiencedText}>Experienced in multiple<br/>medical practices</h1>
      <p className={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
      </p>
      <div className={styles.cardContainer}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconContainer}>
              <Image src={card.icon} alt={card.heading} width={50} height={50} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardHeading}>{card.heading}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthComponent;