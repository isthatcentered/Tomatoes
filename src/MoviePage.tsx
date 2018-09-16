import * as React from "react";
import {
  movieDetailsJSON,
  movieDetail,
  movieReviewsJSON,
  movieReview
} from "./data";
import { css, cx } from "react-emotion";
import {
  Spacer,
  BlankButton,
  Panel,
  Slate,
  FlexInline,
  TomatoeRating,
  PageTitle,
  Sheet
} from "./dumb";

export function MoviePage({ id }) {
  return (
    <div>
      <Spacer />
      <Spacer />
      <MovieDetails id={id} />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <MovieReviews id={id} />
    </div>
  );
}

function MovieDetails({ id }) {
  const movie: movieDetail = movieDetailsJSON[id];
  const styles = css`
  hr {
    opacity: .2;
  }
  `;
  return (
    <FlexInline>
      <MoviePoster src={movie.poster} />
      <div className={styles}>
        <PageTitle>
          <h1>{movie.title}</h1>
        </PageTitle>
        <Spacer />
        <hr />
        <Spacer />
        <MovieMetrics {...movie} />
      </div>
    </FlexInline>
  );
}

function MoviePoster({ src }) {
  const styles = css`
  padding-right: 32px;
  `;

  return (
    <div className={styles}>
      <img src={src} alt="Movie poster" />
    </div>
  );
}

function MovieMetrics(props: movieDetail) {
  const { fresh, rating, audiance, consensus } = props;
  const styles = css`

    .pr {
      padding-right: 32px;
    }
  
  `;
  return (
    <div className={styles}>
      <FlexInline>
        <div className="pr">
          <Metric
            title="Tomatoemeter"
            icon={<TomatoeRating rating={rating} />}
            value={rating}
          />
        </div>

        <div className="pr">
          <Metric title="Audiance" icon="🍿" value={audiance} />
        </div>
      </FlexInline>

      <Spacer />
      <Metric title="Critics consensus" body={consensus} />
    </div>
  );
}

function Metric(props) {
  const { icon, title, value, body } = props;
  const styles = css`

    .Metric {

      &-title {
        font-size: 12px;
        text-transform: uppercase;
        color: #969AA0;
      }

      &-body {
        line-height: 1.25;
      }
    }
`;
  return (
    <div className={styles}>
      <h2 className="Metric-title">{title}</h2>
      <Spacer />
      {icon && value && <MetricValue {...props} />}
      <p className="Metric-body">{body}</p>
    </div>
  );
}

function MetricValue(props) {
  const { icon, title, value, body } = props;
  const styles = css`
    i,
     p {
      line-height: 1;
      font-size: 38px;
      font-style: normal;
    }
    i {
      padding-right: 8px;
    }
    p {
      font-weight: bold;
    }
`;
  return (
    <div className={styles}>
      <FlexInline center>
        <i>{icon}</i>
        <p>{value}</p>
      </FlexInline>
    </div>
  );
}

function MovieReviews({ id }) {
  const reviews: Array<movieReview> = movieReviewsJSON[1],
    styles = css`
    .item {
      padding-bottom: 16px;
      padding-right: 16px;
      width: 50%;
    }
    display: flex;
    flex-wrap: wrap;
    `;

  return (
    <div className={styles}>
      {reviews.map(r => (
        <div className="item">
          <MovieReview review={r} key={r.author} />
        </div>
      ))}
    </div>
  );
}

function MovieReview({ review }) {
  const { rating, author, body } = review,
    styles = css`
      i {
        font-size: 22px;
        padding-right: 16px;
      }
      p {
        font-size: 14px;
      }
      span {
        font-size: 12px;
        color: #969AA0;
      }

      padding: 16px;
    `;

  return (
    <Sheet>
      <div className={styles}>
        <FlexInline>
          <i>
            <TomatoeRating rating={rating} />
          </i>
          <div>
            <p>{body}</p>
            <Spacer />
            <span>{author}</span>
          </div>
        </FlexInline>
      </div>
    </Sheet>
  );
}
