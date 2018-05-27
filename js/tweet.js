
// $(document).ready(function(){
	var randomQuote;
	var randomNum;
	var randomAuthor;

	var quotes = [ "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
				 		"But man is not made for defeat. A man can be destroyed but not defeated.",
				 		"When you reach the end of your rope, tie a knot in it and hang on.",
				 		"There is nothing permanent except change.",
				 		"You cannot shake hands with a clenched fist.",
				 		"Let us sacrifice our today so that our children can have a better tomorrow.",
						"It is better to be feared than loved, if you cannot be both.",
				 		"The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
				 		"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself." ];

	var author = [ "-John Keats-", "-Ernest Hemingway-", "-Franklin D. Roosevelt-", "-Heraclitus-", "-Indira Gandhi-", "-A. P. J. Abdul Kalam-", "-Niccolo Machiavelli-",  "-Amelia Earhart-", "-Henry James-"];
	function getQuote(){
		

		
		randomNum = Math.floor((Math.random()*quotes.length));
		randomQuote = quotes[randomNum];
		randomAuthor = author[randomNum];
		$("#quote-text").html(randomQuote);
		$("#author-quote").html(randomAuthor);
	};
	
	$(function(){
 		getQuote();
	}); 


	function tweetQuote(){
		stringPOST = quotes[randomNum] + "\n" + author[randomNum];
		window.open('https://twitter.com/intent/tweet?text=' + escape(stringPOST), '', 'width=800, height=600, left=400, top=20');
	} 
// });
