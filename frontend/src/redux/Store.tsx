import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cvReducer } from "./reducers/cv_reducers/cvReducers";

import { educationsReducer } from "./reducers/cv_reducers/educationReducers";
import { experiencesReducer } from "./reducers/cv_reducers/experienceReducers";
import { interestsReducer } from "./reducers/cv_reducers/interestReducers";
import { languagesReducer } from "./reducers/cv_reducers/languageReducers";
import { messageReducer } from "./reducers/cv_reducers/messageReducers";
import { profileReducer } from "./reducers/cv_reducers/profileReducers";
import { projectsReducer } from "./reducers/cv_reducers/projectReducers";
import { skillsReducer } from "./reducers/cv_reducers/skillReducers";
import { UserReducer } from "./reducers/user_reducers/userReducers";

const rootReducer = combineReducers({
    interests: interestsReducer,
    profile: profileReducer,
    experiences: experiencesReducer,
    projects: projectsReducer,
    skills: skillsReducer,
    educations: educationsReducer,
    languages: languagesReducer,
    cv: cvReducer,
    user: UserReducer,
    message:messageReducer,
});
export type AppState = ReturnType<typeof rootReducer>

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

export const store = createStore(rootReducer, composedEnhancer);