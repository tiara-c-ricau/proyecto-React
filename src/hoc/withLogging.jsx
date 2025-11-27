import { useEffect } from "react"

const withLogging = (WrappedComponent) =>{

    //Se define al nuevo componente qe se crea en el hoc
    const ComponentWithLogging = (props)=> {
        //Efecto que se ejecuta cuando el comonente aparece en pantalla
        useEffect(()=>{
            console.log(`💡${WrappedComponent.name} se montó`)
            console.log(WrappedComponent)
        },[])

        
        return(
            <WrappedComponent {...props}/>
        )
    }

    return ComponentWithLogging

}
export default withLogging