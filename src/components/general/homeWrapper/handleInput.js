export function handleInput(e, data, setData){
    if(e.target){
        if(e.target.name === "name"){
            setData(data = {...data,
                name: e.target.value
            })
        }else if(e.target.name === "email"){
            setData(data = {...data,
                email: e.target.value
            })
        }else if(e.target.name === "ra"){
            setData(data = {...data,
                ra: e.target.value
            })
        }
    }
}