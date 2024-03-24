import "./Banner.css"
import MainBanner from "./MainBanner"
const Banner = () => {
    return <div className="container">
        <div className="banner-img">
            <div className="text-overlay">
                <p>Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</p>
            </div>
            <img src="https://s3-alpha-sig.figma.com/img/9f5f/1d02/fa3c35c6a8b904c44f6dcbc0b512b2ac?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjVirwjrlM9vLaN3h88SeUByDkVAqfTtXlIqr649Q6Oq2Tqo0q7UX6EQw8r9a3sBVqHiiZ~Lcj1-xckjArSsApFncrGVPzr~ZdBbrshNN7zRCFMD4w32L7l1SJsstI3~8RTJ1bhNkHiTdYnBW3VMlm-P6ezIQClHHqaajDWjnkhcGQBIFORL5DFMu3Gwtk32QLNSWXjaXfq8~5jpri1h9KSttBtWAqxpjSy3G8i4LAfBNK41wyWkeEvUJ0~p4R0cnRiZzGKtjC~LFTHBJJlA8kBdA7PqMB1jgeWzhxOcvwGBsaJBFfeLoYlHB-v0v18SGkKjJGvhsPqx6S5zyDCfpA__" alt="" />
            <MainBanner />
        </div>
        <div className="centered-pod">
            <div className="pod-tong">
                <div><a href="">Chắc chắn có chỗ</a></div>
            </div>
            <div className="pod-tong">
                <div><a href="">Hỗ trợ 24/7</a></div>
            </div>
            <div className="pod-tong">
                <div><a href="">Nhiều ưu đãi</a></div>
            </div>
            <div className="pod-tong">
                <div><a href="">Thanh toán đa dạng</a></div>
            </div>
        </div>
    </div>

}
export default Banner