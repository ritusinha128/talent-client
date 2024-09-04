import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Box, Button } from '@mui/material';
import DataForm from './DataForm';  // Adjust the import path if necessary

const DataTable = ({ data, modalTitle, buttonLabel, fields }) => {
    const [cols, setCols] = useState([]);
    const [rows, setRows] = useState([]);

    const [selectedRow, setSelectedRow] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const generatedCols = Object.keys(data[0]).map((key) => ({
            field: key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1),
            width: 150,
        }));
        setCols(generatedCols);
        setRows(data);
    }, [data]);

    const handleRowClick = (params) => {
        setSelectedRow(params.row);
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const handleSave = (formData) => {
        console.log("Saved data:", formData);
        // Implement save logic here
        setOpenModal(false);
    };

    const handleDelete = () => {
        console.log("Delete button clicked");
        // Implement delete logic here
        setOpenModal(false);
    };

    return (
        <Container>
            <Box sx={{ height: 400, width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    {buttonLabel && (
                        <Button variant='contained' color="primary">
                            {buttonLabel}
                        </Button>
                    )}
                </Box>
                <DataGrid
                    rows={rows}
                    columns={cols}
                    pageSize={5}
                    rowsPerPage={[10]}
                    disableSelectionOnClick
                    onRowClick={handleRowClick}
                />
            </Box>

            {selectedRow && (
                <DataForm
                    open={openModal}
                    onClose={handleClose}
                    onSave={handleSave}
                    onDelete={handleDelete}
                    data={selectedRow}
                    fields={fields}
                    modalTitle={modalTitle}
                />
            )}
        </Container>
    );
};

export default DataTable;
