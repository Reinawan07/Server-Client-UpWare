import Link from "next/link";

export default function Banner() {
    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-85">
                    <img src="https://shop.tupperware.co.id/media/weltpixel/owlcarouselslider/images/b/r/brosurkatalog_1440x420.jpg"
                        className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide2" className="btn btn-circle">❮</Link>
                        <Link href="#slide2" className="btn btn-circle">❯</Link>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-85">
                    <img src="https://shop.tupperware.co.id/media/weltpixel/owlcarouselslider/images/s/l/slider_1440_x_420_-_gourmet_servers_2l_3_with_ladle_spoon_free.jpg"
                        className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <Link href="#slide1" className="btn btn-circle">❮</Link>
                        <Link href="#slide1" className="btn btn-circle">❯</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
