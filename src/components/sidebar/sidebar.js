import './sidebar.css';
import Suggestions from './suggestions.js';
import React from 'react';
import Footer from '../footer/footer.js';


function Sidebar() {
    return (
        <div className='side__bar'>
            <div className='side__menu'>
                <div className='side__menu__profile'>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGDfC70BC1O_Q/profile-displayphoto-shrink_200_200/0/1647127598863?e=1657152000&v=beta&t=_UJ5whMBEhSdNbefwnfNue6SMqOFdxKr8Rni6og3x3g" width='56px' />
                    <div className='username_name'>
                        <b>o_wrp</b>
                        <p>Wagner Pereira | Full Stack Developer</p>
                    </div>
                </div>
                <div className='suggestions'>
                    <b>Suggestions For You</b>
                    <button>See All</button>
                </div>

                <Suggestions
                    imgpic="https://media-exp1.licdn.com/dms/image/C4D03AQERFmUysyUMXQ/profile-displayphoto-shrink_200_200/0/1569545019530?e=1657152000&v=beta&t=_AEHPSQlc5ZIeo4gcY_9drtvTRIndyIjZMilpprWII4"
                    username="auroraseles"
                    legend="Followed by instituto.proa" />
                <Suggestions
                    imgpic="https://media-exp1.licdn.com/dms/image/C4E03AQEMFO6yMCYjaQ/profile-displayphoto-shrink_200_200/0/1639491349201?e=1657152000&v=beta&t=4_6Lmc0WcJ9i3Prg3hESaSIgHOL6x3axkrorGWE27Oo"
                    username="alinidalmagro"
                    legend="Followed by instituto.proa" />
                <Suggestions
                    imgpic="https://media-exp1.licdn.com/dms/image/C4D03AQFp2_Y7qRq2Ng/profile-displayphoto-shrink_200_200/0/1517465523742?e=1657152000&v=beta&t=pZUT_r03FQx06-DP5ZJOyTtj6NvY1d_tGfewySlxaYs"
                    username="gab.augustoz"
                    legend="Followed by instituto.proa" />
                <Suggestions
                    imgpic="https://media-exp1.licdn.com/dms/image/C4D03AQFgpx9zI8VAdA/profile-displayphoto-shrink_200_200/0/1610561338360?e=1657152000&v=beta&t=gn3KzaAShLlx9nGTFSB8S_RLWdGH_9qJ6lOlanFQQfU"
                    username="jailsoncsantos"
                    legend="Followed by instituto.proa" />
                <Suggestions
                    imgpic="https://media-exp1.licdn.com/dms/image/C4E03AQE5HMM_lITdfQ/profile-displayphoto-shrink_200_200/0/1645535764970?e=1657152000&v=beta&t=SxOoql1knN5MptAr76Dj4R85-6JExzByrydNfM3ld-M"
                    username="debora.paixao"
                    legend="Followed by instituto.proa" />

                <Footer />
            </div>
        </div>
    );
}

export default Sidebar;