import React from 'react';
import ReactDOM from 'react-dom/client';
import Naruto from './image/Naruto.jpg';
import Kakashi from './image/Kakashi.jpg';
import Itachi from './image/Itachi.jpg';
import Sasuke from './image/Sasuke.jpg';
import './index.css';

const App = () => {
	return (
		<div>
			{/* Naruto Section */}
			<div className="comment-container">
				<div className="avatar">
					<a href="/">
						<img src={Naruto} alt="Naruto Uzumaki" />
					</a>
				</div>

				<div className="content">
					<a href="/" className="naruto">
						<h2>Naruto Uzumaki – The Hero of Konoha</h2>
					</a>
					<div className="text">
						<p>
							Naruto Uzumaki is the main protagonist of the anime and manga series <b>Naruto</b>, created by Masashi Kishimoto.
							He is a ninja from the <b>Hidden Leaf Village (Konohagakure)</b> and the <b>Jinchūriki</b> of the Nine-Tails Fox, Kurama.
							Despite facing loneliness and rejection in his childhood, Naruto grows into a powerful and respected ninja, ultimately
							achieving his dream of becoming the <b>Seventh Hokage</b>.
						</p>
					</div>
				</div>
			</div>

			{/* Kakashi Section */}
			<div className="comment-container">
				<div className="avatar">
					<a href="/">
						<img src={Kakashi} alt="Kakashi Hatake" />
					</a>
				</div>

				<div className="content">
					<a href="/" className="kakashi">
						<h2>Kakashi Hatake – The Copy Ninja of Konoha</h2>
					</a>
					<div className="text">
						<p>
							Kakashi Hatake is one of the most skilled and respected ninjas in the <b>Naruto</b> series, known as the <b>Copy Ninja</b>
							due to his ability to copy over 1,000 jutsu using his <b>Sharingan</b>. He is a former ANBU captain and the leader of <b>Team 7</b>,
							which includes Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno. His laid-back personality hides his deep intelligence,
							tactical brilliance, and powerful combat skills.
						</p>
					</div>
				</div> 
			</div>

			{/* Itachi Section  */}
			<div className="comment-container">
				<div className="avatar">
					<a href="/">
						<img src={Itachi} alt="Itachi Uchiha" />
					</a>
				</div>

				<div className="content">
					<a href="/" className="itachi">
          <h2>Itachi Uchiha – The Tragic Hero of the Uchiha Clan</h2>
					</a>
					<div className="text">
						<p>
              Itachi Uchiha is one of the most complex and beloved characters in the 
              <b> Naruto</b> series. He was a prodigy of the Uchiha Clan and a member of 
              the elite <b> Anbu Black Ops</b>. From a young age, he displayed exceptional 
              intelligence, strength, and skill, becoming a <b> Chūnin at just 10 years old</b> and later 
              a captain of the Anbu at 13.
						</p>
					</div>
				</div>
			</div>

			{/* Sasuke Section */}
			<div className="comment-container">
				<div className="avatar">
					<a href="/">
						<img src={Sasuke} alt="Sasuke Uchiha" />
					</a>
				</div>

				<div className="content">
					<a href="/" className="sasuke">
						<h2>Kakashi Hatake – The Copy Ninja of Konoha</h2>
					</a>
					<div className="text">
						<p>
              Sasuke Uchiha is a central figure in the <b>Naruto</b> series, known as both 
              Naruto Uzumaki’s fiercest rival and closest companion. Born into the 
              prestigious Uchiha Clan, he was one of its most gifted prodigies. However, 
              his life took a tragic turn when his clan was annihilated, leaving him as one 
              of its last surviving members. Driven by an unyielding thirst for revenge, 
              Sasuke dedicates himself to avenging his family, believing his older brother, 
              Itachi Uchiha, to be the one responsible for their destruction.
						</p>
					</div>
				</div>
			</div>  
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
