import {
  IS_LOADING,
  GET_SKILL,
  GET_EDUCATION,
  GET_WORK,
  GET_PROJECT,
  LOADED,
} from "../type";

const initialState = {
  skillData: [],
  educationData: [],
  workData: [],
  projectData: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_SKILL: {
      return {
        ...state,
        skillData: action.payload,
      };
    }
    case GET_EDUCATION: {
      return {
        ...state,
        educationData: action.payload,
      };
    }
    case GET_WORK: {
      return {
        ...state,
        workData: action.payload,
      };
    }
    case GET_PROJECT: {
      return {
        ...state,
        projectData: action.payload,
      };
    }
    case LOADED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
