import styles from "./InsertRow.module.css";
import { useRef, useContext } from "react";
import { dataContext } from "./App";

export const AgeInput = () => {
    const { state, dispatch } = useContext(dataContext);
    const ageInputRef = useRef<HTMLInputElement>(null);
    if (state.isAgeRed) {
        ageInputRef.current!.style.backgroundColor = "rgba(255, 20, 20, 0.5)";
    }

    const inputAgeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "set_age", age: e.target.value });
    };
    const ageDownHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch({ type: "set_transparent_age" });
        ageInputRef.current!.style.backgroundColor = "transparent";
        dispatch({ type: "decrement_age" });
    };
    const ageUpHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch({ type: "set_transparent_age" });
        dispatch({ type: "increment_age" });
        ageInputRef.current!.style.backgroundColor = "transparent";
    };
    return (
        <div className={styles["form-input-button"]}>
            <input
                ref={ageInputRef}
                onChange={inputAgeHandler}
                className={styles["form-input-with-button"]}
                type="number"
                placeholder="Age"
                value={state.age}
            />
            <button onClick={ageDownHandler} className={styles["form-button"]}>
                {" "}
                <img
                    className={styles["button-img"]}
                    src="./image/down-arrow.png"
                    alt="стрелка вниз"
                />
            </button>
            <button
                onClick={ageUpHandler}
                className={`${styles["form-button"]} ${styles["right-button"]}`}
            >
                {" "}
                <img
                    className={styles["button-img"]}
                    src="./image/up-arrow.png"
                    alt="стрелка вверх"
                />
            </button>
        </div>
    );
};
