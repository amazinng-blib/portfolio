import React from 'react';

type Props = {};

const DownloadCv = (props: Props) => {
  const LINK = 'http://localhost:3000/RESUME-2-NWANKWO-ERNEST.docx';
  const downloadFile = (e: React.FormEvent, url: any) => {
    e.preventDefault();
    fetch(url)
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
      });
  };
  return (
    <div>
      <button
        type="button"
        onClick={(e: any) => downloadFile(e, LINK)}
        className="uppercase border-b-2 border-[#7bc5a5] md:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] text-[.7rem] "
      >
        Download CV
      </button>
    </div>
  );
};

export default DownloadCv;
