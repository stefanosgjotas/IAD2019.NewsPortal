// Enter the Konami code:
// Up Up Down Down Left Right Left Right B A

const setClass = (isActive) => {
  if (isActive) {
    document.documentElement.classList.add("debug");
  } else {
    document.documentElement.classList.remove("debug");
  }
};

const Konami = () => {
  let cursor = 0;
  const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  console.log("Konami code: Up Up Down Down Left Right Left Right B A");

  let isActive =
    localStorage.getItem("minimal-starter--beta") === "true" ? true : false;

  setClass(isActive);

  document.addEventListener("keydown", (e) => {
    cursor = e.keyCode === KONAMI_CODE[cursor] ? cursor + 1 : 0;
    if (cursor === KONAMI_CODE.length) {
      isActive = !isActive;
      setClass(isActive);
      console.log("Konami code: debug triggered");

      localStorage.setItem("minimal-starter--beta", isActive);
    }
  });
};

export default Konami;
