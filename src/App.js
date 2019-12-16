import React, { Suspense } from "react";
import PostList from "./PostList";
import createResource from "./resource";

const resource = createResource();

export default function App() {
  return (
    <div>
      <h1>Learn Suspense</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <PostList resource={resource} />
      </Suspense>
    </div>
  );
}
