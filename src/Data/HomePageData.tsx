import cherry from './Pie/CherryPie.png';
import lemon from './Pie/LemonPie.png';
import choc from './Pie/choclatePie.png';

import cherrybottom from '../Data/icon/cherryBottom.png'
import CherryTop from '../Data/icon/rightCornerCherry.png';

import lemonbottom from '../Data/icon/lemonBottom.png'
import LemonTop from '../Data/icon/lemonCorner.png';

import chocbottom from '../Data/icon/chocBottom.png'
import ChocTop from '../Data/icon/cocoaCorner.png';


export const HomePageData = [

    {
        img: cherry,
        topImg: CherryTop,
        topLeftTransition: 'topEnter',
        topRightTransition: 'topEnter',
        bottomImg: cherrybottom,
        bottomTransition: 'bottomEnter',
        contentTransition: 'contentEnter',  
        title: 'Cherry Pie',
        describe: 'is a pie baked with a cherry filling. Traditionally, cherry pie is made with tart rather than sweet cherries. Morello cherries are one of the most common kinds of cherry used, but other varieties such as the black cherry may also be used.',
        price: '$45.99',
        transitionStatus: 'rotatePie-enter',
        color: 'radial-gradient(circle at 50% -10%, rgba(255, 153, 153, 1) 0%, rgba(255, 13, 13, 1) 39%, rgba(98, 0, 0, 1) 100%)'
    },
    {
        img: lemon,
        topImg: LemonTop,
        topLeftTransition: 'topLeftExit',
        topRightTransition: 'topRightExit',
        bottomImg: lemonbottom,
        bottomTransition: 'bottomExit',
        contentTransition: 'contentExit',
        title: 'Lemon Pie',
        describe: 'is a dessert dish, a variety of cream pie, made with lemon juice and zest. It is usually served with a topping of meringue.',
        price: '$55.99',
        transitionStatus: 'rotatePie-leftExit',
        color: 'radial-gradient(circle at 50% -20%, rgba(255, 255, 0, 1) 0%, rgba(228, 228, 0, 1) 14%, rgba(88, 88, 0, 1) 100%)'
    },
    {
        img: choc,
        topImg: ChocTop,
        topLeftTransition: 'topLeftExit',
        topRightTransition: 'topRightExit',
        bottomImg: chocbottom,
        bottomTransition: 'bottomExit',
        contentTransition: 'contentExit',
        title: 'Choclate Pie',
        describe: "is a dessert dish made with chocolate or chocolate pudding, usually with a pastry dough crust. A variety of chocolate pies exist, and some are prepared using chocolate pudding as a filling, and others are made with melted chocolate in various forms.",
        price: '$55.99',
        transitionStatus: 'rotatePie-leftExit',
        color: 'radial-gradient(circle at 50% -20%, rgba(122, 100, 95, 1) 0%, rgba(76, 55, 50, 1) 34%, rgba(0, 0, 0, 1) 100%)'
    }

]