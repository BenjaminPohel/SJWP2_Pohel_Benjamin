/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { writeFile } from 'node:fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([
    "Enter url:"
  ])
  .then((answers) => {
    var qrimage= qr.image(answers, { type: 'svg' });
  })