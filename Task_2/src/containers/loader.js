import Loader from "react-loader-spinner";
import './Styles.css';

const Loaderc = ()=>{
    // const [spinnerLoading, setSpinnerLoading] = useState(true);
    return(
        <div style={{ textAlign: "center" }} className='app'>
            <Loader
            type="Bars"
            color="#ffab5d"
            height={200}
            width={200}
            />
            {/* <button onClick={() => setSpinnerLoading(!spinnerLoading)}>Toggle Loader</button> */}
       </div>
    );
}
export default Loaderc