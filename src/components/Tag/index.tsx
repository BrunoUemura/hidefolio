import styles from "./styles.module.scss";

type Props = {
  text: string;
};

export default function Tag({ text }: Props) {
  return <div className={styles.tag}>{text}</div>;
}
