import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web' ;


import  NewsCards  from './components/NewsCards/NewsCards';
import useStyles from './styles';

const App = () => {
	const [ activeArticle, setActiveArticle ] = useState(0);
	const [ newsArticles, setNewsArticles ] = useState([]);
	
	
	const classes = useStyles();

	useEffect(() => {
		alanBtn({
			key: '  <YOUR ALAN KEY>  ',
			onCommand: ({ command, articles, number }) => {
				if (command === 'newHeadlines') {
					setNewsArticles(articles);
					setActiveArticle(-1);
				} 
				
				else if (command === 'highlight') {
					setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
				} else if (command === 'open') {
					const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
					const article = articles[parsedNumber - 1];

					if (parsedNumber > 20) {
						alanBtn().playText('Please try that again...');
					} else if (article) {
						window.open(article.url, '_blank');
						alanBtn().playText('Opening...');
					} else {
						alanBtn().playText('Please try that again...');
					}
				}
			}
		});
	}, []);

	return (
		<div>
			<div className={classes.logoContainer}>
				{newsArticles.length ? (
					<div className={classes.infoContainer}>
						
						<div className={classes.card}>
							<Typography variant="h5" component="h2">
								Try saying: <br />
								<br />Open article number 4
							</Typography>
						</div>
						<div className={classes.card}>
							<Typography variant="h5" component="h2">
								Try saying: <br />
								<br />Go back
							</Typography>
						</div>
					</div>
				) : null}

			
				<img src="https://serving.photos.photobox.com/70843426fdcca05d8d5f7e332f82de4b1d34e5a8e9f61b0933700c9e64d7b2cf38f5f0b9.jpg" className={classes.alanLogo} alt="aiden logo" />
			</div>
			<NewsCards articles={newsArticles} activeArticle={activeArticle} />
			
			{!newsArticles.length ? (
				<div className={classes.footer}>
					<Typography variant="body1" component="h2">
						Built by

						
						<a className={classes.link} href="https://www.github.com/proghead00/">
							{' '}
							Susnata Goswami
							<br />
							
							
						</a>
						<br />
						Click 
						<a className={classes.link} href="https://drive.google.com/file/d/18Lro67zNudRErLPzmY8dAGnxFswJIaRN/view?usp=sharing">
							{' '}
							<b>here</b>
						</a>
						to see what else you can do with Aiden! 
							<br />
							
						
							

						<b> N.B</b>: Please don't turn off pop-ups on your browser or Aiden won't be able to read the news
						
						{/* <a href="https://www.facebook.com/susnata01" class="icon">
                            <i class="fab fa-facebook fa-2x"></i>

						</a>

						<a href="https://www.instagram.com/susnatoww/" class="icon">
                            <i class="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://github.com/proghead00" class="icon">
                            <i class="fab fa-github fa-2x"></i>
                        </a>
                        <a href="https://twitter.com/susnatoww" class="icon">
                            <i class="fab fa-twitter fa-2x"></i>
                        </a> */}

						
					
						
						
						{' '}
						
					</Typography>
					
				</div>
			) : null}
		</div>
	);
};

export default App;
