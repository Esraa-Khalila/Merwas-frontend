import React from "react";
import "./Discover.css";
import { useState } from "react";
import {discover} from '../../json/db'

function Discover() {
  const [filter, setFilter] = useState(discover);
  return (
    <div className="discover">
      <div>
        <h5 class="discover-text mb-0 fs-4 ">Discover</h5>
        <hr />
      </div>
      <ul class="search-filter list-unstyled">
        {filter.map((data) => (
          <li>
            <a href={data.link} class="text-capitalize">
              {data.title}
              <span class="badge"> {data.count}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Discover;
