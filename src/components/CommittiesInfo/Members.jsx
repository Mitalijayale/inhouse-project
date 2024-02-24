import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Members.module.css";
import member1Image from "./member1.png";
import member2Image from "./member2.png";
import member3Image from "./member3.png";
import member4Image from "./member4.png";

function Members() {
  return (
    <div className="row">
      {/* Pair 1 */}
      <div className={`${style.container} ${style.memberContainer}`}>
        <div className="card" style={{ border: "2px solid #c4c3c3" }}>
          <div className="card-body ">
            <h5 className="card-title">Name of the committee</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <h5 className="card-title ">Members</h5>
            <div className="container overflow-hidden text-center">
              <div className="row">
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className=" memb mr-5">
                    <img
                      src={member1Image}
                      alt="Member 1"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 1</p>
                    <p>Role or Studies 1</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0 ">
                    <img
                      src={member2Image}
                      alt="Member 2"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 2</p>
                    <p>Role or Studies 2</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0">
                    <img
                      src={member3Image}
                      alt="Member 1"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 1</p>
                    <p>Role or Studies 1</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0 ">
                    <img
                      src={member4Image}
                      alt="Member 2"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 2</p>
                    <p>Role or Studies 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Repeat for Pair 2, Pair 3, and Pair 4 */}

      <div className={`${style.container} ${style.memberContainer}`}>
        <div className="card" style={{ border: "2px solid #c4c3c3" }}>
          <div className="card-body ">
            <h5 className="card-title">Name of the committee</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <h5 className="card-title">Members</h5>
            <div className="container overflow-hidden text-center">
              <div className="row g-0">
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0">
                    <img
                      src={member1Image}
                      alt="Member 1"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 1</p>
                    <p>Role or Studies 1</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0 ">
                    <img
                      src={member2Image}
                      alt="Member 2"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 2</p>
                    <p>Role or Studies 2</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0">
                    <img
                      src={member3Image}
                      alt="Member 1"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 1</p>
                    <p>Role or Studies 1</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0 ">
                    <img
                      src={member4Image}
                      alt="Member 2"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 2</p>
                    <p>Role or Studies 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.container} ${style.memberContainer}`}>
        <div className="card " style={{ border: "2px solid #c4c3c3" }}>
          <div className="card-body ">
            <h5 className="card-title">Name of the committee</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <h5 className="card-title">Members</h5>
            <div className="container overflow-hidden text-center">
              <div className="row g-0">
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0">
                    <img
                      src={member1Image}
                      alt="Member 1"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 1</p>
                    <p>Role or Studies 1</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0 ">
                    <img
                      src={member2Image}
                      alt="Member 2"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 2</p>
                    <p>Role or Studies 2</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0">
                    <img
                      src={member3Image}
                      alt="Member 1"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 1</p>
                    <p>Role or Studies 1</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0 ">
                    <img
                      src={member4Image}
                      alt="Member 2"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 2</p>
                    <p>Role or Studies 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style.container} ${style.memberContainer}`}>
        <div className="card" style={{ border: "2px solid #c4c3c3" }}>
          <div className="card-body ">
            <h5 className="card-title">Name of the committee</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <h5 className="card-title">Members</h5>
            <div className="container overflow-hidden text-center">
              <div className="row g-0">
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0">
                    <img
                      src={member1Image}
                      alt="Member 1"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 1</p>
                    <p>Role or Studies 1</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0 ">
                    <img
                      src={member2Image}
                      alt="Member 2"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 2</p>
                    <p>Role or Studies 2</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0">
                    <img
                      src={member3Image}
                      alt="Member 1"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 1</p>
                    <p>Role or Studies 1</p>
                  </div>
                </div>
                <div className={`col-6 ${style.customProfileCol}`}>
                  <div className="p-0 ">
                    <img
                      src={member4Image}
                      alt="Member 2"
                      className={`${style.profileImage} rounded-circle`}
                    />
                    <p className="m-1">Member 2</p>
                    <p>Role or Studies 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
