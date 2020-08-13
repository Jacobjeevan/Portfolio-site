import axios from "axios";

export async function getProjects() {
  try {
    const { data } = await axios.get("http://localhost:5000/projects/");
    return data;
  } catch (error) {
    return error;
  }
}

export const deleteProject = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/projects/${id}/`)
    .then((res) => {
      dispatch({
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(err);
    });
};

export const addProject = (project) => (dispatch) => {
  axios
    .post(`http://localhost:5000/projects/`, project)
    .then((res) => {
      dispatch({
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(err);
    });
};
