import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { experiencesReducer } from "./reducers/experienceReducers";
import { interestsReducer } from "./reducers/interestReducers";
import { profileReducer } from "./reducers/profileReducers";
import { ProjectsReducer } from "./reducers/projectReducers";

const rootReducer = combineReducers({
    interests: interestsReducer,
    profile: profileReducer,
    experiences: experiencesReducer,
    projects: ProjectsReducer,
});
export type AppState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, devToolsEnhancer({}));
