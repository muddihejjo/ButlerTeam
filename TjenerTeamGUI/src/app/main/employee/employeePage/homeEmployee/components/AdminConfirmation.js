import React from 'react';
import '../EmployeeHomePage.css';
import Card from "@material-ui/core/Card";

const AdminConfirmation = () => {
    return (
        <Card className="m-8">
            <div className="flex flex-row ml-40 pt-24">
                <div className="flex flex-row ">
                    <div className="status-circle mr-10 mt-2"/>
                    <p className="text-20 mb-10 font-bold text-teal-darkest">Venter på godkendelse fra admin</p>
                </div>
            </div>
        </Card>
    );
};

export default AdminConfirmation;
