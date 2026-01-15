import React from 'react'
import { QRCodeSVG } from 'qrcode.react';


function Home() {

    const qrValue = `https://registration-6ncxd4xw2-nytmate.vercel.app/register`;
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Scan to Register</h1>
      <QRCodeSVG value={qrValue} size={256} className="mx-auto" />
      <p className="mt-4 text-lg">Scan this QR code to access the registration form.</p>
    </div>
  )
}

export default Home