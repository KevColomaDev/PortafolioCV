import '/src/components/styles/Home.css';
import { SocialIcons } from '../../assets/icons/SocialIcons';
export function Home(){
    return (
        <div className='home'>
            <div className='social'>
                <hr />
                <SocialIcons />
            </div>
            <div className='description'>
                <h2>Hi, my name is</h2>
                <h1 className='name'>Kevin Coloma.</h1>
                <h1 className='things'>I make things for the web.</h1>
                <p className='text'>
                I am a software developer specializing in building interactive 
                and accessible websites for all people. My goal is to create user-friendly
                experiences that cater to a diverse audience.
                </p>
                <div className='resume'>
                    <a href="">Resume</a>
                </div>
            </div>
            <div className='email'>
                <a href="">kev.enrri@hotmail.com</a>
                <div className='linea'>
                    <hr />
                </div>
            </div>
        </div>
    )
}