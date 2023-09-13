import { FormInput } from "./FormInput";
import styles from "./InsertRow.module.css";
import { useState, useLayoutEffect, useContext, useRef } from "react";
import { dataContext } from "./App";

export function InsertRow() {
    const { data, setData, marked } = useContext(dataContext);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    const switchRef = useRef<HTMLInputElement>(null);
    const deleteHandler = () => {
        const filterdData = data.filter((item) => item.id !== marked);
        setData(filterdData);
        localStorage.setItem("data", JSON.stringify(filterdData));
    };
    const switchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    useLayoutEffect(() => {
        if (theme === "light") {
            switchRef.current!.checked = false;
        } else {
            switchRef.current!.checked = true;
        }
    }, []);

    return (
        <div className={styles["insert-container"]}>
            <h3 className={styles["insert-title"]}>Insert Row</h3>
            <div className={styles["insert-border"]}>
                <FormInput />
                <div className={styles["line"]}></div>
                <label className={styles["switch"]}>
                    <input
                        ref={switchRef}
                        className={styles["switch-box"]}
                        type="checkbox"
                        onChange={switchHandler}
                    />
                    <span className={styles["switch-slide"]}></span>
                </label>
                <button
                    className={styles["button-delete"]}
                    onClick={deleteHandler}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
