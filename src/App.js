import Navbar from "./components/navbar";
import PuppyCard from "./components/puppyCard";
import Filters from "./components/filters";
import Footer from "./components/footer";

import LazyLoad from "react-lazyload";
import React, { useState, useEffect } from "react";
function App() {
  const axios = require("axios");
  const [puppies, setPuppies] = useState([]);
  const [sortedPuppies, setSortedPuppies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://www.petlandflorida.com/wp-json/petland/v1/available-puppies"
      )
      .then((response) => {
        setPuppies(response.data.puppies);
        setSortedPuppies(response.data.puppies);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <img
        className="banner"
        src="https://www.petlandflorida.com/wp-content/themes/petland/assets/images/available-puppies-desktop.jpg"
        alt="doggy"
      />
      <div className="container">
        <div className="titles">
          <span className="small-title">available</span>
          <span className="big-title">puppies</span>
        </div>
        <Filters
          list={puppies}
          sortedList={sortedPuppies}
          changeSortedList={setSortedPuppies}
        />
        <div className="puppies-list">
          {sortedPuppies.map((puppy, index) => {
            if (puppy.Photo != null) {
              let photo = `${puppy.Photo.BaseUrl}${puppy.Photo.Original}`;
              return (
                <LazyLoad key={index} height={200}>
                  <PuppyCard
                    photo={photo}
                    petType={puppy.PetType}
                    gender={puppy.Gender}
                    petId={puppy.PetId}
                    birthDate={puppy.BirthDate}
                    petName={puppy.PetName}
                    breedName={puppy.BreedName}
                    location={puppy.Location}
                    videoUrl={puppy.VideoUrl}
                  />
                </LazyLoad>
              );
            } else {
              return (
                <LazyLoad key={index} height={200}>
                  <PuppyCard
                    photo={puppy.Photo}
                    petType={puppy.PetType}
                    gender={puppy.Gender}
                    petId={puppy.PetId}
                    birthDate={puppy.BirthDate}
                    petName={puppy.PetName}
                    breedName={puppy.BreedName}
                    location={puppy.Location}
                    videoUrl={puppy.VideoUrl}
                  />
                </LazyLoad>
              );
            }
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
