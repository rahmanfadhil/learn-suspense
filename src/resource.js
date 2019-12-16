async function fetchPosts() {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
}

function wrapPromise(promise) {
  let status = "loading";
  let result;
  let suspender = promise.then(
    data => {
      status = "success";
      result = data;
    },
    error => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "loading") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

export default function createResource() {
  return {
    posts: wrapPromise(fetchPosts())
    // ...
  };
}
