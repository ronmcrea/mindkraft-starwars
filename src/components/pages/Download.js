import React from 'react'
import { MyDocument } from './MyDocument'
import '../../../src/components/styles/Download.css'
import { PDFDownloadLink } from '@react-pdf/renderer'
export const Download = () => {
  return (
    <div>
      <MyDocument></MyDocument>
       <PDFDownloadLink document={<MyDocument/>}>Download Document</PDFDownloadLink>
    </div>
  )
}
