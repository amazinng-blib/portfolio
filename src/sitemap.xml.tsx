import { GetServerSideProps } from 'next';

export default function () {
  return null;
}

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  ctx.res.setHeader('Content-Type', 'text/xml');
  const xml = await generateSiteMap();
  ctx.res.write(xml);
  ctx.res.end();
  return {
    props: {},
  };
};

async function generateSiteMap(): Promise<string> {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(-2); // Get the last two digits of the year
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month since it's zero-based
  const day = currentDate.getDate().toString().padStart(2, '0'); // Pad day with leading zero if needed

  const formattedDate = `${year}_${month}_${day}`;

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>http://localhost:3000/</loc>
        <lastmod>${formattedDate}</lastmod>
      </url>
    </urlset>`;
}
