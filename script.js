'use strict';

addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case enums.KEY_CODES.APOSTROPHE:
      alert("You've received a message! 😲");
      break;

    case enums.KEY_CODES.F8:
      alert('PUDDING 🍮');
      break;

    default:
      alert('You like to be a bad boy, huh?');
      break;
  }
});
