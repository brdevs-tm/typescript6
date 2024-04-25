import React, { useState } from "react";
import "./App.css"; // Importing CSS for styling
import logo from "./assets/img/logo.svg";
import user1 from "./assets/img/users/user1.png";
import user2 from "./assets/img/users/user2.png";
import user3 from "./assets/img/users/user3.png";
import user4 from "./assets/img/users/user4.png";
import user5 from "./assets/img/users/user5.png";
import user6 from "./assets/img/users/user6.png";
import user7 from "./assets/img/users/user7.png";
import user8 from "./assets/img/users/user8.png";
const userData = [
  {
    id: 1,
    name: "Evelyn Hart",
    img: user1,
    height: 180,
    weight: 70,
    eyeColor: "Blue",
    hairColor: "Blonde",
    bio: "Evelyn is a keen hiker and enjoys exploring remote landscapes. She is also an amateur photographer, capturing the beauty of nature. A lover of dogs and coffee, she volunteers at local animal shelters on weekends. Currently, she is studying environmental science.",
  },
  {
    id: 2,
    name: "Oliver Grant",
    img: user2,
    height: 175,
    weight: 65,
    eyeColor: "Green",
    hairColor: "Brown",
    bio: "Oliver loves literature and gourmet cooking. He hosts a book club where culinary delights meet engaging conversations. His passion for history inspires his travel destinations. Professionally, Oliver is involved in architectural design.",
  },
  {
    id: 3,
    name: "Sophia Lane",
    img: user3,
    height: 165,
    weight: 50,
    eyeColor: "Brown",
    hairColor: "Black",
    bio: "Sophia is passionate about photography and travel. She blogs about her journeys, often bringing light to hidden gems of the cities she visits. A fluent Spanish speaker, she loves salsa dancing. Sophia works in digital marketing.",
  },
  {
    id: 4,
    name: "Liam Parker",
    img: user4,
    height: 170,
    weight: 68,
    eyeColor: "Hazel",
    hairColor: "Red",
    bio: "Liam is a tech enthusiast with a love for gaming and coding. He develops mobile apps and contributes to open-source projects. An advocate for cybersecurity, Liam frequently speaks at tech conferences. He enjoys mountain biking on weekends.",
  },
  {
    id: 5,
    name: "Amelia Foster",
    img: user5,
    height: 182,
    weight: 76,
    eyeColor: "Grey",
    hairColor: "Dark",
    bio: "Amelia is a fitness coach and a personal trainer who specializes in holistic health approaches. She writes articles on healthy living and personal development. Amelia is also a yoga instructor. In her downtime, she explores vegan cooking.",
  },
  {
    id: 6,
    name: "Noah Ellis",
    img: user6,
    height: 160,
    weight: 60,
    eyeColor: "Blue",
    hairColor: "Blonde",
    bio: "Noah is an artist specializing in watercolors and oil paintings. His work has been featured in several galleries across the country. A musician at heart, he plays the guitar and piano. Noah also teaches art at a community college.",
  },
  {
    id: 7,
    name: "Isabella Mason",
    img: user7,
    height: 158,
    weight: 54,
    eyeColor: "Green",
    hairColor: "Brown",
    bio: "Isabella is a writer and poet whose work reflects her deep observations of society. She has published two novels and a collection of poetry. Involved in local theater, she writes and directs plays. Isabella enjoys long walks in the countryside.",
  },
  {
    id: 8,
    name: "Jacob Howard",
    img: user8,
    height: 185,
    weight: 78,
    eyeColor: "Brown",
    hairColor: "Black",
    bio: "Jacob is an adventurer and professional climber who has summited major peaks worldwide. He documents his climbs to raise environmental awareness. An experienced survival trainer, Jacob also conducts workshops. He's an avid reader of adventure literature.",
  },
];

// Main App component
const App = () => {
  const [selectedUser, setSelectedUser] = useState(userData[0]); // State to hold the currently selected user

  // Function to update the selected user
  const selectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <header>
        <div className="container">
          <img
            src={logo}
            alt="Znakomstva.com logo"
            width="60px"
            height="60px"
          />
          <span>Znakomstva.com</span>
        </div>
      </header>
      <main>
        <div className="container">
          <nav>
            <div className="nav-left">
              <a href="#home">
                <span>Znakomstva.com</span>
              </a>
            </div>
            <div className="nav-right">
              <a href="#about">Впервые здесь?</a>
              <button>Регистрация</button>
            </div>
          </nav>
          <div className="main-content">
            <div className="user">
              <div className="user-left">
                <div className="main-user">
                  <img src={selectedUser.img} alt={selectedUser.name} />
                </div>
                <div className="user-indicators">
                  {userData.map((user) => (
                    <button key={user.id} onClick={() => selectUser(user)}>
                      <img
                        src={user.img}
                        alt={user.name}
                        width="100px"
                        height="100px"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="user-right">
                <div className="name">
                  <h1>
                    {selectedUser.name}
                    <span></span>
                  </h1>
                  <button>Participating</button>
                </div>
                <div className="details">
                  <div>
                    <span>Height:</span>
                    <p>{selectedUser.height} cm</p>
                  </div>
                  <div>
                    <span>Weight:</span>
                    <p>{selectedUser.weight} kg</p>
                  </div>
                  <div>
                    <span>Eye Color:</span>
                    <p>{selectedUser.eyeColor}</p>
                  </div>
                  <div>
                    <span>Hair Color:</span>
                    <p>{selectedUser.hairColor}</p>
                  </div>
                  <div>
                    <span>Bio:</span>
                    <p>{selectedUser.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <section className="footer-section">
            <ul className="links">
              <li className="link">
                <a href="#about-us">О нас</a>
              </li>
              <li className="link">
                <a href="#support">Поддержка</a>
              </li>
              <li className="link">
                <a href="#tips">Советы</a>
              </li>
              <li className="link">
                <a href="#contacts">Контакты</a>
              </li>
              <li className="link">
                <a href="#payment-rules">Правила оплаты</a>
              </li>
            </ul>
            <span>Политика обработки персональных данных</span>
            <span>RU</span>
            <span>© Company 2021</span>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default App;
