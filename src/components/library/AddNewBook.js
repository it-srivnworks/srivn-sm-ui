import React from "react";
import { useForm } from "react-hook-form";
import SingleFileUpload from "../common/SingleFileUpload";

const AddNewBook = () => {
  console.log("---AddNewBook");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="input-group mb-3">
                <label>ID: </label>
                <input
                  type="text"
                  placeholder="BI12345X"
                  readOnly={true}
                  {...register("bookID", {
                    required: true,
                  })}
                />
              </div>
              <div className="input-group mb-3">
                <label>Title: </label>
                <input
                  type="text"
                  placeholder="Book Title"
                  {...register("bookTitle", {
                    required: true,
                    minLength: 4,
                    maxLength: 80,
                  })}
                />
              </div>
              <div className="input-group mb-3">
                <label>Author: </label>
                <input
                  type="text"
                  placeholder="Author"
                  {...register("author", {
                    required: true,
                    minLength: 4,
                    maxLength: 80,
                  })}
                />
              </div>
              <div className="input-group mb-3">
                <label>Publisher: </label>
                <input
                  type="text"
                  placeholder="Publisher"
                  {...register("publisher", {
                    required: true,
                    minLength: 4,
                    maxLength: 80,
                  })}
                />
              </div>
              <div className="input-group mb-3">
                <button type="button" className="btn btn-dark btn-sm">
                  Next
                </button>
              </div>
              <div className="input-group mb-3">
                <SingleFileUpload/>
              </div>
            </div>
          </div>
          <div className="col-4">Column</div>
        </div>
      </div>
    </>
  );
};

export default AddNewBook;
