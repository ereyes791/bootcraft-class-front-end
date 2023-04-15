import { Box, Tab, TextField} from "@mui/material";
import {TabContext, TabList, TabPanel} from '@mui/lab'; 
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

export default function Materials() {
    const [value, setValue] = useState('1');
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    //TODO: Add a class to handle the file
  const handleChangeFile = (file:any) => {
    setFile(file);
  };
   //TODO: Add a class to handle change 
    const handleChange = (even :any, newValue:any) => {
      setValue(newValue);
    };
    return (<>
    <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="Makecode Code" value="1" />
      <Tab label="Mundos Minecraft" value="2" />
      <Tab label="Videos" value="3" />
    </TabList>
  </Box>
  <TabPanel value="1">      
      <TextField fullWidth label="Code" id="fullWidth" />
</TabPanel>
  <TabPanel value="2">
    <FileUploader handleChange={handleChangeFile} name="file" types={fileTypes} />
  </TabPanel>
  <TabPanel value="3">
        <TextField fullWidth label="Video" id="fullWidth" />
    </TabPanel>
</TabContext>
    </>);
}