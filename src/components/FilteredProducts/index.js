import React, { Component } from "react";
import Fuse from "fuse.js";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./styles.module.css";
import SearchIcon from "./SearchIcon";
import { Button } from "..";

class FilteredProducts extends Component {
  state = {
    search: ""
  };

  constructor(props) {
    super(props);

    const options = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 1000,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["markdown.excerpt", "markdown.frontmatter.title"]
    };

    this.fuse = new Fuse(props.posts.markdowns, options);
  }

  onChange = event => this.setState({ search: event.target.value });

  render() {
    const { posts } = this.props;
    const { search } = this.state;

    let searchResults = posts.markdowns;

    if (search.length > 0) {
      searchResults = this.fuse.search(search);
    }

    const matchedPosts = searchResults.map(({ markdown }) => {
      const { id } = markdown;
      const { title, slug, image } = markdown.frontmatter;

      return (
        <div key={id} className={styles.PostContainer}>
          <Link to={`/${slug}`} className={styles.Link}>
            <h3 className={styles.Title}>{title}</h3>
            <Img fluid={image.childImageSharp.fluid} />
          </Link>
        </div>
      );
    });

    // if search results are null
    if(this.state.search.length>0 && matchedPosts.length>0) {
      return (
        <>
        <div className={styles.InputContainer}>
          <label className={styles.Label}>
            <input
              className={styles.Input}
              type="search"
              value={this.state.search}
              onChange={this.onChange}
              placeholder="Search trips"
            />
            <SearchIcon className={styles.SearchIcon} />
          </label>
        </div>

        <div className={styles.ResultsContainer}>
          <p>We do not have that trip yet. Contact us and we will find it for you!</p>
          <div className={styles.divBtn}>
            <Button>Contact us!</Button>
          </div>
        </div>
        </>
      );
    }
    else {
    return (
      <>
        <div className={styles.InputContainer}>
          <label className={styles.Label}>
            <input
              className={styles.Input}
              type="search"
              value={this.state.search}
              onChange={this.onChange}
              placeholder="Search trips"
            />
            <SearchIcon className={styles.SearchIcon} />
          </label>
        </div>

        <div className={styles.ResultsContainer}>{matchedPosts}</div>
      </>
    );
  }

  }
}

export default FilteredProducts;
