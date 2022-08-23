import './main-screen.scss'

const MainScreen = () => {
    return (
        <>
            {/* <video autoPlay={true} muted loop id='main-video'>
                <source src={process.env.PUBLIC_URL + 'main-video.mp4'} />
            </video> */}
            <div
                className='intro-section'
                id='home-section'
                style={{'background-color': '#121212'}}
            >
                <div className='container' style={{position: 'relative'}}>
                    <div className='row align-items-center d-flex'>
                        <div
                            className='col-lg-8 mx-auto text-center aos-init aos-animate'
                            data-aos='fade-up'
                        >
                            <h1 style={{textAlign: 'center'}}><span>Welcome to</span> MOV.space</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainScreen;
