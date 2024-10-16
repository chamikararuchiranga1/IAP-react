import './button.css'

export default function Button(props) {

  // function clickMe(value) {
  //   alert('click me..!')
  // }

  return (
    <button onClick={() => props.onClick(props.name)} style={{ backgroundColor: props.bgColor }} className='btn'>{props.name}</button>
  )
}

// export function Button1 () {
//     return (
//         <button className='btn1'>Click Me</button>
//       )
// }

// export function Button2 () {
//     return (
//         <button className='btn2'>Click Me</button>
//       )
// }