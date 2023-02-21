import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SingleFileUpload from "../../common/SingleFileUpload";
import mdlogo from "../../../assets/images/home/srivn.png";

const AddNewBook = () => {
  console.log("---AddNewBook");
  const [fileId, setFileId] = useState("X12345");
  const [isUploaded, setIsUploaded] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //registerData(JSON.stringify(data))
    console.log("Form Submitted................" + JSON.stringify(data));
  };

  const respFn = () => {
    console.log("File Upload Succesfully");
    setIsUploaded(true);
  };

  return (
    <>
      <div className="container">
        <div className="card-primary-card-outline">
          <div className="card-header">
            <h3 className="card-title">
              <i className="far fa-chart-bar" />
              Add New Entry
            </h3>
            <div className="card-right">{fileId}</div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label>Book Title</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Book Title"
                      {...register("bookTitle", {
                        required: true,
                        minLength: 4,
                        maxLength: 80,
                      })}
                    />
                    {errors.bookTitle?.type === "required" && (
                      <p className="text-danger">Required!</p>
                    )}
                    {(errors.bookTitle?.type === "minLength" ||
                      errors.bookTitle?.type === "maxLength") && (
                      <p className="text-danger">Min 4 - Max 80</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Author</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Author"
                      {...register("author", {
                        required: true,
                        minLength: 4,
                        maxLength: 80,
                      })}
                    />
                    {errors.author?.type === "required" && (
                      <p className="text-danger">Required!</p>
                    )}
                    {(errors.author?.type === "minLength" ||
                      errors.author?.type === "maxLength") && (
                      <p className="text-danger">Min 4 - Max 80</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Publication</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Publication"
                      {...register("publication", {
                        required: true,
                        minLength: 4,
                        maxLength: 80,
                      })}
                    />
                    {errors.publication?.type === "required" && (
                      <p className="text-danger">Required!</p>
                    )}
                    {(errors.publication?.type === "minLength" ||
                      errors.publication?.type === "maxLength") && (
                      <p className="text-danger">Min 4 - Max 80</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">ISBN number</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="X121323X"
                      {...register("isbn", {
                        required: true,
                        minLength: 4,
                        maxLength: 80,
                      })}
                    />
                    {errors.publication?.type === "required" && (
                      <p className="text-danger">Required!</p>
                    )}
                    {(errors.publication?.type === "minLength" ||
                      errors.publication?.type === "maxLength") && (
                      <p className="text-danger">Min 4 - Max 80</p>
                    )}
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="exampleInputEmail1">Category</label>
                        <select
                          className="form-control"
                          {...register("category", { required: true })}
                        >
                          <option value="bestseller">BestSeller</option>
                          <option value="fiction">Fiction</option>
                          <option value="nonFiction">Non-Fiction</option>
                          <option value="selfHelp">Self Help</option>
                        </select>
                        {errors.bookUnits?.type === "required" && (
                          <p className="text-danger">Required!</p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="exampleInputEmail1">Units</label>
                        <input
                          className="form-control"
                          type="number"
                          defaultValue={1}
                          {...register("bookUnits", {
                            required: true,
                            min: 1,
                            max: 1000,
                          })}
                        />
                        {errors.bookUnits?.type === "required" && (
                          <p className="text-danger">Required!</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                {!isUploaded && (
                  <>
                    <div className="form-group">
                      <h4>Upload Cover</h4>
                    </div>
                    <div className="form-group">
                      <SingleFileUpload
                        fileId={fileId}
                        respFn={respFn}
                      ></SingleFileUpload>
                    </div>
                  </>
                )}
                {isUploaded && (
                  <>
                    <div className="form-group">
                      <div>
                        <img src={mdlogo} className="full-image"></img>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="card-right">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => {
                            setIsUploaded(false);
                          }}
                        >
                          Re Upload
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </>
  );
};

export default AddNewBook;
