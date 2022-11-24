export const bidListHTML = (bid) => {
  return `
    <div class="bg-light-green px-2 py-2 rounded shadow-xl">
      <div role="status" class="animate-pulse flex items-center gap-2 w-full">
        <svg class="w-12 h-12 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
        /svg>
        <div class="w-full">
          <div class="h-3.5 bg-sky-100 rounded-full w-48 mb-2"></div>
          <div class="h-2.5 bg-sky-100 rounded-full max-w-[360px]"></div>
        </div>
        <div class="h-5 bg-sky-100 rounded-full w-24"></div>
      </div>
    </div>
    `;
};
