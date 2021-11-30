import React, { useRef } from "react";

import html2canvas from "@nidi/html2canvas";
// import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
const Html2canvase = () => {
  window.scrollTo(0, 0);
  // download pdf and png
  const inputRefOne = useRef(null);
  const printDocumentPDF = () => {
    html2canvas(inputRefOne.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 20, 20);
      pdf.save("download.pdf");
    });
  };
  const printDocumentPNG = () => {
    html2canvas(inputRefOne.current, {
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      // windowWidth: document.documentElement.offsetWidth,
      // windowHeight: inputRefOne.scrollHeight,
    }).then((canvas) => {
      inputRefOne.current.appendChild(canvas);
      // var a = document.createElement("a");
      // a.setAttribute("download", "myImage.png");
      // a.setAttribute("href", image);
      // a.click();
    });
  };

  return (
    <div>
      <div ref={inputRefOne}>
        <h1>skdfkjsdlfkj dsjlfkjskdfjk</h1>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <button onClick={printDocumentPDF}>bb</button>
      <button onClick={printDocumentPNG}>bb</button>
    </div>
  );
};

export default Html2canvase;
