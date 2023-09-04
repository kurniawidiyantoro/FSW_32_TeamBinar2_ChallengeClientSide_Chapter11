"use strict";
(() => {
var exports = {};
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "puppeteer-core"
const external_puppeteer_core_namespaceObject = require("puppeteer-core");
var external_puppeteer_core_default = /*#__PURE__*/__webpack_require__.n(external_puppeteer_core_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/generate-pdf.js
// pdf-worker.js
// This file contains the code to generate the PDF using Puppeteer in a Web Worker.

self.addEventListener('message', async event => {
  const playerData = event.data;
  const browser = await external_puppeteer_core_default().launch({
    executablePath: 'chrome'
  });
  const page = await browser.newPage(); // Construct the table content

  let tableRows = '';
  playerData.forEach((player, index) => {
    tableRows += `
      <tr>
        <td>${index + 1}</td>
        <td>${player.username}</td>
        <td>${player.gamename}</td>
        <td>${player.status}</td>
        <td>${player.totalscore}</td>
      </tr>
    `;
  });
  const tableContent = `
    <h1>Leaderboard Report</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Game Name</th>
          <th>Status</th>
          <th>Total Score</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
  const content = `<html><body>${tableContent}</body></html>`;
  await page.setContent(content);
  const pdfBuffer = await page.pdf({
    format: 'A4'
  });
  await browser.close();
  self.postMessage(pdfBuffer);
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(959));
module.exports = __webpack_exports__;

})();