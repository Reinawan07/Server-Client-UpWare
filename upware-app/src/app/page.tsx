import Banner from "@/components/Banner";
import DetailInformasi from "@/components/DetailInformasi";
import SeeAllProduct from "@/components/SeeAllProduct";
 

export default async function Home() {

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
      <SeeAllProduct/>
    </>
  );
}
