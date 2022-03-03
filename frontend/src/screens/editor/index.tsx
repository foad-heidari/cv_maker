import { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import axios from "axios";
import ContentEditor from "./ContentEditor";
import ContentPreview from "./ContentPreview";
import { getInterests } from "../../redux/actions/interestActions";
import { CV_URL } from "../../utils/APIUrls";
import { getEducation } from "../../redux/actions/educationActions";
import { getLanguage } from "../../redux/actions/languageActions";
import { getSkills } from "../../redux/actions/skillActions";
import { getProjects } from "../../redux/actions/prjectsActions";
import { getExperiences } from "../../redux/actions/experienceActions";
import { getProfile } from "../../redux/actions/profileActions";

export default function CVEditor() {
  const { cvId } = useParams();
  const dispatch = useDispatch();

  const getCVData = async () => {
    // Get the CV data and update the redux state
    const res = await axios.get(CV_URL + cvId);
    dispatch(getEducation(res.data.educations));
    dispatch(getLanguage(res.data.languages));
    dispatch(getInterests(res.data.interests));
    dispatch(getSkills(res.data.skills));
    dispatch(getProjects(res.data.projects));
    dispatch(getExperiences(res.data.experiences));
    dispatch(getProfile(res.data.profile));
  };
  useEffect(() => {
    getCVData();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={4}>
          <ContentEditor />
        </Grid>
        <Grid item xs={8}>
          <ContentPreview />
        </Grid>
      </Grid>
    </Container>

  );
}
