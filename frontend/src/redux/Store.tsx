import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { experiencesReducer } from "./reducers/experienceReducers";
import { interestsReducer } from "./reducers/interestReducers";
import { profileReducer } from "./reducers/profileReducers";
import { projectsReducer } from "./reducers/projectReducers";
import { skillsReducer } from "./reducers/skillReducers";

const rootReducer = combineReducers({
    interests: interestsReducer,
    profile: profileReducer,
    experiences: experiencesReducer,
    projects: projectsReducer,
    skills: skillsReducer,
});
export type AppState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, devToolsEnhancer({}));
