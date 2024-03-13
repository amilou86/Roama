// export async function translateText() {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-RapidAPI-Key': '04abf284b0msh608114c8993b8ebp1d3c8ajsn80ef94d9138a',
//         'X-RapidAPI-Host': 'swift-translate.p.rapidapi.com'
//       },
//       body: JSON.stringify({
//         text: 'This is project 2!',
//         sourceLang: 'en',
//         targetLang: 'fr'
//       })
//     };
  
//     try {
//       const response = await fetch('https://swift-translate.p.rapidapi.com/translate', options);
       
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  