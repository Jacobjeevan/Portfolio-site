import axios from "axios";

export async function getBooks() {
  try {
    const { data } = await axios.get("http://localhost:5000/books/");
    return data;
  } catch (error) {
    return error;
  }
}

export const deleteBook = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/books/${id}/`)
    .then((res) => {
      dispatch({
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(err);
    });
};

export const addBook = (book) => (dispatch) => {
  axios
    .post(`http://localhost:5000/books/`, book)
    .then((res) => {
      dispatch({
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(err);
    });
};
