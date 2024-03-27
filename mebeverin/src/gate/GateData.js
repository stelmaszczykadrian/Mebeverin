import multimediaSvg from "../assets/svg/multimedia.svg";
import bookSvg from "../assets/svg/book.svg";
import statisticsSvg from "../assets/svg/statistics.svg";
import {greenColor, orangeColor, purpleColor} from "../header/HeaderData";

export const gateData = [
    {
        color: greenColor,
        icon: multimediaSvg,
        title: 'Materiały video',
        description: 'Opisz co użytkownik może obejrzeć w Twoim serwisie.'
    },
    {
        color: orangeColor,
        icon: bookSvg,
        title: 'Artykuły',
        description: 'Zaproś odbiorcę do Twojej wirtualnej biblioteki.'
    },
    {
        color: purpleColor,
        icon: statisticsSvg,
        title: 'E-detailing',
        description: 'Jednym zdaniem określ, czego odbiorca może dowiedzieć się o Twoim produkcie. '
    }
];