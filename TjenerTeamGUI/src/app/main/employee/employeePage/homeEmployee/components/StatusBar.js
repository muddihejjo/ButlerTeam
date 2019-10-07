import React from 'react';
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

const StatusBar = () => {
    return (
        <div className="flex flex-row justify-start min-w-400">
            <div className="ml-20 p-16 mr-20">
                <div className="flex-col">
                    <div className="min-w-20">
                        <div className="flex flex-row justify-center">
                            <div className="ml-8">
                                <p className="font-bold text-32 ">3,0</p>
                            </div>
                            <div className="flex flex-col justify-end">
                                <p className="font-bold text-12 ml-2 mb-8">(13)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating value={3} readOnly/>
                            <Box component="fieldset" borderColor="transparent">
                                <Typography className="text-center">Mine ratings</Typography>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
            <div className="p-16 mr-20">
                <div className="flex-col">
                    <div className="min-w-20">
                        <div className="flex flex-row justify-center">
                            <div className="ml-8">
                                <p className="font-bold text-32 ">0</p>
                            </div>
                            <div className="flex flex-col justify-end">
                                <p className="font-bold text-12 ml-2 mb-8">(10)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Box component="fieldset" borderColor="transparent">
                        <Typography className="text-center">Job de sidste</Typography>
                        <Typography className="text-center">30 dage</Typography>
                    </Box>

                </div>
            </div>
            <div className="p-16 mr-20">
                <div className="flex-col">
                    <div className="min-w-20">
                        <div className="flex flex-row justify-center">
                            <div className="">
                                <p className="font-bold text-32 ">0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Box component="fieldset" borderColor="transparent">
                        <Typography className="text-center">Favorit</Typography>
                        <Typography className="text-center">hos</Typography>
                    </Box>
                </div>
            </div>

            <div className="p-16 mr-20 mt-40">
                <div className="flex-col">
                    <div className="min-w-20">
                        <div className="flex flex-col justify-center">
                            <div className="late-box-small mb-2 ml-8"/>
                            <div className="late-box-big"/>
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <Box component="fieldset" borderColor="transparent">
                        <Typography className="text-center">Mødt forsent</Typography>
                    </Box>
                </div>
            </div>


            <div className="p-16 mr-20 mt-28">
                <div className="flex-col">
                    <div className="min-w-20">
                        <div className="flex flex-row justify-center">
                            <div className="met-late-box m-1"/>
                            <div className="met-late-box m-1"/>
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <Box component="fieldset" borderColor="transparent">
                        <Typography className="text-center">Sen Afbud</Typography>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default StatusBar;
