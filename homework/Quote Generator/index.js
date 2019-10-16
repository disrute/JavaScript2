const quotes = ['Once more unto the breach.', 'I have a mouth but I do not sleep.', 'Who\'s more foolish, the fool? Or the fool who follows him?',
  'How noble in reason, how infinite in faculty.'];


function randomQuote() {
  let r = Math.round(Math.random() * 3);
  console.log(r);

  document.getElementById('quote').innerText = quotes[r];
}

document.getElementById('quoteBtn').addEventListener('click', randomQuote);