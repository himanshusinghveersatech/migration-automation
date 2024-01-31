import Panel from "./Panel/Panel";
import './NestedComponents.css';
function NestedComponents(props) {
    const x = props.data.childControls;

    
    return (
      
        <>
     
     <Panel item={props.data} />
        {
            props.data.childControls && props.data.childControls.map((ele) => {return <NestedComponents data={ele}/>})
        }
          

        {/* <p> {props.data.name}</p>
       
        {props.data &
        <div>
            {props.data}
        
         {props.data.childControls && props.data.childControls.map((ele)=>{return <NestedComponents data={ele} />}) }
        </div>
         } */}
        
        </>
    )
}

export default NestedComponents;