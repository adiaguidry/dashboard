import React from "react";

const Profile = () => {
  return (
    <div className="row m-4">
      <div className="col-md-12">
        <div className=" card" style={{ width: "100%" }}>
          <div className="card-body">
            <h5 className="card-title">Breakfast this Week</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <div>
              <form>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Example select</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect2">
                    Example multiple select
                  </label>
                  <select
                    multiple
                    className="form-control"
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
