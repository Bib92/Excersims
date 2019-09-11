export const secretHandshake = (secret) => {
  const radix = (secret).toString(2);
  
  switch(radix) {
    case '1':
      return ["wink"];
      break;
      case '10':
        return ["double blink"];
        break;
        case '11':
        return ['wink', 'double blink'];
        break;

        case '100':
        return ['close your eyes'];
        break;

        case '101':
        return ['wink', 'close your eyes'];
        break;

        case '111':
        return ['wink', 'double blink', 'close your eyes'];
        break;

        case '1000':
        return ['jump'];
        break;

        case '1001':
        return ['wink', 'jump'];        ;
        break;

        case '1011':
        return ['wink', 'double blink', 'jump'];
        break;

        case '1111':
        return ['wink', 'double blink', 'close your eyes', 'jump'];
        break;

        case '10001':
        return ['wink'];
        break;

        case '10011':
        return ['double blink', 'wink'];
        break;

        case '10111':
        return ['close your eyes', 'double blink', 'wink'];
        break;

        case '11111':
        return ['jump', 'close your eyes', 'double blink', 'wink'];
        break;

        case 'piggies':
          throw new Error('Handshake must be a number');
          break;
      }

  console.log(radix)
};
//aug 18 2019