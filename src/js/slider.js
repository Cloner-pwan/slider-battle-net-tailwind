let slider = () => {
    let sliderStruct = `<div class="slider_container w-full h-fit mt-[120px] flex flex-col justify-center items-center">
    <div id="slider" tabindex="0" class="slider w-full max-w-[1600px] h-[360px] my-0 mx-auto relative group">
      <div class="slides w-full h-full rounded-[4px] relative overflow-hidden duration-300">
      </div>
      <button id="prevbtn" class="w-10 h-20 rounded-[4px] bg-[#15171e] border-[1px] border-[#424242] flex justify-center items-center absolute cursor-pointer opacity-0 invisible duration-300 top-[140px] left-5 fill-white text-white hover:border-[1.5px] hover:border-[#7c7c7c] group-hover:opacity-100 group-hover:visible">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            part="icon"
          >
            <path
              d="M14.646 5.353a.5.5 0 0 1 .707 0l.704.704a.5.5 0 0 1 0 .706L10.83 12l5.227 5.236a.5.5 0 0 1 0 .707l-.703.703a.5.5 0 0 1-.708 0l-6.293-6.293a.5.5 0 0 1 0-.707z"
            ></path>
          </svg>
      </button>
      <button id="nextbtn" class="w-10 h-20 rounded-[4px] bg-[#15171e] border-[1px] border-[#424242] flex justify-center items-center absolute cursor-pointer opacity-0 invisible duration-300 top-[140px] right-5 text-white fill-white hover:border-[1.5px] hover:border-[#7c7c7c] group-hover:opacity-100 group-hover:visible">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            part="icon"
          >
            <path
              d="M9.354 5.354a.5.5 0 0 0-.707 0l-.704.703a.5.5 0 0 0 0 .707L13.17 12l-5.227 5.236a.5.5 0 0 0 0 .707l.704.703a.5.5 0 0 0 .707 0l6.293-6.292a.5.5 0 0 0 0-.707L9.354 5.353Z"
            ></path>
          </svg>
      </button>
    </div>
    <div class="pagination_container w-full h-10 flex justify-center items-center duration-300">
      <div class="items w-fit h-full flex">
        <button id="AutoPlaybtn" class="w-10 h-full border-none bg-transparent">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" part="icon"><path d="M10 18.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zm4.5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5z"></path></svg>
        </button>
        <div id="pagination" class="w-full h-full flex justify-center items-center gap-3">
        </div>
      </div>
    </div>
  </div>`
  document.querySelector("#root").insertAdjacentHTML("beforeend",sliderStruct)
};

export default slider;