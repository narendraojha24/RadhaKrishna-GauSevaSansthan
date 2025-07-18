export default function DonationCancel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-3xl font-bold text-red-700 mb-4">भुगतान रद्द किया गया</h1>
      <p className="text-lg text-gray-700 mb-2">
        आपका भुगतान पूरा नहीं हुआ। यदि यह गलती से हुआ है, तो कृपया पुनः प्रयास करें।
      </p>
      <a
        href="/donate"
        className="mt-4 px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
      >
        पुनः दान करें
      </a>
    </div>
  )
}