function Home(props)
{
    console.log(props)
    if(props.store.getState()[0]==null)
    {
        props.store.dispatch({type:"login",data:{un:props.un,role:1}})
    }
    
    return(
        <div>
            This is the HomePage {props.un}
        </div>
    );
}
export default Home