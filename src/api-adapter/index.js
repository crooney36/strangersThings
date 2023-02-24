const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2301-FTB-ET-WEB-FT";

// Get all posts from DB
export const getAllPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "GET",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Get post by ID
export const getIndividualPost = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${_id}`, {
      method: "GET",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
    const result = await response.json();
    console.log("response from api", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Add post to database
export const makePost = async (
  title,
  description,
  price,
  location,
  willDeliver
) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const result = await response.json();
    console.log("success", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Delete post from database
export const deletePost = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
  } catch (error) {
    console.log(error);
  }
};

// Register user to database
export const registerUserBackend = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};

// Login user
export const loginUserBackend = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log("backend", result);
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};

// Get user from DB
export const getUser = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Add message to a post
export const addMessage = async (content, postID) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postID}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        message: {
          content: content,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//Save token to local storage
//localStorage.setItem("token", result.data.token);

// OPTIONAL: Edit Post
// export const editPost = async (
//   id,
//   title,
//   description,
//   price,
//   location,
//   willDeliver
// ) => {
//   try {
//     const response = await fetch(`${BASE_URL}/posts/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify({
//         post: {
//           title: title,
//           description: description,
//           price: price,
//           location: location,
//           willDeliver: willDeliver,
//         },
//       }),
//     });
//     const result = await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
