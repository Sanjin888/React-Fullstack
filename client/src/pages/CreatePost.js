import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreatePost() {
  return (
    <div className="createPostPage">
      <Formik>
        <Form>
          <label>Title:</label>
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. Title...)"
          />
          <label>Title:</label>
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex. Post...)"
          />
          <label>Title:</label>
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. John123...)"
          />

          <button type="submit" >Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
