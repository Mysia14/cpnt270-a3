console.log('Hello World!');

const init = async () => {
  const response = await fetch('/.netlify/functions/insta');
  const data = await response.json();

  const insta = data.find((item) => item.caption.includes('#trip')); // it filters the posts to the most recent post with the #trip included in the caption//

  document.querySelector('.container').innerHTML = `
    <figure>
      <img src="${insta.url}" alt="Trip">
      <figcaption>${insta.caption}</figcaption>  
    </figure>
  `
  console.log(data);
}

init();