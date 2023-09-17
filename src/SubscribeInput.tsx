import styles from "./InsertRow.module.css";
import { useRef, useContext } from "react";
import { dataContext } from "./App";

export const SubscribeInput = () => {
    const { state, dispatch } = useContext(dataContext);
    const subscrInputRef = useRef<HTMLInputElement>(null);
    if (state.isSubscribeRed) {
        subscrInputRef.current!.style.backgroundColor =
            "rgba(255, 20, 20, 0.5)";
    }

    const subscrButtonHandler = (
        e: React.SyntheticEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        dispatch({ type: "set_subscribe", newSubscribe: "" });
        dispatch({ type: "change_visible_modal" });
        dispatch({ type: "set_transparent_subscribe" });
        subscrInputRef.current!.style.backgroundColor = "transparent";
    };

    return (
        <div className={styles["form-input-button"]}>
            <input
                ref={subscrInputRef}
                className={styles["form-input-with-button"]}
                type="text"
                placeholder="Subscribed"
                value={state.subscribe}
            />
            <button
                onClick={subscrButtonHandler}
                className={`${styles["form-button"]} ${styles["right-button"]}`}
            >
                <img
                    className={styles["button-img"]}
                    src="./image/down-arrow.png"
                    alt="стрелка вниз"
                />
            </button>
        </div>
    );
};
