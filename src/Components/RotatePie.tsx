import React, { useEffect, useState } from 'react';
import arrow from '../Data/icon/right-arrow.png'
import '../Styles/RotatePie.css';
import { PieData } from '../Data/PieData';
import NavBar from './NavBar';
import DialogPopUp from './DialogPopUp';

type imgPostion = {
    prev: number;
    current1: number;
    current2: number;
    next: number;
}

const RotatePie: React.FC = () => {


    const [isIntial, setIsIntial] = React.useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);
    const [isTextinital, setIsTextinital] = React.useState(true);

    // ------------------- rotate -------------------//

    const [rotate, setRotate] = React.useState(0);
    const [countRightRotate, setCountRightRotate] = React.useState(0);

    // ------------------- page -------------------//

    const [page, setPage] = React.useState(0);

    // ------------------- img -------------------//

    const [isImg1, setIsImg1] = React.useState(false);
    const [imgPostion, setImgPostion] = React.useState<imgPostion>({ prev: -1, current1: 0, current2: 1, next: 2 });
    const [img1, setImg1] = React.useState<string>();
    const [img2, setImg2] = React.useState<string>();

    // ------------------- resize -------------------//

    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    //------------------- Control Dialog Pop up -------------------//

    const [open, setOpen] = React.useState(false);
    const [dataInfo, setDataInfo] = React.useState({});

    const handleClickOpen = (describe: string, name: string) => {
        setOpen(true);
        setDataInfo({ desc: describe, title: name });
    };

    // ---------------------------------------------//
    // This is the resize function

    useEffect(() => {
        const updateScreenSize = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    // ---------------------------------------------//
    // This is the data for the pie

    const contentData = PieData;

    useEffect(() => {

        if (isIntial) {
            getIntitalImg();
            setIsIntial(false);
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isIntial]);

    // ---------------------------------------------//
    // This is the fuction to handle and control the rotate

    const handleSwitch = (direction: string) => {

        console.log(page);


        if (!isButtonDisabled) {
            if (direction === 'left' && page > 0) {
                setRotate(rotate - 180);
                setCountRightRotate(countRightRotate - 1);
                setPage(page - 1);
                setIsButtonDisabled(true);
                getImg(countRightRotate - 1);

                contentData[page].transitionStatus = 'ContentLeftExit';
                contentData[page - 1].transitionStatus = 'ContentEnter';
                contentData[page].transitionImgStatus = 'imgExit';
                contentData[page - 1].transitionImgStatus = 'imgEnter';

            } else if (direction === 'right' && page < contentData.length - 1) {
                setRotate(rotate + 180);
                setCountRightRotate(countRightRotate + 1);
                setPage(page + 1);
                setIsButtonDisabled(true);
                getImg(countRightRotate + 1);

                contentData[page].transitionStatus = 'ContentRightExit';
                contentData[page + 1].transitionStatus = 'ContentEnter';
                contentData[page].transitionImgStatus = 'imgExit';
                contentData[page + 1].transitionImgStatus = 'imgEnter';
            }

            setIsImg1(!isImg1);
        }
    };

    // ---------------------------------------------//

    const handleClick = (e: any) => {
        alert("this function is not ready yet")
    };

    const getIntitalImg = () => {

        setImg1(contentData[0].img);
        setImg2(contentData[1].img);

    }

    // TODO: fix this function to make more simple.
    const getImg = (countRightRotate: number): any => {

        console.log(page);

        if (countRightRotate === 2 || countRightRotate === -2) {
            const index = countRightRotate > 0 ? 1 : -1;
            setCountRightRotate(0);
            if (isImg1) {
                index > 0 ? setImg1(contentData[imgPostion.next].img) : setImg1(contentData[imgPostion.prev].img);
                index > 0 ?
                    setImgPostion({ ...imgPostion, prev: imgPostion.current1, current1: imgPostion.next, next: imgPostion.next + 1 }) :
                    setImgPostion({ ...imgPostion, prev: imgPostion.current1 - 1, current1: imgPostion.prev, next: imgPostion.current1 });
            }
            else if (!isImg1) {
                index > 0 ? setImg1(contentData[imgPostion.next].img) : setImg1(contentData[imgPostion.prev].img);
                index > 0 ?
                    setImgPostion({ ...imgPostion, prev: imgPostion.current2, current2: imgPostion.next, next: imgPostion.next + 1 }) :
                    setImgPostion({ ...imgPostion, prev: imgPostion.prev - 1, current2: imgPostion.prev, next: imgPostion.current2 });
            }
        }



    }

    // ---------------------------------------------//

    return (
        <div className='rotatePieContainer'
            style={{ background: contentData[page].color }}>
            <NavBar />

            <DialogPopUp open={open} dataInfo={dataInfo} handleDialogClose={setOpen} />


            {contentData.map((item, index) => {

                return (
                    <div key={index} className={isTextinital ? "content " + item.transitionStatus + " initalText" : "content " + item.transitionStatus} onAnimationEnd={() => setIsTextinital(false)}>
                        <div className="contentTitle">{item.title}</div>
                        <div className="addCart">
                            <div className="price">Price: {item.price}</div>
                            <div className="button" onClick={handleClick}>Add to Cart</div>
                            <div className="button moreInfo" onClick={() => handleClickOpen(item.describe, item.title)}>More Info</div>
                        </div>
                    </div>
                );
            })}

            {contentData.map((item) => {
                let countIndex = 0

                if (screenSize.width < 767) {
                    countIndex = 6;
                } else if (screenSize.width < 1280) {
                    countIndex = 7;
                }else {
                    countIndex = 9;
                }

                return (Array.from({ length: countIndex }).map((_, index) => (
                    <img src={item.icon} alt="" className={'fruit postion' + index + ' ' + item.transitionImgStatus} />
                )))



            })}

            <div className="buttonContainer">
                <div className="swtichPie">
                    <div className={"leftSlide " + (page === 0 ? "disableButton" : "")}> <img src={arrow} alt="" onClick={() => handleSwitch("left")} />  </div>
                    <div className={"rightSlide " + (page === contentData.length - 1 ? "disableButton" : "")}> <img src={arrow} alt="" onClick={() => handleSwitch("right")} />  </div>
                </div>
            </div>
            
            <div className='rotateMotion' style={{ transform: `rotate(${rotate}deg)` }} onTransitionEnd={() => setIsButtonDisabled(false)}>
                <img src={img1} alt='pie1' className='img1 initalPie' />
                <img src={img2} alt='pie2' className='img2' />
            </div>
        </div>
    )

};

export default RotatePie;
