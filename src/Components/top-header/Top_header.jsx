import React from "react";
import "./t_header_style.css";

export default function Top_header() {
  return (
    <div>
      <header id="header">
        <div class="logo">
          <a href="#">
            <img src="https://bootstrapmade.com/assets/img/logo.png"></img>
            <strong>BOOTSTRAPMADE</strong>
            <span>MADE</span>
          </a>
        </div>
        <div class="navigate">
          <ul>
            <li>
              <a href="#">
                <img src="https://img.icons8.com/material-outlined/24/000000/external-link.png" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" />
              </a>
            </li>
            <li>
              <a class="download" href="">
                <img src="https://img.icons8.com/material-outlined/24/000000/downloading-updates.png" />
                <span>free download</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://img.icons8.com/ios/24/000000/less-than.png" />{" "}
              </a>
            </li>
            <li>
              <a href="">
                <img src="https://img.icons8.com/ios/24/000000/more-than.png" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
