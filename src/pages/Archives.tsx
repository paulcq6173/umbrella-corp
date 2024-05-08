import { IDocument } from '@/@types/types';
import TopMessageBoard from '@/components/UmSysCtrl/TopMessageBoard';
import { Docs } from '@/dummyData';
import { Link } from 'react-router-dom';

const Archives = () => {
  const fileList: Array<IDocument> = Docs;
  const mobileMode: boolean = window.screen.width < 811;
  const bgUrl = mobileMode
    ? 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8ec059d-1ba1-4412-8e28-3bdbe6905a84/ddszrht-92c642d1-c091-4bc1-8263-05eaf6881cc5.png/v1/fit/w_560,h_567,q_70,strp/outside_by_mantisverde_ddszrht-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTY3IiwicGF0aCI6IlwvZlwvZDhlYzA1OWQtMWJhMS00NDEyLThlMjgtM2JkYmU2OTA1YTg0XC9kZHN6cmh0LTkyYzY0MmQxLWMwOTEtNGJjMS04MjYzLTA1ZWFmNjg4MWNjNS5wbmciLCJ3aWR0aCI6Ijw9NTYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.LUwjY-aVsp2cFEPHTtPXGNHIEhDpug6YkRppN-5ILTc'
    : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/462cd37d-8e10-4376-8ff5-4f13dd9b7741/dc2hri0-c72e8de2-25cb-4e52-93b0-52bf02f887d6.png/v1/fit/w_720,h_387,q_70,strp/bio_observatory_by_lenstu82_dc2hri0-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzg3IiwicGF0aCI6IlwvZlwvNDYyY2QzN2QtOGUxMC00Mzc2LThmZjUtNGYxM2RkOWI3NzQxXC9kYzJocmkwLWM3MmU4ZGUyLTI1Y2ItNGU1Mi05M2IwLTUyYmYwMmY4ODdkNi5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-oALd-p4eAW1_egKi0TFCeAV580nPyNqspg8U8Gul0Q';

  return (
    <div className="w-screen h-fit bg-black">
      <div className="pt-2">
        <TopMessageBoard />
      </div>

      <div className="relative h-screen md:h-fit">
        <img className="w-full object-fit" src={bgUrl} alt="archives-bg" />
        <div className="absolute w-11/12 top-8 left-2 sm:left-4 overflow-y-scroll bg-gray-400 opacity-80">
          {fileList.map((doc, index) => (
            <p key={index}>
              <Link
                className="text-black hover:bg-slate-300"
                key={doc.id}
                to={`/security/archives/${doc.id}`}
              >
                {doc.fileName}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archives;
