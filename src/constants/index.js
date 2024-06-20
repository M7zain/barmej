import { mobile, programming, web , personalData ,Logo  } from "../assets";
import { Logo1,Logo2,Logo3,Logo4,Logo5 } from "../assets";
import { nike,search,sumup } from "../assets";
import { twitter, instagram , facebook} from "../assets/icons";

export const slides = [ 
    {
        imgURL: programming,
        headLine: "Navigating the World of Programming ",
        underLine: "with Expertise and Precision!",
        
    },
    {
        imgURL: web,
        headLine: "Your Ultimate Destination",
        underLine: "for Exceptional Web Development!"
    },
    {
        imgURL: personalData, 
        headLine: "Transforming Customer Satisfaction ",
        underLine: "with Care and Commitment"
    }
    
]


export const logos = [ 
    { 
        imgURL:Logo1,
        name:"Logo"
    },
    { 
        imgURL:Logo2,
        name:"Logo"

    },
    { 
        imgURL:Logo3,
        name:"Logo"

    },
    { 
        imgURL:Logo4,
        name:"Logo"

    },
    { 
        imgURL:Logo5,
        name:"Logo"

    }
]

export const projects =[
    {
    imgURL:sumup
},
{
    imgURL:nike

},
{
    imgURL:search
}
]

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];


export const Company = [ 
    { title:"About us"},
    { title:"Blog"},
    { title:"contact us"},
    { title:"pricing"}
];

export const Support = [ 
    { title:"Help Center"},
    { title:"Terms of service"},
    { title:"legal"},
    { title:"status"}
];

