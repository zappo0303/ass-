import Button from "./Button"
import Navigation from "./Navigation"
const Header = () => {
    return <div style={{display : "flex", justifyContent: "space-between", backgroundColor: "#2474E5" }}>
        <img src="https://storage.googleapis.com/fe-production/svgIcon/icon_vxr_full_2.svg" alt="" />
        <div style={{marginLeft: "600px"}}>
            <Navigation/>
        </div>
        <div style={{display: "flex"}}>
        <Button title="Hotline 24/7"/>
        <Button title="Đăng nhập"/>
        </div>
    </div>
}

export default Header