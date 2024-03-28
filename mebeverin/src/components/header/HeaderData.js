import shieldSvg from '../../assets/svg/shield.svg';
import documentsSvg from '../../assets/svg/documents.svg';
import microscopeSvg from '../../assets/svg/microscope.svg';
import arrowDownSvg from '../../assets/svg/arrow-down.svg'
import humanSvg from '../../assets/svg/human.svg'
import pillsSvg from '../../assets/svg/pills.svg'

export const purpleColor = "#9D5DF9";
export const greenColor = "#64C574";
export const orangeColor = "#FF9654";
export const blueColor = "#446EC2";

export const servicesData = [
    {
        color: greenColor,
        icon: microscopeSvg,
        title: 'Nauka',
        description: 'Lorem Ipsum is simply dummy text of the printing.'
    },
    {
        color: orangeColor,
        icon: documentsSvg,
        title: 'Jakość',
        description: 'Lorem Ipsum is simply dummy text of the printing.'
    },
    {
        color: purpleColor,
        icon: shieldSvg,
        title: 'Bezpieczeństwo',
        description: 'Lorem Ipsum is simply dummy text of the printing.'
    }
];

export const productsData = [
    {
        color: greenColor,
        icon: arrowDownSvg,
        title: 'Zmniejsza nasilenie objawów w każdej postaci IBS',

    },
    {
        color: orangeColor,
        icon: humanSvg,
        title: 'Korzystny profil bezpieczeństwa terapii',

    },
    {
        color: purpleColor,
        icon: pillsSvg,
        title: 'Wygodne dawkowanie 2x dobę',

    }
];

export const navigationItems = [
    {href: "#", text: "Home"},
    {href: "#about-product", text: "O produkcie"},
    {href: "#video", text: "Video"},
    {href: "#podcast", text: "Podcast"},
    {href: "#articles", text: "Artykuły"},
    {href: "#detailing", text: "E-detailing"},
    {href: "#quiz", text: "QUIZ"},
];