import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: "number",
      name: "duzina",
      message: "Unesi dužinu:",
    },
    {
      type: "number",
      name: "visina",
      message: "Unesi visinu:",
    }
  ])
  .then((answers) => {

    const povrsina = answers.duzina * answers.visina;

    const tekst = `Dužina: ${answers.duzina}, Visina: ${answers.visina}, Površina: ${povrsina}\n`;

    fs.appendFileSync("povrsina.txt", tekst);

   
  })
  .catch((error) => {
   
      console.log("Došlo je do greške:", error);
    
  });