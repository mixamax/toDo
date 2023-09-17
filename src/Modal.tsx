import styles from "./InsertRow.module.css";
import { useContext } from "react";
import { dataContext } from "./App";

export const Modal = () => {
    const { dispatch } = useContext(dataContext);

    const chooseSubsHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        dispatch({
            type: "set_subscribe",
            newSubscribe: (e.target as HTMLSpanElement).innerText,
        });
        dispatch({ type: "set_IsVisibleModal", isVisibleModal: false });
    };
    return (
        <div className={styles["modal"]}>
            <span className={styles["modal-text"]} onClick={chooseSubsHandler}>
                Subscribed
            </span>
            <span className={styles["modal-text"]} onClick={chooseSubsHandler}>
                Not Subscribed
            </span>
            <span className={styles["modal-text"]} onClick={chooseSubsHandler}>
                Other
            </span>
        </div>
    );
};
