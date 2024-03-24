import './Taber.css'
const Taber = () => {
    return <div className='alltab'>
        <div className=''>
        <div className="tabtong" style={{marginTop: "10px"}}>
                <div className="tab">
                    <i className="fas fa-train"></i>
                    <a href="">80k</a>
                </div>
                <div className="tab">
                    <i className="fas fa-plane"></i>
                    <a href="">Tàu Hỏa</a>
                </div>
                <div className="tab">
                    <i className="fas fa-car"></i>
                    <a href="">90k </a>
                </div>
            </div>
        </div>
         <form className="tab">
                <div className="col">Nơi xuất phát
                    <input type="text" placeholder="Hà Nội" />
                </div>
                <div className="col">Nơi đến
                    <input type="text" placeholder="Thái Bình" />
                </div>
                <div className="col">Ngày đi
                    <input type="date" />
                </div>
                <div className="col"><a href="" style={{border : "1px solid",borderRadius : "10px",color: "black"}}>Thêm ngày về</a></div>
                <button className="btn-tab">Tìm kiếm</button>
        </form>
    </div>
 }
 export default Taber