import { useContext } from "react";
import styles from "./UsersList.module.css";
import { dataContext } from "./App";

export function Items() {
    const { data, marked } = useContext(dataContext);

    return data.map((item) => {
        return (
            <div
                key={item.id}
                data-todo
                id={item.id}
                className={
                    item.id === marked
                        ? `${styles["item"]} ${styles["marked"]}`
                        : `${styles["item"]}`
                }
            >
                {" "}
                <span className={`${styles["item-text"]} ${styles["name"]}`}>
                    {item.name}
                </span>
                <span className={`${styles["item-text"]} ${styles["age"]}`}>
                    {item.age}
                </span>
                <span className={`${styles["item-text"]} ${styles["subscr"]}`}>
                    {item.subscription}
                </span>
                <span className={`${styles["item-text"]} ${styles["employ"]}`}>
                    {item.employment}
                </span>
            </div>
        );
    });
}
