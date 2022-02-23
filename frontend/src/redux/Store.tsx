import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cvReducer } from "./reducers/cvReducers";

import { educationsReducer } from "./reducers/educationReducers";
import { experiencesReducer } from "./reducers/experienceReducers";
import { interestsReducer } from "./reducers/interestReducers";
import { languagesReducer } from "./reducers/languageReducers";
import { profileReducer } from "./reducers/profileReducers";
import { projectsReducer } from "./reducers/projectReducers";
import { skillsReducer } from "./reducers/skillReducers";

const rootReducer = combineReducers({
    interests: interestsReducer,
    profile: profileReducer,
    experiences: experiencesReducer,
    projects: projectsReducer,
    skills: skillsReducer,
    educations: educationsReducer,
    languages: languagesReducer,
    cv: cvReducer,
});
export type AppState = ReturnType<typeof rootReducer>

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

export const store = createStore(rootReducer, composedEnhancer);