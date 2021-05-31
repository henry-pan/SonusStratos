import React from 'react';
import Modal from "../modal/modal";

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
    <div className="splash-content">
      <Modal />
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
            <h3>StudioXehryn</h3>
          </div>
          <div className="splash-track">
            <img src={window.ds3} />
            <h2>Vordt of the Boreal Valley</h2>
            <h3>AshenOne</h3>
          </div>
          <div className="splash-track">
            <img src={window.aria} />
            <h2>Ruined Castle Corridor</h2>
            <h3>UCSomaCruz</h3>
          </div>
          <div className="splash-track">
            <img src={window.meruru} />
            <h2>Astarte</h2>
            <h3>Meruru</h3>
          </div>
          <div className="splash-track">
            <img src={window.fates} />
            <h2>Thorn in You (Roar)</h2>
            <h3>SongstressAzura</h3>
          </div>
          <div className="splash-track">
            <img src={window.kirby} />
            <h2>Frozen Hillside</h2>
            <h3>americankirby</h3>
          </div>
          <div className="splash-track">
            <img src={window.dreamshot} />
            <h2>Dreamshot Dissonance</h2>
            <h3>StudioXehryn</h3>
          </div>
          <div className="splash-track">
            <img src={window.automata} />
            <h2>Vague Hope (Cold Rain)</h2>
            <h3>devolapopola</h3>
          </div>
          <div className="splash-track">
            <img src={window.bw} />
            <h2>Driftveil City</h2>
            <h3>PeekAtYou</h3>
          </div>
          <div className="splash-track">
            <img src={window.ygo} />
            <h2>5D's Winning Theme</h2>
            <h3>YuseiGo</h3>
          </div>
          <div className="splash-track">
            <img src={window.kh3} />
            <h2>Vector to the Heavens -Xion-</h2>
            <h3>Roxmas</h3>
          </div>
          <div className="splash-track">
            <img src={window.ys7} />
            <h2>Vacant Interference</h2>
            <h3>AdolTheRed</h3>
          </div>
        </div>
      </section>
      <section className="splash-devices">
        <figure />
        <div className="splash-devices-info">
          <h2>Never stop listening</h2>
          <p>SonusStratos is available exclusively on the Web! And technically also iOS, Android, or any device that doesn't have an ancient browser.</p>
        </div>
      </section>
      <section className="splash-call">
        <div className="splash-call-container">
        <h2>Calling all creators</h2>
        <p>Get on SonusStratos to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
        <button className="button-transparent" onClick={() => openModal('login')}>Find out more</button>
        </div>
      </section>
      <section className="splash-join">
        <h2>Thanks for listening. Now join in.</h2>
        <h3>Save tracks, follow artists and build playlists. All for free.</h3>
        <button onClick={() => openModal('signup')}>Create account</button>
        <p>Already have an account? <button className="button-transparent" onClick={() => openModal('login')}>Sign in</button></p>
      </section>
      <section className="splash-footer">
        <span><a href="https://github.com/henry-pan">GitHub</a> - <a href="https://www.linkedin.com/in/henry-pan/">LinkedIn</a></span>
        <p>Language: English (US)</p>
      </section>
    </div>
  );
};
