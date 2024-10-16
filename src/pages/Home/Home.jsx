import React, {useState, useEffect} from 'react'
import Button from '../../common/components/Button/Button'
import Input from '../../common/components/Input';
import UserCard from '../../components/UserCard/UserCard';

export default function Home() {

    const [data, setData] = useState(0);

    useEffect(()=> {
        console.log(data)
    },[data])

    // console.log(data);
    function buttonClick() {
        console.log(data)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h1>ACPT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit itaque ullam perferendis illo officia debitis minima deserunt, voluptas nam nostrum provident blanditiis, error quidem eaque maxime repellat quas, necessitatibus ipsum?</p>



            <Button onClick={(val) => buttonClick()} name={'ACPT'} bgColor={'blue'} />
            <br /><br />
            <Button onClick={() => setData(data+1)} name={'Click Me'} bgColor={'orange'} />




            <br /><br />
            {/* <Button1 />
            
            <Button2 /> */}


            <Input
                type='text'
                placeholder='input your value'
                onChange={(val) => console.log(val.target.value)}
            />
            <br />
            <UserCard />
            <UserCard />
            <UserCard />
        </div>
    )
}