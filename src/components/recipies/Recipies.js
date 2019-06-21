import React, { Component } from "react";
import { getRecipe } from "../../actions/recipeActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Search from "../layout/Search";
import Recipe from "./Recipe";
// import Pagination from "react-js-pagination";

class Recipies extends Component {
  state = {
    search: "potato",
    from: "",
    to: "",
    recipes: ""
  };
  onChange = e => {
    this.setState({ search: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    let search = this.state.search;
    this.props.getRecipe(search);
  };
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    this.setState({
      from: this.props.from,
      to: this.props.to
    });
  }
  getNextTen = from => {
    console.log(from);
  };
  handlePageChange = e => {};
  render() {
    const { recipes, from, to } = this.props;
    // console.log(this.props.from, this.props.to);
    return (
      <div className="container">
        <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.onChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        {recipes ? (
          <div>
            <h3>Recipes:</h3>
            {/* <input
              type="button"
              value="Prev"
              className="btn btn-success"
              onClick={this.getPrevTen.bind(this, from)}
            />
            <input
              type="button"
              value="Next"
              className="btn btn-success"
              onClick={this.getNextTen.bind(this, to)}
            /> */}
            {/* <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={10}
              totalItemsCount={450}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            /> */}
            {recipes.map((recipe, index) => (
              <Recipe key={index} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p>Search for any recipe...</p>
        )}
      </div>
    );
  }
}

Recipies.propTypes = {
  getRecipe: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  recipes: state.recipies.recipe,
  from: state.recipies.from,
  to: state.recipies.to
});

export default connect(
  mapStateToProps,
  { getRecipe }
)(Recipies);
