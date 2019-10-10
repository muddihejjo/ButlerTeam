import React from 'react';
import { FormControlLabel, Icon, MenuItem, Radio, RadioGroup, TextField } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Clothing from "./Clothing";

const Arrangement = (props) => {

    const {
        contactPerson,
        arrangementType,
        changeHandler,
        arrangementTypeValues,
        arrangementTypeOther,
        extraWorkHours,
        foodIncluded,
        accessInformation,
        jobDescription,
        extraHours,
        validation,
    } = props;

    return (
        <div className="w-1/2">
            <div className=" w-full">

                <div className="flex sm:my-2">
                    <div className="p-2 w-full ">

                        <TextField
                            name="arrangementType"
                            className="w-full m-0"
                            id="arrangementSelection"
                            select
                            value={arrangementType}
                            helperText={<span style={{ color: 'red' }}>{validation.arrangementType.message}</span>}
                            label="Type arrangementer"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        >
                            {arrangementTypeValues.map((val, index) => (
                                <MenuItem key={index} value={val}>
                                    {val}
                                </MenuItem>
                            ))}
                        </TextField>

                        <div className="w-full ">
                            {arrangementType === "Andet" &&
                                <TextField
                                    className="w-full m-0"
                                    name="arrangementTypeOther"
                                    id="arrangementName"
                                    label="Arrangement type."
                                    margin="normal"
                                    variant="outlined"
                                    value={arrangementTypeOther}
                                    onChange={changeHandler}
                                />
                            }
                        </div>
                    </div>
                </div>
                <div className="p-2 w-full ">
                    <h4 className="mb-3">Kan der forekomme overarbejde?</h4>
                    <FormControl>
                        <RadioGroup
                            row
                            name="extraWorkHours"
                            className="w-mt-8"
                            onChange={changeHandler}
                        >
                            {extraHours.map((val, index) => (
                                <FormControlLabel
                                    style={{ transform: "scale(0.8, 0.8)" }}
                                    value="true"
                                    control={<Radio color="primary" />}
                                    label={val.name}
                                    labelPlacement="bottom"
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>

                
                <div className="p-2 w-full ">
                    <h4>Vil der være personalemad?</h4>
                    <FormControl>
                        <RadioGroup
                            row
                            name="foodIncluded"
                            className="mt-8"
                            onChange={changeHandler}
                            value={foodIncluded}>
                            <FormControlLabel
                                style={{ transform: "scale(0.8, 0.8)" }}
                                value="true"
                                control={<Radio color="primary" />}
                                label="Ja"
                                labelPlacement="bottom"
                            />

                            <FormControlLabel
                                style={{ transform: "scale(0.8, 0.8)" }}
                                className=""
                                value="false"
                                control={<Radio color="primary" />}
                                label="Nej"
                                labelPlacement="bottom"
                            />
                        </RadioGroup>
                        <FormHelperText><span
                            style={{ color: 'red' }}>{validation.foodIncluded.message}</span></FormHelperText>
                    </FormControl>
                </div>

                <div className="w-full">

                    <TextField
                        name="jobDescription"
                        id="outlined-multiline-flexible"
                        multiline
                        rows="4"
                        label="Beskriv arrangementet kort, evt opgaver? (jobbeskrivelse)"
                        helperText={<span style={{ color: 'red' }}>{validation.jobDescription.message}</span>}
                        multiline
                        rowsMax="20"
                        value={jobDescription}
                        className="w-full m-0"
                        margin="normal"
                        variant="outlined"
                        onChange={changeHandler}
                    />
                </div>
                <div className="w-full mb-10">
                    <h4 className="mb-3"></h4>
                    <TextField
                        name="contactPerson"
                        id="contactPerson"
                        label="Kontakt person på stedet og tlf. nr."
                        multiline
                        rowsMax="20"
                        value={contactPerson}
                        onChange={changeHandler}
                        className="w-full m-0"
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div className="w-full ">
                    <TextField
                        name="accessInformation"
                        id="outlined-multiline-flexible"
                        label="Beskriv kort hvordan personalet kommer ind"
                        multiline
                        rows="3"
                        rowsMax="20"
                        value={accessInformation}
                        onChange={changeHandler}
                        className="w-full m-0"
                        margin="normal"
                        variant="outlined"
                    />
                </div>

            </div>


        </div>
    );
};

export default Arrangement;
