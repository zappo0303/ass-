import './Select.css'
const Select = () => {
    return (<div className="luachon" style={{ display: "flex", marginTop: "10px" }}>
        <div className="sapxep">
            <div style={{ marginLeft: "10px", marginTop: "10px" }}> <p>Sắp xếp</p> </div>
            <input type="radio" /> Mặc định <br />
            <input type="radio" /> Giờ đi sớm nhất <br />
            <input type="radio" /> Giờ đi muộn nhất <br />
            <input type="radio" /> Đánh giá cao nhất <br />
            <input type="radio" /> Giá tăng dần <br />
            <input type="radio" /> Giá giảm dần <br />
        </div>
        <div className='detailcard' style={{ marginLeft: "100px" }}>
            <div className='list ' >
                <div className='anh'>
                    <img src="https://s3-alpha-sig.figma.com/img/0016/2435/9742c8d38923dc48c57e06b2f33c6c8c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ukvd32nA5qQuVyBLhysANZvRMLqyIxf81SaOJ~8y3-NpOBgyOM7FxIizNTKjQuXyc1yDA9C1WiSnopp~f6BUopQDKlAemU6x-4TsBqq6-XJnoonq-b3fRf6tVbpL8UO0wBHZGUzEzItZOUTfYHqsFN5imb0SrVSQMLPYo0ZC8xcvEc2OYV4oVmLKh3lM32~9~rkoXJPVCfp7GyOHV6HpQDAZsq2BA~We6UnobqPobIWvqv7lc8LWk6J~UU~SslvdSYBsdIMeC1keQluDBnyHqLstK0Yh9Pn5qgIVCvaiCzvHtj~Bx8ZBmcgbjSryk-8TpwoijW5Pga84UU~hln7bUA__" width={400} alt="" />
                </div>
                <div className='ticket'>
                    <div>
                        <p> <h2>Hải Phòng Travel <br />(Đất Cảng)</h2></p>
                        <p> Từ 19:00 - Hà Nội </p>
                        <p> Đến 20:30 - Hải Phòng</p>
                    </div>
                    <div className='btn-ticket'>
                        <p> <h3> Từ 230.000đ</h3> </p>
                        <p>Giảm 10%</p>
                        <p>Còn 11 chỗ</p>
                        <button>chọn chuyến</button>
                    </div>
                </div>
            </div>
            <div className='list ' >
                <div className='anh'>
                    <img src="https://s3-alpha-sig.figma.com/img/0016/2435/9742c8d38923dc48c57e06b2f33c6c8c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ukvd32nA5qQuVyBLhysANZvRMLqyIxf81SaOJ~8y3-NpOBgyOM7FxIizNTKjQuXyc1yDA9C1WiSnopp~f6BUopQDKlAemU6x-4TsBqq6-XJnoonq-b3fRf6tVbpL8UO0wBHZGUzEzItZOUTfYHqsFN5imb0SrVSQMLPYo0ZC8xcvEc2OYV4oVmLKh3lM32~9~rkoXJPVCfp7GyOHV6HpQDAZsq2BA~We6UnobqPobIWvqv7lc8LWk6J~UU~SslvdSYBsdIMeC1keQluDBnyHqLstK0Yh9Pn5qgIVCvaiCzvHtj~Bx8ZBmcgbjSryk-8TpwoijW5Pga84UU~hln7bUA__" width={400} alt="" />
                </div>
                <div className='ticket'>
                    <div>
                        <p> <h2>Hải Phòng Travel <br />(Đất Cảng)</h2></p>
                        <p> Từ 19:00 - Hà Nội </p>
                        <p> Đến 20:30 - Hải Phòng</p>
                    </div>
                    <div className='btn-ticket'>
                        <p> <h3> Từ 230.000đ</h3> </p>
                        <p>Giảm 10%</p>
                        <p>Còn 11 chỗ</p>
                        <button>chọn chuyến</button>
                    </div>
                </div>
            </div>
            <div className='list ' >
                <div className='anh'>
                    <img src="https://s3-alpha-sig.figma.com/img/8e85/fe39/76b57540bea503155d6ebba3f9adb503?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HOYmsky~Ib3xY8RReMHP2~UFa8F6j8tICWwXx9YtG7zNObAcVGkEqdslNPQB1hKMBOS~Wo9db~wMwfTObOruQRTNXyzdq83Q6RsuNn688GP5bsGRoCWRMAyzSEWrVPAiUu0S0GlXCn00DxHeG9dl2Hc-vv7Tddlp1zZiH-1wazIYHV8b2vCN7yFhpjz6eavdqkDilig0iszBLlXPcEf9wFMEmH47a0flotY9AepUPJUrYqB~uIFA09KRq~xKTTQWWAIsVf9VWDma2Ie1b~EP5RO0OWEv9l3Utqg0t4bkkWyZliXdbLbBGGNZN9GN9Py8tdYUbpIm8vuIEsbOmYoqHw__" width={400} alt="" />
                </div>
                <div className='ticket'>
                    <div>
                        <p> <h2>Hải Phòng Travel <br />(Đất Cảng)</h2></p>
                        <p> Từ 19:00 - Hà Nội </p>
                        <p> Đến 20:30 - Hải Phòng</p>
                    </div>
                    <div className='btn-ticket'>
                        <p> <h3> Từ 230.000đ</h3> </p>
                        <p>Giảm 10%</p>
                        <p>Còn 11 chỗ</p>
                        <button>chọn chuyến</button>
                    </div>
                </div>
            </div>


        </div>
    </div>
    )
}

export default Select