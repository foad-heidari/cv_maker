import { useEffect, useState } from "react";
import { CircularProgress, Container, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import ContentEditor from "./ContentEditor";
import ContentPreview from "./ContentPreview";
import { getEducation } from "../../redux/actions/cv_actions/educationActions";
import { getExperiences } from "../../redux/actions/cv_actions/experienceActions";
import { getInterests } from "../../redux/actions/cv_actions/interestActions";
import { getLanguage } from "../../redux/actions/cv_actions/languageActions";
import { getProjects } from "../../redux/actions/cv_actions/prjectsActions";
import { getProfile } from "../../redux/actions/cv_actions/profileActions";
import { getSkills } from "../../redux/actions/cv_actions/skillActions";
import { CV_URL } from "../../utils/APIUrls";
import { addMessage } from "../../redux/actions/cv_actions/messageActions";
import { MessageEnumType } from "../../redux/state/cv_states/messageState";


export default function CVEditor() {
  const { cvId } = useParams();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCVData = async () => {
    // Get the CV data and update the redux state
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(CV_URL + cvId, { headers: { "Authorization": "Token " + token } });
      dispatch(getEducation(res.data.educations));
      dispatch(getLanguage(res.data.languages));
      dispatch(getInterests(res.data.interests));
      dispatch(getSkills(res.data.skills));
      dispatch(getProjects(res.data.projects));
      dispatch(getExperiences(res.data.experiences));
      dispatch(getProfile(res.data.profile));

      setLoading(false);
    } catch {
      dispatch(addMessage({
        type: MessageEnumType.error,
        message: "Page not fund!"
      }));
      setLoading(false);
      navigate("/");
    }
  };

  useEffect(() => {
    getCVData();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} sx={{ my: 2 }}>
        {loading ?
          <Grid item container alignItems="center" justifyContent="center">
            <CircularProgress sx={{ my: 5 }} size={100} disableShrink />
          </Grid>
          :
          <>
            <Grid item xs={4}>
              <ContentEditor />
            </Grid>
            <Grid item xs={8}>
              <ContentPreview />
            </Grid>
          </>
        }
      </Grid>
    </Container>

  );
}
