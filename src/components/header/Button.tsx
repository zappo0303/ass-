// Props : là đối tượng đặc biệt (không thể bị thay đổi)
// được truyền từ cha xuống con 
// Là để tái sử dụng code giữa các component
import './Button.css'
const Button = (props: {title: String}) => {
    return <button>
        {props.title}
    </button>
}

export default Button