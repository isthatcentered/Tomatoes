import * as React from "react";
import { movieListJSON, movieExcerpt } from "./data";
import { css } from "react-emotion";
import { Spacer, Panel, FlexInline, TomatoeRating, PageTitle } from "./dumb";

export function MovieListPage({ onMovieClick }) {
  const movies: Array<movieExcerpt> = movieListJSON;

  const styles = css`
  `;
  return (
    <div className={styles}>
      <Spacer />
      <Spacer />
      <PageTitle>
        <h1>Top box office 🍿</h1>
      </PageTitle>
      <Spacer />
      <Spacer />
      <Spacer />
      {movies.map(movie => (
        <React.Fragment key={movie.id}>
          <MovieLink excerpt={movie} onClick={() => onMovieClick(movie.id)} />
          <Spacer />
        </React.Fragment>
      ))}
    </div>
  );
}

function MovieLink({ excerpt, onClick }) {
  const { title, rating, gross } = excerpt as movieExcerpt;

  const styles = css`
    h1 {
      font-size: 22px;
      font-weight: bold;
      line-height: 1;
    }
    p {
      font-size: 14px;
      color: #969AA0;
      line-height: 1.5;
    }
    i {
      font-size: 32px;
      font-style: normal;
      padding-right: 16px;
    }
    i:last-child {
      margin-left: auto;
      font-size: 28px;
      opacity: 0;
    }
    :hover {

      i:last-child{
        opacity: 1;
      }

    }
  `;
  return (
    <article onClick={onClick} className={styles}>
      <Panel hoverable>
        <FlexInline>
          <i>
            <TomatoeRating rating={rating} />
          </i>

          <div>
            <h1>{title}</h1>
            <p>
              {rating} {gross}
            </p>
          </div>

          <i className="App-back">👉</i>
        </FlexInline>
      </Panel>
    </article>
  );
}
