import React from "react";

export default function Hobbies() {
  return (
    <div className="container pr-0 pl-0">
      <div className="cards-section">
        <div className="cards">
          <div className="card-head">Books</div>
          <div className="card-info">
            <p>
              Fiction: Wheel of Time (In progress), Agatha Christie's books.
              <br />
              Nonfiction: Age of Empathy, Everything is F*cked; a book about
              hope, Bad Samaritans: The Myth of Free Trade and the Secret
              History of Capitalism
            </p>
          </div>
        </div>

        <div className="cards">
          <div className="card-head">Music</div>
          <div className="card-info">
            <p>
              Jazz: Charles Mingus, Miles Davis, Ryo Fukui <br />
              80s J-pop: Tatsuro Yamashita, Mariya Takeuchi <br />
              Hip-hop: Nujabes, Anderson Paak, Kendrick Lamar, Substantial, DJ
              Okawari, Ta-Ku, Cyne, Cise Star <br />
              classical: Antonin Dvorak, Richard Wagner, Francisco Tarrega
              <br />
            </p>
          </div>
        </div>

        <div className="cards">
          <div className="card-head">Games</div>
          <div className="card-info">
            <p>
              Strategy: Civ Series, Stellaris <br />
              RPGs: Mass Effect Series, Witcher Series <br />
              Still yet to finish/play: Dragon Age: Origins, Arcanum: Of
              Steamworks and Magick Obscura, Planescape Torment, Oblivion,
              Morrowind, Original Deus Ex, Gothic 1 & 2, Vampire: The Masquerade
              – Bloodlines and Fallout 1 & 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
