import './feed.css';
import React from 'react';
import Stories from '../stories/stories.js'
import Post from '../post/post.js'
import Postvideo from '../post__video/post__video.js';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useRef, useState } from 'react';



function Feed() {
    const storiesRef = useRef(null);
    const [showleft, setShowleft] = useState(false);
    const [showright, setShowright] = useState(true);

    const onScroll = () => {
        if (storiesRef.current.scrollLeft ===
            storiesRef.current.scrollWidth -
            scrollRef.current.clientWidth) {
            setShowright(false)
        } else {
            setShowright(true)
        }
        if (storiesRef.current.scrollLeft > 0) {
            setShowleft(true)
        } else {
            setShowleft(false)
        }
    }
    return (
        <div className='feed'>
            <div className='container__stories relative'>
                <div className='stories  scrollbar-hide scroll-smooth overflow-x-scroll' onScroll={onscroll} ref={storiesRef}>
                    <Stories picstories="https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_200_200/0/1591018493674?e=1660176000&v=beta&t=RucxRfnnPoTT_1jjsfdf4yxR_Lu17K6p6gU-jjIUJ7A"
                        username="instituto.proa" />
                    <Stories picstories="https://lh3.googleusercontent.com/a-/AOh14Ggsyzwyi6qrodmwrh-mk1cc5W_RgrTidUPdXl93=s96-c-rg-br100"
                        username="apadrinhe.me" />
                    <Stories picstories="https://wpguru.co.uk/wp-content/uploads/2020/09/unreal-engine-icon-25.jpg"
                        username="unreal_engine" />
                    <Stories picstories="https://cdnb.artstation.com/p/users/avatars/000/016/611/large/be5accf155b7659bd0b3cc88d07eb07f.jpg?1616737146"
                        username="pedro.conti" />
                    <Stories picstories="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/65494b103626973.5f50ff20ab3a7.jpg"
                        username="traveling.the_world" />
                    <Stories picstories="https://media-exp1.licdn.com/dms/image/C4E03AQFNBIKGov1W5g/profile-displayphoto-shrink_800_800/0/1647448239379?e=1657756800&v=beta&t=KgrqSPp3sMmGsUHJDInaO-1-XBwO6OnSmHopr8qnVOo"
                        username="natan_rocha_" />
                    <Stories picstories="https://media-exp1.licdn.com/dms/image/C4D03AQEfzYWpevgRVA/profile-displayphoto-shrink_800_800/0/1648663497894?e=1657756800&v=beta&t=CUIGKQcz2s-sNdPiYZ5m_p6FeJ5trpusC9MPWt0ygK4"
                        username="jg" />
                    <Stories picstories="https://media-exp1.licdn.com/dms/image/D4D35AQE3bO_o846uYA/profile-framedphoto-shrink_200_200/0/1648666260981?e=1652198400&v=beta&t=CONVG50GI0geGUTX8WB9PPpJJzedOKddYaS4Vn_ik8A"
                        username="muliro_mouura" />
                    <Stories picstories="https://media-exp1.licdn.com/dms/image/D4E35AQGdSJYcjB6DeQ/profile-framedphoto-shrink_200_200/0/1645190783743?e=1652198400&v=beta&t=jdZP_Q6C0mGeFH9aAJzLutbcIYYdemed-nMu2I7x8Dw"
                        username="gu.reiis" />
                </div>

                <div className='arrows flex absolute w-full top-0 p-4 items-center top-8 justify-between'>
                    <button onClick={() => {
                        storiesRef.current.scrollLeft = storiesRef.current.scrollLeft - 600
                    }
                    }>
                        <BiChevronLeft className={'cursor-pointer bg-white text-gray drop-shadow-lg tex-gray-400 w-6 h-6 rounded-full ${showleft ? "visible" : "invisible"}'} />
                    </button>

                    <button onClick={() => {
                        storiesRef.current.scrollLeft = storiesRef.current.scrollLeft + 600
                    }
                    }>
                        <BiChevronRight className={'cursor - pointer bg-white text-gray drop-shadow-lg tex-gray-400 w-6 h-6 rounded-full ${showright ? "visible" : "invisible"}'} />
                    </button>
                </div>
            </div>

            <Postvideo userpic="https://cdnb.artstation.com/p/users/avatars/000/016/611/large/be5accf155b7659bd0b3cc88d07eb07f.jpg?1616737146"
                vid="https://cdn-animation.artstation.com/p/video_sources/000/768/299/c.mp4"
                username="pedro.conti"
                content="Here is a character design I did for Emicida's concert inside fortnite for SoundWaves Series. Thanks to Cisma and Lab Fantasma Team.
                Shout out"
                vermais="... more" />

            <Post userpic="https://wpguru.co.uk/wp-content/uploads/2020/09/unreal-engine-icon-25.jpg"
                img="https://cdnb.artstation.com/p/assets/images/images/049/098/115/medium/david-baylis-rearsq.jpg?1651687589"
                username="unreal_engine"
                content="Alfa Romeo Tipo 33 - Render achieved with Unreal Engine 5.
                This is a scene I had in mind for a while, I was really waiting for the realtime GI"
                vermais="... more" />

            <Post userpic="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/65494b103626973.5f50ff20ab3a7.jpg"
                img="https://vemvoar.voeazul.com.br/wp-content/uploads/2021/01/Paris.jpg"
                username="traveling.the_world"
                content="Já pensou ir para Paris ainda este ano? Então visite nosso sote na bio para saber mais sobre esta grande oportunidade" />

            <Post userpic="https://previews.123rf.com/images/antoshkaforever/antoshkaforever1707/antoshkaforever170700014/82763969-logo-de-dubai-idea-para-logos-%C3%A1rabes-y-eventos-de-dubai-vector-de-la-plantilla-.jpg"
                img="https://static.poder360.com.br/2021/11/dubai.jpeg"
                username="dubai.feelings"
                content="Venha viver experiências incríveis" />
        </div >
    );
}

export default Feed;
