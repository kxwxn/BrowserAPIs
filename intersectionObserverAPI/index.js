// const ad = document.querySelector(".ad");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       const percentage = Math.round(entry.intersectionRatio * 100, 2);
//       if (entry.isIntersecting) {
//         console.log(`${percentage}% of AD is visible`);
//         console.log(entry);
//       } else {
//         console.log("AD is not visible");
//       }
//     });
//   },
//   { threshold: [0, 0.25, 0.5, 0.74, 1] } // 0 ~ 1 === 0% ~ 100%
// );

// observer.observe(ad);

let adViewTimes = [];
let adVisibleStartTime;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        // ad is visible
        adVisibleStartTime = Date.now();
      } else if (adVisibleStartTime) {
        // ad has been visible, no longer is visible
        let adViewDuration = Date.now() - adVisibleStartTime;
        adViewTimes.push(adViewDuration);
        console.log(`Ad was viewed for ${adViewDuration}ms`);
        adVisibleStartTime = undefined;
      }
    });
  },
  { threshold: 0.5 }
);

const ad = document.querySelector(".ad");
observer.observe(ad);
