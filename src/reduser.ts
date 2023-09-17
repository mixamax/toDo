export type State = {
    name: string;
    age: string;
    isVisibleModal: boolean;
    subscribe: string;
    isEmployed: string;
    isAgeRed: boolean;
    isSubscribeRed: boolean;
    isCheckBoxChecked: boolean;
};

export type Action = {
    type: string;
    name?: string;
    age?: string;
    isVisibleModal?: boolean;
    newSubscribe?: string;
    isEmployed?: string;
    isAgeRed?: boolean;
    isSubscribeRed?: boolean;
    isCheckBoxChecked?: boolean;
};

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "set_name": {
            return {
                ...state,
                name: action.name,
            };
        }
        case "set_age": {
            return {
                ...state,
                age: action.age,
            };
        }
        case "increment_age": {
            let newAge;
            if (state.age === "") {
                newAge = "18";
            } else {
                newAge = String(+state.age + 1);
            }
            return {
                ...state,
                age: newAge,
            };
        }
        case "decrement_age": {
            let newAge;
            if (state.age === "" || Number(state.age) <= 18) {
                newAge = "18";
            } else {
                newAge = String(+state.age - 1);
            }
            return {
                ...state,
                age: newAge,
            };
        }
        case "change_visible_modal": {
            return {
                ...state,
                isVisibleModal: !state.isVisibleModal,
            };
        }
        case "set_IsVisibleModal": {
            return {
                ...state,
                isVisibleModal: action.isVisibleModal,
            };
        }
        case "set_subscribe": {
            return {
                ...state,
                subscribe: action.newSubscribe,
            };
        }
        case "set_isEmployed": {
            return {
                ...state,
                isEmployed: action.isEmployed,
            };
        }
        case "set_initialState": {
            return { ...initialState };
        }
        case "set_red_age": {
            return {
                ...state,
                isAgeRed: true,
            };
        }
        case "set_transparent_age": {
            return {
                ...state,
                isAgeRed: false,
            };
        }
        case "set_red_subscribe": {
            return {
                ...state,
                isSubscribeRed: true,
            };
        }
        case "set_transparent_subscribe": {
            return {
                ...state,
                isSubscribeRed: false,
            };
        }
        case "change_isCheckBoxChecked": {
            return {
                ...state,
                isCheckBoxChecked: !state.isCheckBoxChecked,
            };
        }
    }
    throw Error("Unknown action: " + action.type);
}

export const initialState = {
    name: "",
    age: "",
    isVisibleModal: false,
    subscribe: "",
    isEmployed: "Unemployed",
    isAgeRed: false,
    isSubscribeRed: false,
    isCheckBoxChecked: false,
};
