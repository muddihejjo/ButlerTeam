
import React from 'react';
import {Card} from "@material-ui/core";
import England from "../../../../../static/english-language.png";
import Button from "@material-ui/core/Button";

const LanguageEnglish = (props) => {

    const {
        moveBackward,
        createEmployeeHandler,
        changeLanguageHandler,
        user
    } = props;


    const languageType = 'languageSkillEnglish';

    return (
        <Card className="px-20 mt-20 pb-52 pt-10">
            <div className="flex mb-5 sm:mb-10">
                <div className="w-full">
                    <h2 className="text-xl sm:text-2xl">Færdiggør din profil</h2>
                </div>
            </div>

            <div className="flex">
                <div className="w-full flex align-center">
                    <p className="text-xl sm:text-2xl mb-5 sm:mb-3">Sprog</p>
                    <img src={England} className="denmark-icon-big ml-2" alt=""/>
                </div>
            </div>

            <div className="flex mb-5 sm:mb-10">
                <div className="w-full">
                    <p className="text-md">
                        For at vi kan matche dig bedst muligt med vores kunder, skal vi vide, hvilke sprog du taler og
                        forstår. Svar ærligt - der er jobs til alle. Du kan altid ændre dit niveau i takt med, at du
                        udvikler dig
                    </p>
                </div>
            </div>

            <div className="flex mb-8">
                <div className="w-full">
                    <hr className="line-breaker"/>
                </div>
            </div>

            <div className="flex mb-2">
                <div className="w-full flex align-center">
                    <p className="text-md sm:text-lg">Engelsk</p>
                    <img src={England} className="country-icon ml-2" alt=""/>
                </div>
            </div>

            <div className="flex mb-5 sm:mb-8">
                <div className="w-full">
                    <p className="text-md sm:text-lg font-bold">Hvilket niveau snakker og forstår du engelsk?</p>
                </div>
            </div>

            <div className="flex mb-10">
                <div className="w-full flex justify-center flex-col">
                    <Card onClick={() => changeLanguageHandler(languageType,1)} className={user.languageSkillEnglish === 1 ? "language-box-1-clicked p-5 mb-5" : "language-box-1 p-5 mb-5" }>
                        <div className="flex flex-col">
                            <div className="w-full mb-2">
                                <p className="text-md font-bold ">I don't speak english</p>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="circle-filled mr-3 ml-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                            </div>
                        </div>
                    </Card>
                    <Card onClick={() => changeLanguageHandler(languageType,2)} className={user.languageSkillEnglish === 2 ? "language-box-1-clicked p-5 mb-5" : "language-box-1 p-5 mb-5" }>
                        <div className="flex flex-col">
                            <div className="w-full mb-2">
                                <p className="text-md font-bold ">I understand a little english</p>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="circle-filled mr-3 ml-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                            </div>
                        </div>
                    </Card>
                    <Card onClick={() => changeLanguageHandler(languageType,3)} className={user.languageSkillEnglish === 3 ? "language-box-1-clicked p-5 mb-5" : "language-box-1 p-5 mb-5" }>
                        <div className="flex flex-col">
                            <div className="w-full mb-2">
                                <p className="text-md font-bold ">I consider myself average</p>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="circle-filled mr-3 ml-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                            </div>
                        </div>
                    </Card>
                    <Card onClick={() => changeLanguageHandler(languageType,4)} className={user.languageSkillEnglish === 4 ? "language-box-1-clicked p-5 mb-5" : "language-box-1 p-5 mb-5" }>
                        <div className="flex flex-col">
                            <div className="w-full mb-2">
                                <p className="text-md font-bold ">I'm good at conversations in english</p>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="circle-filled mr-3 ml-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                            </div>
                        </div>
                    </Card>
                    <Card onClick={() => changeLanguageHandler(languageType,5)} className={user.languageSkillEnglish === 5 ? "language-box-1-clicked p-5 mb-5" : "language-box-1 p-5 mb-5" }>
                        <div className="flex flex-col">
                            <div className="w-full mb-2">
                                <p className="text-md font-bold ">I speak english fluently</p>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="circle-filled mr-3 ml-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>

            <div className="flex mt-40 sm:mt-30">
                <div className="flex-1 mr-2 ">
                    <Button onClick={moveBackward} className="flex m-auto py-8 px-32 sm:px-56 bBtn "><span className="proceedBtn">Tilbage</span></Button>
                </div>
                <div className="flex-1 ml-2">
                    <Button onClick={createEmployeeHandler} disabled={user.languageSkillEnglish === null} className="flex m-auto py-8 px-32 sm:px-56 sBtn"><span className="proceedBtn">Videre</span></Button>
                </div>
            </div>
        </Card>
    );
};

export default LanguageEnglish;
