import styles from "./InsertRow.module.css";
import { useState, useRef, useContext } from "react";
import { dataContext } from "./App";
// import { Modal } from "./Modal";

export function FormInput() {
    const { data, setData } = useContext(dataContext);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [subscribe, setSubscribe] = useState("");
    const [isEmployed, setIsEmployed] = useState("Unemployed");
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const checkboxRef = useRef<HTMLInputElement>(null);

    const nameInputRef = useRef<HTMLInputElement>(null);
    const ageInputRef = useRef<HTMLInputElement>(null);
    const subscrInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name === "") {
            nameInputRef.current!.style.backgroundColor =
                "rgba(255, 20, 20, 0.5)";
            return;
        }
        if (age === "") {
            ageInputRef.current!.style.backgroundColor =
                "rgba(255, 20, 20, 0.5)";
            return;
        }
        if (subscribe === "") {
            subscrInputRef.current!.style.backgroundColor =
                "rgba(255, 20, 20, 0.5)";
            return;
        }

        data.push({
            name: name,
            age: age,
            subscription: subscribe,
            employment: isEmployed,
            id: Date.now().toString().slice(-6),
        });
        setData([...data]);
        localStorage.setItem("data", JSON.stringify(data));
        setName("");
        setAge("");
        setSubscribe("");
        setIsEmployed("Unemployed");
        checkboxRef.current!.checked = false;
    };
    const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        nameInputRef.current!.style.backgroundColor = "transparent";
    };
    const inputAgeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    };
    const ageDownHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (age === "" || Number(age) <= 18) {
            setAge("18");
        } else {
            setAge(String(+age - 1));
        }
        ageInputRef.current!.style.backgroundColor = "transparent";
    };
    const ageUpHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (age === "") {
            setAge("18");
        } else {
            setAge(String(+age + 1));
        }
    };
    const chooseSubsHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        setSubscribe((e.target as HTMLSpanElement).innerText);
        setIsVisibleModal(false);
    };
    const subscrButtonHandler = (
        e: React.SyntheticEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        setIsVisibleModal(() => !isVisibleModal);
        subscrInputRef.current!.style.backgroundColor = "transparent";
    };
    const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setIsEmployed("Employed");
        } else {
            setIsEmployed("Unemployed");
        }
    };
    return (
        <form
            onSubmit={submitHandler}
            className={styles["insert-form"]}
            action=""
        >
            <input
                ref={nameInputRef}
                onChange={inputNameHandler}
                className={styles["form-input"]}
                type="text"
                placeholder="Name"
                value={name}
            />
            <div className={styles["form-input-button"]}>
                <input
                    ref={ageInputRef}
                    onChange={inputAgeHandler}
                    className={styles["form-input-with-button"]}
                    type="text"
                    placeholder="Age"
                    value={age}
                />
                <button
                    onClick={ageDownHandler}
                    className={styles["form-button"]}
                >
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
            <div className={styles["form-input-button"]}>
                <input
                    ref={subscrInputRef}
                    className={styles["form-input-with-button"]}
                    type="text"
                    placeholder="Subscribed"
                    defaultValue={subscribe}
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
            {isVisibleModal && (
                <div className={styles["modal"]}>
                    <span
                        className={styles["modal-text"]}
                        onClick={chooseSubsHandler}
                    >
                        Subscribed
                    </span>
                    <span
                        className={styles["modal-text"]}
                        onClick={chooseSubsHandler}
                    >
                        Not Subscribed
                    </span>
                    <span
                        className={styles["modal-text"]}
                        onClick={chooseSubsHandler}
                    >
                        Other
                    </span>
                </div>
            )}
            <div className={styles["form-checkbox-label"]}>
                <input
                    ref={checkboxRef}
                    onChange={checkboxHandler}
                    className={styles["form-checkbox"]}
                    type="checkbox"
                    id="employed"
                    name="employed"
                />
                <label className={styles["form-label"]} htmlFor="employed">
                    Employed
                </label>
            </div>
            <input
                className={styles["form-input-submit"]}
                type="submit"
                value="Insert"
            />
        </form>
    );
}
