import React from 'react';
import { Link } from "react-router-dom";

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div className="splash-signin">
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <nav className="splash-signin">
      <button className="button-transparent" onClick={() => openModal('login')}>Sign in</button>
      <button onClick={() => openModal('signup')}>Create account</button>
    </nav>
  );
  
  return (
    <div className="content">
      <h1 className="splash-logo"></h1>
      {display}
      <div className="splash-top"></div>
      <section className="splash-banner">
        {currentUser ? <h1>Welcome, {currentUser.username}!</h1> : <></>}
        <h1>What's next in music is first on SonusStratos</h1>
        <p>Upload your first track and begin your journey. SonusStratos gives you space to create, find your fans, and connect with other artists. 
        </p>
      </section>
      <section className="splash-trending">
        <h1>Hear what's trending for free in the SonusStratos community</h1>
        <div className="splash-trending-items">
          <div className="splash-track">
            <img src={window.gop} />
            <h2>Cradle of Knowledge</h2>
            <h3>Gate of Providence</h3>
          </div>
          <div className="splash-track">
            <img src={window.fireemblem} />
            <h2>God Shattering Star</h2>
            <h3>Fire Emblem: Three Houses</h3>
          </div>
          <div className="splash-track">
            <img src={window.nierAutomata} />
            <h2>Vague Hope (Cold Rain)</h2>
            <h3>NieR: Automata</h3>
          </div>
          <div className="splash-track">
            <img src={window.ys} />
            <h2>Genesis Beyond the Beginning</h2>
            <h3>Ys Origin</h3>
          </div>
          <div className="splash-track">
            <img src={window.atelier1} />
            <h2>Astarte</h2>
            <h3>Atelier Meruru</h3>
          </div>
          <div className="splash-track">
            <img src={window.pokemon} />
            <h2>Vast Poni Canyon</h2>
            <h3>Pokemon Sun and Moon</h3>
          </div>
          <div className="splash-track">
            <img src={window.dreamshot} />
            <h2>Dreamshot Dissonance</h2>
            <h3>Dreamshot Dissonance</h3>
          </div>
          <div className="splash-track">
            <img src={window.kh} />
            <h2>The Other Promise</h2>
            <h3>Kingdom Hearts II Final Mix</h3>
          </div>
          <div className="splash-track">
            <img src={window.nier} />
            <h2>Shadowlord</h2>
            <h3>NieR</h3>
          </div>
          <div className="splash-track">
            <img src={window.smash} />
            <h2>Stickerbrush Symphony</h2>
            <h3>Super Smash Bros. Ultimate</h3>
          </div>
          <div className="splash-track">
            <img src={window.octopath} />
            <h2>They Who Govern Reason</h2>
            <h3>Octopath Traveller</h3>
          </div>
          <div className="splash-track">
            <img src={window.srw} />
            <h2>Ash to Ash</h2>
            <h3>Super Robot Wars OG</h3>
          </div>
        </div>
      </section>
    </div>
  );
};
