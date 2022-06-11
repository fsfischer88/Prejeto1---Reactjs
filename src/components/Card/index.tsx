import { Children } from "react";
import styles from "./Card.module.css";

interface Iprops {
    titulo: string;
    children: React.ReactNode;

};
export function Card({titulo, children}: Iprops){
    return (
        <div className={styles.card}>
        <h2 className={styles.title}>{titulo}</h2>
        <div className={styles.content}>{ children }</div>
    </div>
       
    )


}