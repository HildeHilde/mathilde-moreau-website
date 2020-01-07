// export function displayWork() {
//     document.getElementById('container').innerHTML = '';
//     for (const item of works) {
//       const divWork = document.createElement('div');
//       divWork.class = 'container';
//       const titleWork = document.createElement('h2');
//       const locationW = document.createElement('h3');
//       const dateW = document.createElement('h5');
//       const contentW = document.createElement('p');
//       titleWork.innerText = item.title;
//       contentW.innerText = item.description;
//       locationW.innerText = item.location;
//       dateW.innerText = item.date;
//       divWork.append(titleWork, locationW, dateW, contentW);
//       document.getElementById('container').append(divWork);
//     }
//   }

//   export function Test() {
//     document.getElementById('container').innerHTML = '';
//     const coucou = document.createElement('h2');
//     coucou.innerText = 'coucou toi';
//     document.getElementById('container').append(coucou);
//   }


//   const imgContent = document.querySelectorAll('.img-content-hover');

//   export function showImgContent(e) {
//     for (let i = 0; i < imgContent.length; i++) {
//       imgContent[i].style.left = `${e.pageX}px`;
//       imgContent[i].style.top = `${e.pageY}px`;
//     }
//   }

//   document.addEventListener('mousemove', showImgContent);
