const BASE_URL = "https://strangers-things.herokuapp.com/api/2301-ftb-et/posts";

export const getAllPosts = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getIndividualPost = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${_id}`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const makePost = async (
  title,
  description,
  price,
  location,
  willDeliver
) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const registerUserBackend = async (userName, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          userName: userName,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};

export const loginUserBackend = async (userName, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer TOKEN_USER"
      },
      body: JSON.stringify({
        user: {
          userName: userName,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};
