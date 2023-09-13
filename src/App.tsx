import "./App.css";
import { InsertRow } from "./InsertRow";
import { UsersList } from "./UsersList";
import { createContext, useState, useEffect } from "react";

type dataObject = {
    name: string;
    age: string;
    subscription: string;
    employment: string;
    id: string;
};
type context = {
    data: dataObject[];
    setData: React.Dispatch<React.SetStateAction<dataObject[]>>;
    marked: string;
};

export const dataContext = createContext({} as context);

function App() {
    const [data, setData] = useState<dataObject[]>([]);
    const [marked, setMarked] = useState("");
    useEffect(() => {
        const localData: [] = JSON.parse(
            localStorage.getItem("data") || "null"
        );
        if (localData) {
            setData(localData);
        }
    }, []);

    const chooseTodoHandler = (e: React.SyntheticEvent<HTMLDivElement>) => {
        if ((e.target as HTMLSpanElement).closest("div[data-todo]")) {
            setMarked(
                (
                    (e.target as HTMLSpanElement).closest(
                        "div[data-todo]"
                    ) as HTMLSpanElement
                ).id
            );
        } else {
            return;
        }
    };

    return (
        <div className="container" onClick={chooseTodoHandler}>
            <dataContext.Provider value={{ data, setData, marked }}>
                <InsertRow />
                <UsersList />
            </dataContext.Provider>
        </div>
    );
}

export default App;
