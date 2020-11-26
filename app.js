function convertToRoman (number) {
  
    let decimal = [];
    let converted = [];  
    
    let n =  number.toString();
      for (let i=0; i<n.length; i++) {
        if (n[i] != 0) {
          if (n.length - i == 4) {
         decimal.push(n[i] + '000');
          } else if (n.length -i == 3) {
         decimal.push(n[i] + '00' );
          } else if (n.length -i == 2) {
         decimal.push(n[i] + '0');
          } else {
         decimal.push(n[i]);
      } 
           } 
      }
    
      decimal.forEach(num => convert(num));
        return converted.join('');
      
    function convert (number) {
        let romanNumbers = {
      1: {
        1: "I",
        2: "X",
        3: "C",
        4: "M"
      },    
      2: {
        1: "II",
        2: "XX",
        3: "CC",
        4: "MM"
      },  
      3: {
        1: "III",
        2: "XXX",
        3: "CCC",
        4: "MMM"
      },  
      4: {
        1: "IV",
        2: "XL",
        3: "CD",
        4: "¨IV¨"
      },
      5: {
        1: "V",
        2: "L",
        3: "D",
        4: "¨V¨"
      },  
      6: {
        1: "VI",
        2: "LX",
        3: "DC",
        4: "¨VM¨"
      },  
      7: {
        1: "VII",
        2: "LXX",
        3: "DCC",
        4: "¨VMM¨"
      },  
      8: {
        1: "VIII",
        2: "LXXX",
        3: "DCCC",
        4: "¨VMMM¨"
      },
      9: {
        1: "IX",
        2: "XC",
        3: "CM",
        4: "¨IX¨"
      },  
      }
        let index = number.toString().split("")[0];
        let numLength = number.toString().length
        converted.push(romanNumbers[index][numLength]);
    
      }
      }

      convertToRoman(2720);
