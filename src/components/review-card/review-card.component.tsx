import Image from "next/image";
import styles from "./review-card.module.scss";
import rating from "@public/stars.svg";

interface ReviewCardProps {
  ReviewerName: string;
  ReviewDate: string;
  ReviewText: string;
  ProfilePicColor: string;
  FirstLetter: string;
}

export function ReviewCard({
  ReviewerName,
  ReviewDate,
  ReviewText,
  ProfilePicColor,
  FirstLetter,
}: ReviewCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.contentContainer}>
        <div
          className={styles.profilePic}
          style={{ backgroundColor: ProfilePicColor }}
        >
          <span>{FirstLetter}</span>
        </div>
        <div className={styles.reviewContainer}>
          <span className={styles.name}>{ReviewerName}</span>
          <div className={styles.rating}>
            <Image src={rating} alt="" />
            <span>{ReviewDate}</span>
          </div>
          <span className={styles.review}>{ReviewText}</span>
        </div>
      </div>
    </div>
  );
}
