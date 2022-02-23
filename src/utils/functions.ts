export function imgUrlFromFile(file: File) {
  const urlCreator = window.URL || window.webkitURL;
  const imageUrl = urlCreator.createObjectURL(file);
  return imageUrl;
}
export function stripHtml(html: string) {
  const temporalDivElement = document.createElement("div");
  temporalDivElement.innerHTML = html;
  return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

export function stripTags(str: string) {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}
export function shorten(str: string, no_words: number, suff = " ...") {
  let newStr = str.split(" ").splice(0, no_words).join(" ");
  newStr = stripHtml(newStr);
  newStr = stripTags(newStr);

  if (str.length > newStr.length) {
    newStr += suff;
  }
  return newStr;
}

export function getPageCount(totalCount: number, pageSize: number) {
  const pagesCount =
    totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
  return pagesCount;
}
export function getUrlFromMedia(img: string) {
  const url = import.meta.env.VITE_API_URL;
  return `${url}/${img}`;
}
