import { useState } from "react";
import { MONTHS } from "../../util/enums";
import { jobs } from "../../util/jobs";
import styles from "./styles.module.scss";

export default function Experiences() {
  const [selectedJob, setSelectedJob] = useState<number>(0);

  const formatDate = (date: string) => {
    const convertedDate = new Date(date);
    const monthNumber = convertedDate.getMonth();
    const month = MONTHS[monthNumber];
    const year = convertedDate.getFullYear();
    return `${month}. ${year}`;
  };

  const calculateMonths = (startDate: string, endDate: string | null) => {
    const convertedStartDate = Date.parse(startDate);
    const convertedEndDate =
      endDate !== null
        ? Date.parse(endDate)
        : Date.parse(new Date().toDateString());

    const diffTime = Math.abs(convertedEndDate - convertedStartDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const result = Math.round(diffDays / 30);

    if (result < 12) {
      return `${result}m`;
    }

    const years = Math.floor(result / 12);
    const months = result - 12;
    return `${years}y ${months}m`;
  };

  return (
    <div id="experiences" className={styles.experiences}>
      <div className={styles.title}>
        <span>Experiences</span>
      </div>
      <div className={styles.details}>
        <div className={styles.jobs}>
          {jobs.map((job, index) => (
            <div
              key={index}
              className={styles.job}
              onClick={() => setSelectedJob(index)}
            >
              <img src={job.image} alt={`${job.companyName} logo`} />
              <div className={styles.jobInformation}>
                <span className={styles.companyName}>{job.companyName}</span>
                <span className={styles.jobTitle}>{job.title}</span>
                <span className={styles.jobDate}>
                  {formatDate(job.startDate)} -{" "}
                  {job.endDate !== null ? formatDate(job.endDate) : "Current"} •{" "}
                  {calculateMonths(job.startDate, job.endDate)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.jobDetail}>
          <span className={styles.companyName}>
            {jobs[selectedJob].companyName}
          </span>
          <span className={styles.jobTitle}>{jobs[selectedJob].title}</span>
          <span className={styles.jobDescription}>
            {jobs[selectedJob].description.map((text) => (
              <p>{text}</p>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
