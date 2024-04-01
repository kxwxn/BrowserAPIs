const btnVideo = document.querySelector("#startStream");
const errorElement = document.querySelector("#errorElement");
const videoElement = document.querySelector("#videoElement");

const onClickVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    videoElement.srcObject = stream;
  } catch (err) {
    errorElement.textContent = err.message;
  }
};

btnVideo.addEventListener("click", onClickVideo);

// navigator.mediaDevices
//   .enumerateDevices()
//   .then((devices) => console.log(devices))
//   .catch((e) => console.log(e));
