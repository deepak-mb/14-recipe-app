import React, { Component } from "react";

class Recipe extends Component {
  render() {
    const {
      label,
      image,
      url,
      dietLabels,
      healthLabels,
      ingredientLines
    } = this.props.recipe.recipe;
    // console.log(recipe);
    let p;
    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div
            className="col-md-4 bg-image"
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* <img src={image} className="card-img" alt="Food" /> */}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{label}</h5>
              <ul>
                {ingredientLines.map((ingredient, index) => (
                  <li key={index} className="card-text">
                    {ingredient}
                  </li>
                ))}
              </ul>
              <p>
                Diet:{" "}
                {dietLabels.length !== 0 ? (
                  dietLabels.map((diet, index) => (
                    <span className="card-text" key={index}>
                      {diet},{" "}
                    </span>
                  ))
                ) : (
                  <span className="card-text">N/A</span>
                )}
              </p>
              <p className="card-text">
                Health benifits:{" "}
                {healthLabels !== 0 ? (
                  healthLabels.map((benefit, index) => (
                    <span key={index}>{benefit}, </span>
                  ))
                ) : (
                  <span className="card-text">N/A</span>
                )}
              </p>
            </div>
            <div className="card-footer bg-transparent">
              <a
                href={url}
                className="btn btn-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                See full recipe
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
