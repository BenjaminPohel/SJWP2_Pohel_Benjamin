import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: "input",
      name: "ime",
      message: "Unesi ime:",
    },
    {
      type: "input",
      name: "prezime",
      message: "Unesi prezime:",
    }
  ])
  .then((answers) => {


    const tekst = `${answers.ime}${answers.prezime.toUpperCase()}`;

    fs.appendFileSync("user.txt", tekst);

   
  })
  .catch((error) => {
   
      console.log("Došlo je do greške:", error);
    
  });