


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/RyanGC93/fitnessOverflow"> -->
    


  <h3 align="center">Path of Exile Tracker</h3>

  <p align="center">
    An economy tracking tool for the game Path of Exile
    <br />
    <a href="https://github.com/EvanMHargett/PoE-Tracker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://poe-tracker.herokuapp.com/">View Demo</a>
    .
    <a href="https://github.com/EvanMHargett/PoE-Tracker/wiki">Wiki</a>
    ·
    <a href="https://github.com/EvanMHargett/PoE-Tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/EvanMHargett/PoE-Tracker/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Path of Exile Tracker is an economy tracking tool for the game Path of Exile. Users can create, favorite and comment on flips. The economy data for this application is from the poe.ninja api. This allows for up to date information on the economy as it constantly changes, and thus allows players to make informed decisions on what to do currently. 

## Feature Highlights

### Obtaining information

- Collected and reorganized data from the poe.ninja api to quickly calculate what flips are profitable to do right now


### Efficient use of a Redux store

- All relevant information for the page is stored via Redux, such that it can be accessed and changed in O(1) time.


## Project Challenges



Utilizing a third-party api was a challenge, both in learning how it was organized and how to properly reorganize the data to fit my purposes. Additionally, given that the api did not return information in a consistent manner, organizing this data posed more of a challenge. 


### Built With

* [Javascript](https://www.javascript.com/)
* [Python](https://www.python.org/)
* [CSS]()
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [PostgreSQL](https://www.postgresql.org/) 
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone this repository

   ```bash
   git clone https://github.com/EvanMHargett/PoE-Tracker
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```




<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/RyanGC93/fitnessOverflow/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Evan Hargett - [LinkedIn](https://www.linkedin.com/in/evan-hargett-47723b162/) 

Project Link: [https://github.com/EvanMHargett/PoE-Tracker]()


<!-- ACKNOWLEDGEMENTS --


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/RyanGC93/fitnessOverflow.svg?style=for-the-badge
[forks-url]: https://github.com/EvanMHargett/PoE-Tracker/network/members
[stars-shield]: https://img.shields.io/github/stars/RyanGC93/fitnessOverflow.svg?style=for-the-badge
[stars-url]: https://github.com/EvanMHargett/PoE-Tracker/stargazers
[issues-shield]: https://img.shields.io/github/issues/RyanGC93/fitnessOverflow.svg?style=for-the-badge
[issues-url]: https://github.com/EvanMHargett/PoE-Tracker/issues
[license-shield]: https://img.shields.io/github/license/RyanGC93/fitnessOverflow.svg?style=for-the-badge
[license-url]: https://github.com/EvanMHargett/PoE-Tracker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/evan-hargett-47723b162/
