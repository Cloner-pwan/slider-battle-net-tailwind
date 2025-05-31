let slides = async () => {
  let req = await fetch("http://localhost:3000/header");
  let res = await req.json();
  let data = res.map((elem) => {
    return `<div class="slide w-full h-full absolute duration-300">
    <img src="${elem.image}" alt="${elem.name}" class=" w-full h-full object-cover relative">
    <div class="w-[288px] h-[360px] absolute top-0 left-[160px] z-[99999] flex flex-col justify-center items-center gap-4">    
      <img src="./images/blackcell.png" alt="pic" class="w-[320px] h-[54px]">
      <h2 class="text-[20px] text-[#fff] text-center font-[object-sans]">Season 4 is live. Get the new BlackCell Pack</h2>
      <button class="w-[280px] h-[56px] rounded-sm text-white text-[20px] font-[object-sans] bg-[#0073e0]">Purchase Now</button>
      </div>
    </div>`;
  });
  document
    .querySelector(".slides")
    .insertAdjacentHTML("beforeend", data.join(""));
};

export default slides;
