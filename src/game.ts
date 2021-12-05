import express from 'express';
const colors:Array<string>= [
    "AliceBlue",
      "AntiqueWhite",
      "Aqua",
      "Aquamarine",
      "Azure",
      "Beige",
      "Bisque",
      "Black",
      "BlanchedAlmond",
      "Blue",
      "BlueViolet",
      "Brown",
      "BurlyWood",
      "CadetBlue",
      "Chartreuse",
      "Chocolate",
      "Coral",
      "CornflowerBlue",
      "Cornsilk",
      "Crimson",
      "Cyan",
      "DarkBlue",
      "DarkCyan",
      "DarkGoldenRod",
      "DarkGray",
      "DarkGrey",
      "DarkGreen",
      "DarkKhaki",
      "DarkMagenta",
      "DarkOliveGreen",
      "DarkOrange",
      "DarkOrchid",
      "DarkRed",
      "DarkSalmon",
      "DarkSeaGreen",
      "DarkSlateBlue",
      "DarkSlateGray",
      "DarkSlateGrey",
      "DarkTurquoise",
      "DarkViolet",
      "DeepPink",
      "DeepSkyBlue",
      "DimGray",
      "DimGrey",
      "DodgerBlue",
      "FireBrick",
      "FloralWhite",
      "ForestGreen",
      "Fuchsia",
      "Gainsboro",
      "GhostWhite",
      "Gold",
      "GoldenRod",
      "Gray",
      "Grey",
      "Green",
      "GreenYellow",
      "HoneyDew",
      "HotPink",
      "IndianRed",
      "Indigo",
      "Ivory",
      "Khaki",
      "Lavender",
      "LavenderBlush",
      "LawnGreen",
      "LemonChiffon",
      "LightBlue",
      "LightCoral",
      "LightCyan",
      "LightGoldenRodYellow",
      "LightGray",
      "LightGrey",
      "LightGreen",
      "LightPink",
      "LightSalmon",
      "LightSeaGreen",
      "LightSkyBlue",
      "LightSlateGray",
      "LightSlateGrey",
      "LightSteelBlue",
      "LightYellow",
      "Lime",
      "LimeGreen",
      "Linen",
      "Magenta",
      "Maroon",
      "MediumAquaMarine",
      "MediumBlue",
      "MediumOrchid",
      "MediumPurple",
      "MediumSeaGreen",
      "MediumSlateBlue",
      "MediumSpringGreen",
      "MediumTurquoise",
      "MediumVioletRed",
      "MidnightBlue",
      "MintCream",
      "MistyRose",
      "Moccasin",
      "NavajoWhite",
      "Navy",
      "OldLace",
      "Olive",
      "OliveDrab",
      "Orange",
      "OrangeRed",
      "Orchid",
      "PaleGoldenRod",
      "PaleGreen",
      "PaleTurquoise",
      "PaleVioletRed",
      "PapayaWhip",
      "PeachPuff",
      "Peru",
      "Pink",
      "Plum",
      "PowderBlue",
      "Purple",
      "RebeccaPurple",
      "Red",
      "RosyBrown",
      "RoyalBlue",
      "SaddleBrown",
      "Salmon",
      "SandyBrown",
      "SeaGreen",
      "SeaShell",
      "Sienna",
      "Silver",
      "SkyBlue",
      "SlateBlue",
      "SlateGray",
      "SlateGrey",
      "Snow",
      "SpringGreen",
      "SteelBlue",
      "Tan",
      "Teal",
      "Thistle",
      "Tomato",
      "Turquoise",
      "Violet",
      "Wheat",
      "White",
      "WhiteSmoke",
      "Yellow",
      "YellowGreen"];
    let retry:number = 3;	
    document.getElementById('iniciar').addEventListener('click',  startGame); 
    
      let colorsRand:Array<string> = [];
      let colorAnswer:string = "";
      function TenColorsToSelect(){
          colorsRand = [];
          for(let i = 0; i<10; i++){
              let index:number = Math.floor(Math.random()*colors.length);
              colorsRand.push(colors[Math.floor((Math.random() * colors.length) + 1)].toLowerCase());
              colorsRand = [...new Set(colorsRand)];
              colorsRand.sort();
          }
          colorsRand.sort();
          const index = Math.floor(Math.random() * colorsRand.length);
          colorAnswer = colorsRand[index];
          
      }
      
      function startGame(){
      retry = 3;
      TenColorsToSelect();
      while(retry !==0){
          var colortoChoice = prompt(`Eu estou pensando em uma dessas cores:\n\n"${colorsRand.toString()}"\n\nQual cor eu estou pensando?\n\n Tentativas: ${retry}`).toLowerCase();
      if(colortoChoice.length == 0 || !colortoChoice.trim()){
         alert('Digite uma cor,por favor');
          }
          else if(!colortoChoice.includes(colortoChoice)){
              alert('Essa cor não está entre as dez cores');
          }
          else if(colortoChoice != colorAnswer){
              ComparisonString(colorAnswer,colortoChoice);
              retry--;
          }
          else if(colortoChoice == colorAnswer){
              alert('Parabéns, você acertou');
              retry = 0;
            }
          }
      }
      
      
      
      function ComparisonString(choice,answer){
           if (answer.charCodeAt(0) > choice.charCodeAt(0)){
               alert('É maior que pensei\n\ntente de novo!')
           }
           else{
               alert('´É menor que pensei\n\tente de novo!')
           }
      }
      