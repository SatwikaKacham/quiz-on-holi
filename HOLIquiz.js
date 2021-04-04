var rls = require("readline-sync");
 var chalk = require("chalk");
 var score=0;
 var name =rls.question(chalk.bgMagenta("Please enter ur name here "))
 console.log("Welcome"  + chalk.blueBright.underline("\""+name+"\"") +" to " + chalk.blueBright(" Satwika's Quiz ") + " on " +chalk.yellowBright.underline("\"HOLI\"" ));
 console.log(chalk.bgBlue("INSTRUCTIONS:\n") + "1.the quiz comprise of Objective type multiple chose questions.\n2.Correct option should be entered in the given space \n3.Each carries ONE mark and NO NEGATIVES\n4.Quiz contain 2 LEVELS each contain 5 questions.\n5.if u score 3 or more in level 1 u will be promoted to next level. ")
 console.log(chalk.yellow("......................................."));
 q1 = // q1 reffers to question 1
 {
   question: (chalk.cyanBright("1.who has the power to protect themself's with a cloak?")+chalk.yellowBright(" \n1. Hiranyakashipudu \n2. Prahlada \n3. Holika \n4. Krishna \n")),
   answer: "3",
 }
 q2 = 
 {
   question: (chalk.cyanBright("2. who is holika?")+chalk.yellowBright( "  \n1. Mother of prahlada\n2. Sister of hiranyakashipudu \n3. Daughter of hiranyaksha \n4. Mother of sinhika\n" )),
   answer: "2",
 }
 q3 = 
 {
   question: (chalk.cyanBright("3. who are parents of Hiranyakashipudu ?")+chalk.yellowBright(" \n1. Kashyapa and Diti \n2. Kashyapa and Aditi \n3. Kashyapa and  Arishta\n4. Kashyapa and Vinata\n")),
   answer: "1",
 }

  q4 = 
 {
   question: (chalk.cyanBright("4.whom did prahalada worshipped?") + chalk.yellowBright(" \n1. Hiranyakashipudu \n2. vishnu \n3. Holika \n4. kayadhu \n")),
   answer: "2",
 }
  q5 = 
 {
   question: ( chalk.cyanBright("5.what is the power of hiranyakashipudu?")+ chalk.yellowBright(" \n1.he cannot be killed only by the god \n2.he cannot be killed only by the animal  \n3.he cannot be killed  by the human and god\n4.he cannot be killed  by the human and animal \n")),
   answer: "4",
 }
  q6 = 
 {
   question: (chalk.cyanBright("6.whom did hiranyakashipu punished for not praying him?") + chalk.yellowBright(" \n1. sinhika \n2. prahlada \n3. Holika \n4. Diti \n")),
   answer: "2",
 }

  q7 = 
 {
   question: (chalk.cyanBright("7.which one among the following is used as weapon to kill hiranyakashipu ?") + chalk.yellowBright(" \n1. Nails \n2. Teeth \n3. Sword \n4. Rapier  \n")),
   answer: "1",
 }
 q8 = 
 {
   question: (chalk.cyanBright("8. who killed hiranyakashyap ?") + chalk.yellowBright(" \n1. Brahma \n2. Krishna \n3. Vishnu \n4. Shiva\n")),
   answer: "3",
 }

q9 = 
 {
   question: (chalk.cyanBright("9. In which form vishnu killed hiranyakashyap ?") + chalk.yellowBright("\n1. Vamana \n2. Matsya \n3. varaha \n4. Narasimha \n")),
   answer: "4",
 }
q10 = 
 {
   question: (chalk.cyanBright("10. From where vishnu enter the room to kill  hiranyakashyap ?") + chalk.yellowBright("\n1. Wall \n2. Roof \n3. Fire \n4. pillar \n")),
   answer: "4",
 }
 
   

   var quesAns = [q1,q2,q3,q4,q5];
   {

     for (i=0;i<quesAns.length;i++)
     {
     var x = rls.question(quesAns[i].question )
     
      if( x === quesAns[i].answer )
      {
        console.log(chalk.greenBright("right answer:>"));
        score++;
      }
      else
        console.log(chalk.yellow("wrong answer:|")+chalk.dim( "  the answer is  "  ) +  quesAns[i].answer );
        console.log(("score =")+ ( score));
     }   
   }
    
   
   if(score>=3)
   {
      console.log("yay!!  ur score is " + chalk.green("\""+score+"\""));
    
     console.log(chalk.bgBlue("HURRAY!! you have promoted to LEVEL 2"));
      var quesAns = [q6,q7,q8,q9,q10];
   {

     for (i=0;i<quesAns.length;i++)
     {
     var x = rls.question(quesAns[i].question )
     
      if( x === quesAns[i].answer )
      {
        console.log(chalk.greenBright("right answer:>"));
        score++;
      }
      else
        console.log(chalk.yellow("wrong answer:|")+chalk.dim( "  the answer is  "  ) +  quesAns[i].answer );
        console.log(("score =")+ ( score));
     }   
   }}
   else 
   {
      console.log("your score is " + chalk.green("\""+score+"\""));
      console.log("Your score is LOW  u cannnot be promoted to next level!");
      console.log(chalk.bgMagenta("Better luck next time!!"));
    
   }
    if(score>=7&&score<10)
     {
       console.log(chalk.bgMagenta(" U have good knowledge of HOLI ") );
     }
   if (score===quesAns.length)
   {
     console.log(chalk.bgMagenta("Congratulations!! u r the winner and u have full knowledge about HOLI "));
   }
   var t1= {
    name: "Bindhu",
    sco : 9, 
    }
   var t2=
    {
    name: "Srujan",
    sco : 8, 
    }
   var t3= {
    name: "vinni",
    sco : 8, 
    }
    
   if (score>= t1.sco)
   {
 console.log("hey!! you have reached highscore ,send this screenshoot to me so that i can update  HIGHSCORE list");
   }
   else if(score=== t3.sco)
   { console.log("hey!! you reached 2nd highscore ,send this screenshoot to me so that i can update my HIGHSCORE list");

   }
   else
{
  var top =[t1,t2,t3]
     console.log( chalk.bgBlue("HIGHSCORE LIST") );
  {
     for (i=0;i<top.length;i++)
     {
      
       console.log( chalk.dim(i+1) + chalk.dim(".name=") + top[i].name);
       console.log(   chalk.dim( "score=") +top[i].sco);
     }
  }
}
  console.log(chalk.bgBlue("I hope so u have learned some thing and Thanks for playing the game !!"));

    
