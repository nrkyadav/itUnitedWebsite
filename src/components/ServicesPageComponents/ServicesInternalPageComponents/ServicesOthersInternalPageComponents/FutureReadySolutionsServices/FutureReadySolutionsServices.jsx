import styles from "./FutureReadySolutionsServices.module.css";

export default function FutureReadySolutionsServices({ futureReadySolutionsData }) {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.left}>
          <h2 className={styles.heading}>{futureReadySolutionsData?.heading}</h2>
          <div className={styles.underline}></div>

          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: futureReadySolutionsData?.description }}
          ></p>

        </div>

        <div className={styles.right}>
          <ul className={styles.list}>
            {futureReadySolutionsData?.futureReadySolutionsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
