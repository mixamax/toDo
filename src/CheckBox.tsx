import styles from "./InsertRow.module.css";
import { useContext } from "react";
import { dataContext } from "./App";

export const CheckBox = () => {
    const { state, dispatch } = useContext(dataContext);

    const checkboxHandler = () => {
        dispatch({ type: "change_isCheckBoxChecked" });

        if (!state.isCheckBoxChecked) {
            dispatch({ type: "set_isEmployed", isEmployed: "Employed" });
        } else {
            dispatch({ type: "set_isEmployed", isEmployed: "Unemployed" });
        }
    };
    return (
        <div className={styles["form-checkbox-label"]}>
            <input
                onChange={checkboxHandler}
                className={styles["form-checkbox"]}
                type="checkbox"
                id="employed"
                name="employed"
                checked={state.isCheckBoxChecked}
            />
            <label className={styles["form-label"]} htmlFor="employed">
                Employed
            </label>
        </div>
    );
};
