import { BiQr } from "react-icons/bi"
import QrCodeSvg from "./QrCodeSvg";

function QrCodeBtn() {
  return (
    <div className="hidden md:block">
        <button className='bg-slate-200 h-50 w-50 inline-block rounded-full p-3 transition-all
            fixed bottom-5 right-5
            cursor-pointer
            hover:p-4'
            onClick={() => {
                const modal = document.querySelector('#qr-modal') as HTMLDialogElement;
                if (modal) {
                    modal.showModal()
                }
            }}
        >
            <BiQr className='text-3xl text-dark' />
        </button>

        <dialog id="qr-modal" className="modal">
        <div className="modal-box text-center dark:bg-mediumDark">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Scan the QR code to open on mobile</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
            <div className='bg-white p-2 inline-block rounded-md'>
                <QrCodeSvg />
            </div>
            </div>
        </dialog>
        </div>
    )
}

export default QrCodeBtn