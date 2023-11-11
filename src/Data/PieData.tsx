import cherry from './image/cherry.png';
import orange from './image/orange.png';
import raspberry from './image/Respberry.png';
import cherryIcon from './image/cherryIcon.png';
// import halfOrgIcon from './image/halfOrg.png';
import sliceOrgIcon from './image/sliceOrg.png';
// import wholeOrgIcon from './image/wholeOrg.png';
import respberry from './image/respberryIcon.png';


export const PieData = [

    {
        img: cherry,
        icon: cherryIcon,
        title: 'Cherry Pie',
        describe: 'Cherry pie is a pie baked with a cherry filling. Traditionally, cherry pie is made with tart rather than sweet cherries. Morello cherries are one of the most common kinds of cherry used, but other varieties such as the black cherry may also be used.',
        price: '$45.99',
        transitionImgStatus: 'initalStartDelay imgEnter',
        transitionStatus: 'ContentEnter',
        color: '#C00000'
    },
    {
        img: orange,
        title: 'Orange Pie',
        icon: sliceOrgIcon,
        describe: 'Orange pie is a pie baked with a orange filling. Traditionally, orange pie is made with tart rather than sweet oranges. Morello oranges are one of the most common kinds of orange used, but other varieties such as the black orange may also be used.',
        price:'$35.95',
        transitionImgStatus: 'startImg',
        transitionStatus: 'ContentLeftExit',
        color: '#F88B27'
    },
    {
        img: raspberry,
        icon: respberry,
        title: 'Raspberry Pie',
        describe: 'Raspberry pie is a pie baked with a raspberry filling. Traditionally, raspberry pie is made with tart rather than sweet raspberries. Morello raspberries are one of the most common kinds of raspberry used, but other varieties such as the black raspberry may also be used.',
        price: '$55.99',
        transitionImgStatus: 'startImg',
        transitionStatus: 'ContentLeftExit',
        color: '#FF1F1F'
    }

]