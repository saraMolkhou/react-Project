import { useState } from "react";
import singleton from "../classes/appointmentStore";
import { TextField, Button, Card, CardContent, FormControl, FormLabel, Typography, Divider, Select, MenuItem } from "@mui/material";
import { InfoOutlined, CreditCard } from "@mui/icons-material";
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { observer } from "mobx-react-lite";
import dayjs from 'dayjs';
import Swal from 'sweetalert2';

export const Appointments = observer(() => {
    const [time, setTime] = useState(dayjs());
    const [meeting, setMeeting] = useState({
        id: "",
        serviceType: "",
        dateTime: "",
        clientName: "",
        clientPhone: "",
        clientEmail: "",
    });

    const initMeeting = (field, value) => {
        let tmpMeeting = { ...meeting };
        tmpMeeting[field] = value;
        setMeeting(tmpMeeting);
    }

    const handleAddAppointment = (e) => {
        e.preventDefault();
        meeting['dateTime'] = time.format();
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {        
              singleton.addAppointment({ ...meeting, dateTime: time.format() });
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
          
    };

    return (
        <Card variant="outlined" sx={{ border: "2px solid #eee", borderRadius: "10px", padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <Typography variant="h5" component="div" sx={{ display: "flex", alignItems: "center" }}>
                <InfoOutlined sx={{ mr: 1 }} />
                Add new appointment
            </Typography>
            <Divider sx={{ mt: 1, mb: 2 }} />
            <CardContent>
                <form onSubmit={handleAddAppointment}>
                    <FormControl fullWidth margin="normal">
                        <FormLabel>ID</FormLabel>
                        <TextField
                            type="text"
                            placeholder="Enter ID"
                            onBlur={(e) => initMeeting('id', e.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <FormLabel>Service Type</FormLabel>
                        <Select
                            value={meeting.serviceType}
                            onChange={(e) => initMeeting('serviceType', e.target.value)}
                        >
                            <MenuItem value={"הלבנת שיניים"}>הלבנת שיניים</MenuItem>
                            <MenuItem value={"השתלת שיניים"}>השתלת שיניים</MenuItem>
                            <MenuItem value={"יישור שיניים"}>יישור שיניים</MenuItem>
                            <MenuItem value={"סתימה"}>סתימה</MenuItem>
                            <MenuItem value={"טיפול שורש"}>טיפול שורש</MenuItem>
                            <MenuItem value={"יישור שיניים"}>יישור שיניים</MenuItem>

                        </Select>
                    </FormControl>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <FormControl fullWidth margin="normal">
                            <FormLabel>Select Date and Time</FormLabel>
                            <DateTimePicker
                                value={time}
                                onChange={(newValue) => setTime(newValue)}
                            />
                        </FormControl>
                    </LocalizationProvider>
                    <FormControl fullWidth margin="normal">
                        <FormLabel>Client Name</FormLabel>
                        <TextField
                            type="text"
                            placeholder="Enter Client Name"
                            onBlur={(e) => initMeeting('clientName', e.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <FormLabel>Client Phone</FormLabel>
                        <TextField
                            type="tel"
                            placeholder="Enter Client Phone"
                            onBlur={(e) => initMeeting('clientPhone', e.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <FormLabel>Client Email</FormLabel>
                        <TextField
                            type="email"
                            placeholder="Enter Client Email"
                            onBlur={(e) => initMeeting('clientEmail', e.target.value)}
                        />
                    </FormControl>
                    <Button variant="contained" type="submit" fullWidth>
                        Add Appointment
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
});
