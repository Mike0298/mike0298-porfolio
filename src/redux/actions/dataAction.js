import {
  IS_LOADING,
  LOADED,
  GET_SKILL,
  GET_EDUCATION,
  GET_WORK,
  GET_PROJECT,
} from "../type";

import {
  skillData,
  workData,
  projectData,
  educationData,
} from "../../assets/data";

export const loadData = () => (dispatch) => {
  dispatch({
    type: IS_LOADING,
  });
  dispatch(setSkill(skillData));
  dispatch(setWork(workData));
  dispatch(setProject(projectData));
  dispatch(setEdu(educationData));
  dispatch({
    type: LOADED,
  });
};

export const setSkill = (data) => {
  return {
    type: GET_SKILL,
    payload: data,
  };
};
export const setEdu = (data) => {
  return {
    type: GET_EDUCATION,
    payload: data,
  };
};
export const setWork = (data) => {
  return {
    type: GET_WORK,
    payload: data,
  };
};
export const setProject = (data) => {
  return {
    type: GET_PROJECT,
    payload: data,
  };
};
