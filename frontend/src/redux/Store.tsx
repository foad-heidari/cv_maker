import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { experiencesReducer } from "./reducers/experienceReducers";
import { interestsReducer } from "./reducers/interestReducers";
import { profileReducer } from "./reducers/profileReducers";

const rootReducer = combineReducers({
    interests: interestsReducer,
    profile: profileReducer,
    experiences: experiencesReducer,
});
export type AppState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, devToolsEnhancer({}));
