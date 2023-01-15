import * as React from 'react';
import "./caraLandingPage.css";

export type Section = {
  children?: React.ReactNode,
  image: {
      url: string,
      artist?: string
  };
  flip?: boolean;
  kissBorder?: boolean;
};

export const Section = ({children, image, flip = false, kissBorder = true}: Section) => {
    return (
        <div className={`
                flex flex-col lg:flex-row
                ${flip ? "lg:flex-row-reverse":""}
                ${kissBorder ? "justify-between":"justify-evenly"}
                items-center
            `}>
            <div>
                <img src={image.url} className="max-h-[40rem] lg:max-h-[60rem] self-end"/>
                <p className={`
                        m-5
                        ${flip ? "text-end": ""}
                    `}
                >{image.artist && `Art by ${image.artist}`}</p>
            </div>
            <div className={`
                    flex flex-col justify-center content-center max-w-md m-10
                    p-7
                    ${kissBorder ? `lg:mx-[10vw]`:""}
                `}>
                {children}
            </div>
        </div>
    );
}
