import * as React from "react";
import { css, cx } from "react-emotion";

export const Container = ({ children }) => {
  const styles = css`
  width: 650px;
  max-width: 100%;
  margin: auto;
  `;

  return <div className={styles}>{children}</div>;
};

export const PageTitle = ({ children }) => {
  const styles = css`
  * {
    font-size: 42px;
    font-weight: bold;
    line-height: 1;
  }
  `;

  return <div className={styles}>{children}</div>;
};

export const BlankButton = ({ children, ...props }) => {
  const styles = css`
  border:none;
  padding:0;
  background:transparent;
  cursor: pointer;
  `;

  return (
    <button {...props} className={styles}>
      {children}
    </button>
  );
};

export const Spacer = () => {
  const styles = css`
  padding-top: 16px;
  `;

  return <div className={styles} />;
};

export const Sheet = ({ children, ...props }) => {
  const styles = css`
  background: #191C25;
  `;

  const hover = props.hoverable
    ? css`
      :hover {
        background: #1E212A;
      }

      cursor: pointer;
  `
    : null;

  return (
    <React.Fragment>
      <div className={cx(styles, hover)}>{children}</div>
    </React.Fragment>
  );
};

export const Slate = ({ children, ...props }) => {
  const styles = css`
  border: 2px solid #23272E;
  border-radius: 4px;
  `;

  return (
    <React.Fragment>
      <div className={styles}>
        <Sheet hoverable={props.hoverable}>{children}</Sheet>
      </div>
    </React.Fragment>
  );
};

export const Panel = ({ children, ...props }) => {
  const styles = css`
  padding: 16px;
  `;
  return (
    <Slate hoverable={props.hoverable}>
      <div className={styles}>{children}</div>
    </Slate>
  );
};

export const FlexInline = ({ children, ...props }) => {
  const styles = css`
      display: flex;
      flex-direction: row;
      justify-content: start;
      `;

  const vCenter = props.center
    ? css`
      align-items: center;
    `
    : null;

  return (
    <React.Fragment>
      <div className={cx(styles, vCenter)}>{children}</div>
    </React.Fragment>
  );
};

export function TomatoeRating({ rating }) {
  const tomatoe = parseInt(rating) > 70 ? "🍅" : "🤢";

  return <React.Fragment>{tomatoe}</React.Fragment>;
}
