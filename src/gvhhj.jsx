
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

import {useForm } from 'react-hook-form';
import {useState} from "react";
import dataStore from "../../data/dataStore";


export default function MeetingForm( props ) {
    const { id, name, setAdding } = {...props} 
    const [time, setTime] = useState(dayjs(''));
    const { register, handleSubmit, formState: { errors } } = useForm();

    function submitNewAppointment(data) {  
        console.log(data)
        console.log({...data, dateTime: time})
        console.log(typeof(dayjs(time)+" "+dayjs(time)))
        dataStore.addAppointment({...data , dateTime: time})
        setAdding(false)
    }

    return (
        <form onSubmit={handleSubmit(submitNewAppointment)}>
            <Card
                variant="outlined"
                sx={{
                    maxHeight: 'max-content',
                    maxWidth: '100%',
                    mx: 'auto',
                    overflow: 'auto',
                    resize: 'horizontal',
                }}
            >
                <Typography level="title-lg" startDecorator={<InfoOutlined />}>
                    Make an appointment for {name}
                </Typography>
                <Divider inset="none" />
                <CardContent
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                        gap: 1.5,
                    }}
                >
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input endDecorator={<AccountCircleOutlinedIcon />} type='text' {...register("name", { required: true })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input endDecorator={<AlternateEmailOutlinedIcon />} type='email' {...register("email", { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Phone</FormLabel>
                        <Input endDecorator={<AddIcCallOutlinedIcon />} type='phone' {...register("phone", { pattern: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/ })} />
                    </FormControl>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                            <DateTimePicker 
                                label="Controlled picker"
                                value={time}
                                onChange={(newValue) => setTime(dayjs(newValue))}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    <CardActions sx={{ gridColumn: '1/-1' }}>
                        <Button variant="solid" color="primary" type='submit'>
                         send
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </form>
    )
}

