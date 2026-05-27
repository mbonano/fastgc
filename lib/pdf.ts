import html2canvas from 'html2canvas-pro'
import { jsPDF } from 'jspdf'

export async function exportToPdf(contentEl: HTMLElement, filename = 'fastgc-application-guide.pdf') {
  // A4 dimensions in mm
  const PDF_W = 210
  const PDF_H = 297

  const canvas = await html2canvas(contentEl, {
    scale: 2,           // 2× for retina-quality text
    useCORS: true,
    logging: false,
    backgroundColor: '#f8fafc', // matches --color-surface
    // Expand the clip so nothing is cut off by overflow:hidden ancestors
    windowWidth: contentEl.scrollWidth,
    windowHeight: contentEl.scrollHeight,
  })

  const imgW = canvas.width
  const imgH = canvas.height

  // How many PDF points wide the image will be
  const pdfImgW = PDF_W
  const pdfImgH = (imgH / imgW) * pdfImgW

  const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })

  let remainingH = pdfImgH
  let yOffset = 0
  let pageNum = 0

  while (remainingH > 0) {
    if (pageNum > 0) pdf.addPage()

    // sourceY in canvas pixels corresponding to current page top
    const srcY = (yOffset / pdfImgW) * imgW
    const srcH = Math.min((PDF_H / pdfImgW) * imgW, imgH - srcY)
    const destH = (srcH / imgW) * pdfImgW

    // Slice the canvas for this page
    const sliceCanvas = document.createElement('canvas')
    sliceCanvas.width = imgW
    sliceCanvas.height = srcH
    const ctx = sliceCanvas.getContext('2d')!
    ctx.drawImage(canvas, 0, srcY, imgW, srcH, 0, 0, imgW, srcH)

    pdf.addImage(sliceCanvas.toDataURL('image/png'), 'PNG', 0, 0, pdfImgW, destH)

    yOffset += PDF_H
    remainingH -= PDF_H
    pageNum++
  }

  pdf.save(filename)
}
