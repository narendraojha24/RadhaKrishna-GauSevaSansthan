export default function DonationSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-4">धन्यवाद!</h1>
      <p className="text-lg text-gray-700 mb-2">
        आपका दान सफल रहा। आपके सहयोग के लिए हम हृदय से आभारी हैं।
      </p>
      <p className="text-gray-500">
        आपको शीघ्र ही आपके ईमेल पर रसीद प्राप्त होगी।
      </p>
    </div>
  )
}