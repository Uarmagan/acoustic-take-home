import Head from 'next/head';
import Layout from '../components/layout';
import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  async function getContent() {
    const res = await axios.get(
      'https://content-eu-4.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/db4930e9-7504-4d9d-ae6c-33facca754d1'
    );
    console.log(res.data);
  }

  useEffect(() => {
    getContent();
  }, []);

  return (
    <Layout>
      <div className="absolute inset-0 flex items-center justify-center">
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
            title of this article
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
            <div className="flex items-center">
              😂
              <p className="text-sm text-gray-700">
                by
                {' Lee Robinson'}
                {'5/45/4'}
              </p>
            </div>
          </div>
          <div className="prose max-w-none w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            sunt, neque ipsum nulla quasi ab in aperiam, temporibus doloremque,
            aut voluptas vitae illum expedita ipsam! Suscipit cum autem
            perspiciatis eum?
          </div>
        </article>
      </div>
    </Layout>
  );
}
