import styles from "./IndustriesStartupApproach.module.css";

export default function IndustriesStartupApproach({ itUnitedApproachData }) {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.left}>
          <h2 className={styles.heading}>{itUnitedApproachData?.heading}</h2>
          <div className={styles.underline}></div>

          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: itUnitedApproachData?.description }}
          ></p>

        </div>

        <div className={styles.right}>
          <ul className={styles.list}>
            {itUnitedApproachData?.itUnitedApproachDataList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
