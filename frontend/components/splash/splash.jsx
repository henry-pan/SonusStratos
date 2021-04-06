import React from 'react';
import { Link } from "react-router-dom";

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div>
      <p>Welcome, {currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <nav className="login-signup">
      <button onClick={() => openModal('Login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('Signup')}>Signup</button>
    </nav>
  );
  
  return (
    <div className="content">
      <section className="splash-banner">
        {display}
        <h1>What's next in music is first on SonusStratos</h1>
        <p>Upload your first track and being your journey. SonusStratos gives
          you space to create, find your fans, and connect with other artists.
        </p>
      </section>
      <section className="splash-trending">
        <h1>Hear what's trending for free in the SonusStratos community</h1>
        <div className="splash-trending-items">
          <div className="splash-track">
            <img src="./assets/album/gop.png" />
            <h2>Cradle of Knowledge</h2>
            <h3>Gate of Providence</h3>
          </div>
          <div className="splash-track">
            <img src="./assets/album/fireemblem.png" />
            <h2>God Shattering Star</h2>
            <h3>Fire Emblem: Three Houses</h3>
          </div>
          <div className="splash-track">
            <img src="./assets/album/nierautomata.jpg" />
            <h2>Vague Hope (Cold Rain)</h2>
            <h3>NieR: Automata</h3>
          </div>
          <div className="splash-track">
            <img src="./assets/album/ys.jpg" />
            <h2>Genesis Beyond the Beginning</h2>
            <h3>Ys Origin</h3>
          </div>
          <div className="splash-track">
            <img src="./assets/album/atelier1.jpg" />
            <h2>Astarte</h2>
            <h3>Atelier Meruru</h3>
          </div>
          <div className="splash-track">
            <img src="./assets/album/pokemon.png" />
            <h2>Vast Poni Canyon</h2>
            <h3>Pokemon Sun and Moon</h3>
          </div>
          <div className="splash-track">
            <img src="./assets/album/dreamshot.png" />
            <h2>Dreamshot Dissonance</h2>
            <h3>Dreamshot Dissonance</h3>
          </div>
          <div className="splash-track">
            <img src="./assets/album/atelier2.jpg" />
            <h2>Nefertiti (Ver. MMXI)</h2>
            <h3>Atelier Meruru</h3>
          </div>
          <div className="splash-track">
            <img src="./assets/album/nier.png" />
            <h2>Shadowlord</h2>
            <h3>NieR</h3>
          </div>
          <div className="splash-track">
            <img src="./assets/album/smash.png" />
            <h2>Stickerbrush Symphony</h2>
            <h3>Super Smash Bros. Ultimate</h3>
          </div>
          <div className="splash-track">
            <img src="./assets/album/octopath.jpg" />
            <h2>They Who Govern Reason</h2>
            <h3>Octopath Traveller</h3>
          </div>
          <div className="splash-track">
            <img src="./assets/album/srw.jpg" />
            <h2>Ash to Ash</h2>
            <h3>Super Robot Wars OG</h3>
          </div>
        </div>
      </section>
    </div>
  );
};
