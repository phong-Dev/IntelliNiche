import { Button } from "../components/Button";

const ButtonFilter = ({button, filter}) => {
    return (
        <div className="text-center">
            {
                button.map((cat, i)=>{
                    return <Button key={i} type="button" buttonStyle="btn--line" onClick={()=> filter(cat)} className="btn">{cat}</Button>
                })
            }
        </div>
    )
}

export default ButtonFilter
