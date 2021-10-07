import React from 'react'


const Hello2 = () => {

//     return (
//         <div>
//             <h1>Hello</h1>
//         </div>
//     )
// }
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummy_class'} ,
        React.createElement('hi', null, 'Hello Vishwas')
        )

}    
export default Hello2