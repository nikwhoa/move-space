import './schedule.scss';

const Schedule = () => {
    return (
        <div className='site-section section-2' id='schedule-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 mb-5'>
                        <h2 className='section-title'>Schedule</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Rem possimus distinctio ex. Natus totam
                            voluptatibus animi aspernatur ducimus quas obcaecati
                            mollitia quibusdam temporibus culpa dolore molestias
                            blanditiis consequuntur sunt nisi.
                        </p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <ul
                            className='nav nav-tabs mb-5 border-bottom-0 justify-content-center tab-list-custom'
                            id='myTab'
                            role='tablist'
                        >
                            <li className='nav-item'>
                                <a
                                    className='nav-link active'
                                    id='monday-tab'
                                    data-toggle='tab'
                                    href='#monday'
                                    role='tab'
                                    aria-controls='monday'
                                    aria-selected='true'
                                >
                                    Monday
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    id='tuesday-tab'
                                    data-toggle='tab'
                                    href='#tuesday'
                                    role='tab'
                                    aria-controls='tuesday'
                                    aria-selected='false'
                                >
                                    Tuesday
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    id='wednesday-tab'
                                    data-toggle='tab'
                                    href='#wednesday'
                                    role='tab'
                                    aria-controls='wednesday'
                                    aria-selected='false'
                                >
                                    Wednesday
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    id='wednesday-tab'
                                    data-toggle='tab'
                                    href='#wednesday'
                                    role='tab'
                                    aria-controls='wednesday'
                                    aria-selected='false'
                                >
                                    Thursday
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    id='wednesday-tab'
                                    data-toggle='tab'
                                    href='#wednesday'
                                    role='tab'
                                    aria-controls='wednesday'
                                    aria-selected='false'
                                >
                                    Friday
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    id='wednesday-tab'
                                    data-toggle='tab'
                                    href='#wednesday'
                                    role='tab'
                                    aria-controls='wednesday'
                                    aria-selected='false'
                                >
                                    Sunday
                                </a>
                            </li>
                        </ul>
                        <div className='tab-content' id='myTabContent'>
                            <div
                                className='tab-pane fade show active'
                                id='monday'
                                role='tabpanel'
                                aria-labelledby='monday-tab'
                            >
                                <table className='table table-bordered table-custom table-striped '>
                                    <tbody>
                                        <tr>
                                            <td>Gym</td>
                                            <td>8:00am - 10:00am</td>
                                            <td>John Doe</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Meditation</td>
                                            <td>10:00am - 10:30am</td>
                                            <td>James Holmes</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Weight Lifting</td>
                                            <td>1:00pm - 2:30pm</td>
                                            <td>Ben Smith</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Crossfit</td>
                                            <td>3:00pm - 3:45pm</td>
                                            <td>Craig Peters</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Aerobics</td>
                                            <td>5:00pm - 5:30pm</td>
                                            <td>Paul Green</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div
                                className='tab-pane fade'
                                id='tuesday'
                                role='tabpanel'
                                aria-labelledby='tuesday-tab'
                            >
                                <table className='table table-bordered table-custom table-striped '>
                                    <tbody>
                                        <tr>
                                            <td>Gym</td>
                                            <td>8:00am - 10:00am</td>
                                            <td>John Doe</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Meditation</td>
                                            <td>10:00am - 10:30am</td>
                                            <td>James Holmes</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Weight Lifting</td>
                                            <td>1:00pm - 2:30pm</td>
                                            <td>Ben Smith</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Crossfit</td>
                                            <td>3:00pm - 3:45pm</td>
                                            <td>Craig Peters</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Aerobics</td>
                                            <td>5:00pm - 5:30pm</td>
                                            <td>Paul Green</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div
                                className='tab-pane fade'
                                id='wednesday'
                                role='tabpanel'
                                aria-labelledby='wednesday-tab'
                            >
                                <table className='table table-bordered table-custom table-striped '>
                                    <tbody>
                                        <tr>
                                            <td>Gym</td>
                                            <td>8:00am - 10:00am</td>
                                            <td>John Doe</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Meditation</td>
                                            <td>10:00am - 10:30am</td>
                                            <td>James Holmes</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Weight Lifting</td>
                                            <td>1:00pm - 2:30pm</td>
                                            <td>Ben Smith</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Crossfit</td>
                                            <td>3:00pm - 3:45pm</td>
                                            <td>Craig Peters</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Aerobics</td>
                                            <td>5:00pm - 5:30pm</td>
                                            <td>Paul Green</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div
                                className='tab-pane fade'
                                id='thursday'
                                role='tabpanel'
                                aria-labelledby='thursday-tab'
                            >
                                <table className='table table-bordered table-custom table-striped '>
                                    <tbody>
                                        <tr>
                                            <td>Gym</td>
                                            <td>8:00am - 10:00am</td>
                                            <td>John Doe</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Meditation</td>
                                            <td>10:00am - 10:30am</td>
                                            <td>James Holmes</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Weight Lifting</td>
                                            <td>1:00pm - 2:30pm</td>
                                            <td>Ben Smith</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Crossfit</td>
                                            <td>3:00pm - 3:45pm</td>
                                            <td>Craig Peters</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Aerobics</td>
                                            <td>5:00pm - 5:30pm</td>
                                            <td>Paul Green</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div
                                className='tab-pane fade'
                                id='friday'
                                role='tabpanel'
                                aria-labelledby='friday-tab'
                            >
                                <table className='table table-bordered table-custom table-striped '>
                                    <tbody>
                                        <tr>
                                            <td>Gym</td>
                                            <td>8:00am - 10:00am</td>
                                            <td>John Doe</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Meditation</td>
                                            <td>10:00am - 10:30am</td>
                                            <td>James Holmes</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Weight Lifting</td>
                                            <td>1:00pm - 2:30pm</td>
                                            <td>Ben Smith</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Crossfit</td>
                                            <td>3:00pm - 3:45pm</td>
                                            <td>Craig Peters</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Aerobics</td>
                                            <td>5:00pm - 5:30pm</td>
                                            <td>Paul Green</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div
                                className='tab-pane fade'
                                id='sunday'
                                role='tabpanel'
                                aria-labelledby='sunday-tab'
                            >
                                <table className='table table-bordered table-custom table-striped '>
                                    <tbody>
                                        <tr>
                                            <td>Gym</td>
                                            <td>8:00am - 10:00am</td>
                                            <td>John Doe</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Meditation</td>
                                            <td>10:00am - 10:30am</td>
                                            <td>James Holmes</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Weight Lifting</td>
                                            <td>1:00pm - 2:30pm</td>
                                            <td>Ben Smith</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Crossfit</td>
                                            <td>3:00pm - 3:45pm</td>
                                            <td>Craig Peters</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Aerobics</td>
                                            <td>5:00pm - 5:30pm</td>
                                            <td>Paul Green</td>
                                            <td className='text-center'>
                                                <a
                                                    href='#contact-section'
                                                    className='smoothscroll'
                                                >
                                                    Join Now
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
