import '/src/components/styles/Home.css'
export function Home(){
    return (
        <div className='home'>
            <div className='social'>
                <hr />
                <a href=""><img src="/src/assets/icons/github.svg" alt="Github" /></a>
                <a href=""><img src="/src/assets/icons/linkedin.svg" alt="Linkedin" /></a>
                <a href=""><img src="/src/assets/icons/instagram.svg" alt="Instagram" /></a>
                <a href=""><img src="/src/assets/icons/x-twitter.svg" alt="Twitter" /></a>
            </div>
            <div className='description'>
                <span>Hi, my name is</span>
                <h1 className='name'>Kevin Coloma.</h1>
                <h1 className='things'>I make things for the web.</h1>
                <p>
                    I am a software developer specializing in building 
                    sites interactives and accseibles for any people.
                </p>
            </div>
            <div className='email'>
                kev.enrri@hotmail.com
                <div className='linea'>
                    <hr />
                </div>
            </div>
        </div>
    )
}