import Banner from "@/components/Banner";
import DetailInformasi from "@/components/DetailInformasi";
import SeeAllProduct from "@/components/SeeAllProduct";
import CardProduct from "@/components/CardProduct";
import { ProductsInterface } from "@/db/models/product";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UpWare - Products',
  description: 'UpWare Products',
}
type MyResponse = {
  data: ProductsInterface[];
};

async function getProducts(): Promise<MyResponse> {
  const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/products", {
    cache: "no-store",
  });
  return await data.json();
}

export default async function Home() {
  const { data } = await getProducts();
  const limitedData = data.slice(0, 8);

  return (
    <>
      <Banner />
      <div className="flex w-full px-16 mt-14 mb-10">
        <div className="flex-1 pe-10 items-center">
          <DetailInformasi />
        </div>
        <div className="flex-1">
          <div>
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2023/04/12/tupperware.jpeg?w=600&q=90"
              width={700}
              height={700}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {limitedData.map((product) => (
          <CardProduct product={product} key={product.slug} />
        ))}
      </div>
      <SeeAllProduct />
    </>
  );
}
