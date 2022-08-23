import './trainers.scss';
import James from './James-Holmes.jpg';
import Kelly from './Kelly-Green.jpg';
import Sven from './sven-mieke.jpg';
const Trainers = () => {
    return (
        <div class='site-section' id='trainer-section'>
            <div class='container'>
                <div class='row'>
                    <div class='col-lg-6 mb-5'>
                        <h2 class='section-title'>Тренери</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Rem possimus distinctio ex. Natus totam
                            voluptatibus animi aspernatur ducimus quas obcaecati
                            mollitia quibusdam temporibus culpa dolore molestias
                            blanditiis consequuntur sunt nisi.
                        </p>
                    </div>
                </div>
                <div class='row m-t-1 large-gutters'>
                    <div class='col-md-6 person col-lg-4 mb-4 mb-lg-0'>
                        <img
                            src={James}
                            alt='James Holmes'
                            class='img-fluid mb-5 img-square'
                        />
                        <h3>James Holmes</h3>
                        <p class='mb-4 opacity-7'>Aerobatics Trainer</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nihil repellat ipsam sequi iure rerum
                            voluptatem, dignissimos dolorem porro aliquid
                            veritatis!
                        </p>
                    </div>
                    <div class='col-md-6 person col-lg-4 mb-4 mb-lg-0 mt-5'>
                        <img
                            src={Kelly}
                            alt='Kelly Green'
                            class='img-fluid mb-5 img-square'
                        />
                        <h3>Kelly Green</h3>
                        <p class='mb-4 opacity-7'>Aerobatics Trainer</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nihil repellat ipsam sequi iure rerum
                            voluptatem, dignissimos dolorem porro aliquid
                            veritatis!
                        </p>
                    </div>
                    <div class='col-md-6 person col-lg-4 mb-4 mb-lg-0'>
                        <img
                            src={Sven}
                            alt='Sven Mieke'
                            class='img-fluid mb-5 img-square'
                        />
                        <h3>Sven Mieke</h3>
                        <p class='mb-4 opacity-7'>Aerobatics Trainer</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nihil repellat ipsam sequi iure rerum
                            voluptatem, dignissimos dolorem porro aliquid
                            veritatis!
                        </p>
                    </div>
                </div>
                <div class='row m-t-1 large-gutters'>
                    <div class='col-md-6 person col-lg-4 mb-4 mb-lg-0'>
                        <img
                            src={James}
                            alt='James Holmes'
                            class='img-fluid mb-5 img-square'
                        />
                        <h3>James Holmes</h3>
                        <p class='mb-4 opacity-7'>Aerobatics Trainer</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nihil repellat ipsam sequi iure rerum
                            voluptatem, dignissimos dolorem porro aliquid
                            veritatis!
                        </p>
                    </div>
                    <div class='col-md-6 person col-lg-4 mb-4 mb-lg-0'>
                        <img
                            src={Sven}
                            alt='Sven Mieke'
                            class='img-fluid mb-5 img-square'
                        />
                        <h3>Sven Mieke</h3>
                        <p class='mb-4 opacity-7'>Aerobatics Trainer</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nihil repellat ipsam sequi iure rerum
                            voluptatem, dignissimos dolorem porro aliquid
                            veritatis!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Trainers;
