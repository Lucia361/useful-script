// (async () => {
// const { injectScript, injectCss, baseURL } = await import("./utils.js");
// if (location.hostname === "movies.hdviet.com")
//   injectScript(baseURL + "movie_hd_viet.js");
// })();

(async () => {
  console.log("Useful-scripts: sending document_idle to background...");
  const response = await chrome.runtime.sendMessage({ type: "document_idle" });
  console.log("> Useful-scripts: document_idle sent successfully", response);
})();
