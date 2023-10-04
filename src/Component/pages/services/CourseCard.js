import React from "react";
import web from "../../../images/New folder/02.PNG";
import mobile from "../../../images/New folder/01.png";
import Marketing from "../../../images/New folder/04.PNG";
import UI from "../../../images/New folder/03.PNG";
const CourseCard = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row mb-5">
          <div class="col-12 col-sm-6 col-md-3 m-auto" id="course">
            <div
              class="car shadow"
              style={{
                border: "1px solid darkgrey",
                borderBottom: "7px solid #04165D",
              }}
            >
              <img
                src={web}
                style={{
                  height: "140px",
                  width: "140px",
                  marginLeft: "0px",
                  marginTop: "10px",
                }}
                alt="ios mobile application development"
                class="card-img-top"
              />
              <div class="card-body">
                <h3 class="text-center">IOS App</h3>
                <hr class="mx-auto w-75" />
                <p style={{ textAlign: "center" }}>
                  We do IOS mobile application development from scratch and can
                  port your existing.
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-3 m-auto" id="course">
            <div
              class="car shadow"
              style={{
                border: "1px solid darkgrey",
                borderBottom: "7px solid #04165D",
              }}
            >
              <img
                src={mobile}
                alt="android apps development"
                class="card-img-top"
                style={{
                  height: "140px",
                  width: "140px",
                  marginLeft: "0px",
                  marginTop: "10px",
                }}
              />
              <div class="card-body">
                <h3 class="text-center">Android App</h3>
                <hr class="mx-auto w-75" />
                <p style={{ textAlign: "center" }}>
                  We develop Android apps for various devices using the Java and
                  Kotlin programming languages.
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-3 m-auto" id="course">
            <div
              class="car shadow"
              style={{
                border: "1px solid darkgrey",
                borderBottom: "7px solid #04165D",
              }}
            >
              <img
                src={UI}
                style={{
                  height: "140px",
                  width: "140px",
                  marginLeft: "0px",
                  marginTop: "10px",
                }}
                alt="web app development"
                class="card-img-top"
              />
              <div class="card-body">
                <h3 class="text-center">Web App</h3>
                <hr class="mx-auto w-75" />
                <p style={{ textAlign: "center" }}>
                  Our developers will create from single page applications to
                  customized complex web applications.
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-3 m-auto" id="course">
            <div
              class="car shadow"
              style={{
                border: "1px solid darkgrey",
                borderBottom: "7px solid #04165D",
              }}
            >
              <img
                src={Marketing}
                style={{
                  height: "140px",
                  width: "140px",
                  marginLeft: "0px",
                  marginTop: "10px",
                }}
                alt="hybrid native app development"
                class="card-img-top"
              />
              <div class="card-body">
                <h3 class="text-center">Hybrid-Native App</h3>
                <hr class="mx-auto w-75" />
                <p style={{ textAlign: "center" }}>
                  We offer a full spectrum of development services to build apps
                  that run on multiple platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};

export default CourseCard;
