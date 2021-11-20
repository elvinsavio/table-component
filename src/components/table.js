import { useState } from "react"

 export const Table = (props) => {
    const [titleInput, setTitleInput] = useState("")
    const [title, setTitle] = useState(props.title) 
   
    const [data, setData] = useState(props.data)

    const handleTitleInput = (e) => {
        if( titleInput === "" || title.includes(titleInput) ){
            return  
        }
        setTitle([...title, titleInput])
    }

    const handleTitleChange = (e,index) => {
        const newTitle = [...title]
        newTitle[index] = e.target.value
        setTitle(newTitle)
    }


    return (
        <>
        <div className="table-cont">
            <div className="table-header">
                {title.map((items, index) => {
                    return(
                        <input type='text' className="table-header-title" key={index} value={items} onChange={(e) => handleTitleChange(e,index)}/>
                    )
                })}
                <input 
                    className="header-title-input" 
                    type="text" 
                    placeholder="Add new field" 
                    value= {titleInput} 
                    onChange={(e) => setTitleInput(e.target.value)} 
                />
                <button 
                    className="add-button"
                    onClick={(e) => handleTitleInput(e.target.value)}
                >Add Field</button>
            </div>

            <div className="table-body">
                {Object.keys(data).map((items, index) => {
                    return (
                        <div className="table-body-row" key={index}>
                            {title.map((item, index) => {
                                return(
                                    <input 
                                        type="text" 
                                        className="table-body-cell" 
                                        key={index} 
                                        defaultValue={data[items][item]} 
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <button className="add-button" onClick={()=> setData([...data,{}])}>Add row</button>
        </div>
        </>
    )

}


Table.defaultProps = {
    title: [],
    data: {}
}