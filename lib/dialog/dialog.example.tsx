// import * as React from 'react'
// import Dialog, { alert, confirm, Modal } from './dialog'

// export default () => {
//   const [x, setX] = React.useState(false)
//   const onConfirm = () => {
//     confirm('confirm', () => {
//       console.log(1)
//     }, () => {
//       console.log(2)
//     })
//   }
//   const openModal = () => {
//     const close = Modal(<div>haha
//       <button onClick={() => close()}>close</button>
//     </div>)
//   }

//   return (
//     <div>
//       
//       
//       <div>
//         <h2>example3</h2>
//         <button onClick={() => alert('xxx')}>alert</button>
//       </div>
//       <div>
//         <h2>example4</h2>
//         <button onClick={onConfirm}>confirm</button>
//       </div>
//       <div>
//         <h2>example5</h2>
//         <button onClick={openModal}>modal</button>
//       </div>
//     </div>
//   )
// }