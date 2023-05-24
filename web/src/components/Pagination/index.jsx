import React from "react";
import "./style.scss";

export default function Pagination({numberPage, percentage}) {
  return (
    <div className="Pagination">
      <section className="position">
        <div className="border"/>
        <div className="number">
          <p>{numberPage}</p>
        </div>
        <div className="border"/>
      </section>

      <section className="progress">
        <div className="numbering">
          <p>{numberPage}</p>
          <p>/</p>
          <p>04</p>
        </div>

        <div className="bar-progress">
          <div style={{height: percentage}}/>
        </div>
      </section>
    </div>
  );
}
