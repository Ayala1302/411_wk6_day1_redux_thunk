import React, { useState } from "react";
import { Table, TableHead, TableRow, TableBody,TableCell } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Import = (props) => {
  // fill out this component
  const [deleteRow, setDeleteRow] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, i) => {
    setDeleteRow(i);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    props.deleteMake(deleteRow);
    setAnchorEl(null);
    setDeleteRow(null);
  };

  // const handleDelete = () => {
  //   props.deleteMake(deleteRow);
  //   setAnchorEl(null);
  //   setDeleteRow(null);
  // };

  return (
    <div class="wrapper">
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
      </Button>
      <h2>Count: {props.makes.length}</h2>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Make</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make, idx) => (
            <TableRow key={make.id}>
              <TableCell align="center">{make.MakeId}</TableCell>
              <TableCell align="center">{make["MakeName"]}</TableCell>
              <TableCell align="center">
                <MoreVert onClick={(e) => handleClick(e, idx)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        >
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
        </Table>
    </div>
  );
};

export default Import;
