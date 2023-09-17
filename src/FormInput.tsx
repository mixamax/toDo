import styles from "./InsertRow.module.css";
import { useRef, useContext } from "react";
import { dataContext } from "./App";
import { Modal } from "./Modal";
import { AgeInput } from "./AgeInput";
import { SubscribeInput } from "./SubscribeInput";
import { CheckBox } from "./CheckBox";

export function FormInput() {
    const { data, setData, state, dispatch } = useContext(dataContext);
    const nameInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.name === "") {
            nameInputRef.current!.style.backgroundColor =
                "rgba(255, 20, 20, 0.5)";
            return;
        }
        if (state.age === "") {
            dispatch({ type: "set_red_age" });
            return;
        }
        if (state.subscribe === "") {
            dispatch({ type: "set_red_subscribe" });

            return;
        }

        data.push({
            name: state.name,
            age: state.age,
            subscription: state.subscribe,
            employment: state.isEmployed,
            id: Date.now().toString().slice(-6),
        });
        setData([...data]);
        localStorage.setItem("data", JSON.stringify(data));
        dispatch({ type: "set_initialState" });
    };
    const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "set_name", name: e.target.value });
        nameInputRef.current!.style.backgroundColor = "transparent";
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
                value={state.name}
            />
            <AgeInput />
            <SubscribeInput />
            {state.isVisibleModal && <Modal />}
            <CheckBox />
            <input
                className={styles["form-input-submit"]}
                type="submit"
                value="Insert"
            />
        </form>
    );
}
