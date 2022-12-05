export const carouselHTML = (data, number) => {
  let price = 0;
  if (data.bids[0]) {
    price = data.bids[0].amount;
  }

  let numberUp = number + 1;
  let numberDn = number - 1;

  if (number === 0) {
    numberUp = 1;
    numberDn = 3;
  }

  if (number === 3) {
    numberUp = 0;
    numberDn = 2;
  }
  return `
      <div id="slide${number}" class="carousel-item relative w-full">
        <div class="flex justify-center items-center w-full h-[500px] bg-gray-300">
          <a href="./listing.html?id=${data.id}" class="w-full h-full">
            <img class="w-full h-full bg-gray-800 brightness-50 object-cover object-center" src="${data.media[0]}" alt="Image of ${data.title}" onerror='this.src="https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png"'>
            <div class="absolute w-full left-0 right-0 top-96 flex flex-col gap-4 text-white ml-8 md:ml-36">
              <h2 class="card-title text-white ">${data.title}</h2>
              <div class="card-actions">
                <label class="btn bg-dark-green text-white">${price}</label>
              </div>
            </div>
          </a>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide${numberDn}" class="btn btn-circle">❮</a>
          <a href="#slide${numberUp}" class="btn btn-circle">❯</a>
        </div>
      </div>
        `;
};
