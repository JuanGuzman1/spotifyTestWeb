import { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import querystring from "querystring";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  useEffect(() => {
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        querystring.stringify({
          grant_type: "authorization_code",
          code: code,
          redirect_uri: "http://localhost:3000/callback",
        }),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${new Buffer.from(
              `a201a19062ab4963a0ef8b986f43ce2f:84c58695ce71426b9fd47cd17422ba36`
            ).toString("base64")}`,
          },
        }
      )
      .then((response) => {
        // If success then cut the code string from the URL and execute the other thing
        if (response.status === 200) {
          console.log(response.data);
          setAccessToken(response.data.accessToken);
        }
      })
      .catch((error) => {
        console.log(error);
        //   If fail redirect to home page - Login page
        //window.location = "/";
      });
  }, [code]);

  return accessToken;
}
