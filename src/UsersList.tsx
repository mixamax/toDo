import { Items } from "./Items";
import styles from "./UsersList.module.css";

export function UsersList() {
    return (
        <div className={styles["list-container"]}>
            <div className={styles["list-border"]}>
                <div className={styles["list-title-fon"]}>
                    <div className={styles["list-title-container"]}>
                        <span className={styles["list-title"]}>Name</span>
                        <span className={styles["list-title"]}>Age</span>
                        <span className={styles["list-title"]}>
                            Subscription
                        </span>
                        <span className={styles["list-title"]}>Employment</span>
                    </div>
                </div>
            </div>

            <div className={styles["list-inner-container"]}>
                <Items />
            </div>
        </div>
    );
}
