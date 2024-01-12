

function NestedComponents(props) {
    const x = props.data.childControls;

    console.log(x,"xxxxxxxxxxxx");
    return (
      
        <>

        <h2>{props.data.name}</h2>
        <h2>{props.data.properties.TabIndex}</h2>

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