import phoneSvg from "../../assets/svg/phone.svg";
import mailSvg from "../../assets/svg/mail.svg";
import locationSvg from "../../assets/svg/location.svg";
import {greenColor, orangeColor, purpleColor} from "../../header/HeaderData";

export const contactData = [
    {
        color: greenColor,
        icon: phoneSvg,
        title: '+48 22 000 00 00',

    },
    {
        color: orangeColor,
        icon: mailSvg,
        title: 'biuro@mebeverin.pl',

    },
    {
        color: purpleColor,
        icon: locationSvg,
        title: 'Adres 115/2 , 00-000 Warszawa',

    }
];

export const contactTopics = [
    {value: 'Temat 1', label: 'Temat 1'},
    {value: 'Temat 2', label: 'Temat 2'},
    {value: 'Temat 3', label: 'Temat 3'}
]