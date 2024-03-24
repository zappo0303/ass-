const MainBanner = () => {
    return <div className="form">
        <div className="centered-nav">
            <div className="tabtong">
                <div className="tab">
                    <i className="fas fa-bus"></i>
                    <a href="">Xe Khách</a>
                </div>
                <div className="tab">
                    <i className="fas fa-train"></i>
                    <a href="">Máy Bay</a>
                </div>
                <div className="tab">
                    <i className="fas fa-plane"></i>
                    <a href="">Tàu Hỏa</a>
                </div>
                <div className="tab">
                    <i className="fas fa-car"></i>
                    <a href="">Thuê xe</a>
                </div>
            </div>
        </div>
        <div className="centered-form">
            <form className="horizontal-form">
                <div className="col">Nơi xuất phát
                    <input type="text" placeholder="Hà Nội" />
                </div>
                <div className="col">Nơi đến
                    <input type="text" placeholder="Thái Bình" />
                </div>
                <div className="col">Ngày đi
                    <input type="date" />
                </div>
                <div className="col"><a href="" style={{color: "white"}}>Thêm ngày về</a></div>
                <button className="submit-btn">Tìm kiếm</button>
            </form>
        </div>

        
    </div>
}

export default MainBanner