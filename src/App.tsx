import * as React from "react";
import { MovieListPage } from "./MovieListPage";
import { MoviePage } from "./MoviePage";
import { css } from "react-emotion";
import {
  Spacer,
  BlankButton,
  Panel,
  Slate,
  FlexInline,
  Container
} from "./dumb";

const AppStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
  i {
    font-style: normal;
  }

  background: #12121a;
  color: white;
  font-family: sans-serif;
  padding: 40px;
`;

export class App extends React.Component {
  state = {
    currentId: null,
    showDetails: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.showDetails !== this.state.showDetails ||
      prevState.currentId !== this.state.currentId
    )
      window.scrollTo(0, 0);
  }

  handleMovieClick = (id: number) => {
    this.setState(state => ({
      currentId: id,
      showDetails: true
    }));
  };

  handleBackClick = () => {
    this.setState(state => ({
      currentId: null,
      showDetails: false
    }));
  };

  render() {
    const { currentId, showDetails } = this.state;

    return (
      <div className={AppStyles}>
        <Container>
          {showDetails
            ? this.renderDetail(currentId as any)
            : this.renderList()}
        </Container>
      </div>
    );
  }

  renderDetail = (id: number) => {
    return (
      <React.Fragment>
        <BackButton onClick={this.handleBackClick} />
        <MoviePage id={id} />
      </React.Fragment>
    );
  };

  renderList = () => {
    return (
      <React.Fragment>
        <MovieListPage onMovieClick={this.handleMovieClick} />
      </React.Fragment>
    );
  };
}

function BackButton({ onClick }) {
  const styles = css`
    font-size: 22px;
    padding: 8px 4px;
  `;
  return (
    <BlankButton onClick={onClick}>
      <Slate hoverable>
        <i className={styles}>👈</i>
      </Slate>
    </BlankButton>
  );
}
