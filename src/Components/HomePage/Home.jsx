import React from "react";
import Header from "../Header/Header";
import Container from "../SectionContainer/Container";
import { useState, useEffect } from "react";
import {
  featureds,
  collections,
  escapes,
  activities,
  stores,
  restaurants,
  beauties,
  houses,
  sports,
  automotives,
} from "../../json/db";

function Home() {
  const [featured, setFeatured] = useState(featureds);
  const [collection, setCollection] = useState(collections);
  const [escape, setEscapes] = useState(escapes);
  const [activitie, setaAtivities] = useState(activities);
  const [store, setStore] = useState(stores);
  const [restaurant, setRestaurant] = useState(restaurants);
  const [beauty, setBeauties] = useState(beauties);
  const [house, setHouses] = useState(houses);
  const [sport, setSports] = useState(sports);
  const [automotive, setAutomotives] = useState(automotives);
  console.log(window.innerWidth);

  return (
    <div className="container-fluid px-sm-5">
      <Header />

      <Container
        title={"Featured Auckland deals"}
        data={featured}
        isDefault={true}
      />
      <Container title={"Collections"} data={collection} isDefault={false} />
      <Container title={"Escapes"} data={escape} isDefault={true} />
      <Container
        title={"Activities, Events & Outdoors"}
        data={activitie}
        isDefault={true}
      />
      <Container title={"Store"} data={store} isDefault={true} />
      <Container
        title={"Activities, Events & Outdoors"}
        data={escape}
        isDefault={true}
      />
      <Container
        title={"Restaurants, Bars, Cafes"}
        data={restaurant}
        isDefault={true}
      />
      <Container
        title={"Beauty, Massage & Spa"}
        data={beauty}
        isDefault={true}
      />
      <Container title={"House & Garden"} data={house} isDefault={true} />
      <Container title={"Fitness & Sports "} data={sport} isDefault={true} />
      <Container title={"Automotive "} data={automotive} isDefault={true} />
    </div>
  );
}

export default Home;
