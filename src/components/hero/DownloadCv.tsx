import React from 'react';

type Props = {};

const DownloadCv = (props: Props) => {
  const LINK = 'https://portfolio-2u6f.vercel.app/RESUME-9-NWANKWO-ERNEST.docx';
  const downloadFile = (url: any) => {
    fetch(url, {
      method: 'GET',
      // mode: 'no-cors',
    })
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));

        const aTag = document.createElement('a');
        const fileName: any = LINK.split('/').pop();
        aTag.href = blobUrl;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button
        type="button"
        onClick={(e: any) => downloadFile(LINK)}
        className="uppercase border-b-2 border-[#7bc5a5] md:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] text-[.7rem] "
      >
        Download CV
      </button>
    </div>
  );
};

export default DownloadCv;
