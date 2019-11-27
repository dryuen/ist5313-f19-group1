function processQuiz()
{
	var answer1 = document.forms.quiz1.question1.value;
	var answer2 = document.forms.quiz1.question2.value;
	var answer3 = document.forms.quiz1.question3.value;
	var answer4 = document.forms.quiz1.question4.value;
	var answer5 = document.forms.quiz1.question5.value;
	var counter = 0;
	if( answer1 == 2 )
	{
	counter = counter + 1;
	}
	if( answer2 == 0 )
	{
	counter = counter + 1;
	}
	if( answer3 == 1 )
	{
	counter = counter + 1;
	}
	if( answer4 == 2 )
	{
	counter = counter + 1;
	}
	if( answer5 == 2 )
	{
	counter = counter + 1;
	}
	var percentage = counter * 20;
	
	if( percentage >= 80 )
	{
		alert( "Your score is " + percentage + "%. You Passed." );
		document.getElementById( "certificate-link" ).style.display = "inline";
	}
	else
	{
		alert( "Your score is " + percentage + "%. You Failed." );
	}
	//here is some extra content
	
	//parent.reportScores( percentage );
}
