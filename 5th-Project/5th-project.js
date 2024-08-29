  let homeScore = 0;
  let guestScore = 0;

  function add1() {
    homeScore += 1;
    document.getElementById('num1-el').textContent = homeScore;
  }
  function add2() {
    homeScore += 2;
    document.getElementById('num1-el').textContent = homeScore;
  }
  function add3() {
    homeScore += 3;
    document.getElementById('num1-el').textContent = homeScore;
  }

  function plus1() {
    guestScore += 1;
    document.getElementById('num2-el').textContent = guestScore;
  }

  function plus2() {
    guestScore += 2;
    document.getElementById('num2-el').textContent = guestScore;
  }

  function plus3() {
    guestScore += 3;
    document.getElementById('num2-el').textContent = guestScore;
  }

