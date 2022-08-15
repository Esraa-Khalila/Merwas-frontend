import React from "react";
import "./Discover.css";
import { useState } from "react";
import {discover} from '../../json/db'

function Discover() {
  const [filter, setFilter] = useState(discover);
  return (
    <div className="discover bg-white p-3">
      <div>
        <h5 class="discover-text mb-0 py-7 px-3 ">Discover</h5>
        <hr />
      </div>
      <ul class="search-filter list-unstyled">
        {filter.map((data) => (
          <li className="p-2 ">
            <a href={data.link} class="text-capitalize d-flex justify-content-between">
              {data.title}
              <span class="badge pl-5"> {data.count}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Discover;
