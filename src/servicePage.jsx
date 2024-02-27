import { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import ServiceStore from "./classes/serviesStore"
import Swal from 'sweetalert2';

export function Services() {
    const [service, setService] = useState({
        id: "",
        name: "",
        description: "",
        price: 0,
        duration: 0,
        img: "",
    });

    const lengthBefore = ServiceStore.Servieslist.length;

    function initService(field, value) {
        let tmpService = { ...service };
        tmpService[field] = value;
        setService(tmpService);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const img = URL.createObjectURL(file);
        setService({ ...service, img });
    };

    const handleAddService = async (e) => {
        e.preventDefault();
        await ServiceStore.addServies({ ...service, id: service.id, img: service.img  });        
        if (ServiceStore.Servieslist.length === lengthBefore + 1) {
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Service added successfully!",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to add the service. Please try again.",
            });
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2, border: 1, borderColor: 'grey.400', borderRadius: 2 }}>
            <Typography variant="h5" align="center" gutterBottom>
                Add New Service
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Service ID"
                        type="text"
                        placeholder="Enter Service ID"
                        onBlur={(e) => initService('id', e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Service Name"
                        type="text"
                        placeholder="Enter Service Name"
                        onBlur={(e) => initService('name', e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        type="text"
                        placeholder="Enter Service Description"
                        onBlur={(e) => initService('description', e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Price"
                        type="number"
                        placeholder="Enter Service Price"
                        onBlur={(e) => initService('price', e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Duration (mins)"
                        type="number"
                        placeholder="Enter Service Duration"
                        onBlur={(e) => initService('duration', e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </Grid> */}
                {service.img && (
                    <Grid item xs={12}>
                        <img src={service.img} alt="Selected Image" style={{ maxWidth: '100%', marginTop: 10 }} />
                    </Grid>
                )}
            </Grid>
            <Button
                variant="contained"
                onClick={handleAddService}
                startIcon={<AddCircle />}
                sx={{ mt: 2, width: '100%' }}
            >
                Add Service
            </Button>
        </Box>
    );
}
