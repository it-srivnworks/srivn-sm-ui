import React from 'react'

const SingleReqInfo = ({request}) => {
  return (
    <>
      <div className="callout" key={request.id}>
                  <p>
                    <button
                      type="button"
                      className="btn btn-block btn-danger btn-sm"
                      style={{ textTransform: "uppercase" }}
                    >
                      {request.reqStatus}
                    </button>
                  </p>
                  <p>
                  {request.requestNo} : <small>{request.requestDate}</small>
                  </p>
                </div>
    </>
  )
}

export default SingleReqInfo
