import React, { useState, useEffect } from "react";
import axios from "axios";

// type AppLocalizer = {
//   apiUrl: string;
//   nonce: string;
// };

// declare global {
//   var appLocalizer: AppLocalizer;
// }

const Settings = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const [dataSent, setDataSent] = useState(false);

  const url = `${appLocalizer.apiUrl}/wreactapp/v1/settings`;

  console.log(appLocalizer.nonce);

  function handleSubmit(e) {
    e.preventDefault();
    setDataSent(true);
    // axios.defaults.headers.common['X-WP-Nonce'] = appLocalizer.nonce
    axios
      .post(
        `${url}`,
        JSON.stringify({
          firstname,
          lastname,
          email
        }),
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "X-WP-Nonce": appLocalizer.nonce
          },
        }
      )
      .then((res) => {
        setDataSent(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get(url).then((res) => {
      setFirstname(res.data.firstname);
      setLastname(res.data.lastname);
      setEmail(res.data.email);
    });
  }, []);

  return (
    <>
      <h1>WordPress Settings Component From React TypeScript Bismillah </h1>
      <div className="wp-settings-con">
        <form id="wp-settings-form" onSubmit={handleSubmit}>
          <table className="from-table" role="presentation">
            <tbody>
              <tr>
                <th scope="row">
                  <label htmlFor="firstname"> First Name: </label>
                </th>
                <td>
                  <input
                    className="regular-text"
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <label htmlFor="lastname"> Last Name: </label>
                </th>
                <td>
                  <input
                    className="regular-text"
                    type="text"
                    id="lasttname"
                    name="lasttname"
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <label htmlFor="email"> Email: </label>
                </th>
                <td>
                  <input
                    className="regular-text"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submit">
            <button className="button button-primary" type="submit">
              {dataSent ? "Data is bening saved" : "Save Data"}{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Settings;
