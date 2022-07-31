import React, { useEffect } from "react";
import useAuth from "../../Services/AuthService";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "a201a19062ab4963a0ef8b986f43ce2f",
});

const Home = ({ code }) => {
  const accessToken = useAuth(code);

  console.log(accessToken);

  // useEffect(() => {
  //   if (!accessToken) return;

  //   // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again.
  //   spotifyApi.setAccessToken(accessToken);

  //   // Get user details with help of getMe() function
  //   spotifyApi.getMe().then((data) => {
  //     console.log(data);
  //   });
  // }, [accessToken]);

  return <div>{code}</div>;
};

export default Home;
