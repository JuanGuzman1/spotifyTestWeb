import React from "react";
import "./index.css";

const CLIENT_ID = "a201a19062ab4963a0ef8b986f43ce2f";
const CLIENT_SECRET = "84c58695ce71426b9fd47cd17422ba36";
const REDIRECT_URI = "http://localhost:3000/callback";

const Login = () => {
  const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;

  return (
    <div className="Container">
      <div>
        <img
          width={430}
          height={130}
          alt="noImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png"
        />
      </div>
      <div className="Button">
        <a href={url} className="TextButton">
          Login with spotify
        </a>
      </div>
    </div>
  );
};

export default Login;
