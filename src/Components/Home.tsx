import React, { useState } from 'react';
import '../Styles/Home.css';
import nextBtnImg from '../Data/icon/next.png';
import prevBtnImg from '../Data/icon/previous.png';
import { HomePageData } from '../Data/HomePageData';
import NavBar from './NavBar';

const Home: React.FC = () => {
    const pieData = HomePageData;
    const [firstColor, setFirstColor] = useState<string>(pieData[0].color);
    const [secondColor, setSecondColor] = useState<string>(pieData[0].color);
    const [opacity, setOpacity] = useState<number>(0);
    const [isTransitionEnd, setIsTransitionEnd] = useState<boolean>(true);
    const [index, setIndex] = useState<number>(0);
    const [transitionCount, setTransitionCount] = useState<number>(0);

    const handleSwitch = (direction: string) => {
        if (direction === "left") {
            if (index > 0) {
                setIndex(index - 1);

                pieData[index].transitionStatus = "rotatePie-leftExit";
                pieData[index - 1].transitionStatus = "rotatePie-enter";

                pieData[index].topLeftTransition = "topLeftExit";
                pieData[index].topRightTransition = "topRightExit";

                pieData[index - 1].topLeftTransition = "topEnter";
                pieData[index - 1].topRightTransition = "topEnter";

                pieData[index].bottomTransition = "bottomExit";
                pieData[index - 1].bottomTransition = "bottomEnter";

                pieData[index - 1].contentTransition = "contentEnter";
                pieData[index].contentTransition = "contentExit";

                setSecondColor(pieData[index - 1].color);
            }

        } else {

            if (index < pieData.length - 1) {
                setIndex(index + 1);

                pieData[index].transitionStatus = "rotatePie-rightExit";
                pieData[index + 1].transitionStatus = "rotatePie-enter";

                pieData[index].topLeftTransition = "topLeftExit";
                pieData[index].topRightTransition = "topRightExit";

                pieData[index + 1].topLeftTransition = "topEnter";
                pieData[index + 1].topRightTransition = "topEnter";

                pieData[index].bottomTransition = "bottomExit";
                pieData[index + 1].bottomTransition = "bottomEnter";

                pieData[index + 1].contentTransition = "contentEnter";
                pieData[index].contentTransition = "contentExit";

                setSecondColor(pieData[index + 1].color);
            }

        }

        setIsTransitionEnd(false);
        setOpacity(1);
    }

    const handleTransitionEnd = () => {
        if (transitionCount > 3) {
            setFirstColor(secondColor);
            setIsTransitionEnd(true);
            setOpacity(0);
            setTransitionCount(0);
        }
        else {
            setTransitionCount(transitionCount + 1);
        }
    }





    return (
        <div className="color-transition" style={{ '--frist-color': firstColor, '--second-color': secondColor, '--opacity-value': opacity } as any} onTransitionEnd={() => { handleTransitionEnd() }}>

            <NavBar />

            {pieData.map((pie, index) => {

                return (
                    <>
                        <img className={'topImg ' + pie.topLeftTransition} src={pie.topImg} style={{ '--left-Flip': -1, left: 0 } as any} alt="" />

                        <img className={'topImg ' + pie.topRightTransition} src={pie.topImg} style={{ right: 0 }} alt="" />

                        <div className={"content " + pie.contentTransition}>
                            <h1 className='homeTitle'> {pie.title} </h1>

                            <div className='homeDesc'>
                                <p className='price'>Price: {pie.price}</p>
                                <p className='desc'> <span>{pie.title}</span> {pie.describe}</p>
                            </div>
                            <div className="homeBtn">
                                <button className="moreInfo" onClick={() => {alert("this feature is coming soon")}}>More Info</button>
                                <button className="order" onClick={() => {alert("this feature is coming soon")}}>Order Now</button>
                            </div>

                        </div>


                        <div className={"rotatePie " + pie.transitionStatus} key={index}>
                            <img src={pie.img} alt="" />
                        </div>

                        <img className={'iconBottom ' + pie.bottomTransition} src={pie.bottomImg} alt="" />
                    </>


                )
            })}



            <div className="switchBtn">
                {index !== 0 ?
                    <div className="leftBtn Btn" onClick={() => isTransitionEnd ? handleSwitch("left") : null}>
                        <img src={prevBtnImg} alt="" />
                    </div>
                    : null
                }

                {index !== pieData.length - 1 ?
                    <div className="rightBtn Btn" onClick={() => isTransitionEnd ? handleSwitch("right") : null}>
                        <img src={nextBtnImg} alt="" />
                    </div>
                    : null
                }

            </div>


        </div>
    );
};

export default Home;
