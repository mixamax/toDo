import "./App.css";
import { InsertRow } from "./InsertRow";
import { UsersList } from "./UsersList";
import { createContext, useState, useEffect, useReducer } from "react";
import { reducer, initialState } from "./reduser";
import { State, Action } from "./reduser";

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
    state: State;
    dispatch: React.Dispatch<Action>;
    initialState: State;
};

export const dataContext = createContext({} as context);

function App() {
    const [data, setData] = useState<dataObject[]>([]);
    const [marked, setMarked] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);
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
            <dataContext.Provider
                value={{ data, setData, marked, state, dispatch, initialState }}
            >
                <InsertRow />
                <UsersList />
            </dataContext.Provider>
        </div>
    );
}

export default App;
