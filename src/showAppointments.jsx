import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import singleton from './classes/appointmentStore';
import { AccessTime, Person, Phone, Email } from '@mui/icons-material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { observer } from 'mobx-react-lite';
export const ShowAppointments = observer(() => {
    const appointmentsList = singleton.getList;

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 200,
            headerAlign: 'center',
            align: 'center',
            renderHeader: () => <FingerprintIcon />
        },
        {
            field: 'serviceType',
            headerName: 'Service Type',
            width: 200,
            headerAlign: 'center',
            align: 'center',
            renderHeader: () => <Person />
        },
        {
            field: 'dateTime',
            headerName: 'Date Time',
            width: 200,
            headerAlign: 'center',
            align: 'center',
            renderHeader: () => <AccessTime />
        },
        {
            field: 'clientName',
            headerName: 'Client Name',
            width: 200,
            headerAlign: 'center',
            align: 'center',
            renderHeader: () => <Person />
        },
        {
            field: 'clientPhone',
            headerName: 'Client Phone',
            width: 200,
            headerAlign: 'center',
            align: 'center',
            renderHeader: () => <Phone />
        },
        {
            field: 'clientEmail',
            headerName: 'Client Email',
            width: 200,
            headerAlign: 'center',
            align: 'center',
            renderHeader: () => <Email />
        },
    ];
    
    

    const rows = appointmentsList.map((appointment, index) => ({
        id: appointment.id,
        serviceType: appointment.serviceType,
        dateTime: appointment.dateTime,
        clientName: appointment.clientName,
        clientPhone: appointment.clientPhone,
        clientEmail: appointment.clientEmail,
    }));

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection
                autoHeight
            />
        </div>
    );
})
