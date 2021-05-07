import React from "react"

const Body = () => {
  return (
    <>
      <div className="container py-5">
        <div class="jumbotron">
          <h1 class="display-3">Project Name</h1>
          <p class="lead">
            Project Details. This is a simple hero unit, a simple
            jumbotron-style component for calling extra attention to featured
            content or information.
          </p>
          <hr class="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p class="lead">
            <a
              class="btn btn-primary btn-lg rounded-pill"
              href="/"
              role="button"
            >
              Click
            </a>
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div class="card text-white bg-danger mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h4 class="card-title">Primary card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div class="card text-white bg-danger mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h4 class="card-title">Primary card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div class="card text-white bg-danger mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h4 class="card-title">Primary card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Body
